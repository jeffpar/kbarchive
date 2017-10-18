---
layout: page
title: "Q299432: Cookies Not Deleted for My Site When User Closes Browser Window"
permalink: kb/299/Q299432/
---

## Q299432: Cookies Not Deleted for My Site When User Closes Browser Window

	Article: Q299432
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cookies are not deleted for my site when the Passport user closes the browser
	window.
	
	CAUSE
	=====
	
	If cookies are not deleted when a Passport user closes the browser window, one
	of the following may be the cause:
	
	- The user has more than one window open to your site, or the site creates
	  multiple window instances when users view it.
	
	  Some Microsoft Internet Explorer versions earlier than 5.0 consider a browser
	  session to be open as long as any browser window is open. Also, certain
	  factors cause new browser windows to launch out of the same process as an
	  already open process, and as part of propagating the session, various cookies
	  or permissions may be propagated from the parent to the child. Because of
	  this, the session can still be "live" after one or more browser windows have
	  been closed, even if the remaining windows are no longer viewing a Passport
	  site.
	
	- The user has selected the Remember my Password or Keep Me Signed In option.
	
	  If the user has selected the Remember my Password or Keep Me Signed In option,
	  the domain-authority cookies become persistent cookies that are saved on the
	  browser. Depending on your implementation, a saved password may mean that the
	  participant cookies can be refreshed silently when the user returns to your
	  site.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
