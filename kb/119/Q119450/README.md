---
layout: page
title: "Q119450: PC DirSync: Err Msg: Fatal 118 Transaction Limit Reached"
permalink: kb/119/Q119450/
---

## Q119450: PC DirSync: Err Msg: Fatal 118 Transaction Limit Reached

	Article: Q119450
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T2 phase of automatic directory synchronization (Dir-Sync) or when
	the server transmit process "SRVMAIN -t" is run manually, the following errors
	may be displayed:
	
	  Fatal 118 Transaction limit reached
	
	  Fatal 166 Manual Import required for PCM:Network/Postoffice
	
	CAUSE
	=====
	
	This error occurs because the Network/Postoffice indicated in the error message
	has requested a Dir-Sync, Import, but the directory server's import response to
	the requestor exceeds the message limit that the requestor has specified with
	Config, Dir-Sync, Requestor, Options, Limit.
	
	RESOLUTION
	==========
	
	A manual import needs to be done with RESYNC.GLB. RESYNC.GLB can be generated on
	the Dir-Sync server by using import with the -s option. The file should be
	copied to the GLB subdirectory of the requestor postoffice and Import should be
	run with the -q option.
	
	MORE INFORMATION
	================
	
	The administrator at the requestor postoffice should use RESYNC.GLB before
	adding any transactions at the postoffice. If transactions have already been
	added, they should be re-added as RESYNC.GLB will change the REQSYNC number in
	the REQCONF.GLB causing transactions in REQTRANS.GLB with a lower number than
	REQSYNC to be ignored.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
