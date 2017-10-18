---
layout: page
title: "Q129262: Fax Transmissions Fail with DSI Scout Plus Fax/Modem"
permalink: kb/129/Q129262/
---

## Q129262: Fax Transmissions Fail with DSI Scout Plus Fax/Modem

	Article: Q129262
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are using a Digicom Systems (DSI) Scout Plus fax/modem, fax
	transmissions fail.
	
	CAUSE
	=====
	
	DSI Scout Plus fax/modems fail to negotiate with some brands of fax/modems and
	fax machines because of the manner in which flow control is implemented on this
	fax/modem.
	
	For example, it has been reported that the DSI Scout Plus fax/modem cannot
	negotiate with the following equipment:
	
	- Compaq 2411
	
	- Compaq 224ATF
	
	RESOLUTION
	==========
	
	To use the DSI Scout Plus fax/modem successfully with Windows 95, you must
	change the flow control method. To do so, change the SetupCommand key to
	"ATS7=255&D3*F2" (without quotations marks) in the following registry
	entry:
	
	   HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\At Work Fax\Local Modems\TAPIxxxxx
	
	After you make this change, restart Microsoft Exchange.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: msfax ms fax
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
