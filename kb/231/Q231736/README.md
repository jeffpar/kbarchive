---
layout: page
title: "Q231736: False &quot;Read Only&quot; Message When Opening AutoCAD R14 File"
permalink: /kb/231/Q231736/
---

## Q231736: False &quot;Read Only&quot; Message When Opening AutoCAD R14 File

	Article: Q231736
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running AutoCAD R14 by Autodesk and you are opening a file from a
	third-party Server Message Block (SMB) server, you may receive the following
	prompt in AutoCAD even though the file is not open on another client:
	
	  Do you wish to open for read-only?
	
	This problem can occur on third-party file servers that use the SMB redirector
	network interface. (Third-party UNIX connectivity software that uses SMB
	services includes Samba, Syntax, and Digital Pathworks.)
	
	CAUSE
	=====
	
	Autodesk has identified an operating system timing conflict that some
	third-party file servers interpret as a file-sharing violation.
	
	RESOLUTION
	==========
	
	Autodesk has developed a patch for AutoCAD release 14.01 to resolve this problem
	by changing which calls AutoCAD makes during save operations. The patch is
	available from the following Autodesk Technical Assistance Web site:
	
	  http://www.autodesk.com/autocad14.01-patches
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	The files required to apply the patch are P033.exe and P033.txt.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
