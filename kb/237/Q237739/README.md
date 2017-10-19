---
layout: page
title: "Q237739: XADM: Exchange On-line Restore Fails with Event ID 8010"
permalink: /kb/237/Q237739/
---

## Q237739: XADM: Exchange On-line Restore Fails with Event ID 8010

	Article: Q237739
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An on-line restore of the Exchange Server computer on a Cluster Server may fail
	with the following Event ID error in the application log:
	
	  Event ID: 8010
	  Source: NTBackup
	  Type: Error
	  Description:
	  Microsoft Exchange services returned 'XXX' from a call to
	  'ControlService(STOP)' additional data 'MSExchangeDS'
	
	CAUSE
	=====
	
	NTBackup tries to stop the Exchange Directory service rather than taking it
	off-line through the Cluster service.
	
	WORKAROUND
	==========
	
	Before running NTBackup, use Cluster Administrator to take the Exchange
	directory or information store off-line. After these services have been taken
	off-line, you can start NTBackup and proceed with the on-line restore as usual.
	
	Additional query words: Failure won't start Wolfpack Node
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
