---
layout: page
title: "Q165279: XCON: X.400 First Contact Form for X.400 Connector Problem"
permalink: /kb/165/Q165279/
---

## Q165279: XCON: X.400 First Contact Form for X.400 Connector Problem

{% raw %}

	Article: Q165279
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article contains a checklist that will help you collect information about
	your system before calling Microsoft Technical Support regarding a problem with
	the Microsoft Exchange Server X.400 Connector. You can work more effectively
	with a Microsoft support professional if all the information needed to trace and
	solve your problem is available.
	
	Please use this checklist to document your problem and include any
	troubleshooting steps you have taken in an effort to resolve the problem. Be as
	complete and specific as possible when you fill out this form.
	
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server X.400 Connector Problem Report Form
	-------------------------------------------------------------
	
	The following Exchange Server information is available in the Exchange Server
	Administrator program. On the Help menu, click About.
	
	  Exchange Server version:
	  Exchange Server Service Packs:
	
	To collect the following operating system information:
	
	- For Windows NT Server 3.51, in Program Manager, on the Help menu, click
	  About.
	
	- For Windows NT Server 4.0, click My Computer. On the File menu, click
	  Properties, and then click the General tab.
	
	  Windows NT version:
	  Windows NT Service Packs:
	
	To collect the following network information:
	
	- In Windows NT Server 3.51, in Control Panel, double-click the Network icon.
	
	- In Windows NT Server 4.0, click Network Neighborhood and select the server.
	  On the File menu, click Properties, and then click the Identification tab.
	
	  Problem server information:
	
	  Name:
	  Installed Protocols:
	  X.400 Transport:
	
	Are you connecting to another Exchange Server computer or another message
	transfer agent (MTA)? Fill in the following information if connecting to another
	Exchange Server computer.
	
	To collect the following server information:
	
	- In Windows NT Server 3.51, in Control Panel, double-click the Network icon.
	
	- In Windows NT Server 4.0, click Network Neighborhood, select the server.
	
	  On the File menu, click Properties, and then click the Identification tab.
	
	  Other server name:
	
	Fill out the following information if connecting to another MTA. This information
	is available from the other MTA's administrator:
	
	  General foreign MTA information:
	
	     Foreign MTA Software:                    Version:
	     Foreign MTA Operating System:            Version:
	     Foreign MTA Transport Stack:             Version:
	
	  Foreign MTA local MTA information:
	
	     Local MTA Name:
	     Local MTA Password:
	     Foreign MTA Stack Information:
	                              TSAP
	                              PSAP
	                              NSAP
	
	     Foreign MTA definitions for Exchange Server:
	     Remote MTA Name:
	     Remote MTA Password:
	     Remote MTA Stack Information:
	                              TSAP
	                              PSAP
	                              NSAP
	
	What X.400 conformance mode is the MTA operating in?  84  |  X410  |  88
	
	Has this worked before? (Yes/No)
	
	If Yes, when did it quit working?
	
	What, if anything, was changed before it quit working?
	
	Is this problem seen on the foreign mail system? (Yes/No)
	
	Is this problem seen on the local (Exchange Server) system? (Yes/No)
	
	Is this problem intermittent or consistently reproducible?
	
	Can mail be sent from the foreign mail system to Exchange Server by X.400?
	(Yes/No)
	
	Can mail be sent from Exchange Server to the foreign mail system by X.400?
	(Yes/No)
	
	List Any Error Messages
	-----------------------
	
	Files Needed
	------------
	
	Find and extract the connector dump files and the stack dump files and have them
	ready to send to Microsoft Technical Support (preferably electronically):
	
	To obtain these files:
	
	1. From a command prompt, run Admin with the /r option.
	
	2. Highlight the problem connector.
	
	3. Press CTRL+SHIFT, and choose File, Raw Properties. When the Properties dialog
	  box is displayed, close it.
	
	A file called Admindmp.txt is created in the Exchsrvr\Bin directory. Rename it to
	X400con.dmp. Repeat steps 1 through 3 and rename the Admindmp.txt file created
	to X400stk.dmp.
	
	Text Event Logs
	---------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To generate text event logs:
	
	1. Rename the BF*.log and EV*.log files in the Exchsrvr\Mtadata directory.
	
	2. Using Regedit32, in the following container
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA
	  \Parameters
	
	  create the following value: TextEventLog:REG_DWORD: 1
	
	3. Restart the MTA.
	
	4. The Text Event log will be created as Ev*.log in Exchsrvr\Mtadata.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168906 XCON: Setting up Advanced Logging on Exchange 5.0 and 5.5 MTAs
	
	Diagnostic Logging
	------------------
	
	To generate diagnostic logging, do the following:
	
	1. Rename the Ap*.log and Bf*.log files in the Exchsrvr\Mtadata directory.
	
	2. Run Admin and select Configuration\Servers\<ServerName>\Message
	  Transfer Agent.
	
	3. Go to the Diagnostics tab and set the X.400 Service, Interface,
	  Interopability, APDU settings to Maximum. This creates Ap*.log and Bf*.log
	  files in the Exchsrvr\Mtadata directory.
	
	' ------------------------------------------------------------------------
	' Q153188 Script to enable bf*.log, ev*.log and ap*.log for 5.x MTA
	' ------------------------------------------------------------------------
	'               Copyright (C) 1996-2000 Microsoft Corporation
	'
	' You have a royalty-free right to use, modify, reproduce and distribute
	' the Sample Application Files (and/or any modified version) in any way
	' you find useful, provided that you agree that Microsoft has no warranty,
	' obligations or liability for any Sample Application Files.
	' ------------------------------------------------------------------------
	
	Windows Script Host must be installed http://msdn.microsoft.com/scripting
	
	  Choice = Inputbox("Enter 1 to make the changes or 2 to set them to defaults")
	  Select Case Choice
	  Case "1"
	  L_Welcome_MsgBox_Message_Text   = "This script configures the MTA to provide bf, ev and ap logs for advanced analysis."
	  L_Welcome_MsgBox_Title_Text     = "Modifying registry values"
	  Call Welcome()
	  Dim WSHShell
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log to 1"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log" , 1, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\X.400 Service to Level 4"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\1 X.400 Service" , 4, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\APDU to Level 4"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\12 APDU" , 4, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interface to Level 5"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\4 Interface" , 5, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interoperability to Level 5"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\11 Interoperability" , 5, "REG_DWORD"
	  Case "2"
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log to 0"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log" , 0, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\X.400 Service to Level 0"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\1 X.400 Service" , 0, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\APDU to Level 0"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\12 APDU" , 0, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interface to Level 0"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\4 Interface" , 0, "REG_DWORD"
	  WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interoperability to Level 0"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\11 Interoperability" , 0, ??
	
	Additional query words: x400fcc fcc first contact
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
