---
layout: page
title: "Q121224: DRVSPACE: DBLSPACE Files NOT Updated on Uncompressed Drive"
permalink: /kb/121/Q121224/
---

## Q121224: DRVSPACE: DBLSPACE Files NOT Updated on Uncompressed Drive

	Article: Q121224
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to MS-DOS 6.22 from MS-DOS 6.0 on an uncompressed system, the
	DBLSPACE.BIN file in the root directory is not updated. The files DBLSPACE.EXE,
	DBLSPACE.HLP, and DBLSPACE.SYS located in the DOS directory are also not
	updated.
	
	CAUSE
	=====
	
	This occurs because the DBLSPACE.BIN file is in the root directory rather than
	the DOS directory.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Re-expand DBLSPACE.BIN to the DOS directory.
	
	-or-
	
	- Transfer the system files back to drive C by using the MS-DOS 6.0 boot disk
	  and typing "sys a: c:" (without the quotation marks). Copy the DBLSPACE.BIN
	  file to the DOS directory and then upgrade to MS-DOS 6.22.
	
	MORE INFORMATION
	================
	
	This problem does not occur if DBLSPACE.BIN is NOT in the DOS directory on a
	drive compressed using Compress In Place or Create New Drive.
	
	
	Additional query words: 6.22 6.00 patched double space non-compressed host
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
