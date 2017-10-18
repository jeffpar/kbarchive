---
layout: page
title: "Q94411: MemMaker Doesn't Optimize Batch Files in AUTOEXEC.BAT"
permalink: kb/094/Q94411/
---

## Q94411: MemMaker Doesn't Optimize Batch Files in AUTOEXEC.BAT

	Article: Q94411
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If a third-party memory manager has optimized memory by using specific loading
	programs or parameters within batch files, the following error message is
	displayed after you run MemMaker:
	
	  Bad Command or Filename
	
	NOTE: You may also receive error messages from the third-party expanded memory
	manager (EMM) if commands such as LOADHI (from QEMM) are called.
	
	CAUSE
	=====
	
	Some third-party memory managers optimize one or more levels deep in batch files
	called from the AUTOEXEC.BAT file, trying to load programs in upper memory.
	MemMaker does not analyze software called from batch files within the
	AUTOEXEC.BAT file, but instead treats the whole batch file as one entity and
	attempts to load it in upper memory.
	
	WORKAROUND
	==========
	
	If you receive error messages because commands specific to third-party EMMs are
	still in your batch files, edit the files and remove the third-party specific
	information.
	
	For example, if you have the following QEMM command in a batch file called from
	the AUTOEXEC.BAT file, you receive the following error message after you run
	MemMaker:
	
	  LOADHI /R:2 doskey /insert
	
	To work around this problem, remove the QEMM-specific information. For example:
	
	  doskey /insert
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
