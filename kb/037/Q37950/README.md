---
layout: page
title: "Q37950: Using Asterisk Wildcard Expansion with Trailing Characters"
permalink: kb/037/Q37950/
---

## Q37950: Using Asterisk Wildcard Expansion with Trailing Characters

	Article: Q37950
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The asterisk (*) wildcard ignores any combination of trailing characters
	specified after the wildcard in either the filename or the extension. Thus, the
	following two MS-DOS commands have the same result, even though they have
	different file specifications:
	
	  DEL *.DAT
	  DEL *h.DAT
	
	This is due to the definition of the "*" wildcard, and how it is expanded.
	
	Please exercise caution when using the wildcard in destructive MS-DOS commands,
	such as DEL or ERASE. We strongly recommended that you use the exact wildcard
	combination in a DIR command first to examine the outcome prior to issuing any
	other command. This may alert you to any potential consequences of the command
	syntax prior to any destructive executions.
	
	Additional query words: 6.22 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
