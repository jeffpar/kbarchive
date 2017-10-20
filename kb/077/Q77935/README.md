---
layout: page
title: "Q77935: PRB: Causes of Help Compiler &quot;Table Too Complex&quot; Warning"
permalink: /kb/077/Q77935/
---

## Q77935: PRB: Causes of Help Compiler &quot;Table Too Complex&quot; Warning

{% raw %}

	Article: Q77935
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbtool kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the processing of a Windows Help file, the Help Compiler returns the
	warning "Table Too Complex."
	
	CAUSE
	=====
	
	The RTF (rich text format) source file contains a table that has been formatted
	using with one or more attributes that the Help Compiler does not recognize.
	
	RESOLUTION
	==========
	
	Modify the formatting of the table to remove any unsupported formats.
	
	MORE INFORMATION
	================
	
	Only simple tables are supported by the Windows 3.1 Help Compiler. The following
	formats generate the "Table Too Complex" warning:
	
	- Borders
	
	- Rules
	
	- Shading
	
	These three formats are ignored by the Help Compiler. When the table is displayed
	in Windows Help, these formats are absent.
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kbtool kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
