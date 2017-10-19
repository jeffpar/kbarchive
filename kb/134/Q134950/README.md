---
layout: page
title: "Q134950: X400: Err Msg: Translate to Local Form Failed on Message:"
permalink: /kb/134/Q134950/
---

## Q134950: X400: Err Msg: Translate to Local Form Failed on Message:

	Article: Q134950
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of the Microsoft Mail Gateway to X.400 may not be able to
	successfully translate messages to local form. As a result, the following error
	will occur:
	
	  ERROR 3 (transmitting message to local message store): Translate to local
	  form failed on message: xxxxxxxx
	
	where xxxxxxxx is the message hexid that is then copied to the \X400\BAD
	directory on the gateway postoffice.
	
	CAUSE
	=====
	
	This error can occur if the X400GATE.EXE is being executed from a network drive,
	as opposed to local drive. When the X.400 gateway is installed, it prompts for
	the drive and path to the Microsoft Mail for PC Networks executable files. This
	is where X400GATE.EXE is placed. If it is located on a network drive, this error
	may occur.
	
	RESOLUTION
	==========
	
	Move the file X400GATE.EXE to a local drive, and ensure the TMP environment
	variable is pointing to a valid temporary directory on the local drive.
	
	Additional query words: 3.20 3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
