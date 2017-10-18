---
layout: page
title: "Q128440: MHS: Long User Names Conflict with -SF Switch"
permalink: kb/128/Q128440/
---

## Q128440: MHS: Long User Names Conflict with -SF Switch

	Article: Q128440
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If administrators use the -SF (Simple Format addressing) switch they will need
	to insure that all MSMail mailbox id's are no longer than 8 characters.
	
	CAUSE
	=====
	
	MHS only supports sending to 8 character user names. MSMail names longer than 8
	characters can normally be included in the extended address field. The -SF
	switch disables the extended address field.
	
	RESOLUTION
	==========
	
	If administrators need to use the -sf switch and disable extended addressing
	they must ensure that all MSMail mailbox id's are 8 characters or less.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
