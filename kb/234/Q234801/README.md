---
layout: page
title: "Q234801: DirectX 6.1 Err Msg: Could Not Get Extra DirectMusic Info..."
permalink: /kb/234/Q234801/
---

## Q234801: DirectX 6.1 Err Msg: Could Not Get Extra DirectMusic Info...

	Article: Q234801
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgame
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you test DirectX using the DirectX Diagnostic Tool, you may receive the
	following error message:
	
	  Error: Could not get extra DirectMusic Info. Result code = <###>
	
	CAUSE
	=====
	
	This behavior can occur if the Dmusic.dll file is not properly registered on
	your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Register the Dmusic.dll File
	----------------------------
	
	To register the Dmusic.dll file:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK:
	
	  regsvr32 dmusic.dll
	
	3. When you receive the following confirmation message, click OK:
	
	  DllRegisterServer in dmusic.dll succeeded.
	
	If the issue continues to occur, proceed to the next method.
	
	Reinstall DirectX
	-----------------
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "dmusic.dll" (without the quotation marks).
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. In the list of found files, right-click the Dmusic.dll file, and then click
	  Rename.
	
	5. Type "Dmusic.old" (without the quotation marks), and then press ENTER.
	
	6. Close the Find: Files Named Dmusic.dll window.
	
	7. Download and install DirectX 7.0 from the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	MORE INFORMATION
	================
	
	For additional information about how to install DirectX, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Additional query words: direct-x dx7 7.00 dxdiag win95x win98x
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
