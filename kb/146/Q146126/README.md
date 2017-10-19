---
layout: page
title: "Q146126: XFOR: Controlling IMC Loopback Connections"
permalink: /kb/146/Q146126/
---

## Q146126: XFOR: Controlling IMC Loopback Connections

	Article: Q146126
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Connector (IMC) determines if messages are
	being sent to the SMTP addresses that reside on the same site as the IMC. The
	IMC can reject the message or send it to the Internet (depending on a Windows NT
	Server registry setting). If the message is sent to the Internet, it is returned
	to the Exchange system through the IMC. This process is inefficient, and it
	affects the performance of the IMC. If the IMC rejects the message, the sender
	receives the following "Non Delivery Report" message:
	
	  Your message did not reach some or all of the intended recipients.
	
	
	MORE INFORMATION
	================
	
	To disable the loopback messaging, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	2. From the Edit menu, select Add Value.
	
	3. Enter the following:
	
	     Value Name: DisableLoopbackConnections
	     Data Type:  REG_DWORD
	     String:     1 (Default is 0)
	
	4. Choose OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT.
	
	Additional query words: imc win16 winnt win95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
