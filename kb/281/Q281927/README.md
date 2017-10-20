---
layout: page
title: "Q281927: FP2002: Prompted to Save File in ASP Format, Then HTML Format"
permalink: /kb/281/Q281927/
---

## Q281927: FP2002: Prompted to Save File in ASP Format, Then HTML Format

{% raw %}

	Article: Q281927
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 24-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to save a page containing a Database Results Region and a List
	View Web Component, you receive a message notifying you that your page contains
	components that need to be saved in Active Server Pages (ASP) format. If you
	attempt to save the page as an ASP page, you receive a message notifying you
	that the page contains components that need be saved in Hypertext Markup
	Language (HTML) format.
	
	CAUSE
	=====
	
	The page contains two components that cannot coexist on the same page. Each
	component requires a different format to function correctly. The List View Web
	Component requires that the page be saved as HTML to preserve functionality. The
	Database Results Region requires that the page be saved as ASP to preserve
	functionality.
	
	RESOLUTION
	==========
	
	Insert the List View Web Component and the Database Results Region on different
	pages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about SharePoint Team Services from Microsoft and
	Active Server Pages, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q282804 STS: Error Message When You View ASP Page: Cannot Complete This
	  Action
	
	
	Additional query words: FP2002
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2002Search
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
