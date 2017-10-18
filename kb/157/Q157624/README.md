---
layout: page
title: "Q157624: Error Recording Opening Template with WordBasic Macro"
permalink: kb/157/Q157624/
---

## Q157624: Error Recording Opening Template with WordBasic Macro

	Article: Q157624
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbdtacode word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are recording a Visual Basic for Applications macro in Word and you try
	to open a template containing a WordBasic macro, the following error message
	appears:
	
	  Word cannot open files containing WordBasic macros while macro recording.
	  Stop macro recording and try again.
	
	CAUSE
	=====
	
	WordBasic macros cannot be converted to Visual Basic for Applications while the
	Visual Basic macro recorder is recording.
	
	
	WORKAROUND
	==========
	
	Stop recording the macro and open the file to automatically convert the
	WordBasic macro. Save the template in Word 97 format, and then record the macro
	using the newly converted template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbualink97 kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
