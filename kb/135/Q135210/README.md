---
layout: page
title: "Q135210: Setup May Hang Detecting MV Premium 3-D SCSI Adapter"
permalink: /kb/135/Q135210/
---

## Q135210: Setup May Hang Detecting MV Premium 3-D SCSI Adapter

	Article: Q135210
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may hang when it tries to detect the Media Vision Premium 3-D SCSI
	adapter in your computer.
	
	CAUSE
	=====
	
	This problem can occur with early Premium 3-D SCSI adapters. This problem
	affects adapters with part number 650-0111-01 prior to revision C (for example,
	part number 650-0111-01B), manufactured between 1/18/94 and 2/23/94.
	
	The NCR SCSI controller on this adapter malfunctions when I/O port 23Fh or 33Fh
	is written to during the hardware detection routine.
	
	RESOLUTION
	==========
	
	Contact Media Vision to inquire about upgrading to at least revision C of the
	SCSI adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
