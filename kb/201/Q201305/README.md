---
layout: page
title: "Q201305: INFO: Debugging VC++ 6.0 Application in VC++ 5.0 Debugger"
permalink: /kb/201/Q201305/
---

## Q201305: INFO: Debugging VC++ 6.0 Application in VC++ 5.0 Debugger

{% raw %}

	Article: Q201305
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbVC500 kbVC600
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Though Microsoft Visual C++ 5.0 and 6.0 can coexist on the same machine,
	debugging a Visual C++ 6.0 application with the Visual C++ 5.0 debugger is a
	problem because of the differences in the PDB file formats used by each
	version.
	
	Another problem is the incompatibility between the debug versions of the MFC
	DLLs. For additional information about these incompatibilities, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q190487 PRB: MFC Debug DLLs Are Not Compatible Between Versions
	
	MORE INFORMATION
	================
	
	In Microsoft Developer Studio, an EXE or DLL file can be opened for debugging.
	Microsoft suggests that you do not open the project (.dsp) or workspace (.dsw)
	files for a different version of Visual C++ unless you intend to migrate the
	project to a newer version.
	
	To facilitate debugging, you need to be aware of the following:
	
	Debugging Visual C++ 5.0 Applications or DLLs in the Visual C++ 6.0 Debugger
	----------------------------------------------------------------------------
	
	- A debug build of an .exe or .dll that uses Visual C++ 5.0 MFC code can not be
	  debugged in the Visual C++ 6.0 Debugger as implied in article Q190487. The
	  same restriction applies to the static library versions of MFC.
	
	- A release build .exe, .dll, or static library that uses MFC code can be
	  debugged in the Visual C++ 6.0 Debugger. The PDB file format of Visual C++
	  5.0 is recognized by the Visual C++ 6.0 debugger. Therefore, you can build
	  with the /Zi (Program Database) compiler switch, and preferably without the
	  /pdbtype:sept linker switch when building an .exe or a .dll. You may use the
	  /Z7 switch, which will embed the debug information in the EXE or DLL when the
	  /debug and /pdb:none linker switches are used. If you are using the /Zi
	  switch for a static library, make sure that you also use the compiler switch
	  /Fd"filename", so that a unique PDB file is created.
	
	- An .exe, .dll, or static library without MFC code can be debugged in the
	  Visual C++ Debugger whether built for debug or release version with debug
	  information.
	
	- While stepping into MFC or CRT source code, the line numbers may not match,
	  because the debug information is for the MFC source code shipped with Visual
	  C++ 5.0, but the sources picked up are for the MFC source code shipped with
	  Visual C++ 6.0. To change this, on the Developer Support Tools menu, click
	  Options, then click the Directories tab. Change the sources path to point to
	  the MFC source code for Visual C++ 5.0.
	
	Debugging Visual C++ 6.0 Applications or DLLs in the Visual C++ 5.0 Debugger
	----------------------------------------------------------------------------
	
	- The Visual C++ 6.0-generated PDB file can not be read by the Visual C++ 5.0
	  debugger. Therefore, Visual C++ 6.0 projects must be built with compiler
	  switch /Z7 and linker switch /debug and /pdb:none. It is advisable that you
	  do not use the new compiler switch /GZ, which introduces run-time checks.
	
	- MFC code that uses new functionality from Visual C++ 6.0 may not work in the
	  Visual C++ 5.0 Debugger.
	
	- ATL code must be built with the static version.
	
	- You may not be able to step into MFC or CRT source code.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
