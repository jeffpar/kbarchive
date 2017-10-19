---
layout: page
title: "Q241117: XFOR: Exchange Server 5.5 DXA Returns DS_E_BAD_ARGUMENT"
permalink: /kb/241/Q241117/
---

## Q241117: XFOR: Exchange Server 5.5 DXA Returns DS_E_BAD_ARGUMENT

	Article: Q241117
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When receiving an update from a directory synchronization (dirsync) requestor,
	the Microsoft Exchange Directory Synchronization service (DXA) may generate the
	following events in the Exchange Server application log:
	
	  Event ID: 168
	  Source: MSExchangeDX
	  Description: State information could not be updated. Duplicates may be sent or
	  received during the next synchronization cycle for remote dirsync
	  req_name.(Thread 504).
	
	  Event ID: 133
	  Source: MSExchangeDX
	  Description: Error DS_LIBRARY_ERROR, problem DS_E_BAD_ARGUMENT returned by the
	  Microsoft Exchange DS. (Thread 0).
	
	  Event ID: 143
	  Source: MSExchangeDX
	  Description: Unable to update the remote dirsync entry Req_name in directory
	  service Exch_srv_name.
	
	The Dirsync occurs, and the Microsoft Mail recipients appear in the Exchange
	Server global address list. However, no data is sent back to the Dirsync Server
	and remote requestors are not updated.
	
	CAUSE
	=====
	
	The errors listed in the "Symptoms" section may occur when the Msvcrt.dll file
	has been updated to version 6.x or later.
	
	WORKAROUND
	==========
	
	Replace the Msvcrt.dll file with the 5.00.0000.7303 default version that is
	included with Windows NT.
	
	Additional query words: DXA
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
