---
layout: page
title: "Q84952: CapsKey May Conflict with Windows Recorder"
permalink: /kb/084/Q84952/
---

## Q84952: CapsKey May Conflict with Windows Recorder

{% raw %}

	Article: Q84952
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You should run the Playroom Software CapsKey utility before using Microsoft
	Windows Macro Recorder (RECORDER.EXE). If you do not run CapsKey first, Recorder
	macros may not function properly.
	
	MORE INFORMATION
	================
	
	CapsKey is a program that forces the CAPS LOCK key to behave as if it is
	"sticky." That is, a key press will remain active until you press the SHIFT key.
	CapsKey is distributed with the Playroom Software Makeover package.
	
	If, at any time during a Windows session, CapsKey is run AFTER the Recorder,
	CapsKey may render Recorder macros inoperable. If this occurs, Exit Recorder
	then restart it.
	
	To correct this problem, run CapsKey before you run Recorder.
	
	Additional query words: 3.00 3.10 3.00a 3.11 playroom caps
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
