---
layout: page
title: "Q181186: XFOR: CCMC Doesn't Work w/ Exchange Installed to Long Directory"
permalink: /kb/181/Q181186/
---

## Q181186: XFOR: CCMC Doesn't Work w/ Exchange Installed to Long Directory

	Article: Q181186
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages are not delivered or received across the Microsoft Server Connector for
	Lotus CC-Mail (CCMC). There may not be any errors in the application event log.
	
	If a message is sent to the Lotus cc:Mail environment, with Maximum logging level
	set for the categories Outbound and General, the only Event ID logged is:
	
	  Event ID: 11001
	  The following message was sent from Microsoft Exchange to Lotus cc:Mail,
	  From: USER at EXCHANGESITE
	  Date: 2/10/98 11:28
	  To: CCMailPO1 User1 at CCMAILPO1
	
	Normally, Event ID 11001 is followed by Event ID 67 and/or 58 (examples below):
	
	  Event ID: 58
	  Lotus cc:Mail IMPORT from file *.ccm completed successfully.
	
	  Event ID: 67
	  Lotus cc:Mail EXPORT to file msg65F9.ccm completed successfully.
	
	If a directory synchronization (dirsync) interval occurs, the only application
	Event ID is:
	
	  Event ID: 14001
	  Microsoft Exchange Connector for Lotus cc:Mail directory synchronization
	  has started.
	  Now exporting Lotus cc:Mail directory entries, mailing lists, and
	  bulletin board titles.
	
	Normally, at the normal conclusion of the dirsync process, an Event ID 14031 is
	logged:
	
	  Event ID: 14031
	  Microsoft Exchange Connector for Lotus cc:Mail directory synchronization
	  has finished.
	
	CAUSE
	=====
	
	Microsoft Exchange Server was installed in a directory that exceeds eight
	characters in length (for example, C:\ExchSrvr55). When the Microsoft CCMC is
	configured to use the MS-DOS based Import.exe and Export.exe utilities (provided
	by Lotus cc:Mail), these utilities fail to operate if they are provided a path
	that exceeds the MS-DOS 8.3 naming convention.
	
	Exchange Server provides the path to the Export.ini file (for example,
	C:\ExchSrvr55\CCMCData\Export.ini) and the MS-DOS utilities fail to locate the
	INI file necessary for normal operation.
	
	WORKAROUND
	==========
	
	Install Exchange Server to a directory that does not exceed eight characters in
	length.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the CCMC only passes short-path names to the Lotus cc:Mail
	export/import utilities.
	
	Lotus cc:Mail is manufactured by Lotus, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	
	Additional query words: dir-sync dir-synch dirsynch
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
