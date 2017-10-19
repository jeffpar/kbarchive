---
layout: page
title: "Q257630: FIX: Exception Error Closing Application with CoolBar Control"
permalink: /kb/257/Q257630/
---

## Q257630: FIX: Exception Error Closing Application with CoolBar Control

	Article: Q257630
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbRebarCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 03-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic application that has a CoolBar control crashes while exiting the
	application. This occurs when there is an End statement in the unload event of
	the form that hosts a CoolBar control. This behavior occurs only when running
	the executable and does not happen in the Visual Basic integrated development
	environment (IDE). The error message is similar to the following:
	
	In the Windows 9x platform:
	
	  This program has performed an illegal operation and will be shutdown.
	
	Clicking on the Details button may reveal text similar to the following:
	
	  PROJECT1 caused an exception 10H in module MSVBVM60.DLL at 015f:66024d53.
	
	In Windows NT or Windows 2000 platform, the following error message appears:
	
	  Form1:Project1.exe - Application Error
	  The exception Floating-point inexact result.
	  (0xc000008f) occurred in the application at location 0x77f1d493.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in Service Pack
	4 for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Components, choose the Microsoft Windows Common
	  Controls-3 6.0, and then click OK.
	
	3. Add a CoolBar control to Form1.
	
	4. Paste the following code into the code window of Form1:
	
	  Private Sub Form_Unload(Cancel As Integer)
	      End
	  End Sub
	
	5. Run the project in the Visual Basic IDE. Exit the form by clicking the X
	  button, and note that no problem arises.
	
	6. Compile the project and run the EXE outside the Visual Basic IDE. Click the X
	  button to exit the application, and note the Application error.
	
	Additional query words: sp4 GPF IPF
	
	======================================================================
	Keywords          : kbCtrl kbRebarCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
