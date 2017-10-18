---
layout: page
title: "Q291103: BUG: InsertObjDlg Fails with &quot;Unable to Access Source&quot; Err Msg"
permalink: kb/291/Q291103/
---

## Q291103: BUG: InsertObjDlg Fails with &quot;Unable to Access Source&quot; Err Msg

	Article: Q291103
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp kbVBp600 kbVBp600bug
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the InsertObjDlg method of the OLE container control to create an
	object from a file. However, if the file name contains any extended ASCII
	characters (that is, characters with the values 0 through 31 and 127 through
	255), InsertObjDlg fails, and you receive the following error message:
	
	  Error 31039
	  Unable to access source document
	
	This error occurs even though the file closes in the operation system.
	
	CAUSE
	=====
	
	Before OLE container control checks whether the file name that you provided is
	valid, it converts all of the characters in the file name from the American
	National Standards Institute (ANSI) character set to the OEM character set. With
	extended ASCII characters in the file name, the converted file name is no longer
	the same as the original file name. Because the converted file name is not
	available in the system, OLE container control reports an error.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Version     Size    File name
	  -----------------------------------------------------
	  17-Apr-2001 12:05PM  6.0.91.15   1.42MB  Msvbvm60.dll
	  17-Apr-2001 12:05PM  6.0.0.8965  1.64MB  VBA6.dll
	  17-Apr-2001 12:05PM  6.0.91.15   1.86MB  VB6.exe
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual Basic Integrated Development Environment (IDE), create a Visual
	  Basic Standard EXE project. Form1 is created by default.
	
	2. Add an OLE container control to the form. Keep the default name OLE1.
	
	3. Add the following code to the code window of Form1:
	
	      Private Sub OLE1_Click()
	          OLE1.InsertObjDlg
	      End Sub
	
	4. Press the F5 key to run the project.
	
	5. Click the OLE container control.
	
	6. In the Insert Object dialog box, click "Create from File".
	
	7. In the Insert Object dialog box, click Browse, and select a file that uses
	  extended ASCII characters in the file name. For example:
	
	  "Cafe.doc" (where "e" is ASCII 130)
	
	8. In the Insert Object dialog box, click OK. You receive the above-mentioned
	  error message.
	
	Additional query words: error 31039
	
	======================================================================
	Keywords          : kbActiveX kbVBp kbVBp600 kbVBp600bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
