---
layout: page
title: "Q178267: Route.exe Error Message: The Application Failed to Initialize"
permalink: kb/178/Q178267/
---

## Q178267: Route.exe Error Message: The Application Failed to Initialize

	Article: Q178267
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to execute the Route.exe utility, you may receive the following
	error message:
	
	  The application failed to initialize.
	
	
	CAUSE
	=====
	
	Your computer is running McAfee Netcrypto 2.0.0.
	
	
	RESOLUTION
	==========
	
	To workaround this issue, you will need to disable Netcrypto while you are using
	the Route.exe utility and re-enable it when you have finished using Route.exe.
	
	Netcrypto is manufactured by McAfee & Associates, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For information about how to contact McAfee & Associates, query in the
	Knowledge Base for one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
