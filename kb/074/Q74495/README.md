---
layout: page
title: "Q74495: Norton NDOS and DOSKEY"
permalink: /kb/074/Q74495/
---

## Q74495: Norton NDOS and DOSKEY

{% raw %}

	Article: Q74495
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Norton Utilities version 6.0 supplies an alternative command processor to
	COMMAND.COM called NDOS.COM. This processor automatically provides the
	functionality of DOSKEY.COM. It will disable any macros assigned to DOSKEY.COM.
	
	MORE INFORMATION
	================
	
	DOSKEY.COM provides two main functions: command line history and macros.
	
	NDOS.COM loads command line history automatically and will provide macro support
	through a feature called "aliasing." If macros are set up using DOSKEY.COM when
	NDOS.COM is the SHELL statement of the CONFIG.SYS file, the DOSKEY.COM macros
	will not function.
	
	For example, if the following line appears in your CONFIG.SYS file, DOSKEY.COM
	macros will not function:
	
	  SHELL=C:\NDOS.COM
	
	To avoid this conflict, either do not use DOSKEY.COM, or change the SHELL
	statement to load the Microsoft MS-DOS 5.0 command processor as follows:
	
	  SHELL=C:\DOS\COMMAND.COM C:\DOS /P
	
	The product included here, Norton Utilities, is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
