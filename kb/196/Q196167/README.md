---
layout: page
title: "Q196167: XADM: Unable to Initialize Extension Data Attributes"
permalink: /kb/196/Q196167/
---

## Q196167: XADM: Unable to Initialize Extension Data Attributes

	Article: Q196167
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mailbox Cleanup Agent (MBClean) version 1.8 does not support remote
	administration. If the Microsoft Exchange Server Administrator program is used
	on a different server than the MBClean install server, you will receive the
	following two errors trying to run MBClean.
	
	  Unable to initialize Extension Data Attributes!
	
	  An exception has occurred in an extension .DLL file. Contact your
	  extension supplier. Microsoft Exchange Administrator ID no: c10312fb
	
	MORE INFORMATION
	================
	
	MBClean version 1.8 does not support remote administration. Therefore, the
	Exchange Server Administrator program must be connected to the same server that
	MBClean is installed on to make any changes to its configuration. Although
	MBClean can only be administrated from the install server, it will still clean
	mailboxes on any server in the site.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
