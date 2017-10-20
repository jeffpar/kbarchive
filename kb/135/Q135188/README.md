---
layout: page
title: "Q135188: Page Fault When Setup Detects Future Domain SCSI Controller"
permalink: /kb/135/Q135188/
---

## Q135188: Page Fault When Setup Detects Future Domain SCSI Controller

{% raw %}

	Article: Q135188
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
	
	You may receive a page fault error message when Setup is detecting the Future
	Domain SCSI controller in your computer. You may receive this error message even
	if you do not have a Future Domain SCSI controller installed in your computer.
	
	CAUSE
	=====
	
	386Max software is installed. This software makes the Adaptec ROM region
	read-only. When Setup tries to write to the region, the error occurs. Note that
	this error occurs only when you are running Setup from MS-DOS. The problem does
	not occur if you run Setup from Windows or Windows for Workgroups in 386
	enhanced mode.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Quit Setup, unload the 386Max software, and then run Setup again.
	
	- Quit Setup, and then run Setup from Windows or Windows for Workgroups version
	  3.x in 386 enhanced mode instead of from MS-DOS.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
