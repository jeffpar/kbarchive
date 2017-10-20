---
layout: page
title: "Q173918: WD97: Word Hangs If VBA Adds Inline Control in Header or Footer"
permalink: /kb/173/Q173918/
---

## Q173918: WD97: Word Hangs If VBA Adds Inline Control in Header or Footer

{% raw %}

	Article: Q173918
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Visual Basic for Applications to insert an inline ActiveX control
	into the header or footer of a Word document, Word may stop responding.
	
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
	
	This problem may occur if you omit the Range argument from the command line that
	inserts the ActiveX control.
	
	For example, the following Visual Basic for Applications command line inserts an
	inline ActiveX control at the insertion point:
	
	      Selection.InlineShapes.AddOLEControl ClassType:="Forms.CheckBox.1", _
	      Range:=Selection.Range
	
	If you omit the Range argument, as in the following example,
	
	      Selection.InlineShapes.AddOLEControl ClassType:="Forms.CheckBox.1"
	
	Word stops responding if either the header or footer of the document is active
	when you run the command.
	
	WORKAROUND
	==========
	
	To work around this problem, include the Range argument as part of the command
	to insert an inline ActiveX control into a header or footer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	
	Additional query words: wordcon checkbox button listbox drop down textbox optionbutton togglebutton kbcode kbmacro vba 8.0 8.00
	
	======================================================================
	Keywords          : word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
