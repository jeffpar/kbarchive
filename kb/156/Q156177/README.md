---
layout: page
title: "Q156177: PRB: Error Passing Multiple Parameters to DataToClip Method"
permalink: /kb/156/Q156177/
---

## Q156177: PRB: Error Passing Multiple Parameters to DataToClip Method

	Article: Q156177
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A syntax error occurs when attempting to pass more than one parameter to the
	DataToClip method of a Visual FoxPro application object from a Microsoft Excel
	module.
	
	CAUSE
	=====
	
	The DataToClip method must be called as a command rather than a function in
	order to pass multiple parameters.
	
	WORKAROUND
	==========
	
	Use the following syntax to pass parameters to the DataToClip method:
	
	     oObject.DataToClip lpvarWrkArea:=cCursorName,
	        lpvarNumRows:=nNumRows, lpvarClipFormat:=nFormat
	
	MORE INFORMATION
	================
	
	The DataToClip method copies a set of records as text to the Clipboard. It takes
	the following three parameters:
	
	- lpvarWrkArea: Specifies the work area number or the alias of the table for
	  which records are copied to the Clipboard. If you omit this parameter,
	  records are copied to the Clipboard for the table open in the current work
	  area.
	
	- lpvarNumRows: Specifies the number of records copied to the Clipboard. If
	  this value is greater than the number of remaining records in the table, all
	  the remaining records are copied to the Clipboard. If this parameter and
	  lpvarClipFormat are omitted, the current record and all remaining records are
	  copied to the Clipboard.
	
	- lpvarClipFormat: Specifies how fields are delimited. The settings for
	  lpvarClipFormat follow:
	
	     1    (Default) Fields delimited with spaces
	     3    Fields delimited with tabs
	
	  If lpvarClipFormat is omitted, fields are delimited with spaces.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code into a new Microsoft Excel module and run it. You do not
	have to specify the variable names when calling the DataToClip method:
	
	   Public FoxApp As Object
	
	     Sub copyFoxdata()
	
	        ' Starts the Visual FoxPro OLE Server
	        Set FoxApp = CreateObject("VisualFoxPro.Application")
	
	        ' Closes any data files that may be open
	        FoxApp.Docmd ("CLOSE DATA")
	
	        ' Sets the default path for the FoxPro server
	        ' Change this path to match your Visual FoxPro directory
	        FoxApp.DefaultFilePath = "d:\VFP50\Samples\Data"
	
	        ' Opens the sample Customer table
	        FoxApp.Docmd ("USE customer")
	
	        ' The next 2 commands perform the same function: to copy the
	        ' first record to the clipboard in the default format, which is
	        ' delimited with spaces
	        FoxApp.DataToClip "customer", 1
	        FoxApp.DataToClip lpvarWrkArea:="customer", lpvarNumRows:=1
	        ' Paste the Data onto a Sheet of the Active Workbook
	        ActiveWorkbook.Sheets(1).Activate
	        ActiveSheet.Paste
	
	        ' The next 2 commands perform the same function: to copy the
	        ' first record to the clipboard delimited with tabs
	        FoxApp.DataToClip "customer", 1, 3
	        ' This command should be on one line
	        FoxApp.DataToClip lpvarWrkArea:="customer", lpvarNumRows:=1,
	            lpvarClipFormat:=3
	        ' Paste the Data onto a Sheet of the Active Workbook
	        ActiveWorkbook.Sheets(2).Activate
	        ActiveSheet.Paste
	
	        ' The next 2 commands perform the same function: to copy all records
	        ' to the clipboard delimited with tabs
	        FoxApp.DataToClip "customer", , 3
	        FoxApp.DataToClip lpvarWrkArea:="customer", lpvarClipFormat:=3
	        ' Paste the Data onto a Sheet of the Active Workbook
	        ActiveWorkbook.Sheets(3).Activate
	        ActiveSheet.Paste
	
	        ' The next two commands end the Visual FoxPro session
	        FoxApp.Quit
	        Set FoxApp = Nothing
	     End Sub
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
