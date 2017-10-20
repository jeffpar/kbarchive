---
layout: page
title: "Q165187: WD97: No Dialog With WordBasic.Dialog.ToolsOptionsGrammar"
permalink: /kb/165/Q165187/
---

## Q165187: WD97: No Dialog With WordBasic.Dialog.ToolsOptionsGrammar

{% raw %}

	Article: Q165187
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
	
	When you attempt to run a macro using the Visual Basic for Applications
	WordBasic object to display the Spelling & Grammar tab of the Options dialog
	box, the dialog box is not displayed.
	
	CAUSE
	=====
	
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
	
	This example converted WordBasic macro duplicates this behavior:
	
	     Public Sub MAIN()
	
	        Dim dlg As Object: Set dlg = _
	        WordBasic.DialogRecord.ToolsOptionsGrammar(False)
	        WordBasic.CurValues.ToolsOptionsGrammar dlg
	        WordBasic.Dialog.ToolsOptionsGrammar dlg
	        WordBasic.ToolsOptionsGrammar dlg
	
	     End Sub
	
	WORKAROUND
	==========
	
	To work around this problem, change the code to use the following functionally
	equivalent Visual Basic for Applications command:
	
	     Dialogs(wdDialogToolsOptionsSpellingAndGrammar).Show
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
