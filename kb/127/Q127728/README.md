---
layout: page
title: "Q127728: X400: TP4 Stack Not Compatible with WFWG MS-DOS Client"
permalink: kb/127/Q127728/
---

## Q127728: X400: TP4 Stack Not Compatible with WFWG MS-DOS Client

	Article: Q127728
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to X.400 may hang upon startup and display the
	following:
	
	  Gateway initializing...
	
	CAUSE
	=====
	
	The TP4 stack provided by the Microsoft Mail Gateway to X.400 is not compatible
	with the Windows for Workgroups MS-DOS client drivers.
	
	RESOLUTION
	==========
	
	Use the Microsoft LAN Manager version 2.2c drivers with TP4. These drivers are
	supplied with Windows NT version 3.5 (CD).
	
	MORE INFORMATION
	================
	
	The MS-DOS client drivers use IFSHLP.SYS to load network software. This assumes
	that the drivers will be loaded when NET START is called.
	
	For the TP4 stack to work properly, it needs to load a Data Link Interface
	(DLI.DOS) driver in CONFIG.SYS. Then TP4 requires the TP4 stack (TP4.EXE) to get
	loaded before a NET START.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
