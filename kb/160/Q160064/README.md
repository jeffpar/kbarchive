---
layout: page
title: "Q160064: HOWTO: Convert VBA to FoxPro for OLE Automation"
permalink: /kb/160/Q160064/
---

## Q160064: HOWTO: Convert VBA to FoxPro for OLE Automation

	Article: Q160064
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to perform OLE Automation with an application that uses Visual Basic
	for Applications (VBA), it is important to understand how to convert the VBA
	syntax for each command or function into a syntax that may be used in Visual
	FoxPro. Below is a list of a few of the most common Visual Basic for
	Applications (VBA) commands that may be used to perform OLE Automation from
	Visual FoxPro to Microsoft Excel or Microsoft Word along with the appropriate
	syntax for use in Visual FoxPro.
	
	Since this list is very limited, it may be helpful to understand some of the
	points of converting VBA to FoxPro:
	
	1. Use parentheses to surround the list of parameters.
	
	2. Do not use Named parameters. Instead, just pass the value of the parameter in
	  its specified position in the list.
	
	3. You may use FoxPro variables and fields as parameters just as you would in
	  FoxPro commands, as long as they are of the correct type.
	
	4. If you are having problems getting a statement or method to work, make
	
	sure that it works as written from within a module of the application (Microsoft
	Excel or Microsoft Word). If it is available, you may also want to try the
	statement from Visual Basic.
	
	For a description of the methods and statements listed, along with information
	about the use of specific parameters, please see the respective Visual Basic
	Reference file for Microsoft Word or Microsoft Excel.
	
	MORE INFORMATION
	================
	
	General Notes
	-------------
	
	Variables and parameters are prefixed by a single character indicating the type
	of the variable or parameter as follows:
	
	- c Character
	
	- n Numeric
	
	- o Object
	
	- l Logical
	
	Some portions of certain commands may be optional. These portions are enclosed by
	brackets [].
	
	VBA has many built-in constants that may be used. However, FoxPro does not know
	the values of these constants. To use them in FoxPro, you need to define them as
	constants in the scope of your FoxPro program or form, or replace them with
	their appropriate values.
	
	Object Variables
	----------------
	
	oWord is the variable used to reference Microsoft WordBasic objects, created with
	the following command:
	
	     oWord = CREATEOBJECT("Word.Basic")
	
	oXL is the variable used to reference Microsoft Excel application objects,
	created with the following command:
	
	     oXL = CREATEOBJECT("Excel.Application")
	
	oXLSheet is the variable used to reference Microsoft Excel worksheet objects,
	created with one of the following commands:
	
	     oXLSheet = CREATEOBJECT("Excel.Sheet")
	
	-or-
	
	     oXLSheet = oXL.ActiveSheet
	
	oXLBooks is the variable used to reference Microsoft Excel Workbooks Collection
	objects, created with the following command:
	
	     oXLBooks = oXL.Workbooks
	
	oXLWkBook is the variable used to reference Microsoft Excel workbook objects,
	created with the following command:
	
	     oXLWkBook = oXL.ActiveWorkBook
	
	Directory/File Management Statements
	------------------------------------
	
	Add Method (Microsoft Excel)
	
	  Syntax:
	
	  oXLBooks.Add([cTemplate])
	  oXLSheet.Add([cBefore [, cAfter [,nCount [, nType]]]])
	  oXLSheet.Add([oBefore [, oAfter [,nCount [, nType]]]])
	
	Cells Method (Microsoft Excel)
	
	  Syntax:
	
	  oXL.Cells([nRowIndex [, nColumnIndex]])
	  oXLSheet.Cells([nRowIndex [, nColumnIndex]])
	
	ChDir Method (Microsoft Word)
	
	  Syntax:
	
	  oWord.ChDir(cPath)
	
	  Example:
	
	  oWord.ChDir("C:\MY DOCUMENTS")
	
	Close Method (Microsoft Excel)
	
	  Syntax:
	
	  oXLBooks.Close()
	  oXLWkBook.Close([lSaveChanges [, cFileName [, lRouteWorkbook]]])
	
	FileClose Method (Microsoft Word)
	
	  Syntax:
	
	  oWord.FileClose([nSave])
	
	FileCloseAll Method (Microsoft Word)
	
	  Syntax:
	
	  oWord.FileCloseAll([nSave])
	
	FileNew Method (Microsoft Word)
	
	  Syntax:
	
	  oWord.FileNew([cTemplate [, nNewTemplate]])
	
	  Example:
	
	  oWord.FileNew("C:\MY DOCUMENTS\MYTEMPLATE.DOT")
	
	FileNewDefault Method (Microsoft Word)
	
	  Syntax:
	
	  oWord.FileNewDefault()
	
	FileOpen Method (Microsoft Word)
	
	  Syntax:
	
	  oWord.FileOpen(cName [, nConfirmConversions [, nReadOnly ;
	     [, nAddToMru [, cPasswordDoc [, cPasswordDot [, nRevert ;
	     [, cWritePasswordDoc [, cWritePasswordDot]]]]]]]])
	
	  Example:
	
	  oWord.FileOpen("C:\MY DOCUMENTS\MYWORD.DOC")
	
	Open Method (Microsoft Excel)
	
	  Syntax:
	
	  oXLBooks.Open(cFileName [, nUpdateLinks [, lReadOnly [, nFormat ;
	     [, cPassword [, cWriteResPassword [, lIgnoreReadOnlyRecommended ;
	     [, nOrigin [, cDelimiter [, lEditable [, lNotify ;
	     [, nConverter]]]]]]]]]]])
	
	  Example:
	
	  oXLBooks.Open("C:\MY DOCUMENTS\MYSHEET.XLS")
	
	Value Property (Microsoft Excel)
	
	  Syntax:
	
	  object.Value = NewValue
	
	  Example:
	
	  oXL.ActiveWindow.ActiveCell.Value = "Hello"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
