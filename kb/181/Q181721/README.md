---
layout: page
title: "Q181721: XCON: Messages Not Delivered Over an Association"
permalink: /kb/181/Q181721/
---

## Q181721: XCON: Messages Not Delivered Over an Association

{% raw %}

	Article: Q181721
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) has a backlog of messages
	(up to the default threshold) waiting to be delivered. The MTA makes an
	association with another LAN-MTA (RPC connection), but does not deliver mail
	over this connection.
	
	Various errors may appear in the applications event log concerning RPC problems.
	These may include the following events and other similar errors that indicate
	RPC problems:
	
	  Event id = 9316
	  Category = Interface
	  Source = MSExchangeMTA
	  An RPC communications error occurred. No data was sent over the RPC
	  connection. Locality table (LTAB) index: 53. Windows NT error: 1727. The MTA
	  will attempt to recover the RPC connection. [BASE IL KERNEL 24 512] (12)
	
	  Event id = 9277
	  Category = Interface
	  Source = MSExchangeMTA
	  The MTA has issued an RPC Cancel call for thread 1, Locality Table Index: 160,
	  Time (ms): 1275740, Cancel result: 0 [SLPS100 MtaBind
	  ncacn_ip_tcp:100.5.51.16[1911] BASE IL] (14)
	
	CAUSE
	=====
	
	The Windows NT RPC component on the receiving computer puts the association in
	the wrong address space. Therefore, when the next bind arrives on the correct
	address, it cannot find the association and sends a Bind NAK.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The initiating MTA tries to send mail to the receiving MTA, but the receiving
	MTA does not believe it has an association with it because the RPC put the
	association in the wrong address. It will NAK the RPC Bind request.
	
	After the message threshold has been reached (default value is 50) on one of the
	MTAs, it will make a new association and begin delivering messages again.
	
	Additional query words: 4.00 5.00 5.50 RT-Turn-Please RT-Turn-Give ASB token give XADM
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
