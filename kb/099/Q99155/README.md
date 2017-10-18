---
layout: page
title: "Q99155: Upper Memory Conflict Hangs LM During Protocol Loading"
permalink: kb/099/Q99155/
---

## Q99155: Upper Memory Conflict Hangs LM During Protocol Loading

	Article: Q99155
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When a workstation is cold booted (when you turn it on or reset the hardware),
	LAN Manager hangs while trying to load protocols such as NetBEUI. If this does
	not repeat during a warm boot (when you press CTRL+ALT+DEL), the problem may be
	a conflict in upper memory.
	
	CAUSE
	=====
	
	Cold and warm boots cause different behavior because certain network adapters,
	when initialized, store memory buffers at software configurable addresses in
	upper memory (640-1024 KB).
	
	During a cold boot these buffers have not yet been configured, so EMM386 can
	select their address areas for itself, causing a memory conflict when the
	adapter tries to assign buffer addresses. During a warm boot, adapter memory
	buffers are already configured in upper memory; EMM386 detects them and avoids
	their memory areas.
	
	RESOLUTION
	==========
	
	To verify that this is the problem, remark out EMM386: if the problem
	disappears, use the x-parameter to tell EMM386 to avoid areas of upper memory
	claimed by other software.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
