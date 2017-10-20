---
layout: page
title: "Q275558: WD97: Runtime Error '4198' Running Macro to Paste Excel Object"
permalink: /kb/275/Q275558/
---

## Q275558: WD97: Runtime Error '4198' Running Macro to Paste Excel Object

{% raw %}

	Article: Q275558
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97, when you run a macro to paste a Microsoft Excel object into a Word
	document, you receive the following error message:
	
	  Runtime error '4198'
	  Command Failed
	
	CAUSE
	=====
	
	This problem occurs when the macro uses the PasteSpecial method of the Range
	object to paste an enhanced metafile into the Word document. The PasteSpecial
	operation may succeed several times before you receive the error message.
	
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
	
	To work around this problem, use the <selection_object>.PasteSpecial method
	rather than the <range_object>.PasteSpecial method. For example, instead
	of using the statement
	
	  Rng.PasteSpecial datatype:=wdPasteEnhancedMetafile
	
	use the statements
	
	  Rng.Select
	  Selection.PasteSpecial datatype:=wdPasteEnhancedMetafile
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: Word97 wd 97 excel97 xl97 vba automation pastespecial 4198
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
