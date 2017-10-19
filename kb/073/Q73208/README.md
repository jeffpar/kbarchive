---
layout: page
title: "Q73208: MS-DOS 4.0 and Later Netware Redirector Switches Need &quot;/&quot;"
permalink: /kb/073/Q73208/
---

## Q73208: MS-DOS 4.0 and Later Netware Redirector Switches Need &quot;/&quot;

	Article: Q73208
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are upgrading from MS-DOS version 3.3 or 3.30a to MS-DOS version 5.0 or
	later, be aware that beginning with MS-DOS 4.0, the redirector syntax changed
	for Novell NetWare versions 2.1 through 3.1. The syntax is as follows:
	
	   Version          Redirector Syntax      Example
	  -------          -----------------      -------
	
	  MS-DOS 3.3x      NET3.EXE <switch>      NET3.EXE ps=<server>
	  MS-DOS 4.0x      NET4.EXE /<switch>     NET4.EXE /ps=<server>
	  MS-DOS 5.0x      NET5.EXE /<switch>     NET5.EXE /ps=<server>
	  MS-DOS 6.x       NETX.EXE /<switch>     NETX.EXE /ps=<server>
	
	Note the addition of "/" (the forward slash) with version 4.0.
	
	The NetWare redirector filename reflects the version of MS-DOS it is to be used
	with. Also, in MS-DOS 5.0 the NET5.EXE /? command displays the proper syntax and
	available switches through online Help.
	
	Additional query words: 6.22 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 \* yeswin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
