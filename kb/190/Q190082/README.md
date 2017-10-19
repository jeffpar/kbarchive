---
layout: page
title: "Q190082: The TweakUI Autologon Feature Does Not Work Correctly"
permalink: /kb/190/Q190082/
---

## Q190082: The TweakUI Autologon Feature Does Not Work Correctly

	Article: Q190082
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui osr1 win95
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. 
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring 
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help 
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you enable the TweakUI program's Autologon feature on your Windows 95 OEM
	Service Release 1-based computer, you may still be prompted for your user name
	and password when you restart your computer.
	
	CAUSE
	=====
	
	This behavior can occur if the following string value does not exist in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ 
	     RunServices
	
	  string value: RUNDLL32.EXE TWEAKUI.CPL,TweakLogon
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT or Windows 2000, you should also update your
	Emergency Repair Disk (ERD).
	
	To resolve this issue, add the appropriate string value to the registry. To do
	so, use Registry Editor to navigate to the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ 
	     RunServices
	
	Create a new string value named "Tweak UI" (without quotation marks) in this key
	with the following data value:
	
	  Rundll32.exe Tweakui.cpl,TweakLogon
	
	After you make this change, restart your computer.
	
	MORE INFORMATION
	================
	
	Microsoft Platforms Support Desktop (MPSD) does not support the installation or
	usage of the TweakUI program.
	
	The TSR Csinject.exe program, a component of Norton Anti-Virus (part of
	CleanSweep), also causes this problem to occur.
	
	Additional query words: 95 1.00
	
	======================================================================
	Keywords          : kbenv kbnetwork kbui osr1 win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
