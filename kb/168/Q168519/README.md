---
layout: page
title: "Q168519: PRB: Search Using OpenFile API Instead of Dir/Dir&#36; Function"
permalink: /kb/168/Q168519/
---

## Q168519: PRB: Search Using OpenFile API Instead of Dir/Dir&#36; Function

	Article: Q168519
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Dir/Dir$ function in Microsoft Visual Basic may be used to test for a file's
	existence. It returns the name (or names) of the files that fit the search
	criteria. However, when using a UNC (Universal Naming Conventions) path to
	search for files that exist on a network directory, the Dir$ function may not
	return valid information. This behavior is most common when searching network
	paths. It can also occur when searching for files that have unusual names (such
	as files that have no extension).
	
	RESOLUTION
	==========
	
	To work around this behavior, the OpenFile API call may be used to test for the
	existence of a file. Passing the parameter OF_EXIST to the OpenFile function
	causes OpenFile to search for an existing file. It does not write to or open the
	file when this parameter is passing by itself.
	
	MORE INFORMATION
	================
	
	The following sample shows how to use the OpenFile API function to check for the
	existence of a file named "Test" that has no file extension and is located at
	the following location: \\ServerName\ShareName:
	
	     'If using a 32-bit version of Visual Basic, this declaration is
	     'required;
	
	     Declare Function OpenFile Lib "kernel32" (ByVal lpFileName As String, _
	                                               lpReOpenBuff As OFSTRUCT, _
	                                               ByVal wStyle As Long) As Long
	
	     'If using the 16-bit version of Visual Basic 4.0, this declaration is
	     'required;
	
	     Declare Function OpenFile Lib "kernel" (ByVal lpFileName As String, _
	                                             lpReOpenBuff As OFSTRUCT, _
	                                             ByVal wStyle As Integer) _
	                                             As Integer
	
	     'Both 16-bit and 32-bit utilize these constants and structure:
	
	     Public Const OFS_MAXPATHNAME = 128
	     Public Const OF_EXIST = &H4000
	
	     Type OFSTRUCT
	         cBytes As Byte
	         fFixedDisk As Byte
	         nErrCode As Integer
	         Reserved1 As Integer
	         Reserved2 As Integer
	         szPathName(OFS_MAXPATHNAME) As Byte
	     End Type
	
	     'On the VB IDE menu bar select Tools/Options/Project/Startup Form and
	     'set Sub Main() as the project start-up form.
	
	     Sub main()
	         Dim result As Integer
	         Dim strPath As String
	         Dim strucFname As OFSTRUCT
	         Dim strResults As String
	         Dim strSearchFile As String
	
	         strSearchFile = "\\ServerName\ShareName\Test"
	
	         result = OpenFile(strSearchFile, strucFname, OF_EXIST)
	
	         'The above line causes OpenFile to search for the
	         'file Test (no extension) on the server network path.
	         'Passing the OF_EXIST parameter tells the OpenFile
	         'function to search for the file, the file will not be
	         'opened or modified in any way.
	
	         If result <> -1 Then
	             MsgBox "File found"
	         Else
	             MsgBox "File not found"
	         End If
	     End Sub
	
	If the file in question is found, data pertaining to that file is placed into the
	variable strucFname.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q112674 : How to Determine If a File Exists by Using DIR$
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
