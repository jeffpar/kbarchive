---
layout: page
title: "Q162436: WD97: Float Over Text Option Unavailable Recording Macro"
permalink: /kb/162/Q162436/
---

## Q162436: WD97: Float Over Text Option Unavailable Recording Macro

{% raw %}

	Article: Q162436
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
	
	When you record a macro, you cannot use the Format <object> dialog box to
	change the property of a shape from "float over text" to "inline" (where
	<object> includes a picture, OLE object, or ActiveX control).
	
	NOTE: The Float Over Text check box is unavailable to select.
	
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
	
	Use one of the following methods to convert the object to an inline or floating
	object.
	
	Method 1: Convert the First Floating Shape to an Inline Shape
	-------------------------------------------------------------
	
	     ActiveDocument.Shapes(1).ConvertToInlineShape
	
	Method 2: Convert the First Inline Shape to a Floating Shape
	------------------------------------------------------------
	
	     ActiveDocument.InlineShapes(1).ConvertToShape
	
	For more information about the ConvertToInlineShape method, click the Office
	Assistant while in the Visual Basic Editor, type "ConvertToInlineShape" (without
	the quotation marks), click Search, and then click to view "ConvertToInlineShape
	Method."
	
	For more information about ConvertToShape Method, click the Office Assistant
	while in the Visual Basic Editor, type "ConvertToShape" (without the quotation
	marks), click Search, and then click to view "ConvertToShape Method."
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
