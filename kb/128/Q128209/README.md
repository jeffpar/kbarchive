---
layout: page
title: "Q128209: Description of Design Mode in Screens, Reports, &amp; Labels"
permalink: kb/128/Q128209/
---

## Q128209: Description of Design Mode in Screens, Reports, &amp; Labels

	Article: Q128209
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Reports, labels, and screens are in a design mode when they are opened through
	the menu or through the MODIFY command from the Command window. Reports and
	labels can toggle from design mode to print preview while screens toggle between
	design mode and tab order.
	
	MORE INFORMATION
	================
	
	The report designer and the Label Designer each have two modes of operation
	called the design mode and the preview mode. The design mode is shown initially.
	The Page Header, Detail, and Page Footer bands are displayed so you can modify
	the fields and layout of the report or label.
	
	Print preview is the second mode and can be accessed through the menu. From the
	File menu, choose Print Preview, or from the View menu, choosh Preview. There is
	also a print preview button on the standard toolbar. Print preview allows you to
	see how the report will look printed without actually sending the report to the
	printer.
	
	To toggle back to the report design mode, choose Design from the View menu, or
	choose the Close Preview button from the print preview toolbar. Because design
	and print preview are two modes of the report designer, if you choose Close from
	the Command menu or press CTRL+F4, you will close both the design and print
	preview modes of the report designer.
	
	The form designer also has two modes of operation. As with the report designer,
	the design mode is initially displayed when creating a new screen or modifying
	an existing one. The design mode is where objects can be placed on the screen
	and code entered for different events. The second mode is tab order. The
	sequence of object selection when tabbing through a screen is set when the form
	designer is in tab order mode. The first two buttons on the form designer
	toolbar allow you to toggle between design mode and tab order. The View menu
	also allows you to choose between the design and tab order modes.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
