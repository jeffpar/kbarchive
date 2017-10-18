---
layout: page
title: "Q177052: WD97: Application Error Printing from Shortcut Menu in Explorer"
permalink: kb/177/Q177052/
---

## Q177052: WD97: Application Error Printing from Shortcut Menu in Explorer

	Article: Q177052
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbprint kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Standard Edition for Windows 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a Microsoft Word 97 document from Windows Explorer by right-
	clicking the document and clicking Print on the shortcut menu, the following
	error message appears:
	
	  The instruction at "0x3000A7C6" referenced memory at "0xFFFFFFFF". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	This type of error can occur when the Word document contains code in the
	Document_Open event or AutoOpen macro that changes the Visible property of a
	menu or toolbar.
	
	Example:
	
	     Application.CommandBars("standard").Controls("&open...").Visible = False
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	To temporarily work around this problem, use the Delete method rather than
	setting the Visible property to False.
	
	For example, you can replace a statement like the following
	
	     Application.CommandBars("standard").Controls("&open...").Visible = False
	
	with:
	
	     CommandBars("standard").Controls(3).Delete
	
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
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	REFERENCES
	==========
	
	For more information about the Delete method or setting the Visible property,
	click the Office Assistant in the Visual Basic Editor, type "Delete Method"
	(without the quotation marks) or "Visible Property" (without the quotation
	marks), click Search, and then click to view "Delete Method (Microsoft Office
	Reference) or "Visible Property (Microsoft Office Reference)."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon WD97 WORD97 SR2
	======================================================================
	Keywords          : kbcode kbProgramming kbprint kbdta 
	Technology        : kbWordSearch kbOfficeSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOffice97Search kbOffice97
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
