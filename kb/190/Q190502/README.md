---
layout: page
title: "Q190502: PRB: Missing Files Dialog Box Appears When Running PDW"
permalink: /kb/190/Q190502/
---

## Q190502: PRB: Missing Files Dialog Box Appears When Running PDW

{% raw %}

	Article: Q190502
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Microsoft Visual Basic Package and Deployment Wizard (PDW), a
	dialog titled "Missing Files" appears providing a list of missing files. Files
	likely to be listed include:
	
	  Kernel.dll
	  User.dll
	  GDI.dll
	
	CAUSE
	=====
	
	The Package and Deployment Wizard scans a project's files for Declare statements
	to determine if any additional dependency files need to be distributed. If any
	such files are not found, the user is prompted for the location of the files
	with the "Missing Files" dialog box.
	
	If any declarations for 16-bit DLLs are found in the project's files, the user is
	prompted for the location. For example, if the following 16-bit declaration
	appears in the project the PDW will prompt the user for the location of the
	Kernel DLL:
	
	     Declare Function GetWindowsDirectory Lib "Kernel" _
	        (ByVal lpBuffer As String, ByVal nSize As Integer) As Integer
	
	This is a very common problem with applications converted from 16-bit Visual
	Basic to Visual Basic 5.0 or 6.0, or with Visual Basic 4.0 applications that use
	conditional compilations that have been converted to Visual Basic 5.0 or 6.0.
	The PDW does not take into consideration the compiler directives when looking
	for Declare statements, as in the following example:
	
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
	project.
	
	- or -
	
	If conditional compilation was used to select between pairs of 16-bit and 32-bit
	declarations, the conditional compilation statements and 16-bit declarations can
	be commented out or removed and the project recompiled.
	
	- or -
	
	Click OK in the "Missing Files" dialog; this causes the PDW to ignore the missing
	files.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a new module (Module1) to the project.
	
	3. In the General Declarations section of Module1, add following code:
	
	        #If Win32 Then
	           Declare Function GetWindowsDirectory Lib "Kernel32" _
	              Alias "GetWindowsDirectoryA" _
	              (ByVal lpBuffer As String, ByVal nSize As Long) As Long
	        #Else
	           Declare Function GetWindowsDirectory Lib "Kernel" _
	              (ByVal lpBuffer As String, ByVal nSize As Integer) As Integer
	        #End If
	
	4. Save the project, compile it, and then exit Visual Basic.
	
	5. Start the Package and Deployment Wizard and proceed to the form entitled
	  "Package and Deployment Wizard - Package Folder." Select a folder and click
	  the Next button. Note that a dialog box entitled "Missing Files" is
	  displayed, with Kernel.Dll in the list of missing files.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q173049 PRB: "Locate" Dialog Appears When Running Setup Wizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
