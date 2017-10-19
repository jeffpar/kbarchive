---
layout: page
title: "Q119427: PC WRmt: Err Msg: MAILSPL Caused a GP-Fault in MSRMT.DLL"
permalink: /kb/119/Q119427/
---

## Q119427: PC WRmt: Err Msg: MAILSPL Caused a GP-Fault in MSRMT.DLL

	Article: Q119427
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you launch version 3.2 of Microsoft Mail Remote for Windows, a network
	disconnect icon may be displayed at the bottom right corner of the message view
	center. When you try to send a message by choosing View, Connect Now, the
	following error message may be displayed:
	
	  MAILSPL--An error has occurred in your application
	
	When you choose Close, the following error messages may be displayed:
	
	  MAILSPL caused a General Protection Fault in module MSRMT.DLL
	  MSMAIL caused a General Protection Fault in module USER.EXE
	
	CAUSE
	=====
	
	This may be caused by a missing OUTBOX.MBG and possibly a missing OUTBOX.KEY.
	
	RESOLUTION
	==========
	
	Create a new OUTBOX.MBG file in the C:\WINDOWS\MSMAIL\MSRMT\MBG subdirectory and
	an OUTBOX.KEY file in the C:\WINDOWS\MSMAIL\MSRMT\KEY subdirectory.
	
	To Create a New OUTBOX.KEY File
	-------------------------------
	
	  c:\windows\msmail\msrmt\key>debug outbox.key
	  File not found
	  -rcx
	  CX 0000
	  :230
	  -f100,32f,0
	  -w
	  -q
	
	To Create a New OUTBOX.MBG File
	-------------------------------
	
	  c:\windows\msmail\msrmt\mbg> type nul > outbox.mbg
	
	Additional query words: 3.20 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
