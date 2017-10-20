---
layout: page
title: "Q304989: PRB: Debugger Cannot Read System Symbols on Windows XP"
permalink: /kb/304/Q304989/
---

## Q304989: PRB: Debugger Cannot Read System Symbols on Windows XP

{% raw %}

	Article: Q304989
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbDSupport kbGrpDSVCCompiler
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual C++ 6.0 debugger on a Windows XP-based computer, the
	debugger is not able to load symbols for Windows system .dll files even though
	you have Windows XP system symbols correctly installed. As a result, you will
	not be able to see the function names of Windows APIs in the callstack.
	
	CAUSE
	=====
	
	Windows XP system symbols are distributed only as .pdb files, whereas system
	symbols for Windows NT and Windows 2000 are distributed as both .dbg and .pdb
	files. When the Visual C++ 6.0 debugger was written, this change was not
	anticipated. Therefore, the debugger does not search for .pdb files in the
	<Windows directory>\Symbols\dll folder, it looks only for the .dbg files.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	There are two ways to work around this problem:
	
	- Move each .pdb file to the directory where the corresponding system .dll file
	  is located. Typically, Windows system .dll files are in the <Windows
	  directory>\System32 folder.
	
	- The other method involves adding a registry key by using Regedit.exe:
	
	  1. Create a new string value, "Pdb Dirs" (without the quotation marks), if
	     you do not see it under the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\Build
	  System\Components\Platforms\Win32 (x86)\Directories
	
	  2. Double click Pdb Dirs. The Edit String dialog box will appear.
	
	  3. In the Value data edit box, add the path (or paths) to the folders where
	     the .pdb files are located. For example:
	
	  "C:\Windows\Symbols\dll" (without the quotation marks)
	
	     Multiple paths are separated by the semicolon (";") character. For example:
	
	  "C:\Windows\Symbols\dll;C:\Windows\Symbols\ocx" (without the quotation marks)
	
	  4. Click OK to close the Edit String dialog box.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
