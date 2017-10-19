---
layout: page
title: "Q149368: PC Rmt: Err Msg: ProcessRecvMail, fp_read Fails. Out of Memory"
permalink: /kb/149/Q149368/
---

## Q149368: PC Rmt: Err Msg: ProcessRecvMail, fp_read Fails. Out of Memory

	Article: Q149368
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to retrieve a message addressed to 300 or more total individual
	recipients, during the retrieval of the message, you may get the following error
	message:
	
	  ProcessRecvMail, fp_read fails.
	  Out of memory.
	
	CAUSE
	=====
	
	When you retrieve a message addressed to 300 or more individually addressed
	recipients, the MS-DOS Mail Remote client may encounter a memory limitation that
	results in the above error message.
	
	NOTE: Other mail messages pending in the your mailbag will be retrieved
	successfully during the session. However, the client will have to exhaust the
	number of required retry attempts on the failing message to eliminate the error
	condition and have the message returned to the originator with a non-delivery
	report.
	
	RESOLUTION
	==========
	
	This problem can be corrected by creating a group definition on the postoffice
	that contains the desired recipient list. Therefore, the retrieval of the
	message by the MS-DOS Mail Remote client will not fail if the same number of
	recipients are delivered via a group alias.
	
	
	Additional query words: 3.00 DOS remote
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS
	Version           : MS-DOS:3.0
	
	=============================================================================
	
