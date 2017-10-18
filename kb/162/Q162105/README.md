---
layout: page
title: "Q162105: Cannot Run System Tools or MS Plus! Setup with Web.Max Demo"
permalink: kb/162/Q162105/
---

## Q162105: Cannot Run System Tools or MS Plus! Setup with Web.Max Demo

	Article: Q162105
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the shortcut for DriveSpace, Disk Defragmenter, or ScanDisk on
	the Start menu, you may receive an error message stating that the target cannot
	be found. When this occurs, the shortcuts are displayed with the default Windows
	icon.
	
	In addition, when you are running Setup for Microsoft Plus!, you may receive the
	following error message:
	
	  Setup Message
	  Setup could not open the file:
	  'C:\WINDOWS\DRVSPACE.EXE'
	
	When you receive this message, you cannot successfully install Microsoft Plus!.
	
	CAUSE
	=====
	
	This behavior can occur if you have installed the Web.Max Security demonstration
	from Berkley Systems.
	
	RESOLUTION
	==========
	
	Uninstall the Web.Max Security demonstration before you run ScanDisk, Disk
	Defragmenter, DriveSpace, or Microsoft Plus! Setup.
	
	MORE INFORMATION
	================
	
	You can see the ScanDisk, Disk Defragmenter, and DriveSpace files with the DIR
	command when you start the computer in MS-DOS mode. However, the files cannot be
	viewed using Windows Explorer or from an MS-DOS prompt in Windows 95.
	
	The following files are known to be hidden by default by the Web.Max
	demonstration:
	
	  Scandisk.exe
	  Cmpagent.exe
	  Defrag.exe
	  Chkdsk.exe
	  Scandskw.exe
	  Drvspace.exe
	
	This list may vary depending on which programs and Windows 95 updates are
	installed on your computer.
	
	
	Note that the symptoms described in this article have been confirmed with the
	demonstration version of Web.Max Security, but not with the retail version.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
