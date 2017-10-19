---
layout: page
title: "Q160071: WD97: VB Code to Select or Clear a Check Box in a Dialog Box"
permalink: /kb/160/Q160071/
---

## Q160071: WD97: VB Code to Select or Clear a Check Box in a Dialog Box

	Article: Q160071
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Word you can select (check) or clear a check box option using the built- in
	Word dialog boxes. For example, the Background Repagination option is a check
	box that can be turned on or off (on the Tools menu, click Options, and then
	click the General tab.) This functionality can be accomplished using a Visual
	Basic for Applications routine (macro) that you create.
	
	This article provides a sample Visual Basic for Applications routine that
	demonstrates how to toggle a check box state between On and Off.
	
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
	
	In Visual Basic for Applications, a check box in a dialog box has a value of True
	(-1) to set a selected state or a value of False (0) to set a cleared state.
	
	The following Visual Basic example turns the Background Repagination option on or
	off each time you run the macro. When the Background Repagination check box is
	selected, its state is True (-1); when the check box is cleared, its state is
	False (0).
	
	Using the logical NOT operator, you can toggle between the True and False states
	each time you run the macro. That is, if the state is True, it toggles to NOT
	True (False), and if the state is False it toggles to NOT False (True).
	
	     Sub TogglePagination()
	        ' Switches between checked and unchecked states.
	        Options.Pagination = Not Options.Pagination
	     End Sub
	
	Another method you can use checks the state and, dependent upon the state, sets
	the opposite state using an If...Then...Else statement. Using this method you
	can also perform an action based on the current state. For example:
	
	     Sub TogglePagination()
	        ' Switches between checked and unchecked states.
	        If Options.Pagination = True Then
	           ' Perform some action if True.
	           Options.Pagination = False
	        Else
	           ' Perform some other action if False.
	           Options.Pagination = True
	        End If
	     End Sub
	
	Note: When you use Options.Pagination=True, the option is turned On; when you use
	Options.Pagination=False, the option is turned Off.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vb vba vbe yes no checkbox toggled toggling toggles
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
