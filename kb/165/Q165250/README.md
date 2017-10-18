---
layout: page
title: "Q165250: WD97: Errors Setting Border LineWidths Via Macro Commands"
permalink: kb/165/Q165250/
---

## Q165250: WD97: Errors Setting Border LineWidths Via Macro Commands

	Article: Q165250
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to set the Line Width for a border using Microsoft Visual Basic
	for Applications commands, you receive one of the following errors:
	
	  Run-time error '5843': One of the values passed to this method or property is
	  out of range.
	
	  -or-
	
	  Run-time error '4120': Bad Parameter
	
	CAUSE
	=====
	
	You are attempting to set a line width which is not available for the current or
	specified line style.
	
	WORKAROUND
	==========
	
	When applying borders using Visual Basic For Applications commands, you can
	specify the line style and the line width of the border to be applied. Each
	border line style has a different number of varying line widths that can be
	applied to a border. That is, all line widths are not available to use with
	every line style.
	
	Also, the list of wdLineWidth constants are available for use in a macro
	regardless of the line style being applied. There is no programmatic method
	available for determining whether a particular line width is a valid width to
	use with a chosen border line style. If you apply an invalid line width to a
	line style and then compile and run your macro, an error occurs.
	
	For more information about detting line widths, click the Office Assistant while
	in the Visual Basic Editor, type "LineWidth" (without the quotation marks),
	click Search, and then click to view "LineWidth Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
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
	Keywords          : kberrmsg kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
