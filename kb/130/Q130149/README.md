---
layout: page
title: "Q130149: WD97: Memory Error When Document Saved in Word 95 Format"
permalink: kb/130/Q130149/
---

## Q130149: WD97: Memory Error When Document Saved in Word 95 Format

	Article: Q130149
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon word8 word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Microsoft Word 7.x for Windows document in Microsoft Word 97 in
	the Word 6.0/95 format, you may receive the following error message:
	
	  There is not enough memory or disk space to convert this document.
	
	CAUSE
	=====
	
	The List Separator on the Number tab of Regional Settings (Control Panel) is set
	to a semicolon. When the list separator is a semicolon, the Microsoft Word 97
	converter does not save the document correctly.
	
	NOTE: The semicolon is most often used as a list separator in International
	versions of Microsoft Word and Microsoft Windows.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 for Windows, Service Release 2
	(SR-2).
	
	To temporarily work around this problem, use something other than a semicolon for
	the list separator within the Regional Settings. To do this, follow these
	steps:
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. On the Windows Start menu, point to Settings, and click Control Panel.
	
	2. Double-click Regional Settings (in Microsoft Windows 2000, double-click
	  Regional Options) and then click the Number tab.
	
	3. Change the List Separator to something other than a semicolon. For example,
	  change the separator to a comma.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 97 for Windows, Service Release 2 (SR-2).
	
	For additional information about Service Release 2, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon word8 word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
