---
layout: page
title: "Q173049: PRB: &quot;Locate&quot; Dialog Appears When Running Setup Wizard"
permalink: /kb/173/Q173049/
---

## Q173049: PRB: &quot;Locate&quot; Dialog Appears When Running Setup Wizard

	Article: Q173049
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Microsoft Visual Basic Application Setup Wizard, a dialog
	titled "Locate Kernel," "Locate User," "Locate GDI," etc., is displayed after
	you click the Next button on the "Setup Wizard - Select Project and Options"
	form.
	
	CAUSE
	=====
	
	The Visual Basic Application Setup Wizard scans a project's files for Declare
	statements to determine if any additional dependency files need to be
	distributed. If any such files are found, the user is prompted for the location
	of the files with the "Locate" dialog.
	
	If any declarations for 16-bit DLLs are found in the project's files, the user is
	prompted for the location. For example, if the following 16-bit declaration
	appears in the project:
	
	     Declare Function GetWindowsDirectory Lib "Kernel" _
	        (ByVal lpBuffer As String, ByVal nSize As Integer) As Integer
	
	Setup Wizard will prompt the user for the location of the Kernel DLL with the
	"Locate" dialog.
	
	This is a very common problem with applications converted from 16-bit Visual
	Basic to Visual Basic 5.0, which is 32-bit, or with Visual Basic 4.0
	applications that use conditional compilations that have been converted to
	Visual Basic 5.0. Setup Wizard does not take into consideration the compiler
	directives when looking for Declare statements resulting, for example, in a
	"Locate Kernel" dialog for the sample code below:
	
	     #If Win32 Then
	        Declare Function GetWindowsDirectory Lib "Kernel32" _
	           Alias "GetWindowsDirectoryA" _
	           (ByVal lpBuffer As String, ByVal nSize As Long) As Long
	     #Else
	        Declare Function GetWindowsDirectory Lib "Kernel" _
	           (ByVal lpBuffer As String, ByVal nSize As Integer) As Integer
	     #End If
	
	RESOLUTION
	==========
	
	Convert all 16-bit declarations to their 32-bit equivalents and recompile the
	project, or, if conditional compilation was used to select between pairs of
	16-bit and 32-bit declarations, the conditional compilation statements and
	16-bit declarations can be commented out or removed and the project recompiled.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic.
	
	2. Add a new module (Module1) to the project.
	
	3. In the General Declarations section of Module1, add following code:
	
	        Declare Function GetWindowsDirectory Lib "Kernel" _
	           (ByVal lpBuffer As String, ByVal nSize As Integer) As Integer
	
	4. Save the project, compile it, and then exit Visual Basic.
	
	5. Start the Visual Basic Application Setup Wizard and proceed to the form
	  entitled "Setup Wizard - Select Project and Options," click the Browse
	  button, and select the project you compiled.
	
	6. Click the Next button. A locate file common dialog box entitled "Locate
	  Kernel" is displayed.
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
