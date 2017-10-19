---
layout: page
title: "Q162397: WD97: Cannot Switch to Navigation Pane in Document Map View"
permalink: /kb/162/Q162397/
---

## Q162397: WD97: Cannot Switch to Navigation Pane in Document Map View

	Article: Q162397
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the following Visual Basic for Applications command,
	
	     ActiveWindow.ActivePane.Next.Activate
	
	while in Document Map view, Word does not switch between the document pane and
	the navigation pane.
	
	CAUSE
	=====
	
	By design, Word considers Document Map view to be a single pane.
	
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
	
	To programmatically navigate a document by headings, use one of the following
	examples:
	
	To move to the Next browse target
	---------------------------------
	
	      With Application.Browser
	        .Target = wdBrowseHeading
	        ' Move to next Browse Heading
	        .Next
	     End With
	
	To move to the Previous browse target
	-------------------------------------
	
	      With Application.Browser
	        .Target = wdBrowseHeading
	        ' Move to previous Browse Heading
	        .Previous
	     End With
	
	Before ending the macro, you may want to return to the Browsing Target that was
	in use prior to and after changing the Browsing Target. The following example
	demonstrates how to do this:
	
	     Sub BrowseByHeading()
	        Dim iCurrentBrowse As Integer
	        'Store current browse mode
	        iCurrentBrowse = Application.Browser.Target
	        'Set new browse mode
	        With Application.Browser
	           .Target = wdBrowseHeading
	           ' Move to next Browse Heading
	           .Next
	        End With
	        'Return to stored browse mode
	        Application.Browser.Target = iCurrentBrowse
	     End Sub
	
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
