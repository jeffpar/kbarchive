---
layout: page
title: "Q161989: PPT: Sample VB Code to Retrieve Summary Properties"
permalink: /kb/161/Q161989/
---

## Q161989: PPT: Sample VB Code to Retrieve Summary Properties

	Article: Q161989
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that demonstrates how to retrieve the text from the Summary Tab
	of the properties dialog box. After retrieving the text, the macro prints the
	information to the Immediate/Debug window.
	
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
	
	The GetSummaryProperties macro displays its results in the Immediate/Debug
	window. To view the output, click Immediate Window on the View menu.
	
	Sample Visual Basic Procedure
	-----------------------------
	
	    Sub GetSummaryProperties()
	
	        ' Array used to store the summary properties.
	        Dim SummaryProperties(1 To 9) As String
	
	        With ActivePresentation.BuiltInDocumentProperties
	
	           ' Get the Title.
	           SummaryProperties(1) = .Item("Title").Value
	
	           ' Get the Subject.
	           SummaryProperties(2) = .Item("Subject").Value
	
	           ' Get the Author.
	           SummaryProperties(3) = .Item("Author").Value
	
	           ' Get the Manager.
	           SummaryProperties(4) = .Item("Manager").Value
	
	           ' Get the Company.
	           SummaryProperties(5) = .Item("Company").Value
	
	           ' Get the Category.
	           SummaryProperties(6) = .Item("Category").Value
	
	           ' Get the Keywords.
	           SummaryProperties(7) = .Item("Keywords").Value
	
	           ' Get the Comments.
	           SummaryProperties(8) = .Item("Comments").Value
	
	           ' Get the Hyperlink Base.
	           SummaryProperties(9) = .Item("Hyperlink Base").Value
	
	        End With
	
	        ' Display the properties in the Immediate window.
	        ' To display the Immediate window:
	        '    Click Immediate window on the View menu
	        Dim i As Integer
	        For i = 1 To 9
	
	           ' Loop through the nine properties on the Summary tab.
	           Debug.Print SummaryProperties(i)
	        Next i
	
	        MsgBox "To see the results, open the " _
	           & "Immediate Window in the Visual Basic Editor." _
	           , vbInformation, "Macro Completed"
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 kbmacro ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
