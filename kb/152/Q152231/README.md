---
layout: page
title: "Q152231: XFOR: How to Reset Exchange Server Dirsync Numbers"
permalink: /kb/152/Q152231/
---

## Q152231: XFOR: How to Reset Exchange Server Dirsync Numbers

	Article: Q152231
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is necessary to reset the Directory Synchronization (dirsync)
	sequence numbers when troubleshooting Microsoft Mail Directory Synchronization
	problems with an Exchange Server computer participating as a requestor or as the
	dirsync server.
	
	Resetting dirsync numbers should be only performed as part of a systematic
	approach to troubleshooting dirsync problems as documented in the application
	note, "WA0725, Microsoft Mail for PC Networks Directory Synchronization."
	
	MORE INFORMATION
	================
	
	Dirsync numbers are stored in different places depending on what role the
	Exchange Server computer plays in the process:
	
	- Exchange Server as a dirsync server: All remote dirsync requesters appear on
	  the right side of the Microsoft Exchange Administrator program when viewing
	  the dirsync server object on the left. Dirsync numbers for each requestor
	  appear in raw-mode for each remote dirsync requestor object.
	
	- Exchange Server as a dirsync requestor: There is only one dirsync requestor
	  object defined in this case. Exchange Server keeps all dirsync numbers in
	  this one object. Also viewable only while in raw- mode.
	
	Exchange Server uses the following synchronization numbers:
	
	- DXA-Conf-Seq (Confirmation sequence number) - On the remote dirsync requestor
	  object, this number keeps track of what has been acknowledged by each
	  requestor. When all transactions have been confirmed, this number should
	  match the DXA-Svr-Seq. The DXA-Conf-Seq number can be less than the
	  DXA-Svr-Seq if the server has sent updates to the requestor and no
	  acknowledgment has been received from the requestor (this usually happens
	  after the next T1 time).
	
	- DXA-Imp-Seq (Import sequence number) - Amount of full import requests sent by
	  the requestor.
	
	- DXA-Req-Seq (Requestor sequence number) - Cumulative total of number of
	  transactions sent by the requestor to the server.
	
	- DXA-Svr-Seq (Server sequence number) - Cumulative total of number of
	  transactions sent by the server to the one requestor.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	Resetting dirsync numbers requires that you run the Exchange Administrator
	program in raw mode. To do so, quit the Administrator program, and type the
	following at a command prompt: admin /r.
	
	If Exchange Server is acting as the dirsync server, you can reset numbers for
	individual remote dirsync requesters as follows:
	
	1. Start the Exchange Administrator program in raw mode.
	
	2. Click the dirsync server object that you created under the site Connections
	  object.
	
	3. On the right side, click the remote dirsync requestor that you want to reset
	  the synchronization numbers for.
	
	4. Click Raw Properties from the File menu.
	
	5. On the bottom of the Remote DirSync Requester dialog box, change List
	  Attributes of Type to ALL.
	
	6. Set the following attributes to 0: DXA-Conf-Seq, DXA-Imp-Seq, DXA-Req-Seq,
	  and DXA-Svr-Seq.
	
	7. Stop and restart the Microsoft Directory Synchronization Service.
	
	8. You must now run Listds.exe on the requestor to reset the dirsync numbers.
	
	If Exchange Server is acting as a requestor:
	
	1. Start the Exchange Server Administrator program in raw mode.
	
	2. Click the dirsync requestor object that you created under the site
	  Connections object.
	
	3. Click Raw Properties from the File menu.
	
	4. Set the following attributes to 0: DXA-Conf-Seq, DXA-Imp-Seq, DXA-Req- Seq,
	  and DXA-Svr-Seq.
	
	5. Stop and restart the Microsoft Directory Synchronization Service.
	
	6. You must remove and reconfigure the Exchange Server postoffice through the
	  Microsoft Mail Administrator program on the Microsoft Mail dirsync server as
	  well.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
