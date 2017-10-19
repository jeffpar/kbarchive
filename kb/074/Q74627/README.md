---
layout: page
title: "Q74627: 'Invalid COMMAND.COM' with Profit Wise and MS-DOS 5.0"
permalink: /kb/074/Q74627/
---

## Q74627: 'Invalid COMMAND.COM' with Profit Wise and MS-DOS 5.0

	Article: Q74627
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Solomon Accounting Software's Profit Wise version 1.0 under
	Microsoft MS-DOS version 5.0, the following error message is displayed:
	
	  Invalid COMMAND.COM
	
	CAUSE
	=====
	
	Solomon Accounting Software technical support has confirmed this to be a problem
	in Profit Wise.
	
	WORKAROUND
	==========
	
	To work around the problem, Solomon recommends deleting the following two lines
	in the batch file that executes Profit Wise, PW.BAT:
	
	- Compvers
	
	- If errorlevel 1 goto n
	
	Profit Wise runs correctly under MS-DOS 5.0 when the above two lines are deleted.
	
	MORE INFORMATION
	================
	
	Solomon Accounting Software Profit Wise is an accounting software package.
	Solomon is still testing Profit Wise with MS-DOS 5.0. If you experience other
	problems with Profit Wise, contact Solomon Accounting Software technical
	support.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
