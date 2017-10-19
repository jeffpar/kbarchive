---
layout: page
title: "Q113601: MS-DOS 6.21 Err Msg: Setup Cannot Continue. Your Computer..."
permalink: /kb/113/Q113601/
---

## Q113601: MS-DOS 6.21 Err Msg: Setup Cannot Continue. Your Computer...

	Article: Q113601
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install MS-DOS 6.21 Upgrade over IBM PC-DOS version 6.1 (with data-
	compression installed), Setup displays the following error message:
	
	  Setup cannot continue. Your computer has DoubleSpace installed on it.
	  MS-DOS 6.21 does not support DoubleSpace.
	
	CAUSE
	=====
	
	With data compression installed, IBM PC-DOS 6.1 includes the files DBLSPACE.000,
	DBLSPACE.BIN, and DBLSPACE.INI in root directory of the host drive. As a result,
	Setup cannot install.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the IBM compression by running SSUNCOMP.EXE
	and then run MS-DOS 6.21 Upgrade Setup.
	
	Additional query words: 6.21 OEMsetup BUSETUP SETUP err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	
