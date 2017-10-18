---
layout: page
title: "Q162896: PPT97: Word Table Borders Displayed Incorrectly in PowerPoint"
permalink: kb/162/Q162896/
---

## Q162896: PPT97: Word Table Borders Displayed Incorrectly in PowerPoint

	Article: Q162896
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbolekbbuglist kbfixlist
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In PowerPoint, a Microsoft Word table with borders will not be displayed
	correctly: some of the borders may be missing.
	
	This problem is a display problem only. The table borders print correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	WORKAROUND
	==========
	
	To allow the Word table borders to be displayed correctly in PowerPoint, apply a
	thicker border to the Word table:
	
	1. In PowerPoint, select the Word table by dragging the mouse over the entire
	  table.
	
	2. On the Format menu, click Borders And Shading.
	
	3. Click the Border tab. Under setting, click the desired type of border. Change
	  the Width to a thick value; for example, 1 1/2 pt or greater. Make any other
	  changes to the borders, as desired, and then click OK.
	
	  NOTE: Be sure to apply the thick borders to the outside border, as well as the
	  inner borders of the table. Also, some of the borders may appear thicker than
	  others.
	
	4. Click outside the Word table to return to PowerPoint.
	
	The Word table borders should now be displayed correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Word 97
	SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install the MS Office 97 SR-1 Patch
	
	Additional query words: 97 8.00 word8 word97 ppt8 ppt97 sr1 lines pasted
	
	======================================================================
	Keywords          : kbinterop kbole kbbuglist kbfixlist
	Technology        : kbWordSearch kbPowerPtSearch kbWord97 kbWord97Search kbPowerPt97 kbZNotKeyword2 kbPowerPt97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
