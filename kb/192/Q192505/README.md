---
layout: page
title: "Q192505: Microsoft Excel 97 Step by Step Comments and Corrections"
permalink: /kb/192/Q192505/
---

## Q192505: Microsoft Excel 97 Step by Step Comments and Corrections

{% raw %}

	Article: Q192505
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel 97 Step by Step ISBN 1-57231-314-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Excel 97 Step by Step, ISBN
	1-57231-314-5.
	
	The following topics are covered:
	
	- Page xix: Area code (425) was left off the phone number
	
	- Page 33: Incorrect Screen Shot
	
	- Page 37: Incorrect Text
	
	- Page 51, Step 1: Formula In J10 May Not Return Correct Answer
	
	- Page 64: Missing Illustration
	
	- Page 72, Step 1: Change click Open to click New
	
	- Page 126: Dates in 1996 Orders.txt Formatted for US Only
	
	- Page 127: 1996 Orders.txt Should Be 1996Order.txt
	
	- Instructions on uninstalling Practice files left out
	
	MORE INFORMATION
	================
	
	Page xix: Area code (425) was left off the phone number
	-------------------------------------------------------
	
	On page xix, under the "Corrections, Comments, and Help" section, in the last
	sentence, the phone number for Microsoft Excel 97 Product Support Services does
	not include an area code.
	
	Change:
	"For help using Microsoft Excel 97, you can call Microsoft Excel 97 AnswerPoint
	at 635-7070 on weekdays..."
	
	To:
	"For help using Microsoft Excel 97, you can call Microsoft Excel 97 Product
	Support Services at (425)635-7070 on weekdays..."
	
	
	Page 33: Incorrect Screen Shot
	------------------------------
	
	Page 33, First screen shot:
	Rename Sheet1 to "Invoice".
	Delete Sheet2 and Sheet3.
	
	
	Page 37: Incorrect Text
	-----------------------
	
	Page 37, Step 7:
	Change: "You must enter a whole number greater than 10."
	To: "You must enter a whole number greater than or equal to 10."
	
	
	Page 51, Step 1: Formula In J10 May Not Return Correct Answer
	-------------------------------------------------------------
	
	On page 51, step 1, when you type in the following formula into cell J10:
	
	  =Qty*Price
	
	Microsoft Excel may return a number in the millions. A similar error will occur
	if you use AutoFill to copy this formula into cells J11 through J23.
	
	If you look at the formula in J10 after you have entered it, the formula appears
	as:
	
	  =Qty*PRICE
	
	PRICE is a function used by the Microsoft Excel Analysis Toolpak add-in. If you
	have this add-in enabled, rather than recognizing the label for the Price
	column, Excel will apply the PRICE function to the number in the Qty column,
	causing an error.
	
	In step 1, type the following formula in cell J10:
	
	  =Qty*"Price"
	
	The addition of the quotation marks will cause Excel to correctly identify the
	column label.
	
	  -or-
	
	Disable the Analysis Toolpak add-in by following these steps:
	
	1. On the Tools menu, click Add-In.
	
	2. Click to clear the check box next to Analysis Toolpak.
	
	3. Click OK.
	
	Correction:
	Page 51, step 1:
	Change: "In cell J10, type =Qty*Price, and press ENTER."
	To: "In cell J10, type "Qty"*"Price", and press ENTER."
	
	
	Page 64: Missing Illustration
	-----------------------------
	
	Page 64, Step 7:
	Refers to an illustration that does not exist. This error will be corrected in a
	future reprint or edition of this book.
	
	
	Page 72, Step 1: Change click Open to click New
	-----------------------------------------------
	
	Page 72, "One Step Further", Step 1:
	
	Change:
	"On the File menu, click Open, and..."
	To:
	"On the File menu, click New, and..."
	
	
	Page 126: Dates in 1996 Orders.txt Formatted for US Only
	--------------------------------------------------------
	
	Outside the United States, the dates in 1996 Orders.txt may not import correctly
	using the Text Import Wizard. Excel 97 may regard the dates as text rather than
	as dates.
	
	The dates used in this text file were written in the United States format of
	MM/DD/YY. Outside the United States, many Windows 95 systems are programmed to
	expect dates in other forms, such as DD/MM/YY.
	
	You can temporarily set your computer to English (United States) to see this
	lesson performed correctly. This change should not affect the language of the
	system, only the currency, time, and other regional settings.
	
	To change the date format, follow these steps:
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. On the Regional Settings tab, click to select English (United States.)from
	  the list and click OK.
	
	Run through lesson 8 as normal. When you are finished, follow these steps to undo
	the changes.
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. On the Regional Settings tab, click to select the setting which matches your
	  country or region, from the list and click OK.
	
	
	Page 127: 1996 Orders.txt Should Be 1996Order.txt
	-------------------------------------------------
	
	Page 127, step 3:
	Change: "Double-click the 1996 Orders.txt file."
	To: "Double-click the 1996Order.txt file."
	
	
	Instructions on uninstalling Practice files left out
	----------------------------------------------------
	
	The "Uninstall Practice files" instructions were omitted from the Introduction
	and should be added to next reprint.
	
	You can use the following steps to delete the shortcuts added to your desktop and
	the practice files added to your hard drive by the Step by Step Setup program.
	
	1. If any windows are covering the shortcuts on your Desktop, use the right
	  mouse button to click an unoccupied area of the taskbar at the bottom of your
	  screen, and then click Minimize All Windows.
	
	2. On the Desktop, click the Microsoft Press Welcome shortcut icon, hold down
	  CTRL, and click the Excel Camcorder Files shortcut icon. Press DELETE. If you
	  are prompted to confirm the deletion, click Yes. The Desktop shortcut icons
	  are removed from your computer.
	
	3. Click Start. The Start menu appears.
	
	4. On the Start menu, point to Programs. The Programs menu appears.
	
	5. On the Programs menu, click Windows Explorer. Explorer starts. Explorer is
	  divided into two windows. The left window lists the computers, disk drives
	  and folders on your system. The right window lists the contents of what you
	  have selected in the left window.
	
	6. In the right window find the Excel SBS Practice folder and right click on it.
	  A pop-up menu appears.
	
	7. On the pop-up menu, click Delete. If prompted to confirm the deletion, click
	  Yes. All of the Excel Practice files have been deleted.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
