---
layout: page
title: "Q315576: PRB: Err Msg Starting eVB Project: Object Library Not Registered"
permalink: /kb/315/Q315576/
---

## Q315576: PRB: Err Msg Starting eVB Project: Object Library Not Registered

	Article: Q315576
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbETK kbDSupport kbGrpDSETK kbVBM300 kbvbpSearch kbAudDeveloper
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE for the Pocket PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a new Pocket PC project in eMbedded Visual Basic (eVB), you may
	receive the following error message:
	
	  Object Library Not Registered
	
	CAUSE
	=====
	
	This behavior occurs if the following file was not registered during the
	installation of the Pocket PC Platform SDK:
	
	  C:\Program Files\Microsoft eMbedded Tools\EVB\VB6PPC.OLB
	
	RESOLUTION
	==========
	
	To resolve this issue, register the Vb6ppc.olb file by using Regtlib.exe
	(installed with Visual Studio 6.0 Service Pack 3 and later), as follows:
	
	1. Click Start, and then click Run.
	
	2. In the Run box, type the following:
	
	  regtlib.exe "C:\Program Files\Microsoft eMbedded Tools\EVB\VB6PPC.OLB"
	
	3. Click OK.
	
	MORE INFORMATION
	================
	
	The following is a sample .reg file that contains the required registry
	settings:
	
	  Windows Registry Editor Version 5.00
	
	  [HKEY_CLASSES_ROOT\TypeLib\{6D5C6210-E14B-11D2-B72A-0000F8026CEE}]
	
	  [HKEY_CLASSES_ROOT\TypeLib\{6D5C6210-E14B-11D2-B72A-0000F8026CEE}\6.0]
	
	  @="Visual Basic objects and procedures"
	
	  [HKEY_CLASSES_ROOT\TypeLib\{6D5C6210-E14B-11D2-B72A-0000F8026CEE}\6.0\9]
	
	  [HKEY_CLASSES_ROOT\TypeLib\{6D5C6210-E14B-11D2-B72A-0000F8026CEE}\6.0\9\win32]
	
	  @="C:\\Program Files\\Microsoft eMbedded Tools\\EVB\\VB6PPC.OLB"
	
	  [HKEY_CLASSES_ROOT\TypeLib\{6D5C6210-E14B-11D2-B72A-0000F8026CEE}\6.0\Flags]
	
	  @="4"
	
	  [HKEY_CLASSES_ROOT\TypeLib\{6D5C6210-E14B-11D2-B72A-0000F8026CEE}\6.0\HELPDIR]
	
	  @="C:\\Program Files\\Microsoft eMbedded Tools\\EVB"
	
	The Regtlib.exe file is used as follows
	
	  regtlib [-q][-h] -o (odl file) | <typelib, olb, exe or dll filename(s)>
	
	where:
	
	- -q indicates to produce no messages.
	
	- -o indicates to read an ODL file and use importlib() statements for TypeLibs
	  to register.
	
	- -h (path) directory for Help file of TypeLib.
	
	Additional query words: evb wince tlb olb
	
	======================================================================
	Keywords          : kberrmsg kbETK kbDSupport kbGrpDSETK kbVBM300 kbvbpSearch kbAudDeveloper 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
