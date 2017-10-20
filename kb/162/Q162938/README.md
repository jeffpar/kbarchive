---
layout: page
title: "Q162938: WD97: Macro Returns to View Used Before Opening Header"
permalink: /kb/162/Q162938/
---

## Q162938: WD97: Macro Returns to View Used Before Opening Header

{% raw %}

	Article: Q162938
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a macro that opens, modifies, and closes the header or footer, you
	are returned to page layout view when the macro finishes, regardless of which
	document view you were using prior to running the macro.
	
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
	
	To return to the document view you were using prior to running the macro, use a
	Visual Basic for Applications macro that adds the following functionality:
	
	- Dimensions a variable to hold the current view.
	
	- Saves the current view into the variable.
	
	- Restores the original view when the macro finishes.
	
	    Sub ViewHeaderFooterExample()
	        ' Add this line that dimensions a variable.
	        ' to store the current view.
	        Dim OriginalView As Long   ' <-- Add
	        ' Recorded Code.
	        If ActiveWindow.View.SplitSpecial <> wdPaneNone Then
	           ActiveWindow.Panes(2).Close
	        End If
	        ' Add this line that captures the current view.
	        OriginalView = ActiveWindow.ActivePane.View.Type   ' <-- Add
	        ' Recorded Code.
	        If ActiveWindow.ActivePane.View.Type = wdNormalView Or _
	           ActiveWindow.ActivePane.View.Type = wdOutlineView Or _
	           ActiveWindow.ActivePane.View.Type = wdMasterView Then
	           ActiveWindow.ActivePane.View.Type = wdPageView
	        End If
	        ActiveWindow.ActivePane.View.SeekView = wdSeekCurrentPageHeader
	        ActiveWindow.ActivePane.View.SeekView = wdSeekMainDocument
	        ' Add this line that returns the view to the original view.
	        ActiveWindow.ActivePane.View.Type = OriginalView   ' <-- Add
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	For more information about how to edit a macro, click the Office Assistant while
	in the Visual Basic Editor, type "edit a macro" (without the quotation marks)
	click Search, and then click to view "Edit a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe record Master Outline Online
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
