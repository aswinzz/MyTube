
var channelName='Vevo';
$(document).ready(function(){
	
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
           		videoId=item.snippet.resourceId.vedioId;
           		output='<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>'
           		//Append to Results
           		$('#results').append(output); 
           	})
           }
		);
		}
});