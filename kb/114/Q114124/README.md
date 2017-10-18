---
layout: page
title: "Q114124: PC MMTA: External Configured for CommType=X25Eicon May Hang"
permalink: kb/114/Q114124/
---

## Q114124: PC MMTA: External Configured for CommType=X25Eicon May Hang

	Article: Q114124
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MS-DOS message transfer agent (MTA) or OS/2 multitasking MTA (MMTA) session
	started with the Commtype=X25Eicon switch stops responding (hangs). No X.25
	Call-Requests go out and all incoming calls in that session or other instances,
	if any, are rejected. Following the hang, the MMTA session typically will not
	respond to the ESC key to terminate.
	
	CAUSE
	=====
	
	An Eicon adapter tracks network control blocks (NCBs) by putting them in queues
	labeled Free, Active, Completed, and Unknown. On one Eicon adapter there can be
	a maximum of 245 NCBs allocated simultaneously. The NCBs are released to the
	Free queue when an X.25 application calls the Eicon application programming
	interface (API) routine X25DONE.
	
	When initiating a transfer, the MMTA session issues a Call-Request to the Eicon
	adapter. The Eicon adapter allocates two NCBs per Call-Request, regardless of
	whether or not an X.25 virtual circuit (VC) has actually been established with a
	remote MMTA. Although the MMTA does issue an X25HANGUP call when a message
	transfer is complete, it does not call X25DONE.
	
	This causes NCBs to accumulate in the Completed queue, never to return to the
	Free queue. When an MMTA session sends the 126th NCB (roughly), given two NCBs
	per Call-Request, the adapter hangs and does not process any more incoming or
	outgoing calls. Following this, the MMTA session that sent the last Call-Request
	hangs.
	
	WORKAROUND
	==========
	
	Currently, two workarounds are available:
	
	- Use the -BR (break relative) switch on the MMTA command line to periodically
	  terminate X.25 MMTA sessions.
	
	- Restart the computer containing the Eicon adapter. This will re-initialize
	  the adapter. If you are running OS/2, any additional X.25 MMTA instances will
	  be disabled until this is done.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the MTA for version 3.2 of
	Microsoft Mail for PC Networks and in the MMTA for OS/2. This was fixed with
	External version 3.2.6 for both MS-DOS and OS/2.
	
	
	Additional query words: 3.20 breakrelative
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
