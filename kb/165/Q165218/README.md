---
layout: page
title: "Q165218: PPT: Sample VB Code to Delete a Custom Slide Show"
permalink: kb/165/Q165218/
---

## Q165218: PPT: Sample VB Code to Delete a Custom Slide Show

	Article: Q165218
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
	
	This article provides a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that deletes a specified Custom Show called "My Custom Show".
	You can change the sample code to reference the correct name of your custom
	show.
	
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
	
	    Sub DeleteCustomShow()
	
	       'Change this string to the name of the custom show you want to
	       'delete.
	       Const strShowToDelete As String = "My Custom Show"
	
	       Dim oShow As NamedSlideShow
	       Dim strPrompt As String
	       Dim FoundShow As Boolean: FoundShow = False
	   
	       'Loop though the custom shows in the active presentation.
	   
	    For Each oShow In ActivePresentation.SlideShowSettings.NamedSlideShows
	   
	       'Look for the custom show name defined by the constant
	       'strShowToDelete.
	       If oShow.Name = strShowToDelete Then
	          oShow.Delete
	          FoundShow = True
	          Exit For
	       End If
	   
	       Next oShow
	   
	       'Check if a show was deleted and then display a message box.
	       strPrompt = "The custom show    " & strShowToDelete & "    "
	       If FoundShow Then
	          MsgBox strPrompt & "was deleted.", vbInformation, _
	             "Custom Show Deleted"
	       Else
	          MsgBox strPrompt & "was not found.", vbInformation, _
	             "No Show Deleted"
	       End If
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
	
	Additional query words: 8.00 ppt8 vba vbe 8.0 macppt98 ppt98 mac
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
