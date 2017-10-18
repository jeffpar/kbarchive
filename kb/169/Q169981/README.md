---
layout: page
title: "Q169981: WD97: Addin Field Data Lost in Word 6.0/7.0 Conversion"
permalink: kb/169/Q169981/
---

## Q169981: WD97: Addin Field Data Lost in Word 6.0/7.0 Conversion

	Article: Q169981
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbdtacode kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you convert documents between Microsoft Word versions 6.x, 7.x, and
	Microsoft Word 97, the contents of an Addin field may be lost or incomplete when
	you open the document in Microsoft Word versions 6.x or 7.x using the Word 97
	Import Converter.
	
	NOTE: The Addin field may display as a "pimprivate" field. The WordBasic
	GetFieldData$() statement will not work on this field.
	
	This problem occurs in all of the following cases:
	
	Case 1
	------
	
	You insert an Addin field into a Microsoft Word 6.0 or 7.0 document and then you
	open that document in Microsoft Word 97.
	
	Case 2
	------
	
	You insert an Addin field into a Microsoft Word 97 document, save the document as
	Word 6.0/95 or Rich Text Format (RTF), and then you open that document in
	Microsoft Word 6.0 or 7.0.
	
	Case 3
	------
	
	You insert an Addin field into a Microsoft Word 97 document, and then you open
	that document in Microsoft Word 6.0 or 7.0 with the Microsoft Word 97 import
	converter (Wrd97cnv.exe).
	
	CAUSE
	=====
	
	The conversion process changes the contents of the Addin field from ANSI to
	Unicode.
	
	-and-
	
	Addin fields are not converted in Word versions 6.x, 7.x when opening a Word 98
	document with the Word 98 import converter.
	
	RESOLUTION
	==========
	
	Case 1
	------
	
	To correct the problem in Case 1, install Microsoft Word 97 Service Release 1
	(SR-1).
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	NOTE: SR-1 does not correct the problems in Case 2 or Case 3.
	
	Cases 1, 2, and 3
	-----------------
	
	Use one of the following methods:
	
	Method 1: Word 7.x and later - Custom Properties and the DocProperty field:
	
	In Word versions 7.x and later, you can create custom file properties that
	include any value you assign or that are linked to specific items in your file,
	such as a named cell in Microsoft Excel, a selected item in Microsoft
	PowerPoint, or a bookmark in Word. For example, in Excel, you can create a
	custom file property to use in all budget files that is linked to the cell that
	contains the budget total. Then you can search for all budget files with totals
	that exceed a certain value.
	
	To create custom file properties for the active document:
	
	1. On the File menu, click Properties, and then click the Custom tab.
	
	2. In the Name box, type a name for the custom property, or select a name from
	  the list.
	
	3. In the Type box, click the type of property you want.
	
	4. In the Value box, type a value for the property.
	
	  The value you enter must match the selection in the Type box. For example, if
	  you click Number in the Type box, you must type a number in the Value box.
	  Values that don't match the property type are stored as text.
	
	5. Click Add.
	
	After adding a custom property, to insert the custom property value into your
	document, use the DocProperty field:
	
	1. On the Insert menu, click Field.
	
	2. In the Categories list box, select Document Information.
	
	3. In the Field names list box, select DocProperty.
	
	4. Click Options.
	
	5. In the Property list box, select the name of the custom property containing
	  the value you want inserted into your document.
	
	6. Click Add to field.
	
	7. Click OK to return to the Field dialog box.
	
	8. Click OK to return to your document.
	
	Method 2: Use document variables to store and retrieve values:
	
	In Word versions 6.x and later, you can use document variables to create and
	later retrieve values stored within your document.
	
	The following Visual Basic for Applications code example adds a document variable
	named "Customer Name" to the active document. The code then retrieves and
	displays the value and then inserts the value stored in the document variable at
	the current insertion point.
	
	  Sub AddDocVar()
	     Dim sVarName As String
	     Dim sVarValue As String
	
	     ' Enter the variable name and value.
	     sVarName = "Customer Name"
	     sVarValue = "John Doe"
	     ' If the named document variable already exists
	     ' an error will occur, in which case, the value is updated.
	     On Error Resume Next
	     ' Create the document variable and enter the document variable value.
	     ActiveDocument.Variables.Add Name:=sVarName
	     ActiveDocument.Variables(sVarName).Value = sVarValue
	     ' Retrieve and display the value.
	     MsgBox ActiveDocument.Variables(sVarName)
	     ' Retrieve and insert the value into the active document.
	     Selection.TypeText ActiveDocument.Variables(sVarName)
	  End Sub
	
	To later retrieve these document variable values in Word versions 6.x, 7.x, you
	need to create a WordBasic macro. The following example shows how to retrieve as
	well as set document variables using WordBasic.
	
	NOTE: This macro does not run in Word 97 Visual Basic for Applications without
	modification. For information on how to do this in Word 97, see the Visual Basic
	for Applications macro example found earlier in this article.
	
	  Sub MAIN
	     ' Create the document variable and enter the document variable value.
	     sVarName$ = "Customer Name"
	     sVarValue$ = "John Doe"
	     SetDocumentVar sVarName$, sVarValue$
	     ' Retrieve and display the value.
	     MsgBox GetDocumentVar$(sVarName)
	     ' Retrieve and insert the value into the active document.
	     Insert GetDocumentVar$(sVarName)
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For information about Addin fields, please see the following articles in the
	Microsoft Knowledge Base:
	
	  
	
	  Q140868 ADDIN Field Not Documented in Word 5.x Help
	
	  Q140868 ADDIN Field Not Documented in Word 6.x Help
	
	For more information about obtaining the Word 97 Import Converter for Word 6.0
	and 7.0, please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	For more information about saving documents in other file formats, click Contents
	And Index on the Help menu, click the Index tab in Word Help, type the following
	text:
	
	  saving documents
	
	and then double-click the selected text to go to the "Results of saving Word 97
	documents in other file formats" topic. If you are unable to find the
	information you need, ask the Office Assistant.
	
	Additional query words: SR1 release1 vb vbe vba
	
	======================================================================
	Keywords          : kbinterop kbdta kbdtacode kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
