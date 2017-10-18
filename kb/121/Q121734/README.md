---
layout: page
title: "Q121734: PC Ext: SYS3175 MMTA Error in ASYNC.OVL"
permalink: kb/121/Q121734/
---

## Q121734: PC Ext: SYS3175 MMTA Error in ASYNC.OVL

	Article: Q121734
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the External Mail program (EXTERNAL.EXE) encounters a mailbag contention
	problem, it tries to generate a report to go into the SYSTEM.LOG file. If the
	message has more than three recipients on a postoffice, the External Mail
	program may stop responding (hang or crash). In the OS/2 environment, the
	following SYS3175 message can result:
	
	  A program in this session encountered a problem and cannot continue.
	
	If the report is generated, it may list recipients that actually did receive the
	message rather than list only the recipient whose mailbag could not be
	accessed.
	
	Similar delivery problems, such as a corrupted or bad address, a bad group, or an
	empty or missing mailbag, may also generate the SYS3175 error.
	
	CAUSE
	=====
	
	These errors can occur when multiple recipients are specified for one postoffice
	and one of the recipients experiences a delivery problem. As the External Mail
	program tries to create the SYSTEM.LOG report, memory can be corrupted.
	
	This problem does not occur for mail sent from user to user within one
	postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2.9 of the External
	Mail program. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
