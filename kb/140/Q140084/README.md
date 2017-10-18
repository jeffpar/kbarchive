---
layout: page
title: "Q140084: Permissions Error Creating an LPR Printer"
permalink: kb/140/Q140084/
---

## Q140084: Permissions Error Creating an LPR Printer

	Article: Q140084
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following error message appears when you attempt to create an LPR printer:
	
	Windows NT 4.0
	--------------
	
	  Specified Port cannot be added. Access Denied.
	
	Windows NT3.51
	--------------
	
	  You do not have permissions to add a port to this machine
	
	To create a TCP/IP printer in Windows NT, you must be a member of the
	Administrators or Server Operators group.
	
	CAUSE
	=====
	
	Printer Operators and Power Users can create printers but do not have sufficent
	access to the registry to create new printer ports.
	
	Print Operators are also unable to create a DLC port. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q160142
	  TITLE : Printer Operators Cannot Create DLC Ports
	
	WORKAROUND
	==========
	
	Have the Administrator create the port before the Printer Operator or Power User
	creates a printer.
	
	Or
	
	Use the following steps to modify the default permissions to give Print Operators
	and Power Users the ability to create an LPR port.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Logon to the computer as an Administrator and run REGEDT32.EXE
	
	2. Go to the following registry location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	
	3. Select the Monitors Key under the Print Key
	
	4. From the Security Menu select Permissions
	
	5. Select Add then select the Print Operators group or Power Users group, set
	  the Type of Access to "Full Control" then choose OK.
	
	6. Select the option to "Replace Permissions on Existing Subkeys" Then choose
	  OK.
	
	7. Stop then restart the spooler service.
	
	Print Operators and/or Power Users will now be able to add an LPR Port.
	
	Additional query words: prodnt lpd tcpip rights create port
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
