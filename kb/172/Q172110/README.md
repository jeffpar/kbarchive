---
layout: page
title: "Q172110: Cannot Install Windows NT Workstation from ZAK Server"
permalink: kb/172/Q172110/
---

## Q172110: Cannot Install Windows NT Workstation from ZAK Server

	Article: Q172110
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT Workstation 4.0 from a Zero
	Administration Kit (ZAK) Server, the following error message may be displayed
	when the GUI portion of Setup starts:
	
	  Windows NT Setup
	
	  No previous version of Windows NT could be found on your computer. Setup is
	  unable to verify that you qualify to use this upgrade product.
	
	  Press F3 to exit
	
	CAUSE
	=====
	
	When you configured the ZAK Server distribution point, you used the upgrade
	version of Windows NT Workstation.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the full retail version of Windows NT Workstation 4.0
	when you create the distribution point for Windows NT Workstation on your ZAK
	Server.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:4.0
	
	=============================================================================
	
