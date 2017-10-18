---
layout: page
title: "Q167150: WD97: Invalid Page Fault with WordBasic.EditLinks and &#92;Sel"
permalink: kb/167/Q167150/
---

## Q167150: WD97: Invalid Page Fault with WordBasic.EditLinks and &#92;Sel

	Article: Q167150
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to unlink a file that has been inserted into a document by
	selecting the linked file and then using the following Visual Basic for
	Applications WordBasic object command:
	
	     WordBasic.EditLinks KillLink := 1, Link := "\Sel"
	
	You will receive the following error:
	
	  Word Error 1005: This bookmark does not exist.
	
	Choosing OK results in the following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	If you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:30360af5.
	
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
	
	Use the WordBasic UnlinkFields command to successfully unlink the selected
	field,
	
	  WordBasic.UnlinkFields
	
	-or-
	
	using Visual Basic for Applications commands, the following example unlinks the
	first field in the active document:
	
	  ActiveDocument.Fields(1).Unlink
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbcode kbProgramming word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
