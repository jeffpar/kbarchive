---
layout: page
title: "Q100004: Error Running MemMaker on a Tandy 3810 Laptop Computer"
permalink: /kb/100/Q100004/
---

## Q100004: Error Running MemMaker on a Tandy 3810 Laptop Computer

{% raw %}

	Article: Q100004
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft MemMaker on a Tandy 3810 or 1100HD laptop computer, you may
	receive the following error message:
	
	  MemMaker cannot run on this computer. To use MemMaker, you must have MS-DOS
	  6.0, an 80386 or higher processor, and at least 384K of extended memory. To
	  exit MemMaker, press <ENTER>...
	
	CAUSE
	=====
	
	The Tandy 3810 laptop computer is an 80386-based computer that comes with 2
	megabytes (MB) of memory. In the CMOS setting of the computer, there is an
	option to "Remap Shadow RAM." If this option is on, you may receive the above
	error message.
	
	WORKAROUND
	==========
	
	To successfully run MemMaker, disable "Remap Shadow RAM" in the CMOS setting of
	the laptop computer.
	
	If you do not know how to change this option, call Tandy Corporation Computer
	Support for assistance. Once MemMaker completes its process, the "Remap Shadow
	RAM" option can be turned back ON.
	
	Tandy 3810 is manufactured by Tandy Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 3810hd portable 386 errmsg rom 6.0 6.2 3rdparty third-party third party
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
