---
layout: page
title: "Q117426: PC MMTA: Err Msg: Ring3 TRAP NET0140: A Timeout Occurred..."
permalink: /kb/117/Q117426/
---

## Q117426: PC MMTA: Err Msg: Ring3 TRAP NET0140: A Timeout Occurred...

	Article: Q117426
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While transferring mail on a Novell NetWare version 3.x network, the Microsoft
	Mail multitasking message transfer agent (MMTA) may report the following error:
	
	  Ring3 TRAP NET0140: A timeout occurred while accessing...
	
	The mail administrator must restart the MMTA to have mail transfer resume.
	
	CAUSE
	=====
	
	If the network experiences any problems and the server the MMTA is actively
	working on becomes disconnected, the OS/2 NetWare requester times out on this
	action and returns a time-out error to the MMTA. The MMTA then returns a ring 3
	trap error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.2.7 and earlier of
	the Microsoft Multitasking Message Transfer Agent (MMTA). This problem has been
	fixed in versions 3.2.9 and later.
	
	This update can only be received by calling Microsoft Mail Product Support and
	requesting the Application Note WA0975 "PC MMTA: WA0975: EXTERNAL.EXE Version
	3.2.7 Update."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
