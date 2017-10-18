---
layout: page
title: "Q232073: Content Ratings Dates/Times in MMC Use Time Zone of Client"
permalink: kb/232/Q232073/
---

## Q232073: Content Ratings Dates/Times in MMC Use Time Zone of Client

	Article: Q232073
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IIS snap-in for the Microsoft Management Console (MMC) to makes
	changes to the Content Ratings expiration date on a remote server, the values
	saved to the metabase use the time zone of the client and not the server.
	
	CAUSE
	=====
	
	This is by design. The IIS snap-in for the MMC is designed to use the time zone
	of the client computer that the Web administrator is using and not the server
	when making changes. This allows a Web administrator located in one part of a
	WAN to set ratings to expire based on the Web administrator's location instead
	of the server's location.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
