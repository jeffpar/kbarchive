---
layout: page
title: "Q113644: Single Digit Playback in Excel 5.0 Proofreader"
permalink: kb/113/Q113644/
---

## Q113644: Single Digit Playback in Excel 5.0 Proofreader

	Article: Q113644
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	- Microsoft Excel for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can play back single-digit format from Proofreader in Excel 5.0 (for
	example, one-zero-zero-zero instead of one thousand).
	
	MORE INFORMATION
	================
	
	1. Select the cell(s) to be proofread.
	
	2. From the Format menu, choose Cells.
	
	3. Select the Number tab and select Custom from the Category box.
	
	4. In the Code box, type 0-0-0-0-0-0 (include the hyphens for as many zeros as
	  there are digits in the largest number in the cell range).
	
	5. Choose OK.
	
	When the selected range of cells is proofread, the display of the numbers will be
	indicated with the hyphens between them, but the numbers in each cell will be
	played back one digit at a time.
	
	To change the number format, repeat the above procedure and remove the hyphens
	between the number in the Code box under the custom category.
	
	Additional query words: 1.00 1.00a 2.00 proof read reader digit play back
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbExcel500 kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200 kbExcelWinSearch
	
	=============================================================================
	
