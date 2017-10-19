---
layout: page
title: "Q164234: WD97: How to Break Out of an Infinite Macro Loop"
permalink: /kb/164/Q164234/
---

## Q164234: WD97: How to Break Out of an Infinite Macro Loop

	Article: Q164234
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbusage word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To break out of macro execution using Visual Basic for Applications, press
	CTRL+BREAK.
	
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
	
	In versions of Word prior to Word 97, the WordBasic macro language allowed you to
	break out of macro execution using the ESC key. Beginning with Word 97, Visual
	Basic for Applications has replaced WordBasic as the Word for Windows macro
	language.
	
	There can be many causes for an infinite loop. For, example an infinite loop will
	occur if you create a loop to check the value of a variable that never changes,
	as in the following example:
	
	     Sub InfiniteLoop()
	        Dim n As Integer
	        n = 0
	        Msgbox ("WARNING: This macro will cause an infinite loop. Press" & _
	        CTRL+BREAK to exit an infinite loop.")
	        Do
	        ' Because the "Do...Loop" is looking for the value of 'n'
	        ' to equal 1, and because there is no code within the loop
	        ' to change the value of the variable 'n' from it's initial
	        ' value of zero, the "Do...Loop" will continue to loop indefinitely.
	        Loop Until n = 1
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbProgramming kbusage word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
