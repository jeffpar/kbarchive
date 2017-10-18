---
layout: page
title: "Q147393: HOWTO: Profile an OLE Server or an OLE Control"
permalink: kb/147/Q147393/
---

## Q147393: HOWTO: Profile an OLE Server or an OLE Control

	Article: Q147393
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbide kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ Books Online section "Profiling Dynamic-Link Libraries" explains
	the steps involved in profiling dynamic-link libraries and profiling multiple
	.dll and .exe files.
	
	Because an OLE server is basically an .exe or .dll file and an OLE control is a
	DLL even though it has an extension of .ocx, profiling them is similar to
	profiling an .exe or .dll file. When you profile an OLE server or OLE control,
	you follow the same steps and use the same commands that you would for an .exe
	or .dll file. The same profiling rules that apply to .exe and .dll files (such
	as the need to include debugging information and to supply a .map file) also
	apply to OLE servers and OLE controls.
	
	MORE INFORMATION
	================
	
	The following four examples illustrate the steps required to profile an OLE full
	server, an OLE mini-server, an In-Process OLE Automation server, and an OLE
	control.
	
	You may need to register the OLE mini-server, the in-process OLE automation
	server, or the OLE control explicitly. You can do one of the following to
	register them:
	
	- For a .dll file (and for an OLE control), run Regsvr32 from the command
	  prompt. Alternatively, you can open the corresponding project in the
	  Developer Studio, and then on the Tools menu, click Register Control.
	
	- For an .exe file, just run it once. You may not be able to run it or you may
	  get a message saying "This server can only be run from a container
	  application," but when you click OK, it will have been registered.
	
	To run the profiler, you may need to copy the \Msdev\Bin\Profile.dll file to
	either the directory that contains the file you are profiling or to one of the
	system directories. This file is in the [DevStudio Path]\VC\Bin directory for
	version 5.0. This file is in the [Microsoft Visual Studio Path]\VC98\Bin
	directory for version 6.0.
	
	Each step in the following examples is a command at the command prompt.
	Alternatively, you could create a batch file that contains these commands.
	
	In the command line arguments for most profile commands, you should specify the
	file names without the extension. Look at the following examples to see when
	extensions should be included.
	
	To profile an OLE full server or an OLE automation server:
	
	  PREP /OM /FT FullSrvr
	  PROFILE FullSrvr
	  PREP /M FullSrvr
	  PLIST FullSrvr > FullSrvr.txt
	
	  where FullSrvr.exe is the file corresponding to an OLE full server or OLE
	  automation server.
	
	To profile an OLE mini server:
	
	  COPY MiniSrvr.exe MiniSrvr.sav
	  PREP /OM /FT MiniSrvr
	  COPY MiniSrvr._xe MiniSrvr.exe
	  PROFILE /I MiniSrvr /O MiniSrvr Container
	  PREP /M MiniSrvr
	  PLIST MiniSrvr > MiniSrvr.txt
	  COPY MiniSrvr.sav MiniSrvr.exe
	
	  where MiniSrvr.exe is the file corresponding to an OLE mini server and
	  Container.exe is a container application that runs the MiniSrvr.
	
	To profile an In-Process OLE Automation Server (these steps are similar to those
	of OLE mini server except that you have a .dll extension instead of an .exe
	extension):
	
	  COPY InProc.dll InProc.sav
	  PREP /OM /FT InProc.dll
	  COPY InProc._ll InProc.dll
	  PROFILE /I InProc /O InProc Client
	  PREP /M InProc
	  PLIST InProc > InProc.txt
	  COPY InProc.sav InProc.dll
	
	  where InProc.dll is the file corresponding to an In-Process OLE Automation
	  server and Client is an OLE Automation client application that drives the
	  InProc.dll.
	
	To profile an OLE control that has an .ocx extension (these steps are also
	similar except that you now have an .ocx extension):
	
	  COPY Control.ocx Control.sav
	  PREP /OM /FT Control.ocx
	  COPY Control._cx Control.ocx
	  PROFILE /I Control /O Control ControlContainer
	  PREP /M Control
	  PLIST Control > Control.txt
	  COPY Control.sav Control.ocx
	
	  where Control.ocx is the OLE control and ControlContainer is an OLE control
	  container application.
	
	For additional information on profiling more than one module, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q179269 Use Source Profiler to Profile Dynamic-Link Libraries
	
	REFERENCES
	==========
	
	Profiler Reference, Visual C++ User's Guide.
	
	Advanced Profiling, Programming Techniques.
	
	Both of these references are available in the online documentation that comes
	with Visual C++ versions 4.0 and later.
	
	Additional query words: mini-server
	
	======================================================================
	Keywords          : kbcode kbole kbide kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
