---
layout: page
title: "Q183748: PRB: Error Message &quot;DllRegisterServer in &lt;File name&gt;.dll Failed&quot;"
permalink: kb/183/Q183748/
---

## Q183748: PRB: Error Message &quot;DllRegisterServer in &lt;File name&gt;.dll Failed&quot;

	Article: Q183748
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97sp2,97sp3
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbGrpDSVB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message displays when you attempt to register an ActiveX
	.dll file with RegSvr32.exe on another computer:
	
	  DllRegisterServer in <File name>.dll failed.
	
	The ActiveX .dll file was created with Visual Basic 5.0 and Visual Studio 97
	Service Pack 2 or 3.
	
	CAUSE
	=====
	
	The computer receiving the ActiveX DLL contains a version of the file
	MSVBVM50.DLL that is different from the computer that was used to create the
	ActiveX .dll file.
	
	RESOLUTION
	==========
	
	Install MSVBVM50.DLL version 5.00.4319(sp2) on all computers that use your
	ActiveX .dll file. Version 5.00.4319 of MSVBVM50.DLL is shipped with Visual
	Studio 97 Service Pack 2 and 3. With this version of MSVBVM50.DLL installed, you
	should be able to successfully register your ActiveX .dll using RegSvr32.exe.
	
	MORE INFORMATION
	================
	
	To reproduce this problem using the steps below, you will need two computers.
	The first computer has Visual Basic 5.0 and Visual Studio 97 Service Pack 2 or
	3. Verify that the file MSVBVM50.DLL has the following properties:
	
	Filename: MSVBVM50.DLL
	Size    : 1.28Mb (1,347,344 bytes)
	Created : July 19, 1997
	Version : 5.00.4319(sp2)
	
	The second computer has Visual Basic 5.0 without Service Packs installed. Verify
	that the file MSVBVM50.DLL has the following properties:
	
	Filename: MSVBVM50.DLL
	Size    : 1.27Mb (1,334,032 bytes)
	Created : January 24, 1997
	Version : 5.00.3724
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using the first computer, start a new ActiveX .dll project in Visual Basic.
	
	2. Copy the following code to the Code window of the Class1 Module:
	
	        Option Explicit
	
	        Public Sub Method1()
	           MsgBox "From the ActiveX dll."
	        End Sub
	
	3. From the File menu, click Make Project1.dll. The Make Project dialog box
	  appears. Type Project1.dll in the File name text box and click OK.
	
	4. Copy the newly-created Project1.dll file to the System folder of the second
	  computer. If the second computer is running Windows NT, copy the .dll to the
	  System32 folder.
	
	5. From the Start menu of the second computer, click Run. The Run dialog box
	  appears. Type the following command line and click OK:
	
	  Regsvr32 C:\Windows\System\Project1.dll
	
	  Result: The error message appears. To work around this problem, copy
	  MSVBVM50.DLL version 5.00.4319 to the second computer. Repeat step 5. The
	  .dll file is successfully registered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97sp2,97sp3
	Issue type        : kbprb
	
	=============================================================================
	
