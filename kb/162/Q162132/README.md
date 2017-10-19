---
layout: page
title: "Q162132: WD97: Run-time error '5880' Saving as HTML from VBA"
permalink: /kb/162/Q162132/
---

## Q162132: WD97: Run-time error '5880' Saving as HTML from VBA

	Article: Q162132
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the following line of Visual Basic for Applications code
	
	     ActiveDocument.SaveAs "My HTML Document.html", _
	     FileFormat:=Application.FileConverters("HTML").SaveFormat
	
	you receive the following error message:
	
	  Run-time error '5880': No registered converter supports saving files in this
	  format.
	
	CAUSE
	=====
	
	This problem occurs when accessing the "HTML" document format from the
	FileConverters collection using a string value instead of a numerical value for
	the index.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Word 97. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	On page 430 of the Microsoft Office 97 VisualBasic Programmer's Guide, it
	references the use of the FileConverters("HTML").SaveFormat syntax. The
	workaround in this article should be applied to the example in this Guide.
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
