---
layout: page
title: "Q181816: WD97: How to Store and Retrieve Variables in Documents"
permalink: kb/181/Q181816/
---

## Q181816: WD97: How to Store and Retrieve Variables in Documents

	Article: Q181816
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to set and retrieve document variables using
	Microsoft Word.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	You can use the Microsoft Visual Basic for Applications Variables collection to
	set and retrieve the contents of a string variable into a Word document or
	template.
	
	Also, you can use the DocVariable field to retrieve the value of a document
	variable once it has been set.
	
	To Set and Retrieve the Value of a Document Variable
	----------------------------------------------------
	
	The following sample macro uses the Variables property to store and then retrieve
	the value of a string variable named "FullName" with the current document.
	
	     Sub GetSetDocVars()
	
	        Dim fName As String
	        fName = "Jeff Smith"
	
	        ' Set contents of variable "fName" in a document using a document
	        ' variable called "FullName".
	        ActiveDocument.Variables.Add Name:="FullName", Value:=fName
	
	        ' Retrieve the contents of the document variable.
	        MsgBox ActiveDocument.Variables("FullName").Value
	
	     End Sub
	
	To Delete a Document Variable
	-----------------------------
	
	The following sample macro uses the Variables property to first set and retrieve
	the value of a document variable and then delete the variable from the active
	document.
	
	     Sub GetSetDeleteDocVars()
	
	        Dim fName As String
	        fName = "Jeff Smith"
	
	        ' Set contents of variable "fName" in a document using a document
	        ' variable called "FullName."
	        ActiveDocument.Variables.Add Name:="FullName", Value:=fName
	
	        ' Retrieve the contents of the document variable.
	        MsgBox ActiveDocument.Variables("FullName").Value
	
	        ' Delete the variable.
	        ActiveDocument.Variables("FullName").Delete
	
	     End Sub
	
	To Retrieve the Value of a Document Variable Using the DocVariable Field
	------------------------------------------------------------------------
	
	The following sample macro uses the Variables property to set a document
	variable. Following the sample macro are steps to use the DocVariable field to
	retrieve the value into the contents of the same document.
	
	     Sub GetSetDocVars()
	
	        Dim fName As String
	        fName = "Jeff Smith"
	
	        ' Set contents of variable "fName" in a document using a document
	        ' variable called "FullName."
	        ActiveDocument.Variables.Add Name:="FullName", Value:=fName
	
	     End Sub
	
	To use the DocVariable field:
	
	1. On the Insert menu, click Field.
	
	2. In the Categories list, click Document Automation.
	
	3. In the Field Names list, click DocVariable.
	
	4. Click in the Field codes box so the insertion point is one space past the
	  word DocVariables.
	
	5. In quotation marks, type the name of the document variable.
	
	  Example: ""FullName"" (without the quotation marks)
	
	6. Click OK.
	
	If you need to preserve a value between sessions of a macro, you can store values
	using any of the following methods:
	
	- Use the PrivateProfileString property to store values to a private settings
	  file.
	
	  For more information about the PrivateProfileString property, click the Office
	  Assistant while in the Visual Basic Editor, type "PrivateProfileString
	  Property" (without the quotation marks), click Search, and then click to view
	  "PrivateProfileString Property."
	
	- Use the Variables property to store values in a document.
	
	  For more information about the Variables property, click the Office Assistant
	  while in the Visual Basic Editor, type "Variables Property" (without the
	  quotation marks), click Search, and then click to view "Variables Property."
	
	- Use the Visual Basic for Applications Input/Output statements to write to a
	  text file (for example, Write or Print statements).
	
	  For more information about writing data to files, click the Office Assistant
	  while in the Visual Basic Editor, type "Writing Data to Files" (without the
	  quotation marks), click Search, and then click to view "Writing Data to
	  Files."
	
	- Use the AutoTextEntry Object to store values in an AutoText entry.
	
	  For more information about the AutoTextEntry Object, click the Office
	  Assistant while in the Visual Basic Editor, type "AutoTextEntry Object"
	  (without the quotation marks), click Search, and then click to view
	  "AutoTextEntry Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q168923 WD97: Invalid Page Fault Using DocVariable Field
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
