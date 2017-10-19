---
layout: page
title: "Q161524: WD97: Invalid Page Fault Modifying Numbered Style"
permalink: /kb/161/Q161524/
---

## Q161524: WD97: Invalid Page Fault Modifying Numbered Style

	Article: Q161524
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify the paragraph formatting of a numbered style (for example, List
	Number) in a document created in Word for Windows 95, you receive the following
	error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click the Details button, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at
	  0137:<address>.
	
	CAUSE
	=====
	
	The numbering format is not retained when you convert the document from Word for
	Windows 95 format to Word 97 for Windows format. These symptoms appear when you
	do the following:
	
	- You select the Automatically Update check box in the Modify Style dialog
	  box.
	
	  -and-
	
	- You click Apply in the Style dialog box.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, before you modify the style of the paragraph that
	contains the numbering, reapply the numbering format using the following steps:
	
	1. Open the Word for Windows 95 document in Microsoft Word 97 for Windows.
	
	2. On the Format menu, click Style.
	
	3. In the Styles list, click the style that contains the numbering format you
	  want to change. For example, click List Number. Click Modify.
	
	4. In the Modify Style dialog box, click Format, and then click Numbering.
	
	5. In the Bullets and Numbering dialog box, click the Numbered tab.
	
	6. Select the appropriate numbering format, and then click OK.
	
	7. Click OK.
	
	8. Click Apply.
	
	9. Save your document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	Additional query words: sr1 release1 8.0 8.00 ipf gpf numbers
	
	======================================================================
	Keywords          : kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
