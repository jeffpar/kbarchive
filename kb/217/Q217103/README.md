---
layout: page
title: "Q217103: How to Write a Robots.txt File"
permalink: /kb/217/Q217103/
---

## Q217103: How to Write a Robots.txt File

	Article: Q217103
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Web Spiders, often called Robots, are WWW search engines that "crawl" across the
	Internet and index pages on Web servers. A Web Spider will then catalog that
	information and make it available to the Internet for searching. This makes it
	easier for users to find specific information on the Internet by allowing
	"one-stop shopping" through the Spider's WWW site. Most Robots also prioritize
	documents that are on the Internet, allowing search results to be "scored" or
	arranged in order of most likely matches on a search.
	
	A Robots.txt file is a special text file that is always located in your Web
	server's root directory. This file contains restrictions for Web Spiders,
	telling them where they have permission to search. It should be noted that Web
	Robots are not required to respect Robots.txt files, but most well-written Web
	Spiders follow the rules you define.
	
	MORE INFORMATION
	================
	
	A Robot identifies itself when it browses your site, which is known as the
	"User-agent" and appears in the logs for IIS. Generally, the flow of events when
	a Web Spider crawls your site is similar to the following:
	
	1. The Robot asks for your /robots.txt file and looks for a "User- agent:" line
	  that refers to it specifically.
	
	   - If it finds an entry for itself, such as "User-agent: WebRobot," then it
	     follows the rules that pertain to it.
	
	   - If is does not find an entry for itself, it looks for a global set of
	     rules, such as "User-agent: *," and obeys those rules.
	
	   - If the Robot has an entry for itself and a global set of rules is also
	     present, the Robot's personal rules will supersede the global rules.
	
	2. Rules for a user-agent are set up as "Disallow:" statements that tell a robot
	  where it cannot search. A disallow statement is applied to any address that
	  may have been requested by the Robot. For example:
	
	   - "Disallow: /test" causes a Web Spider to ignore /test/index.htm, and so
	     on.
	
	   - "Disallow: /" causes a Web Spider to ignore the whole site; sometimes this
	     is desirable.
	
	   - "Disallow: " allows a Web Spider to crawl the whole site.
	
	3. Lines that begin with the pound symbol (#) denote comments, which can be
	  useful when creating long sets of rules.
	
	Examples
	
	   - This example disallows all Web Spiders for the entire site:
	
	  # Make changes for all web spiders
	  User-agent: *
	  Disallow: / 
	
	   - The following example disallows a Robot named "WebSpider" from the virtual
	     paths "/marketing" and "/sales":
	
	  # Tell "WebSpider" where it can't go
	  User-agent: WebSpider
	  Disallow: /marketing
	  Disallow: /sales
	
	  # Allow all other robots to browse everywhere
	  User-agent: *
	  Disallow:
	
	   - This example allows only a Web Spider named "SpiderOne" into a site, while
	     denying all other Spiders:
	
	  # Allow "SpiderOne" in the site
	  User-agent: SpiderOne
	  Disallow:
	
	  # Deny all other spiders
	  User-agent: *
	  Disallow: / 
	
	   - This last example disallows FrontPage-related paths in the root of your
	     Web site:
	
	  # Ignore FrontPage files
	  User-agent: *
	  Disallow: /_borders
	  Disallow: /_derived
	  Disallow: /_fpclass
	  Disallow: /_overlay
	  Disallow: /_private
	  Disallow: /_themes
	  Disallow: /_vti_bin
	  Disallow: /_vti_cnf
	  Disallow: /_vti_log
	  Disallow: /_vti_map
	  Disallow: /_vti_pvt
	  Disallow: /_vti_txt
	
	For more information on writing Robots.txt files, see the following Web sites:
	
	  http://www.robotstxt.org/wc/norobots.html
	
	  http://www.robotstxt.org/wc/faq.html
	
	  http://www.robotstxt.org/
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
