---
layout: page
title: "Q136697: How to Set Page Breaks in Visual FoxPro Reports"
permalink: kb/136/Q136697/
---

## Q136697: How to Set Page Breaks in Visual FoxPro Reports

	Article: Q136697
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page breaks provide a way to organize your report into separate sections. You
	can create page breaks in a report by grouping the data. Once this is done, page
	breaks can be added at the end of each group. Page numbering can either continue
	or be reset each time a group changes. There is virtually no limit to the number
	of groups you can add to your report.
	
	MORE INFORMATION
	================
	
	In design mode, you can gain access to the grouping dialog box in two ways, by
	using the menu or by clicking the right mouse button (right-click). The grouping
	dialog box has a check box that allows you to introduce page breaks after each
	group. Each grouping level of the report has this capability.
	
	For example, the Order report in the TasTrade database is grouped on order
	number. The option to start a new page when the group changes means that each
	order is printed on a separate sheet.
	
	For more information on how to set up grouping levels, please see the Visual
	FoxPro "User's Guide," Reports and Labels, Part 4, Chapter 9, page 161.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
