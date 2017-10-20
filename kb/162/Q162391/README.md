---
layout: page
title: "Q162391: WD97: Activewindow.Panes.Count Returns 1"
permalink: /kb/162/Q162391/
---

## Q162391: WD97: Activewindow.Panes.Count Returns 1

{% raw %}

	Article: Q162391
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
	
	When the Document Map view is the active view, the Activewindow.Panes.Count
	command returns 1 instead of 2 as expected.
	
	CAUSE
	=====
	
	The Document Map view consists of two elements: a document pane and a document
	navigation pane. By design, Word considers Document Map view to be a single
	pane; therefore, the pane count returned is 1.
	
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
	
	To workaround this problem you can use the following example Visual Basic for
	Applications routine. This routine uses the DocumentMap property to determine if
	Document Map view is turned on. If it is, then the macro sets the variable,
	numPanes, equal to 2.
	
	     Sub IsDocMapOn()
	        If ActiveWindow.DocumentMap = True Then
	           numPanes = 2
	        End If
	     End Sub
	
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
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
