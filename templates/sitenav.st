<div class="sitenav">
  <div id="fieldset">
    <legend>Site</legend>
    <ul>
      <li><a href="$base$/">Front page</a></li>
      <li><a href="$base$/_index">All pages</a></li>
      <li><a href="$base$/_categories">Categories</a></li>
      <li><a href="$base$/_random">Random page</a></li>
      <li><a href="$base$/_activity">Recent activity</a></li>
      $if(wikiupload)$
        <li><a href="$base$/_upload">Upload a file</a></li>
      $endif$
      $if(feed)$
      <li><a href="$base$/_feed/" type="application/atom+xml" rel="alternate" title="ATOM Feed">Atom feed</a> <img alt="feed icon" src="$base$/img/icons/feed.png"/></li>
      $endif$
      <li><a href="$base$/Help">Help</a></li>
    </ul>

    <form class="input-group" action="$base$/_search" method="get" id="searchform">
      <input type="text" name="patterns" id="patterns" class="form-control">
      <span class="input-group-btn">
        <input class="btn btn-primary" name="search" id="search" type="submit" value="Search"/>
      </span>
    </form>
    <form class="input-group" action="$base$/_go" method="post" id="goform">
      <input type="text" name="gotopage" id="gotopage" class="form-control"/>
      <span class="input-group-btn">
        <input class="btn btn-primary" type="submit" name="go" id="go" value="Go"/>
      </span>
    </form>
  </div>
</div>
