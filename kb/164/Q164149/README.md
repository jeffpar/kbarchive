---
layout: page
title: "Q164149: HOWTO: Build Custom COM Interface Marshalers with Visual C++"
permalink: kb/164/Q164149/
---

## Q164149: HOWTO: Build Custom COM Interface Marshalers with Visual C++

	Article: Q164149
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400 kbVC500 kbVC600
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Custom COM interfaces that must be used cross-process or cross-apartment require
	marshaling support. This article explains how to set up a Visual C++ 4.0 project
	to build a self-registering standard marshaler from an IDL script that describes
	your custom interface.
	
	MORE INFORMATION
	================
	
	To generate a standard marshaler, write an IDL file that describes your custom
	interface. The Microsoft Interface Definition Language (MIDL) compiler is used
	to generate source files for the marshaler DLL from the IDL file. Once these
	files are generated, you compile and link the code to produce the marshaler
	DLL.
	
	Versions of Visual C++ prior to 5.0 do not provide built-in rules for compiling
	IDL files using the MIDL compiler. However, you can use the custom build feature
	to add the necessary rules to your project. Beginning with version 6.0, the
	build engine automatically calls MIDL.exe to compile IDL files. The
	Project/Settings dialog box has a MIDL tab to control the settings.
	
	To generate a standard marshaler for the interface IMyInterface:
	
	1. Create a new empty Dynamic-Link Library project using Developer Studio. This
	  can either be a new project workspace or a subproject of an existing
	  workspace.
	
	  NOTE: The project name is also used as the name of the marshaler DLL. For
	  example, PS<interface>.
	
	2. Create a new file called IMyInterface.IDL, and enter the description of your
	  new interface.
	
	3. Insert the file IMyInterface.IDL into the project.
	
	4. Go to the project Build Settings dialog box and select IMyInterface.IDL in
	  all of the project's configurations.
	
	  NOTE: Make sure that you have selected the file in all of your project's
	  configurations.
	
	5. For Versions of Visual C++ prior to 6.0, click the Custom Build tab and type
	  the following entries, and then close the Build Settings dialog box:
	
	  Description:
	     Compiling Interface Definition
	
	  Build Commands:
	     midl.exe /ms_ext /char unsigned /c_ext /out "$(InputDir)"
	     "$(InputPath)"
	
	  Output File(s):
	     $(InputDir)\$(InputName).h
	     $(InputDir)\dlldata.c
	     $(InputDir)\$(InputName)_i.c
	     $(InputDir)\$(InputName)_p.c
	
	For version 6.0 and later, set the appropriate MIDL settings for IMyinterface.IDL
	in the MIDL section of either the Project/Settings dialog box or the Properties
	dialog box.
	
	6. Add the file RPCHelp.c to your project by typing the following code:
	
	        #pragma comment(lib, "rpcndr.lib")
	        #pragma comment(lib, "rpcdce4.lib")
	        #pragma comment(lib, "rpcns4.lib")
	        #pragma comment(lib, "rpcrt4.lib")
	
	NOTE: The file Rpcdce4.dll is no longer included with Microsoft operating
	systems. Its functions have been incorporated into the other DLLs. If you
	receive a link error on Rpcdce4.lib, remove its comment pragma from the
	Rpchelp.c file.
	
	7. Add the following three files to your project:
	
	  dlldata.c
	  IMyInterface_i.c
	  IMyInterface_p.c
	
	Since the files don't exist yet, you need to type the names in the File Name
	field on the Insert File dialog box. When you get the warning message that the
	file doesn't exist, click Yes.
	
	In Visual C++ .NET, the easiest way to do this is to click Add New Item on the
	Project menu for each file. In the Add New Item dialog box, click to select the
	Text File (.txt) template, and then type one of the names that is listed (make
	sure that you include the '.c' extension).
	
	8. Use the following PSSample.def file as a model to create a DEF file for your
	  project:
	
	        LIBRARY     PSSAMPLE
	        DESCRIPTION 'Sample custom interface marshaler'
	        EXPORTS
	           DllGetClassObject PRIVATE
	           DllCanUnloadNow PRIVATE
	           DllRegisterServer PRIVATE
	           DllUnregisterServer PRIVATE
	
	NOTE: Make sure you change the library name to match the name of your marshaler
	DLL.
	
	9. Add your new DEF file to the project.
	
	10. Open the project Build Settings dialog box (or Properties dialog box) and
	  select your project (make sure that you select all configurations). Click
	  the C++ tab and add the value REGISTER_PROXY_DLL to the Preprocessor
	  Definitions field.
	
	  In Visual C++ .NET, you must also add a Preprocessor definition that
	  identifies the target operating system. The following definition will
	  compile for Windows NT 4.0, Windows 2000, and later:
	
	  _WIN32_WINNT=0x400
	
	For more information, see the "Targeting Stubs for Specific 32-bit or 64-bit
	Platforms" topic in the Platform SDK Books Online.
	
	11. In the Custom Build Step section of the project properties (or settings),
	  type the following values, and then close the Build Settings dialog box:
	
	  Description:
	     Registering Custom Interface Marshaler
	
	  Build Command(s):
	     regsvr32 /s /c "$(TargetPath)"
	     echo regsvr32 exe. time > "$(OutDir)\regsvr32.trg"
	
	  Output File(s):
	     $(OutDir)\regsvr32.trg
	
	Your project is now configured to properly build and register the custom
	interface marshaler.
	
	REFERENCES
	==========
	
	Visual C++ Help file; Topic: "Specifying Custom Build Tools"
	
	Visual C++ InfoViewer; Topic: "SDKs\Win32 SDK\RPC"
	
	Additional query words: MIDL marshal custom interface
	
	======================================================================
	Keywords          : kbide kbVC kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
