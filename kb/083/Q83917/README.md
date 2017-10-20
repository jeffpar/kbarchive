---
layout: page
title: "Q83917: PRB: Binding Resources to Executable Increases File Size"
permalink: /kb/083/Q83917/
---

## Q83917: PRB: Binding Resources to Executable Increases File Size

{% raw %}

	Article: Q83917
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Resource Compiler (RC) to bind resources to a Windows executable image
	file [either an application EXE file or a dynamic- link library (DLL) file], the
	size of the output file is much larger than the combined sizes of the input
	files.
	
	CAUSE
	=====
	
	The Resource Compiler uses the same byte alignment as the linker. By default,
	the Microsoft Linker aligns segments on a 512-byte boundary.
	
	RESOLUTION
	==========
	
	Use a linker option to specify a smaller byte alignment; specifying a 16-byte
	boundary is recommended. With the Microsoft Linker, use the /ALIGN:16
	command-line switch.
	
	MORE INFORMATION
	================
	
	The resource compiler uses the same byte alignment as the linker to minimize the
	time to load the segments of an application. However, one-half the byte
	alignment is wasted for each code segment and resource on average. When an
	application has a number of small resources, like a string table, specifying a
	large alignment value leads to a large amount of wasted space in the file.
	Linking the application with a smaller byte alignment eliminates most of the
	wasted space.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
