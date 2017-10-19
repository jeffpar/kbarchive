---
layout: page
title: "Q220826: Back Button in HTMLA Administration Forms May be Problematic"
permalink: /kb/220/Q220826/
---

## Q220826: Back Button in HTMLA Administration Forms May be Problematic

	Article: Q220826
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the HTMLA Administration Forms (Internet Services Manager HTML) in
	Internet Information Services (IIS) 5.0, ASP creates a session for the user.
	
	Keeping session state on these pages may cause a problem if users allow the
	session to time-out (the default time-out is 20 minutes). After the user's
	session times-out, if they use the Back button on the browser, only a partial
	view of the tree used to show the Web sites appears. In most instances, the user
	is informed that the session has timed out (which is the proper message).
	
	RESOLUTION
	==========
	
	In order to avoid this issue, reconnect to the HTMLA Administration forms and
	try again. This will create a new session for the user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
