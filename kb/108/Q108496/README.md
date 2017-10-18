---
layout: page
title: "Q108496: Running SCANDISK /ALL While a Virtual Drive Exists"
permalink: kb/108/Q108496/
---

## Q108496: Running SCANDISK /ALL While a Virtual Drive Exists

	Article: Q108496
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running SCANDISK /ALL incorrectly scans virtual drives created using the SUBST
	command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ScanDisk program included
	with MS-DOS versions 6.2, 6.21, and 6.22. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	If you use drive A as a virtual drive (for example, by using the command SUBST
	A: C:\DOS), running SCANDISK A: results in the following error message
	
	  Drive A was created by using the SUBST or ASSIGN command and cannot be
	  checked. To check drive A, run ScanDisk on drive C instead.
	
	The error message recommends running ScanDisk on drive C because the physical
	directory actually resides on C. This is normal.
	
	If you run SCANDISK /ALL, ScanDisk actually diagnoses the virtual drive. While
	this should not cause errors, Microsoft recommends that you not run SCANDISK
	/ALL while a virtual drive exists.
	
	
	
	Additional query words: 6.20 SCANDISK ALL SUBST
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
