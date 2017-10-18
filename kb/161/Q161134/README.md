---
layout: page
title: "Q161134: PPT: Sample Code to Control Word from a PowerPoint Macro"
permalink: kb/161/Q161134/
---

## Q161134: PPT: Sample Code to Control Word from a PowerPoint Macro

	Article: Q161134
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Word 98 Macintosh Edition 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) you can use as a starting point to control the Microsoft Word
	object model from within a Microsoft PowerPoint procedure.
	
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
	
	Sample Visual Basic Procedure
	-----------------------------
	
	     Sub ControlWord()
	
	        Dim oWord As Word.Application
	        Dim bWordRunning As Boolean
	
	        ' Needed for error trapping.
	        On Error Resume Next
	
	        ' Establish communication between Word and PowerPoint.
	        ' Clear the error variable.
	        Err.Clear
	
	        ' Check to see whether Word 97 is running.
	        Set oWord = GetObject(, "Word.Application.8")
	        If Err.Number <> 0 Then
	           bWordRunning = False
	        Else
	           bWordRunning = True
	        End If
	
	        ' Reset the error variable.
	        Err.Clear
	
	        ' Word is not running, so launch it.
	        ' Create a Word object.
	        If bWordRunning = False Then
	           Set oWord = CreateObject("Word.Application.8")
	           ' Check to see whether the Word object was created.
	
	           If Err.Number <> 0 Then
	              ' CreateObject failed.
	              ' Enter code to handle object creation error.
	           End If
	
	        End If
	
	        ' If Word is not running, make it visible.
	        If bWordRunning = False Then
	           oWord.Visible = True
	        End If
	
	        ' Creates a new document and adds the text "Hello World."
	        oWord.Documents.Add
	        oWord.Selection.Text = "Hello World!"
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks) click Search, and then click to view "Create a
	macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro" (without
	the quotation marks), click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 97 8.00 kbmacro ppt8 ppt97 winword word97 macppt mac_ppt ppt98 98 powerpt vba
	
	======================================================================
	Keywords          : kbcode kbinterop kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbWordMacSearch kbPowerPtSearch kbWord98Search kbWord97 kbWord97Search kbPowerPt97 kbZNotKeyword2 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbZNotKeyword3 kbWord98
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
