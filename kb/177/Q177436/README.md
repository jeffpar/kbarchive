---
layout: page
title: "Q177436: PRB: Developer Studio Hangs When Debug Breakpoint Is Set"
permalink: kb/177/Q177436/
---

## Q177436: PRB: Developer Studio Hangs When Debug Breakpoint Is Set

	Article: Q177436
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbide kbVC500 kbVC600 kbprb kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ debugger causes Microsoft Developer Studio to hang when a
	breakpoint is set in the code, or nothing happens when you try to start
	debugging with Debug Go (F5). It might also cause an application error in
	Msdev.exe. Additionally, the application might not run inside Microsoft
	Developer Studio, but it might run correctly outside Microsoft Developer Studio,
	such as from Windows Explorer.
	
	CAUSE
	=====
	
	If the software license checking program Express Meter is installed in the
	machine then it hooks a DLL named Em.dll in the process space of Msdev.exe. The
	Visual C++ debugger also uses a DLL by the same name. As a result, when the
	debugger is invoked in Microsoft Developer Studio it uses the wrong Em.dll found
	in its process space and the access violation occurs.
	
	RESOLUTION
	==========
	
	The Express Meter software is available in both 16-bit and 32-bit versions. When
	you are running this software, the 16-bit version appears in the Task Manager as
	EM (for Em.exe) and the 32-bit version appears as EM32 (for Em32.exe). Express
	Meter software installs the Em.dll in the Windows ..\System or ..\System32
	directory. The Visual C++ debugger installs this DLL in the C:\Program
	files\DevStudio\SharedIDE\BIN\ directory if you installed Visual C++ in the C:
	drive.
	
	To resolve this problem, check the following registry key for Visual C++, version
	5.0 :
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\Build System
	   \Components\Platforms\Win32 (x86)\Execution Models
	
	For Visual C++, version 6.0, check the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\Build System
	   \Components\Platforms\Win32 (x86)\Execution Models
	
	On the right panel you will see an entry "Current EM", and its value is set to
	"EM".
	
	Change this value to the full path of the debugger's Em.dll for LoadLibrary to
	load the correct DLL.
	
	The changed value will be similar to the following directory (depending on which
	drive Visual C++ is installed on).
	
	For Visual C++, version 5.0:
	
	  C:\Program files\DevStudio\SharedIDE\BIN\EM
	
	For Visual C++, version 6.0:
	
	  C:\Program Files\Microsoft Visual Studio\Common\MSDev98\Bin\EM
	
	To change the value, double-click "Current EM", and type in the full path that
	appears above.
	
	If this does not resolve the issue, end the task (EM or EM32) from the Task
	Manager. Note that if the System Administrator is running this task in a secured
	mode, you need appropriate permissions to end this task.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additotional query words: VWBIss
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC500 kbVC600 kbprb kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
