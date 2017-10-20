---
layout: page
title: "Q171063: WD97: Merged Table Cells and Rows Do Not Print Bottom Border"
permalink: /kb/171/Q171063/
---

## Q171063: WD97: Merged Table Cells and Rows Do Not Print Bottom Border

{% raw %}

	Article: Q171063
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you merge cells vertically, if the cells contain a left and right border in
	the last row of a table, the bottom part of the left and right border will not
	be printed, even though it shows up correctly in print preview.
	
	NOTE: This behavior occurs only when the merged cells span more than one page.
	Note also that a bottom horizontal border is not printed when merged cells span
	a page break. This is a different issue from the one described in this article.
	
	CAUSE
	=====
	
	When you vertically merge cells with a left and right border, the bottom part of
	the left and right border is not "pushed down" so that the border applies to the
	bottom of the new cells.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	NOTE: This will not correct the problem where the horizontal border of a merged
	cell does not print if the merged cell spans a page break.
	
	To work around this problem, after merging the cells, follow these steps to
	remove and reapply the border settings:
	
	1. Select the merged cells.
	
	2. On the Format menu, click Borders And Shading.
	
	3. Click the Borders tab.
	
	4. Under Setting, click to select None.
	
	5. Make sure the Apply To area is set to Cell.
	
	6. Click OK.
	
	7. Make sure that the cell is still selected.
	
	8. On the Format menu, click Borders And Shading.
	
	9. Click the Borders tab.
	
	10. Under Setting, click the settings that you want to use for the border.
	
	11. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	This problem only occurs if the height of the cells is relatively small.
	
	REFERENCES
	==========
	
	For more information about merging table cells, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q157478 WD97: What's New in Word 97
	
	For more information about merging table cells, click the Office Assistant, type
	"merging table cells," click Search, and then click "Merge cells into one cell
	in a table."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: sr1 release1 8.0 8.00 missing broken gone partial
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
