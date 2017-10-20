---
layout: page
title: "Q100030: PRB: midiInputHandler GP faults in MIDIMON Sample Application"
permalink: /kb/100/Q100030/
---

## Q100030: PRB: midiInputHandler GP faults in MIDIMON Sample Application

{% raw %}

	Article: Q100030
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the MIDIMON sample application provided with Visual C++ and the Microsoft
	Windows Software Development Kit (SDK) version 3.1, the midiInputHandler()
	callback function causes a general protection (GP) fault.
	
	CAUSE
	=====
	
	The GP fault occurs when the MIDI event handler tries to store event data in a
	static variable, but the data segment (DS) is not set correctly because the
	exported functions in the callback dynamic-link library (DLL) are not exported
	correctly.
	
	RESOLUTION
	==========
	
	Because the /GD compiler option is specified in the makefile for MIDIMON's
	callback DLL, the DLL's exported functions must be declared with the __export
	keyword. The exported functions missing the __export keyword are _WEP(),
	midiInputHandler(), and PutEvent(). The __export keyword should be added as
	required in CALLBACK.H and CALLBACK.DEF.
	
	MORE INFORMATION
	================
	
	The problem described above exists only in the version of MIDIMON distributed
	with Visual C++ (Microsoft C version 8.0); the original version distributed with
	C 7.0 builds correctly as shipped.
	
	Additional query words: 3.10 gp-fault gpf midi
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
