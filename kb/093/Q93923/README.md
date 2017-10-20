---
layout: page
title: "Q93923: Error Using LOADHIGH (LH) With Third-Party Shell"
permalink: /kb/093/Q93923/
---

## Q93923: Error Using LOADHIGH (LH) With Third-Party Shell

{% raw %}

	Article: Q93923
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
	
	
	If you use the new MS-DOS 6.0 and later LOADHIGH (LH) parameters (/L or /S) with
	a third-party command interpreter (sometimes called a shell), such as NDOS or
	4DOS, you receive the following error message:
	
	  Error: Unknown Command "/l:<region1>;<region2>"
	
	CAUSE
	=====
	
	MS-DOS 6.0 and 6.2 COMMAND.COM supports two memory specific parameters: /L and
	/S, which are determined by MemMaker. For example, "LOADHIGH /L:0;1 MOUSE.COM"
	is a valid command in MS-DOS 6.0 and 6.2.
	
	Third-party command interpreters such as 4DOS and NDOS are designed to replace
	COMMAND.COM. These command interpreters have to be updated to work correctly
	with the new /L and /S parameters.
	
	WORKAROUND
	==========
	
	To work around the problem, either use COMMAND.COM for your command interpreter
	or remove the /L and /S parameters from your LOADHIGH (LH) commands.
	
	For more information or to obtain an update to your third-party command
	interpreters, please contact your command interpreter vendor.
	
	The 4DOS and NDOS products included here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 6.22 6.0 6.20 3rd party 3rdparty replacement shell shell= four dos 4 third
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
