---
layout: page
title: "Q128570: SMTP: Err Msg: 552 Error in Local Delivery"
permalink: /kb/128/Q128570/
---

## Q128570: SMTP: Err Msg: 552 Error in Local Delivery

	Article: Q128570
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
	
	When you run the SMTPGATE.EXE program, the following error occurs:
	
	  ERROR SMTPPUT: 201- X - X - Failure submitting message to mail database
	
	  [tx] 552 Error in local delivery
	
	CAUSE
	=====
	
	The FILES= setting in your CONFIG.SYS file is set too low. The SMTPGATE.EXE
	program requires a large number of file handles; therefore, if the FILES=
	statement is set too low, the program cannot run properly.
	
	RESOLUTION
	==========
	
	Edit your CONFIG.SYS file and increase the FILES= statement; initially set
	FILES= to 40, and then increase the number as needed.
	
	MORE INFORMATION
	================
	
	In MS-DOS, the default value for the FILES= statement is 8. The highest possible
	value is 255.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
