---
layout: page
title: "Q239047: Err Msg: A Help File Was Not Specified (138)"
permalink: kb/239/Q239047/
---

## Q239047: Err Msg: A Help File Was Not Specified (138)

	Article: Q239047
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
	
	In the Internet Services Manager (ISM), when you access the properties of a site
	and click the Help button, the following error message may occur:
	
	  A Help file was not specified. (138)
	
	Note: This does not apply to the HTML Internet Information Services (IIS) 5.0
	documentation. This only occurs when you access the properties of a site and
	click the Help button.
	
	CAUSE
	=====
	
	Users must be members of at least the Power Users group in order to view the
	Help file for Internet Information Services 5.0.
	
	RESOLUTION
	==========
	
	If site operators (and other appropriate users) need access to these Help files,
	add them to the Power Users group. Be aware that this action gives users more
	access to the server and may be considered a potential security risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	Additional query words: iis help 138
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
