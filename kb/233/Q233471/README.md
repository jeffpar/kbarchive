---
layout: page
title: "Q233471: Business Planner: Excel Template Always Prompts to Save Changes"
permalink: kb/233/Q233471/
---

## Q233471: Business Planner: Excel Template Always Prompts to Save Changes

	Article: Q233471
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you close a Microsoft Excel template opened by an Excel wizard link in
	Microsoft Business Planner without making changes to the template, you receive
	the following message:
	
	  Do you want to save the changes you made to <filename>? Microsoft Excel
	  recalculates formulas when opening files last saved by an earlier version of
	  Excel.
	
	CAUSE
	=====
	
	This behavior occurs because the Excel templates created for Business Planner
	were created prior to the release of Microsoft Excel 2000.
	
	MORE INFORMATION
	================
	
	All versions of Excel prior to Excel 2000 prompt you with the following message
	
	  Do you want to save the changes you made to <filename>? Microsoft Excel
	  recalculates formulas when opening files last saved by an earlier version of
	  Excel.
	
	when you close an Excel workbook without making changes to the file.
	
	Additional query words: msbp xl2000 xlt
	
	======================================================================
	Keywords          : kbinterop kbtool kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
