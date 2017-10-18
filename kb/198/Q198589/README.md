---
layout: page
title: "Q198589: HOWTO: Determine Justification in a ListView Control"
permalink: kb/198/Q198589/
---

## Q198589: HOWTO: Determine Justification in a ListView Control

	Article: Q198589
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the LVCOLUMN structure used by the ListView common control
	indicates that you can use the fmt member of the LVCOLUMN structure to set the
	justification of a column in the ListView control. This article shows you how to
	determine the value of the justification of a column in the ListView control.
	
	MORE INFORMATION
	================
	
	Before you check the value of the fmt member of the LVCOLUMN structure, the
	value of this member must be bitwise "anded" with the flag LVCFMT_JUSTIFYMASK,
	which is defined in Commctrl.h. For example, the following code shows you how to
	determine whether the second column in a list view is right, center, or left
	justified:
	
	     LVCOLUMN lvc;
	     // Assume hWndOfLV is an HWND of an existing ListView control window.
	     if(ListView_GetColumn(hWndOfLV, GetColumn, 1, &lvc))
	     {
	        switch(lvc.fmt & LVCFMT_JUSTIFYMASK)
	        {
	           case LVCFMT_RIGHT:
	              // Right justified
	              break;
	           case LVCFMT_CENTER:
	              // Center justified
	              break;
	           case LVCFMT_LEFT:
	              // Left justified
	              break;
	        }
	     }
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Isaac Leon Varon, Microsoft Corporation
	
	
	Additional query words: justify CListView CListCtrl
	
	======================================================================
	Keywords          : kbCtrl kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
