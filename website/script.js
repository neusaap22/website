document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var title = document.getElementById('blog-title').value;
    var content = document.getElementById('blog-content').value;
    
    var blogPost = document.createElement('div');
    blogPost.innerHTML = '<h2>' + title + '</h2><p>' + content + '</p>';
    
    document.getElementById('blog-posts').appendChild(blogPost);
    
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
  });
    