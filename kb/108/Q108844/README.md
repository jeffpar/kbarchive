---
layout: page
title: "Q108844: PC DirSync: Err Msg: Error 133 Invalid Server Request"
permalink: /kb/108/Q108844/
---

## Q108844: PC DirSync: Err Msg: Error 133 Invalid Server Request

	Article: Q108844
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run directory synchronization (dirsync), you may receive the following
	error message
	
	  Error [133] Invalid Server Request PCM:<net>\<PO>
	
	where <net> is the network name, and <PO> is the postoffice name. PCM
	is the type of postoffice (in this case, Microsoft Mail for PC Networks). This
	error is most commonly found on the dirsync server.
	
	CAUSE
	=====
	
	This error message can be caused by an update message from the server to the
	requestor (which the server is) when the T2 process SRVMAIN is run against the
	server. SRVMAIN tries to process the message and cannot, because it is an update
	(ReqTx type) message and not a server (SrvTx type) message.
	
	RESOLUTION
	==========
	
	Run REQMAIN -R to process the ReqTx message.
	
	If the error message is displayed again during the next dirsync cycle, you must
	reset the system mailbag to eliminate the bad requestor message.
	
	1. Run the Mail Administrator program (Admin.exe) and select Storage
	  Compression.
	
	2. Type the following MS-DOS command to set System.mbg to zero bytes:
	
	  type nul > system.mbg
	
	  If the MS-DOS device "NUL" is used, no File Not Found error message is
	  generated.
	
	3. In the Key folder, run Debug.exe on the System.key file. At the dash prompt,
	  type the following lines and press ENTER after each line:
	
	  F100,32F,0
	  W
	  Q
	
	  This resets the system mailbag and clears the ReqTx message that is in the
	  mailbag.
	
	Additional query words: 3.00 3.00b 3.20 3.50 dirsync dirsynch
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN350
	Version           : WINDOWS:3.0,3.0b,3.2,3.5
	
	=============================================================================
	
