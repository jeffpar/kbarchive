---
layout: page
title: "Q175915: Direct Cable Connection Cannot Connect to Windows 95 Computer"
permalink: /kb/175/Q175915/
---

## Q175915: Direct Cable Connection Cannot Connect to Windows 95 Computer

	Article: Q175915
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool dun osr1 osr2 win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You may be unable to connect to another Windows 95-based computer with Direct
	Cable Connection.
	
	CAUSE
	=====
	
	This behavior can occur if CompuServe 3.0 is installed on your computer, and the
	CompuServe software changed the first value (value "0") to "CISPPP" in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RemoteAccess\ 
	     Authentication\Drivers\PPPMAC
	
	RESOLUTION
	==========
	
	To resolve this issue, first try all of the resolutions in all of the following
	articles in the Microsoft Knowledge Base:
	
	  Q159578 Cannot Find Host Computer Using Direct Cable Connection
	
	  Q127136 Direct Cable Connection Fails with Only NetBEUI Loaded
	
	  Q140208 Cannot Use Both Dial-Up Networking and Direct Cable Connection
	
	  Q139204 ECP Port with SMC Chip Set Does Not Transfer Data Properly
	
	  Q166340 Direct Cable Connection May Not Work in Localized OSR2
	
	If the resolutions in these articles do not resolve the issue, use the following
	method.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Use Registry Editor to change the first value to "PPP" and the last value to
	"CISPPP" in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RemoteAccess\ 
	     Authentication\Drivers\PPPMAC
	
	MORE INFORMATION
	================
	
	The default value order is as follows:
	
	  Name   Value
	  ----------------------------------------------
	  0      "PPP"
	  1      "RAS"
	  2      "NWC"
	  3      "SLIP" (optional; may not be present)
	  4      "CSLIP" (optional; may not be present)
	  5      "CISPPP" (optional; may not be present)
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: dcc
	
	======================================================================
	Keywords          : kbenv kbtool dun osr1 osr2 win95 kbDialUp 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	
