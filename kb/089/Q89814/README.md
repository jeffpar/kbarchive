---
layout: page
title: "Q89814: IBM Quietwriter III: Minimum Right Margin Is 1.679 Inches"
permalink: /kb/089/Q89814/
---

## Q89814: IBM Quietwriter III: Minimum Right Margin Is 1.679 Inches

	Article: Q89814
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IBM Quietwriter III printer driver version 1.0 with Microsoft
	Windows version 3.1, you cannot set the right margin below 1.679 inches when the
	paper source is US Standard Fanfold 14 7/8 x 11.
	
	CAUSE
	=====
	
	According to IBM printer support, the maximum printing region of IBM Quietwriter
	III is 13.2 inches. If you use the US Standard Fanfold 14 7/8 x 11 inch paper,
	the minimum right margin is 1.675 inches:
	
	    14.875 in   Total width of paper
	  - 13.200 in   Maximum writing line
	  -----------
	     1.675 in   Default Right Margin
	  -----------   (approximately 1.67 - 1.68 inches)
	
	NOTE: This is by design and is not a limitation of the IBM Quietwriter III. Thus,
	no matter where you set the left margin, the printer always stops printing at
	13.2 inches or does not print below 1.68 inches.
	
	MORE INFORMATION
	================
	
	Using IBM Quietwriter III with Microsoft Write
	----------------------------------------------
	
	When you use the IBM Quietwriter III driver version 1.0 with Microsoft Windows
	Write version 3.1 and you try and set the right margin to below 1.68 inches, you
	will get an error message saying that Windows is unable to print outside the
	range you have specified.
	
	Using the IBM Quietwriter III with Windows 3.0
	----------------------------------------------
	
	When you use the IBM Quietwriter III driver version 2.04 with Microsoft Windows
	version 3.0 you can specify the right margin below 1.679 inches, but not below
	0.55 inches. Even though you can set the right margin below 1.679 inches, the
	maximum writing line will still be 13.2 inches.
	
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 3.1 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
