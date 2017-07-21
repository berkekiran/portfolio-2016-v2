var pApp = angular.module("portfolio",[]);
  pApp.controller("projectController", function($scope){
    $scope.characters = [
      { link: '', name: 'Portfolio Project', year: '2017', image: ''},
    ];
    $scope.projects = [
      { color: '#cccccc ', link: 'https://github.com/berkekiran/portfolio-2017', name: 'Portfolio 2017', year: '2017', image: 'images/other-projects/portfolio-2017.png'},
      { color: '#a8933a ', link: 'https://github.com/berkekiran/video-game-center-station', name: 'Video Game Center Station', year: '2016', image: 'images/other-projects/video-game-center-station.png'},
      { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2016', name: 'Portfolio 2016', year: '2016', image: 'images/other-projects/portfolio-2016.png'},
      { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2015-v5', name: 'Portfolio 2015 v5', year: '2015', image: 'images/other-projects/portfolio-2015-v5.png'},
      { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v2', name: 'UE4 Snow System v2', year: '2015', image: 'images/other-projects/ue4-snow-system-v2.png'},
      { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v1', name: 'UE4 Snow System v1', year: '2015', image: 'images/other-projects/ue4-snow-system-v1.png'},
      { color: '#1D1F1E ', link: 'https://github.com/berkekiran/portfolio-2015-v4', name: 'Portfolio 2015 v4', year: '2015', image: 'images/other-projects/portfolio-2015-v4.png'},
      { color: '#161616 ', link: 'https://github.com/berkekiran/portfolio-2015-v3-design', name: 'Portfolio 2015 v3 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v3-design.png'},
      { color: '#cccccc ', link: 'https://github.com/berkekiran/portfolio-2015-v2-design', name: 'Portfolio 2015 v2 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v2-design.png'},
      { color: '#f8f8f8 ', link: 'https://github.com/berkekiran/portfolio-2015', name: 'Portfolio 2015', year: '2015', image: 'images/other-projects/portfolio-2015.png'},
      { color: '#a7aaa9 ', link: 'https://github.com/berkekiran/photo-galleries', name: 'Photo Galleries', year: '2014', image: 'images/other-projects/photo-galleries.png'},
      { color: '#444349 ', link: 'https://github.com/berkekiran/quick-write', name: 'Quick Write', year: '2013', image: 'images/other-projects/quick-write.png'}
    ];
});
