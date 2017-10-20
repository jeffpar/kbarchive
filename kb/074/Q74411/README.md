---
layout: page
title: "Q74411: PRB: RC Error RW1031: Segment Too Large for Load Optimization"
permalink: /kb/074/Q74411/
---

## Q74411: PRB: RC Error RW1031: Segment Too Large for Load Optimization

{% raw %}

	Article: Q74411
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
	
	When building an application, the Microsoft Windows Resource Compiler, RC.EXE,
	reports the error message "Error RW1031: Segment Too Large For Load
	Optimization."
	
	CAUSE
	=====
	
	The size of an application segment added to the size of the relocation
	information for the segment is larger than 64K.
	
	RESOLUTION
	==========
	
	Perform one of the following:
	
	- For optimal performance in the Microsoft Windows graphical environment,
	  divide the application's code into units of approximately 4K to 8K each.
	
	- Specify the Resource Compiler -k command-line option switch to disable the
	  load optimization feature.
	
	MORE INFORMATION
	================
	
	One underlying cause for this Resource Compiler error is an application
	developed for the medium or large memory model linked with the /PACKCODE
	Microsoft Linker option switch. This option directs the linker to combine code
	segments to produce fewer and larger code segments.
	
	When the Resource Compiler processes an application for load optimization (its
	default behavior), it places all application segments marked PRELOAD into the
	application's fastload area. The fastload area is designed to allow the Windows
	kernel to copy the initial segments of an application directly from the file on
	disk into memory to minimize the amount of time the user must wait before
	interacting with the application. The kernel performs minimal processing on the
	contents of the fastload area to maximize its performance benefits; this
	strategy is incompatible with a large segment with much relocation information.
	
	By breaking an application into small units, Windows can manage memory by
	discarding and reloading segments as necessary. Windows supports techniques
	provided by the Microsoft C compiler to name and manually combine segments and
	to specify segment attributes through the application's module definition (DEF)
	file. In enhanced mode Windows, it should not be necessary to discard segments;
	memory is automatically paged to disk and reloaded as required.
	
	Additional query words: 3.00 3.10 PACKC
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
