---
layout: page
title: "Q179337: WD97: Recorded Macro to Stop &quot;Same As Previous&quot; Fail on Playback"
permalink: /kb/179/Q179337/
---

## Q179337: WD97: Recorded Macro to Stop &quot;Same As Previous&quot; Fail on Playback

	Article: Q179337
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbdta kbmacroexample word97 kblayout
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you record a macro that does the following:
	
	- Inserts a Next Page section break.
	
	  -and-
	
	- Turns off Same As Previous for the header or footer in the newly created
	  section (on the Header/Footer toolbar click Same As Previous).
	
	the macro appears to record correctly; however, when you play back the recorded
	macro, Same As Previous may still be on for the header or footer in the new
	section.
	
	WORKAROUND
	==========
	
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
	
	The following sample Microsoft Visual Basic for Applications macro inserts a Next
	Page section break, and turns off Same As Previous for the header in the new
	section:
	
	     Sub InsertSectionTurnOffSameAsPrevious()
	        Dim hHeader As HeaderFooter
	        Dim iSection As Integer
	        ' Insert Next Page Section Break.
	        Selection.InsertBreak Type:=wdSectionBreakNextPage
	        ' Get current section number.
	        iSection = Selection.Information(wdActiveEndSectionNumber)
	        ' For each Header type in the current section,
	        ' turn off Same As Previous.
	        For Each hHeader In ActiveDocument.Sections(iSection).Headers
	           hHeader.LinkToPrevious = False
	        Next hHeader
	     End Sub
	
	The following sample macro turns off Same As Previous for all headers and footers
	in the document.
	
	     Sub TurnOffSameAsPrevious()
	        ' Create variables.
	        Dim sSection As Section
	        Dim hfHeaderFooter As HeaderFooter
	        ' Go to each section in the document.
	        For Each sSection In ActiveDocument.Sections
	           ' Turn off "Same As Previous" in all Headers.
	           For Each hfHeaderFooter In sSection.Headers
	              hfHeaderFooter.LinkToPrevious = False
	           Next
	           ' Turns off "Same As Previous" in all Footers.
	           For Each hfHeaderFooter In sSection.Footers
	              hfHeaderFooter.LinkToPrevious = False
	           Next
	        Next sSection
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
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
	
	Additional query words: kbcode kbmacro vba
	
	======================================================================
	Keywords          : kbmacro kbdta kbmacroexample word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
