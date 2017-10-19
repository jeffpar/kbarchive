---
layout: page
title: "Q129758: Road Atlas 3.x: Problems Printing with IBM Proprinters"
permalink: /kb/129/Q129758/
---

## Q129758: Road Atlas 3.x: Problems Printing with IBM Proprinters

	Article: Q129758
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Road Atlas for Windows, versions 3.0, 3.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a map or table from Automap Road Atlas, odd behavior such as
	random characters appearing on the page and ejection of blank pages may occur
	with IBM Proprinters, especially the X24 and XL24 models.
	
	RESOLUTION
	==========
	
	To resolve erratic printing try step one below. If that doesn't work, or if you
	are using a newer software-configured printer, try step two.
	
	1. Turn on DIP switch #7.
	
	  -or-
	
	2. Switch printer to Alternate Graphics Mode.
	
	When you print graphics to older model IBM Proprinters, changing the DIP switch
	setting may resolve the problem. On newer IBM Proprinters the configuration is
	controlled by software.
	
	Switching to Alternate Graphics mode allows Automap Road Atlas to overlay the
	vector information, while bitmap information is printed. Vector information sent
	from the program is the cause of the odd behavior.
	
	MORE INFORMATION
	================
	
	The products discussed here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: auto auto-map automap reference D.I.P.
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapRoadAtlas300 kbAutomapRoadAtlas302
	
	=============================================================================
	
