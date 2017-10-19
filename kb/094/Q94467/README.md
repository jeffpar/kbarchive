---
layout: page
title: "Q94467: MHS: Updating the MHS Gateway To Version 3.0"
permalink: /kb/094/Q94467/
---

## Q94467: MHS: Updating the MHS Gateway To Version 3.0

	Article: Q94467
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 22 of the "Administrator's Guide for the Microsoft Mail Gateway to MHS"
	manual for version 3.0, the process to update the gateway to version 3.0 does
	not mention changing the Gateway version in the MHS Directory Manager to Level
	70.
	
	This step is required if you run the Gateway on an MHS version 1.2 or version 1.5
	host. The Gateway Version section relates to the Simple Message Format (SMF) in
	MHS. An MHS version 1.1 or version 1.2 host uses SMF 64; an MHS version 1.5 host
	uses SMF 70.
	
	The Simple Message Format is the specification to which MHS messages are written.
	The main difference between SMF 64 and SMF 70 relates to the number of valid
	recipients for each message. In SMF 64, each message can have only one
	recipient; Microsoft Mail makes a separate copy of the message for each
	recipient. In SMF 70, each message can have 64 recipients; the number of
	recipients in Microsoft Mail is unlimited.
	
	To run the gateway as an SMF 64 gateway, the gateway command line must include
	the -G64 option switch.
	
	Because MHS 1.1 does not specify the gateway version, you must specify the -G64
	option switch to run the gateway in SMF 64 mode.
	
	Additional query words: 1.10 1.20 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
