---
layout: page
title: "Q49739: How ASSIGN Determines True Name of Disk Drive"
permalink: /kb/049/Q49739/
---

## Q49739: How ASSIGN Determines True Name of Disk Drive

{% raw %}

	Article: Q49739
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ASSIGN does not check the current name for the disk drive; instead, it retains
	the "true", original name of the disk drive for reassignment.
	
	If floppy disk Drive A contains a single file named A.TXT and floppy disk Drive B
	contains a single file named B.TXT, the following commands cause the file B.TXT
	to be displayed in the directory:
	
	  C> ASSIGN A=B
	  C> DIR A:
	
	The syntax documentation for the ASSIGN command can be checked to verify that
	this is what should happen. The first drive specified is the drive that MS-DOS
	normally reads and writes to. The second is the drive that you want MS-DOS to
	read and write to when the first drive is referenced.
	
	It is not quite so intuitive how to restore A to A and B to B. The following
	example demonstrates how to ASSIGN the drive back to itself:
	
	  C> ASSIGN A=A
	
	After this command is issued, a DIRectory of Drive A displays the file A.TXT.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	

{% endraw %}
