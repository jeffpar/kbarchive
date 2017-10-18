---
layout: page
title: "Q123857: PC DirSync: DirSync Request Limitations of SRVMAIN.EXE"
permalink: kb/123/Q123857/
---

## Q123857: PC DirSync: DirSync Request Limitations of SRVMAIN.EXE

	Article: Q123857
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Foreign DirSync requesters (third party gateways participating in DirSync) may
	cause SRVMAIN -T (T2) to fail when generating DirSync mail back to the requester
	at T2 time. DIRSYNC.LOG will report the following errors:
	
	  Warning[ 9] Out of memory: SRVUPDS
	  Fatal [159] Failure to send update mail to requesters
	
	  <address type>:<network>/<po>
	
	The requester fails to receive any address changes from the DirSync server, but
	other requesters (Microsoft Mail postoffices) appear unaffected, and receive
	address changes.
	
	MORE INFORMATION
	================
	
	As documented in the "Directory Synchronization with Foreign Mail Systems"
	manual, there are two ways the requester can request addresses from the DirSync
	server: Inbody or Inattachment. Inbody means that the address transactions will
	be included in the body of the mail message. Inattachment means that address
	transactions will be included in a separate file that is an attachment to the
	mail message.
	
	The T2 failure and error messages result if the import request message from the
	requester specifies "transactions=inbody" instead of
	"transactions=inattachment." If Inbody is specified, SRVMAIN -T will create
	SRVUPDS.GLB, a temporary file that contains all transactions that need to be
	sent out to the various requesters during this cycle, on the disk. Then, in
	memory on the computer running DirSync, SRVMAIN creates a mail message, and
	tries to read in the entire contents of SRVUPDS as the message body into
	available memory. If the list is large enough to exceed the available memory,
	SRVMAIN fails to create the mail message and DIRSYNC.LOG reports the errors
	listed above. No transactions will be sent back to the requester.
	
	NOTE: This memory limitation shows up first when running SRVMAIN under MS- DOS,
	but could occur under OS/2 as well (unlikely in real world circumstances).
	SRVMAIN is a bound executable, capable of executing under both MS-DOS and OS/2.
	Since OS/2 does not have the conventional memory (640K) limitation that MS-DOS
	has, running DirSync under OS/2 will likely succeed under the same circumstances
	that would make SRVMAIN fail under MS- DOS.
	
	If "transactions=inattachment" is specified, then SRVMAIN builds a temporary file
	on disk (TMPTRANS.GLB) from SRVUPDS that includes all the appropriate
	transactions for that requester, and, after completion, attaches this file to
	the requester update message, avoiding the memory limitation.
	
	
	Additional query words: 3.00 3.00a 3.20 3.50 Requester
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.5
	
	=============================================================================
	
