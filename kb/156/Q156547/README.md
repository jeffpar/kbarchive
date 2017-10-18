---
layout: page
title: "Q156547: HOWTO: Manually Register a Custom OLE Server"
permalink: kb/156/Q156547/
---

## Q156547: HOWTO: Manually Register a Custom OLE Server

	Article: Q156547
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can manually register an OLE server on a computer
	that has never had Visual FoxPro 5.0 installed.
	
	This article also assumes you already know how to create a custom OLE server. You
	can read Chapter 16 of the Visual FoxPro Developer's Guide, "Registering a
	Custom OLE Server," for more information.
	
	MORE INFORMATION
	================
	
	To register an .exe or a .dll custom OLE server, you need to have the following
	two files located in the \System directory for Windows 95 or the \System32
	directory for Windows NT on the computer you are installing on:
	
	For Visual FoxPro 5.0:
	
	  VFP500.DLL
	  VFP5ENU.DLL
	
	For Visual FoxPro 6.0:
	
	  Vfp6r.dll
	  Vfp6renu.dll
	
	If you do not have these files, you can obtain them from the computer on which
	you have Visual FoxPro installed.
	
	When you build a custom OLE server, the following three files are created:
	
	- The .dll or .exe file
	- A type library .tlb file (The .TLB file is optional and is not required to be
	  distributed)
	- A registry .vbr file
	
	Here is an example that shows you how to register an .exe file:
	
	When trying to register an .exe file, you must have the .exe and the .vbr files.
	The example below assumes you already have a custom OLE server built and named
	Oleserver.exe:
	
	- Oleserver.exe (This is the custom OLE server .exe file that you built from
	  your project.)
	- Oleserver.vbr (This file gets automatically created when you build your
	  custom OLE server.)
	
	Once you copy these two files into the target machine, from the directory that
	contains these two files, type the command below at the MS-DOS prompt.
	
	  
	
	  OLEServer /regserver
	
	Your .exe file should now be registered.
	
	Here is an example that shows you how to register a .dll file:
	
	When trying to register a .dll file you must have the .dll and .vbr files and
	have access to a third file, Regsvr32.exe. The example below assumes you already
	have a custom OLE server built and named Oleserver.dll:
	
	- OLEServer.DLL (This is the custom OLE server .dll file you built from your
	  project.)
	- OLEServer.VBR (This file gets automatically created when you build your
	  project.)
	- Regsvr32.exe (This file comes with Visual FoxPro 5.0 and a number of other
	  Microsoft applications.)
	
	Once you copy these two files (.dll and .vbr) into the target machine, from the
	directory that contains these two files, type the command below at the MS-DOS
	prompt
	
	  
	
	  REGSVR32 OLEServer.DLL
	
	You should get a message box that says "DllRegisterServer in OLEServer.dll
	succeeded." Your .dll file is now registered.
	
	If you do not have Regsvr32.exe in you target machine, you can obtain this file
	from the Visual FoxPro 5.0 directory. For Visual FoxPro, you can obtain
	Regsvr32.exe from the Distrib.src directory in the Visual FoxPro directory.
	
	NOTE: Manually registering these files is necessary only if you are not using the
	Visual FoxPro Setup Wizard to install your custom OLE server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
