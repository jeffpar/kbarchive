---
layout: page
title: "Q137677: PC NTMMTA: Err Msg:No Drive Is Available for Dynamic Attaching"
permalink: /kb/137/Q137677/
---

## Q137677: PC NTMMTA: Err Msg:No Drive Is Available for Dynamic Attaching

{% raw %}

	Article: Q137677
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Dispatch program (DISPATCH.EXE) from the MS-DOS command
	prompt under the Microsoft Mail Multitasking MTA for Windows NT (NT MMTA), the
	following error may be generated:
	
	  No drive is available for dynamic attaching.
	
	Dispatch will check the process table on the home postoffice (PO), but it does
	not connect to any of the DrivesUNC postoffices.
	
	CAUSE
	=====
	
	The MS-DOS-based version of Dispatch is being executed from the C:\MAILEXE
	directory. The DISPATCH.EXE file being used is dated 8/17/94 and size 84,453
	bytes.
	
	RESOLUTION
	==========
	
	Run Dispatch from the C:\MAILEXE\DIRSYNC.NT directory. This will ensure that the
	NT MMTA version of DISPATCH.EXE (dated 5/25/95 and size 72,318 bytes), which
	ships with version 3.5 of Microsoft Mail for PC Networks, is being executed.
	
	Additional query words: 3.50 MTA 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
