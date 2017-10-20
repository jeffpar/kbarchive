---
layout: page
title: "Q162207: WD97: &quot;Replace With&quot; Format Incorrect with Recorded Macro"
permalink: /kb/162/Q162207/
---

## Q162207: WD97: &quot;Replace With&quot; Format Incorrect with Recorded Macro

{% raw %}

	Article: Q162207
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a macro that was recorded to find and replace formatting, the
	"Replace With" formatting will be applied to the text located at the insertion
	point.
	
	CAUSE
	=====
	
	When you use the Find or Replace commands on the Edit menu, you can specify
	formatting by choosing that formatting item from one of the built-in toolbars.
	
	For example, to find all paragraphs formatted for Center alignment:
	
	1. In the Find and Replace dialog box, click the Find What box.
	
	2. Click the Center Alignment button on the Formatting toolbar.
	
	This will apply center alignment as a search criteria.
	
	When you record a macro to perform these steps, the action of clicking on the
	formatting button is recorded as part of the Edit or Replace command as
	expected. However, these actions are also recorded as separate commands in the
	macro. When the recorded macro is run, this results in the Replace With
	formatting being applied to the area where the search begins.
	
	For example, if you have the following text in your document
	
	  This is paragraph one that is Left Aligned.
	              This is paragraph two that is Center Aligned.
	  This is paragraph three that is Left Aligned.
	
	and, for this example,
	
	1. The search criteria in the recorded macro for Find What is set to Center
	  Alignment.
	
	2. The Replace With criteria is set to Right Alignment.
	
	3. The insertion point is in the first paragraph prior to running the macro.
	
	the result will format both paragraphs one and two with right alignment, as in
	the following example:
	
	                         This is paragraph one that was Left Aligned.
	                         This is paragraph two that was Center Aligned.
	This is paragraph three that is Left Aligned.
	
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
	
	Method 1: Use the Format Button in the Find and Replace Dialog Box
	------------------------------------------------------------------
	
	In the Find And Replace dialog box, use the Format button to set the Find What
	and Replace With criteria (the Format button is located at the bottom of the
	Find and Replace dialog box).
	
	Method 2: Edit the Recorded Macro and Remove the Extra Commands
	---------------------------------------------------------------
	
	You can remove or disable the formatting commands that were applied when you
	recorded the macro.
	
	To edit the macro, use the following steps:
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. From the list of available macros, select the macro to edit.
	
	3. Click the Edit button.
	
	4. In the Visual Basic Editor window, scroll through the macro until you see
	  commands similar to the following:
	
	     Selection.ParagraphFormat.Alignment = wdAlignParagraphCenter
	     Selection.ParagraphFormat.Alignment = wdAlignParagraphRight
	     Selection.Find.ClearFormatting
	     Selection.Find.ParagraphFormat.Alignment = wdAlignParagraphCenter
	     Selection.Find.Replacement.ClearFormatting
	     Selection.Find.Replacement.ParagraphFormat.Alignment = _
	        wdAlignParagraphRight
	     With Selection.Find
	
	5. Comment the two lines of code prior to Selection.Find.ClearFormatting by
	  adding an apostrophe at the beginning of the lines.
	
	  For example:
	
	     'Selection.ParagraphFormat.Alignment = wdAlignParagraphCenter
	     'Selection.ParagraphFormat.Alignment = wdAlignParagraphRight
	     Selection.Find.ClearFormatting
	
	6. On the File menu, click Close and Return to Microsoft Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
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
	Keywords          : kbualink97 word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
