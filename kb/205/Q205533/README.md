---
layout: page
title: "Q205533: XCON: Exchange Server MTA in Large Site May Run Out of ECBs"
permalink: kb/205/Q205533/
---

## Q205533: XCON: Exchange Server MTA in Large Site May Run Out of ECBs

	Article: Q205533
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install an Exchange Server computer in a large site, when the server
	attempts to send an e-mail message over an installed connector, such as the
	Internet Mail Connector in Exchange Server 4.0 or the Internet Mail Service in
	Exchange Server 5.0, the server may run low on or run out of Entity Control
	Blocks (ECBs).
	
	The following events may be logged in the Microsoft Windows NT application event
	log:
	
	  Event ID: 248
	  Source: MSExchangeMTA
	  An internal MTA error occurred. An attempt has been made to process too many
	  entity control blocks (ECBs) by a single thread. Number of ECBs processed:
	  10. [MTA DISP:ROUTER 14:331] (14)
	
	  Event ID: 41
	  Source: MSExchangeMTA
	  There are too many concurrently connected entities. There are no free entity
	  control blocks (ECBs) available. There are currently %1 ECBs configured. [MTA
	  DISP:ROUTER 12 119] (14)
	
	Message delivery may also be slow.
	
	CAUSE
	=====
	
	An Entity Control Block is a segment of code that is created for each message
	transfer agent (MTA) and connector that a given MTA communicates with. The ECBs
	are created during MTA startup.
	
	By default, the Exchange Server MTA is configured for 25 ECB connections to 25
	other Exchange Server computers in a given site. This issue can occur if this
	server count is exceeded.
	
	WORKAROUND
	==========
	
	To work around this issue, run Performance Optimizer and change the Number of
	users setting to the number of users that the connector services, rather than
	the number of users on the local server. Also set the server to be a Multiserver
	and Connector server.
	
	If this issue still occurs after you run Performance Optimizer, make the
	following registry changes:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the "Concurrent connections to LAN-MTAs" value under the following key
	  in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	3. The default value is 40 in decimal format; change the value to 80. On the
	  Edit menu, click DWORD, type "80" (without the quotation marks), and then
	  click OK.
	
	4. Locate the LAN-MTAs value under the same key in the registry.
	
	5. The default value is 20 in decimal format; change the value to 40. On the
	  Edit menu, click DWORD, type "40" (without the quotation marks), and then
	  click OK.
	
	6. Locate the "Number of Remote Sites Connected over LAN" value under the same
	  key in the registry.
	
	7. The default value is 25 in decimal format; change the value to 50. On the
	  Edit menu, click DWORD, type "50" (without the quotation marks), and then
	  click OK.
	
	8. Locate the "X.400 gateways" value under the same key in the registry.
	
	9. The default value is 20 in decimal format; change the value to 40. On the
	  Edit menu, click DWORD, type "40" (without the quotation marks), and then
	  click OK.
	
	10. Quit Registry Editor, and then restart the MTA.
	
	Additional query words: 248 41
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
