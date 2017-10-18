---
layout: page
title: "Q151677: NWLink SPX Ignores Allocation Number Sent By Peer"
permalink: kb/151/Q151677/
---

## Q151677: NWLink SPX Ignores Allocation Number Sent By Peer

	Article: Q151677
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, computers that connect to a process on a Windows NT
	computer may fail. For example, the computer may time-out, applications may stop
	responding, or the computer may disconnect. On the network you may also see
	increased retransmissions.
	
	This has been observed with SQL Server where clients access the database using
	ODBC over SPX but it may happen with any SPX-based communication.
	
	CAUSE
	=====
	
	The SQL server numbers the frames (for example, 23) when it sends data to the
	client. The client indicates that it has received the frame and specifies with
	an Allocation Number if it can receive another frame (for example, 24).
	
	If the client-side SPX protocol cannot receive another frame because the process
	did not copy the data and gave it another buffer, it does not increment its
	Allocation Number (for example, send 23). This is especially true for database
	applications as they may perform a considerable amount of work locally.
	
	The sending station should refrain from sending frames until it receives another
	frame with an updated Allocation Number. The problem introduced in Service Pack
	2 is that Windows NT NWLink SPX ignores the Allocation Number field and
	continues to send frames. After this happens, one of the stations eventually
	decides that the session is out of synch and disconnects.
	
	When the connection starts over the two stations are likely to run into the same
	problem again.
	
	
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
	
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	Q177113Incomplete Print Jobs Using JetDirect over SPX
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
