---
layout: page
title: "Q142983: &quot;Error Loading SETUPX.DLL&quot; Error Msg Running Netsetup.exe"
permalink: /kb/142/Q142983/
---

## Q142983: &quot;Error Loading SETUPX.DLL&quot; Error Msg Running Netsetup.exe

	Article: Q142983
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Netsetup.exe from a non-Windows 95-based computer, you receive the
	following error message:
	
	  Error loading SETUPX.DLL
	
	For example, if you run Netsetup.exe from Windows for Workgroups 3.1x, Windows NT
	3.5x, or Windows NT 4.0, you receive the above error message.
	
	CAUSE
	=====
	
	You can run Netsetup.exe to create an administrative or network installation of
	Windows 95 only from a Windows 95-based computer.
	
	RESOLUTION
	==========
	
	Run Netsetup.exe from a Windows 95-based computer.
	
	MORE INFORMATION
	================
	
	Before you receive the error message stated above, you see the following
	incomplete message:
	
	  To set the default environment for computers that are setup from this
	  directory, run Windows 95.  Use "Make Script" to create ba
	
	This message is stating that you need to run Netsetup.exe from a Windows 95-based
	computer to create a Msbatch.inf file or a network setup folder.
	
	Additional query words: dirctory
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
