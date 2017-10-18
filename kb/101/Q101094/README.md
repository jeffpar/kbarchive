---
layout: page
title: "Q101094: Err Msg: Invalid Catalog Name in Temporary File"
permalink: kb/101/Q101094/
---

## Q101094: Err Msg: Invalid Catalog Name in Temporary File

	Article: Q101094
	Product(s): Microsoft Disk Operating System
	Version(s): 6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to restore files using a manually expanded copy of MSBACKUP.EXE,
	you may receive the following message:
	
	  Invalid catalog name in temporary file
	
	WORKAROUND
	==========
	
	To correct this problem, delete the file MSBACKUP.TMP, which resides on the same
	directory as the MSBACKUP.EXE file, then try restoring the files again.
	
	Additional query words: 6.00 6.20 msbackup.exe catalog restore msbackup backup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : :6.0,6.2,6.22
	
	=============================================================================
	
