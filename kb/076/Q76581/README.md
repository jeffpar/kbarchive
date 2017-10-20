---
layout: page
title: "Q76581: PRB: LoadLibrary() Returns Error 6"
permalink: /kb/076/Q76581/
---

## Q76581: PRB: LoadLibrary() Returns Error 6

{% raw %}

	Article: Q76581
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
	
	When the LoadLibrary() function is used to load a dynamic-link library (DLL),
	the handle returned has the value 6.
	
	CAUSE
	=====
	
	The library's module definition (DEF) file declares DATA MULTIPLE.
	
	RESOLUTION
	==========
	
	Modify the DEF file to declare DATA SINGLE.
	
	MORE INFORMATION
	================
	
	A DLL has only one data segment regardless of the number of applications that
	use the DLL. For more information, see pages 20-26 and 20-27 of the Microsoft
	Windows SDK "Guide to Programming" for version 3.0, and pages 481-482 of the
	Microsoft Windows SDK version 3.1 "Guide to Programming."
	
	Additional information may also be found by querying on the words in the
	Microsoft Knowledge Base:
	
	  " prod(winsdk) and KrDll " (without the quotation marks)
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
