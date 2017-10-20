---
layout: page
title: "Q63071: Only First 8 Characters in a Batch Label Recognized"
permalink: /kb/063/Q63071/
---

## Q63071: Only First 8 Characters in a Batch Label Recognized

{% raw %}

	Article: Q63071
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.01,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS recognizes only the first eight characters of a batch file label;
	subsequent characters are ignored.
	
	NOTE: This eight-character limitation also applies to the %config% variable
	passed to the AUTOEXEC.BAT file in MS-DOS versions 6.0 or later when you use
	multi-boot configurations.
	
	For example, the labels LATESTCHANGE and LATESTCHANGES are identical to MS- DOS.
	The line "GOTO LATESTCHANGE" (without the quotation marks) transfers to the
	first label in the file that has same first eight characters as LATESTCHANGE.
	
	MORE INFORMATION
	================
	
	The following examples illustrate this limitation.
	
	Example 1
	---------
	
	The following example
	
	  goto latestch
	  : latestchanges
	  echo two
	  : latestch
	  echo three
	
	displays the following
	
	  two
	  three
	
	rather than displaying the following:
	
	  three
	
	Example 2
	---------
	
	The following example
	
	  :latestch
	  echo zero
	  :latestchanges
	  echo one
	  goto latestchanges
	
	displays the following until CTRL+C is pressed, terminating the batch file:
	
	  zero
	  one
	  zero
	  one
	  zero
	  one
	  etc.
	
	Additional query words: 6.22 4.01 5.00 5.00a 6.00 6.20 multiboot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.01,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
