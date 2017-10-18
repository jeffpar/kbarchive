---
layout: page
title: "Q71768: PRB: CURRENT.STS Not Updated in Network Installation"
permalink: kb/071/Q71768/
---

## Q71768: PRB: CURRENT.STS Not Updated in Network Installation

	Article: Q71768
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run CodeView from a network and exit the program, CodeView does not
	update the CURRENT.STS file. This occurs on both Novell NetWare and Microsoft
	LAN Manager networks.
	
	CAUSE
	=====
	
	You do not have permission to create and write to files in the root directory of
	the file server.
	
	RESOLUTION
	==========
	
	Request from your system administrator privileges to create and modify files in
	the root directory of the file server.
	
	MORE INFORMATION
	================
	
	CURRENT.STS is the state file CodeView and Programmer's WorkBench (PWB) use to
	store editor and debugger configuration information between sessions. The file
	allows CodeView and PWB to start a subsequent session with the open files and
	window configuration present in the previous session.
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Issue type        : kbprb
	
	=============================================================================
	
