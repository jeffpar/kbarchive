---
layout: page
title: "Q134949: SMTP: Err Msg: 552 Error in Local Delivery"
permalink: /kb/134/Q134949/
---

## Q134949: SMTP: Err Msg: 552 Error in Local Delivery

	Article: Q134949
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the SMTPGATE.EXE, the following error message will occur if the
	FILES= setting in the CONFIG.SYS is set too low:
	
	  ERROR SMTPPUT: 201- X - X - Failure submitting message to mail database
	  [tx] 552 Error in local delivery
	
	CAUSE
	=====
	
	Because this program requires the use of a large number of file handles, and if
	the FILES= statement in the CONFIG.SYS is set too low, the program will be
	unable to execute properly.
	
	RESOLUTION
	==========
	
	Edit the CONFIG.SYS, and increase the FILES= statement. Initially set the FILES
	to 40, and increase them as needed.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
