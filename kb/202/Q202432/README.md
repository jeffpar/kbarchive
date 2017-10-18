---
layout: page
title: "Q202432: XCLN: EFD Forms Date Fields Don't Work for Years 2000 &amp; Greater"
permalink: kb/202/Q202432/
---

## Q202432: XCLN: EFD Forms Date Fields Don't Work for Years 2000 &amp; Greater

	Article: Q202432
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Date field in a form that was created with Exchange Forms Designer
	(EFD), which is a stand-alone 16-bit Visual Basic run-time utility, the dates do
	not work as expected for dates with year values 2000 or greater. For example, if
	you type the date 01/28/00 into the Date field, the displayed result is Sunday,
	January 28, 1900, instead of Friday, January 28, 2000.
	
	CAUSE
	=====
	
	Exchange Forms Designer is not year 2000 (Y2K) compliant. EFD changes the
	two-digit date value to 19XX, where XX is the date value entered.
	
	For additional information on how Visual Basic 4.0 handles dates, please see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/technet/year2k/product/user_view71810EN.htm
	
	RESOLUTION
	==========
	
	There is no resolution for this issue. Outlook 97, Outlook 98, and Outlook 2000
	have their own 32-bit Forms Design routines that are Y2K compliant, and
	correctly display a date in the form 01/28/00.
	
	WORKAROUND
	==========
	
	Use Outlook 97, Outlook 98, Outlook 2000, or 32-bit Visual Basic to design your
	forms.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The following steps are for Outlook 98, but you can reproduce the problem in
	Outlook 97 and Outlook 2000 as well.
	
	1. Set your computer's date to any date before January 1, 2000.
	
	2. Start Outlook.
	
	3. On the Tools menu, click Options, click Other, click Advanced Options, click
	  Custom Forms, and then click Manage Forms.
	
	4. Click Install, and then point to the attached FDM file.
	
	5. Click OK to install it into the selected forms library.
	
	6. On the Tools menu, click Forms, and then click Choose Form to start the EFD
	  form.
	
	7. Place the cursor in the Date field, type "01/28/00" (without the quotation
	  marks), and then press TAB to exit the field.
	
	Actual Result:
	The date changes to Sunday, January 28, 1900.
	
	Expected Result:
	The date should change to Friday, January 28, 2000.
	
	NOTE: If you type the date with four digits for the year (for example,
	01/28/2000), then it correctly displays the expected date. Similarly, if your
	system date is changed so that the current year is 2000-2099, then "00-99" are
	converted to 2000-2099.
	
	Additional query words: OL98 OL97 OL2000
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
