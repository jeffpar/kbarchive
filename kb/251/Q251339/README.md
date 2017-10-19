---
layout: page
title: "Q251339: PRB: CopyFolder Syntax Differs for UNC Paths and Mapped Drives"
permalink: /kb/251/Q251339/
---

## Q251339: PRB: CopyFolder Syntax Differs for UNC Paths and Mapped Drives

	Article: Q251339
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use the CopyFolder method of the FileSytemObject, you get the
	following error message:
	
	  Error 5: Invalid Call or Procedure
	
	CAUSE
	=====
	
	You specified a Universal Naming Convention (UNC) path for the source but did
	not include the wildcard (*) character.
	
	MORE INFORMATION
	================
	
	When the CopyFolder method of the FileSystemObject is used with a UNC path, it
	requires the use of a wildcard character in the source specification. However,
	when the CopyFolder method is used with a wildcard, it only copies the
	subfolders of the last named folder in the path and does not copy any files from
	that folder. Therefore, if you want to copy the entire contents, you must use
	the CopyFile method in addition to the CopyFolder method when using a UNC path
	and the wildcard specification for the source.
	
	The mapped path usage of CopyFolder can be specified with or without wildcard
	characters in the source path. If it is used without the wildcard for mapped
	drive paths, it copies the entire contents of the folder, including the files
	and subfolders.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Windows Explorer and create two folders, "C:\MyFolder" (without the
	  quotation marks) and "C:\MyNewFolder" (without the quotation marks). Add some
	  files and subfolders to C:\MyFolder.
	
	2. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. On the Project menu, click References to display the References dialog box.
	  Select Microsoft Scripting Runtime and then click OK.
	
	4. Add two CommandButton controls to Form1.
	
	5. Add the following code to the General Declarations section of Form1,
	  replacing the references to "MyMachine" with the name of your computer:
	
	  Option Explicit
	
	  Dim fs As FileSystemObject
	
	  Private Sub Command1_Click()  ' Without Wildcard
	
	  ' The following statement creates C:\NewFolder and copies the contents
	  ' (files and subfolders) of c:\MyFolder into it.
	     fs.CopyFolder "C:\myFolder", "C:\NewFolder"
	  End Sub
	
	  Private Sub Command2_Click()  ' Wildcard
	
	  ' Comment the following line to avoid Error 5: Invalid Call or Procedure
	     fs.CopyFolder "\\myMachine\myFolder", "C:\myNewFolder"
	
	  ' The following line copies the subfolders of myFolder into myNewFolder
	     fs.CopyFolder "\\myMachine\myFolder\*", "C:\myNewFolder"
	     
	  ' The following line copies the files from myFolder into myNewFolder
	     fs.CopyFile "\\myMachine\myFolder\*", "C:\myNewFolder"
	  End Sub
	
	  Private Sub Form_Load()
	     Set fs = New FileSystemObject
	     Command1.Caption = "Without Wildcard"
	     Command2.Caption = "Wildcard"
	  End Sub
	
	6. Run the program. Click the Wildcard button to reproduce the error.
	
	7. Edit Command2_Click, commenting out the line indicated in the code. Repeat
	  the previous step and the directories and files are copied properly.
	
	  NOTE: If you step through the code, you can see that CopyFolder only copies
	  the folders and that CopyFile is necessary to copy the files.
	
	8. If you reset the test by deleting the contents of C:\NewFolder, you can
	  repeat the test, only clicking on the Without Wildcard button to see that
	  this syntax also copies the files and subfolders.
	
	REFERENCES
	==========
	
	MSDN Help Index : CopyFolder method
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
