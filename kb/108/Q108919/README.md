---
layout: page
title: "Q108919: SWAPPER.DAT Grows when NODE Service Runs"
permalink: kb/108/Q108919/
---

## Q108919: SWAPPER.DAT Grows when NODE Service Runs

	Article: Q108919
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	During normal system operation, the OS/2 swap file (SWAPPER.DAT) on servers
	running MS TCP/IP extensions (NODE services) starts to grow.
	
	CAUSE
	=====
	
	NODE.EXE is not releasing some memory dynamically allocated for variables. The
	NODE.EXE footprint grows and when NODE.EXE is swapped to disk SWAPPER.DAT grows.
	
	RESOLUTION
	==========
	
	Fixed in LM22, CSD00.069.
	
	Additional query words: 2.20 2.2 node tcp ip msroute
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
