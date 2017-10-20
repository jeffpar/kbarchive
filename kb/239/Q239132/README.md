---
layout: page
title: "Q239132: Exchange Clients Appear to Hang During Normal Operation"
permalink: /kb/239/Q239132/
---

## Q239132: Exchange Clients Appear to Hang During Normal Operation

{% raw %}

	Article: Q239132
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange and Outlook Clients appear to stop responding (hang)
	periodically during normal operation when used in conjunction with an Exchange
	Server computer that has clients that connect over slower connections.
	
	CAUSE
	=====
	
	The remote procedure call (RPC) Receive Any Thread in use by the Microsoft
	Exchange Information Store Service is waiting to receive additional information
	from a client.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Clients that are connecting to the Exchange Server computer over slower
	connections have a higher latency in the sending and receiving of data grams.
	The RPC Receive Any Thread is waiting on additional data grams before processing
	the clients request. This causes other clients that are attempting to
	communicate on the Receive Any thread to the Exchange Information Store to
	appear to hang while waiting for a response from the Exchange Server computer.
	
	For additional information on performance issues, please refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q232512 TCP/IP may Retransmit Packets Prematurely
	
	
	
	Additional query words: 4.00 exchange performance slow client
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
