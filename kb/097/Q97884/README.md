---
layout: page
title: "Q97884: DBLSPACE /CHKDSK Stops (Hangs) with Cross-Linked Files"
permalink: /kb/097/Q97884/
---

## Q97884: DBLSPACE /CHKDSK Stops (Hangs) with Cross-Linked Files

{% raw %}

	Article: Q97884
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DBLSPACE /CHKDSK command takes excessive time or appears to stop responding
	(hang) while evaluating cross-linked files.
	
	CAUSE
	=====
	
	The DBLSPACE /CHKDSK command evaluates errors and then sorts them into three
	categories: lost clusters, cross-linked files, and other errors. If the command
	determines that your system has cross-linked files, DBLSPACE /CHKDSK attempts to
	backtrack through the directory chain to identify the files responsible.
	
	If DBLSPACE /CHKDSK appears to hang while evaluating cross-linked files, it may
	be because your directory structure is damaged and therefore invalid. (You can
	use the TREE command to check the directory structure.)
	
	WORKAROUND
	==========
	
	To correct this problem, do the following:
	
	1. If you have Delete Sentry enabled, disable it. (Delete Sentry prevents you
	  from deleting the cross-linked files.)
	
	2. If you need to preserve the files in the damaged directory, use a third-party
	  DoubleSpace-compatible disk repair program, such as Norton Disk Doctor, to
	  repair the directory.
	
	  If you don't need to save the files in the directory, issue the CHKDSK /F
	  command to correct the bad directory. (This runs DBLSPACE /CHKDSK and
	  identifies the cross-linked files)
	
	3. Delete the cross-linked files.
	
	The Norton product included here is manufactured by Symantec, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.00 cross link crosslink DS double space cvf file damaged hang hangs hung
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
