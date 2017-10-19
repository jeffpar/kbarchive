---
layout: page
title: "Q128030: Setup Error Message: Generic Install Error"
permalink: /kb/128/Q128030/
---

## Q128030: Setup Error Message: Generic Install Error

	Article: Q128030
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95, you may receive the following error
	message:
	
	  Generic install error
	  Invalid GenInstall INF file. -[Exiting with error code = 402(0x192).]
	
	When you choose OK, the Setup program exits.
	
	CAUSE
	=====
	
	This error occurs if the existing WIN.INI file contains a LOAD entry that does
	not have an equal sign (=).
	
	RESOLUTION
	==========
	
	Edit the WIN.INI file and either remove the LOAD entry or add an equal sign to
	the entry (so that it reads "LOAD=") and then run the Windows 95 Setup program
	again.
	
	MORE INFORMATION
	================
	
	During Setup, SETUPX.DLL parses the WIN.INI file and MBASE.INF searches for the
	LOAD= entry. If the entry does not have an equal sign, the error message stated
	above occurs.
	
	NOTE: MBASE.INF exists only while Setup is running. When Setup is finished, this
	file is deleted. You will not find this file in the Windows\INF subdirectory.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
