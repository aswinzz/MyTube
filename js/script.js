
var channelName;
function myFunction() {
	var text = "";
    var x = document.getElementById("searchch");
    var i=0;
    text += x.elements[i].value;	
    channelName=text;
    $("#results").html('');
	
	 	$.get(
           "https://www.googleapis.com/youtube/v3/channels",{
           	part: 'contentDetails',
           	forUsername: channelName,
           	key: 'AIzaSyBPxaszELtUXG5JuuJOQWioZ0g7uNaCiEE'
           },
           function(data){
           	$.each(data.items,function(i,item){
           		console.log(item);
           		pid = item.contentDetails.relatedPlaylists.uploads;
           		getVids(pid);
           	})
           }
		);
		function getVids(pid){
				$.get(
           "https://www.googleapis.com/youtube/v3/playlistItems",{
           	part: 'snippet',
           	maxResults: 10,
           	playlistId: pid,
           	key: 'AIzaSyBPxaszELtUXG5JuuJOQWioZ0g7uNaCiEE'
           },
           function(data){
           	var output
           	$.each(data.items,function(i,item){
           		console.log(item);
           		videTitle=item.snippet.title;
              videoDes=item.snippet.description;
           		videoId=item.snippet.resourceId.videoId;
           		output='<li><h2>'+videTitle+'</h2><hr><br><iframe width="300" height="180" src="http://www.youtube.com/embed/'+videoId+'"></iframe><p>'+videoDes+'</p><a href="https://www.ssyoutube.com/watch?v='+videoId+'">Download</a></li>'
           		//Append to Results
           		$('#results').append(output); 
           	})
           }
		);
		}

}
