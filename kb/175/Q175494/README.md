---
layout: page
title: "Q175494: XFOR: Dequeing SMTP Mail Outside of Dialup Connections"
permalink: kb/175/Q175494/
---

## Q175494: XFOR: Dequeing SMTP Mail Outside of Dialup Connections

	Article: Q175494
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server has the ability to send a command or ETRN (with
	version 5.0 Service Pack 1) to another host to prompt that host to send any
	messages waiting for the specified domain (also known as "dequeuing").
	
	However, by default, this functionality is limited to only dial-up connections.
	
	If this functionality is required outside of the dial-up connections of the
	Internet Mail Service (like in the case of Dial-up or Dial-on-demand routers),
	you must use some method to send this command manually, either through a batch
	file or the use of a third-party dequeing application.
	
	
	WORKAROUND
	==========
	
	Create a batch file to run on Windows NT AT Command Scheduler (available in the
	Windows NT Resource Kit) or other third-party scheduling application. The
	following are example batch files:
	
	Example 1: (assumes Internet Mail Service is always running)
	
	  PING <other_hosts_ip_address> ---> makes the dialup router initiate its connection
	  PING <other_hosts_ip_address> ---> verify connection
	  FINGER My.DomainA.Com@ISP.Host.DomainB.Com ---> to dequeue
	
	Example 2: (assumes Internet Mail Service is always running)
	
	  PING <other_hosts_ip_address> ---> makes the dialup router initiate its connection
	  PING <other_hosts_ip_address> ---> verify connection
	  <Retrieval Program> ---> third-party program that dequeues mail
	
	Example 3: (assumes Internet Mail Service is NOT running)
	
	  PING <other_hosts_ip_address> ---> makes the dialup router initiate its connection
	  PING <other_hosts_ip_address> ---> verify connection
	  NET START MSExchangeIMC ---> starts the Internet Mail Service
	  <Retrieval Method: command or executable>
	  NET STOP MSExchangeIMC ---> stops the Internet Mail Service
	
	
	Also, if the ability to use ETRN is needed outside of dial-up connections, there
	is another workaround available. The ETRN command can be configured to be sent
	to all hosts the Internet Mail Service connects to. To do so, use the following
	steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	  \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: AlwaysUseETRN
	  Data Type: REG_DWORD
	  Value: 0x1
	
	4. Quit Registry Editor.
	
	Setting this entry tells the Internet Mail Service to send the ETRN command to
	any ESMTP hosts it connects to (that advertise they support ETRN). This will use
	any domains listed on the routing table configured with the Internet Mail
	Service.
	
	NOTE: It is recommended that this entry be used only when forwarding messages to
	a single host. This is due to the added time it takes to send and wait for a
	response to the ETRN command.
	
	' ------------------------------------------------------------------------
	' Q241157  Script to enable ETRN for IMS on LAN or Demand Dial Networks
	' ------------------------------------------------------------------------
	'               Copyright (C) 1996-2000 Microsoft Corporation
	'
	' You have a royalty-free right to use, modify, reproduce and distribute
	' the Sample Application Files (and/or any modified version) in any way
	' you find useful, provided that you agree that Microsoft has no warranty,
	' obligations or liability for any Sample Application Files.
	' ------------------------------------------------------------------------
	
	Windows Script Host must be installed http://msdn.microsoft.com/scripting
	
	  Choice = InputBox("Enter 1 to enable ETRN or 2 to disable ETRN")
	
	  Select Case Choice
	
	  Case "1"
	
	  L_Welcome_MsgBox_Message_Text   = "This script adds the AlwaysUseETRN value to the Internet Mail Service that enables LAN based ETRN."
	  L_Welcome_MsgBox_Title_Text     = "Enabling ETRN"
	  Call Welcome()
	  Dim WSHShell
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  WSHShell.Popup "Set value HKLM\System\CurrentControlSet\Services\MSExchangeIMC\Parameters\AlwaysUseETRN to REG_DWORD 1"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeIMC\Parameters\AlwaysUseETRN" , 1, "REG_DWORD"
	
	  Case "2"
	  L_Welcome_MsgBox_Message_Text   = "Setting the Value AlwaysUseETRN to zero"
	  L_Welcome_MsgBox_Title_Text     = "disabling ETRN"
	  Call Welcome()
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  WSHShell.Popup "Set value HKLM\System\CurrentControlSet\Services\MSExchangeIMC\Parameters\AlwaysUseETRN to REG_DWORD 0"
	  WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeIMC\Parameters\AlwaysUseETRN" , 0, "REG_DWORD"
	
	  End Select
	
	  Sub Welcome()
	      Dim intDoIt
	
	      intDoIt =  MsgBox(L_Welcome_MsgBox_Message_Text, vbOKCancel + vbInformation, L_Welcome_MsgBox_Title_Text )
	      If intDoIt = vbCancel Then
	          WScript.Quit
	      End If
	  End Sub
	
	Additional query words: DEQUEUE ETRN RETRIEVAL
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
