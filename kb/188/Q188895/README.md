---
layout: page
title: "Q188895: How to Turn Off IUSR_machinename Token Caching"
permalink: kb/188/Q188895/
---

## Q188895: How to Turn Off IUSR_machinename Token Caching

	Article: Q188895
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To make security debugging easier, you may want to disable caching of the
	anonymous user account in Internet Information Server version 4.0.
	
	MORE INFORMATION
	================
	
	You can do this by setting the PasswordCacheTTL property to zero (0). By
	default, Internet Information Server will cache the anonymous user account for
	10 minutes. To change the PasswordCacheTTL value to zero (0), type the following
	at the command line:
	
	  adsutil set w3svc/1/PasswordCacheTTL "0"
	
	The following sample code can be called from Visual Basic, ASP, and Windows
	Script Host with minimal changes in each environment:
	
	     Dim oServer
	     Set oServer = GetObject("IIS://LocalHost/W3SVC")
	     oServer.PasswordCacheTTL = 0
	     oServer.SetInfo
	     Set oServer = Nothing
	
	Please note: This procedure affects all Web server instances and decreases server
	performance; it is intended for debugging purposes only.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
