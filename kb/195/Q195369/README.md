---
layout: page
title: "Q195369: WD97: Plus Sign Causes Incorrect Result in Formula"
permalink: /kb/195/Q195369/
---

## Q195369: WD97: Plus Sign Causes Incorrect Result in Formula

	Article: Q195369
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield kbformula winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you calculate the sum of a series of cells that contain numbers preceded by
	a plus (+) sign, the result is incorrectly shown as the sum of the negative
	numbers contained in the series or may be shown as zero when each of the numbers
	in the series is preceded by a plus sign.
	
	-or-
	
	When you calculate the average of a series of cells that contain numbers preceded
	by a plus (+) sign, the result is incorrectly shown as the average of the
	negative numbers or may be shown as 0.0 when each of the numbers in the series
	is preceded by a plus sign.
	
	WORKAROUND
	==========
	
	Method 1: Remove the Plus Signs
	-------------------------------
	
	The plus sign is not required by Word to identify the number as positive.
	
	Method 2: Move the Plus Signs to a New Column
	---------------------------------------------
	
	Add a column to your table, move the plus signs to the new column, and then
	update the formula field.
	
	NOTE: Do not move the negative signs to the new column, or your formula field
	result will be incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185400 WD97: How to Set Up a Table as a Spreadsheet in Word
	
	Additional query words: math wrong 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbfield kbformula winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
