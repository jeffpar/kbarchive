---
layout: page
title: "Q146219: HOWTO: Register an ActiveX Control (.ocx) Manually"
permalink: kb/146/Q146219/
---

## Q146219: HOWTO: Register an ActiveX Control (.ocx) Manually

	Article: Q146219
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you distribute a Visual FoxPro application that uses an ActiveX control
	(.ocx file), the .ocx file must be registered properly for it to work correctly.
	The Visual FoxPro Setup Wizard will register an .ocx file properly, provided
	that you select the OLE check box in Step 6 for the .ocx file. If a Visual
	FoxPro application that uses an .ocx file is distributed by some other means,
	the .ocx file must be registered manually. This article describes how to
	register an .ocx file manually.
	
	MORE INFORMATION
	================
	
	You can use the Microsoft Register Server (Regsvr32.exe) to register a 32- bit
	.ocx file manually on a 32-bit operating system. In Visual FoxPro 3.0 and 3.0b,
	Regsvr32.exe is located in the \Vfp\Samples\Ole directory, and in Visual FoxPro
	5.0, Regsvr32.exe is located in the \Vfp directory. In Visual FoxPro 6.0,
	Regsvr32.exe is found in the Distrib.src directory of the Visual FoxPro
	directory. It may be distributed with a Visual FoxPro application. The syntax
	for using Regsvr32.exe is as follows:
	
	     Regsvr32 [/u] [/s] <OCX File Name>
	
	where:
	
	  /u means Unregister the .ocx File
	  /s means Silent Mode (display no messages)
	
	The following example registers the Microsoft MAPI ActiveX Control without
	displaying any messages:
	
	  Regsvr32 /s MSMAPI32.OCX
	
	To implement this example in a Visual FoxPro application, use the RUN command as
	follows:
	
	  RUN /N Regsvr32 /s MSMAPI32.OCX
	
	NOTE: If an error occurs when registering a control, you should do the
	following:
	
	1. Verify in the Registry that the control has not been registered before.
	
	2. Verify that the following files are in the Windows\System directory:
	
	     mfc30.dll     olepro32.dll     msvcrt20.dll
	     mfc40.dll     msvcrt40.dll
	
	  If one of these files is missing, you may receive the following error
	  Message:
	
	  Error: OLE Error Code 0x80040112: Appropriate license for this class not
	  found.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
