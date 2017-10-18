---
layout: page
title: "Q130458: HOWTO: Highlight the Entire Row in Grid When User Clicks"
permalink: kb/130/Q130458/
---

## Q130458: HOWTO: Highlight the Entire Row in Grid When User Clicks

	Article: Q130458
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro version 2.x, you can't issue a browse and have the entire row selected
	when a user clicks. In Visual FoxPro, however, you can create a grid, and have
	the entire row selected when a user clicks. This article shows you how.
	
	MORE INFORMATION
	================
	
	NOTE: You can also use this technique to make the current record in the grid
	remain highlighted after the focus is set to another object on the form.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form by using the Form Designer.
	
	2. Bring up the Data Environment for the form by choosing Data Environment from
	  the View menu. Select Add to add the customer table located in the
	  C:\VFP\SAMPLES\MAINSAMP\DATA directory into the data environment. Drag the
	  customer table from the data environment, and drop it onto the form to create
	  a grid object.
	
	3. Place the following code in the grid's INIT event:
	
	  
	
	     PUBLIC grno
	     grno = RECNO()
	     THIS.setall("Dynamicbackcolor", ;
	          "IIF(RECNO()=grno,RGB(64,128,128),RGB(255,255,255))","Column")
	
	4. Place the following code in the grid's AfterRowColChange event:
	
	  
	
	     LPARAMETERS nColIndex
	     grno = RECNO()
	     THIS.Refresh()
	
	5. Run the form, and click different rows. You will see the selected row's
	  backcolor is in dark green color.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
