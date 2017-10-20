---
layout: page
title: "Q187616: FIX: The Dynamic Link Library Mfcce20d.dll Could Not Be Found"
permalink: /kb/187/Q187616/
---

## Q187616: FIX: The Dynamic Link Library Mfcce20d.dll Could Not Be Found

{% raw %}

	Article: Q187616
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbide kbMFC kbVC600bug kbOSWinCEsearch kbOSWinCE200bug kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a WCE MFC EXE project, you may get an error box, titled:
	
	  <Program>.exe - Unable To Locate DLL
	
	This is the message inside the error box:
	
	  The dynamic link library mfcce20d.dll could not be found in the specified
	  path...
	
	If you're running a WCE MFC EXE with COM support, you may get an error box,
	titled:
	
	  Assertion Failed!
	
	This is the message inside the error box:
	
	  <unknown application> : File dllole.cpp, Line 65
	
	If you're building a WCE MFC ActiveX control or WCE MFC automation DLL, you may
	get the following error:
	
	  Failed : Registration of <control>.ocx. Error = 0000007E
	
	CAUSE
	=====
	
	All of the above problems occur because the run-time DLLs are not copied to the
	correct directories by the VCCE Toolkit Setup program.
	
	RESOLUTION
	==========
	
	Using Windows NT Explorer, copy the following files
	
	  MFCCE20.DLL
	  MFCCE20D.DLL
	  OLECE20.DLL
	  OLECE20D.DLL
	
	from
	
	  \Program Files\DevStudio\WCE\MFC\LIB\WCE200\X86EM
	
	to the following location:
	
	  \Program Files\Windows CE Platform SDK\wce\emul\hpc\windows
	
	You also need to copy the same files using Osviewer.exe (Object Store Viewer).
	The Osviewer.exe file is located in the \Program Files\Windows CE Platform
	SDK\wce\bin directory. When you run this program, it lists your C drive with the
	addition of Emulator Database and Emulator Files. Copy the Mfcce20.dll,
	Mfcce20d.dll, Olece20.dll, and Olece20d.dll files from
	
	  \Program Files\DevStudio\WCE\MFC\LIB\WCE200\X86EM
	
	to the following location:
	
	  \Emulator Files\Windows
	
	NOTE: The above directories are the default directories when you install the VCCE
	Toolkit, and may be different on your machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The above case is for emulation. When targeting the actual CE device, the same
	DLLs must be copied to the Windows directory on the CE device. Use the "Mobile
	Devices" tool to do this. The DLLs are located in the "C:\Program
	Files\DevStudio\WCE\MFC\LIB\WCE200\WCESH" or C:\Program
	Files\DevStudio\WCE\MFC\LIB\WCE200\WCEMIPS" directory, depending on the type of
	chip on the CE device (SH3 or MIPS).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbide kbMFC kbVC600bug kbOSWinCEsearch kbOSWinCE200bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC200WinCE
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
