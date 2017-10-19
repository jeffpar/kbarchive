---
layout: page
title: "Q67862: Running MSETUP from Drive B"
permalink: /kb/067/Q67862/
---

## Q67862: Running MSETUP from Drive B

	Article: Q67862
	Product(s): See article
	Version(s): 1.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | driver mouse install b: msetup | mspl13_basic
	Last Modified: 10-FEB-1991
	
	When you run the Setup program from drive B, the message "please
	insert disk into drive A" may occur. You can temporarily force drive B
	to emulate drive A. Using the DOS ASSIGN command, type
	
	   ASSIGN A=B
	
	at the C:\DOS> prompt. Then, run MSETUP from drive B. After rebooting
	the system, the drives will return to their normal configuration.
