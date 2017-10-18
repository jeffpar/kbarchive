---
layout: page
title: "Q130071: Setup Detects Disk Errors but SCANDISK /ALL Does Not"
permalink: kb/130/Q130071/
---

## Q130071: Setup Detects Disk Errors but SCANDISK /ALL Does Not

	Article: Q130071
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
	
	You receive the following error message when you are running Windows 95 Setup to
	upgrade an existing Windows 95 installation:
	
	  Setup checked the hard disk(s) on your computer and found that there may be
	  problems. You need to check your disk(s) before continuing Setup.
	
	  To repair these problems, quit Setup and then run ScanDisk from Windows. Then
	  run Setup again.
	
	When you run ScanDisk in Windows 95, no errors are reported.
	
	CAUSE
	=====
	
	This error message can occur if there is a damaged DoubleSpace or DriveSpace
	compressed volume file (CVF) that is not mounted. The ScanDisk test run by
	Windows 95 Setup checks unmounted CVFs.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Run ScanDisk on the unmounted CVF by typing the following line at a command
	  prompt
	
	  " scandisk <drive>:\<dblspace.nnn> " (without the quotation
	  marks)
	
	  where <drive> is the letter of the hard disk containing the CVF and
	  <dblspace.nnn> is the name of the CVF. Note that the CVF may be named
	  DRVSPACE.<nnn>.
	
	- Rename the CVF file so that Setup will not check it and then run Setup again.
	  To rename the CVF file, type the following line at a command prompt
	
	  " ren <drive>:\<dblspace.nnn> dscvf.<nnn> " (without the
	  quotation marks)
	
	  where <drive> is the letter of the hard disk containing the CVF,
	  <dblspace.nnn> is the name of the CVF, and <nnn> is the extension
	  of the CVF. Note that the CVF may be named DRVSPACE.<nnn>.
	
	  NOTE: The unmounted CVF may have its Hidden, System, or Read-Only attributes
	  set. Before you rename the file you may have to remove these attributes. To
	  do so, type the following line at a command prompt
	
	  " attrib -s -h -r <drive>:\<dblspace.nnn> " (without the
	  quotation marks)
	
	  where <drive> is the letter of the hard disk containing the CVF and
	  <dblspace.nnn> is the name of the CVF. Note that the CVF may be named
	  DRVSPACE.<nnn>.
	
	MORE INFORMATION
	================
	
	When you run Windows 95 Setup from MS-DOS or Windows 3.x, Setup does not check
	unmounted CVFs. Setup checks unmounted CVFs only when you run Setup from an
	existing Windows 95 installation.
	
	Additional query words: scandskw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
