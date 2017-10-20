---
layout: page
title: "Q190029: INFO: Print Out File Properties Using the FileSystemObject"
permalink: /kb/190/Q190029/
---

## Q190029: INFO: Print Out File Properties Using the FileSystemObject

{% raw %}

	Article: Q190029
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbFileIO kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to print out file properties, such as the date
	created, the short file name, and the size of all files in a specified folder
	using the FileSystemObject. The article shows how to create a project that
	prints out file information to a specified text file.
	
	MORE INFORMATION
	================
	
	This article assumes you are familiar with using objects, collections, and
	object models in Visual Basic. The FileSystemObject allows you to perform a
	number of tasks on the file system of a computer. This object is available to
	your project by making a reference to the Microsoft Script Runtime file
	scrrun.dll. This file ships with Windows 98 and the following products:
	
	  Windows Script Host
	  Windows NT Option Pack
	  Microsoft Internet Information Server 3.0
	  Scripting 3.1 upgrade
	  Visual Studio 98
	  Visual Basic 6.0
	
	After making a reference to the Script Runtime file, you create an instance of
	the FileSystemObject using the CreateObject method. The FileSystemObject can
	create a text file with the CreateTextFile method. You write to the text file
	using the Write, the WriteBlankLines, or the WriteLine functions.
	
	To get the properties of all files in a specified folder, open the folder using
	the GetFolder method. You can then loop through each member of the Files
	collection and get the properties of each file.
	
	The next section shows you how to create a sample project that demonstrates using
	the FileSystemObject to get the properties of all files in a specified
	directory. These properties are then printed to a text file.
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Script Runtime by completing the following
	  steps:
	
	  a. From the Project menu, click References to display the References dialog
	     box.
	
	  b. Click Browse to open the Add Reference dialog box.
	
	  c. Select the file scrrun.dll and click OK to close the Add Reference dialog
	     box. This file is installed in your system directory. Microsoft Scripting
	     Runtime appears with a check in the Available Referenced list box of the
	     References dialog box.
	
	  d. Click OK to close the References dialog box.
	
	3. Add the following controls to Form1:
	
	   - CommandButton
	
	   - DriveListBox
	
	   - DirListBox
	
	   - Label
	
	4. Copy the following code to the Code window of Form1:
	
	  Option Explicit
	        
	  Private Sub Form_Load()
	     Label1.AutoSize = True
	     Label1.Caption = Dir1.Path
	     Dir1.Path = Drive1.Drive
	     Command1.Caption = "Create File List"
	  End Sub
	
	  Private Sub Dir1_Change()
	     Label1.Caption = Dir1.Path
	  End Sub
	
	  Private Sub Drive1_Change()
	     Dir1.Path = Drive1.Drive
	  End Sub
	
	  Private Sub Command1_Click()
	     Dim fso As FileSystemObject
	     Dim f As Folder
	     Dim fc As Files
	     Dim fl As File
	     Dim ts As TextStream
	     Dim sFileName As String
	     Dim sVersion As String
	
	     Set fso = CreateObject("Scripting.FileSystemObject")
	     sFileName = InputBox("Enter File Name", _
	                          "Enter Path and File Name")
	
	     If sFileName = "" Then
	        Exit Sub
	     Else
	        Set ts = fso.CreateTextFile(sFileName, True, False)
	        Set f = fso.GetFolder(Dir1.Path)
	        Set fc = f.Files
	        With ts
	           .WriteLine ("Files in " & Dir1.Path)
	           .WriteBlankLines (1)
	
	           For Each fl In fc
	              .WriteLine ("Filename: " & fl.Name)
	              .WriteLine (vbTab & "File Type: " & fl.Type)
	              
	              ' Get Version Information
	              sVersion = fso.GetFileVersion(fl.Path)
	              If sVersion <> "" Then
	                 .WriteLine (vbTab & "Version: " & fso.GetFileVersion(fl.Path))
	              Else
	                 .WriteLine (vbTab & "No Version Information")
	              End If
	              
	              .WriteLine (vbTab & "Created: " & fl.DateCreated)
	              .WriteLine (vbTab & "Last Modified: " & _
	                          fl.DateLastModified)
	              .WriteLine (vbTab & "Last Accessed: " & _
	                          fl.DateLastAccessed)
	              .WriteLine (vbTab & "Path: " & fl.Path)
	              .WriteLine (vbTab & "Short Name: " & fl.ShortName)
	              .WriteLine (vbTab & "Size: " & fl.Size & " bytes")
	              .WriteBlankLines (1)
	           Next
	        End With
	        MsgBox (sFileName & " created.")
	     End If
	     
	     'Destroy All Objects
	     Set fc = Nothing
	     Set f = Nothing
	     Set ts = Nothing
	     Set fso = Nothing
	  End Sub
	
	5. On the Run menu, click Start or press the F5 key to start the program.
	
	  a. Select a drive and a folder. The path appears in the Label control.
	
	  b. Click the Create a file list CommandButton. An input dialog box appears.
	
	  c. Type the path and file name of the text file that will contain the file
	     properties. Click OK to close the input box.
	
	  A message box appears when the text file is created. Open the text file to
	  view the results.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q186118 : HOWTO: Use FileSystemObject with Visual Basic
	
	  Q185601 : HOWTO: Recursively Search Directories Using FileSystemObject
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFileIO kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
