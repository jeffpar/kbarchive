---
layout: page
title: "Q163807: WD97: Illegal Operation Opening Form Field Options Dialog Box"
permalink: /kb/163/Q163807/
---

## Q163807: WD97: Illegal Operation Opening Form Field Options Dialog Box

	Article: Q163807
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 kbwordvba word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the Options dialog box for a form field (right-click
	the field and click Properties on the shortcut menu that appears), you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in MSO97.DLL at 0137:30733613.
	
	NOTE: The actual memory address may vary.
	
	
	CAUSE
	=====
	
	This error may be caused by having two or more Visual Basic for Applications
	modules each containing subroutines with the same name in the your template.
	
	For example, the following scenario will cause the error:
	
	  Module name         Macro name
	  ------------------------------
	
	  Module1             Main()
	
	  Module2             Main()
	
	
	
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	WORKAROUND
	==========
	
	Rename the macro or macros so they contain unique names. For example:
	
	  Module Name         Macro Name
	  ---------------------------------
	
	  Module1             Module1Main()
	
	  Module2             Module2Main()
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	Additional query words: wordcon 97 vb vbe vba word8 word97 8.0
	
	======================================================================
	Keywords          : kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
