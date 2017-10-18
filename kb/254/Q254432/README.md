---
layout: page
title: "Q254432: MapPoint 2001: Unable to Successfully Import Data from Excel"
permalink: kb/254/Q254432/
---

## Q254432: MapPoint 2001: Unable to Successfully Import Data from Excel

	Article: Q254432
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbui kbimukbfaq
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import data from Microsoft Excel into Microsoft MapPoint
	2001, you may experience any of the following symptoms:
	
	- You may receive the following message:
	
	  No records in the set were matched. Do you want to keep the set?
	
	- You may be unable to successfully map the imported data.
	
	- Under "Range type" in the Data Mapping Wizard, only the "Unique values (e.g.,
	  text)" option may be available.
	
	CAUSE
	=====
	
	This behavior can occur if the data that you attempt to import from Excel
	contains more than one row of column headings.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Make sure that the data in Excel does not contain more than one row of column
	  headings.
	
	- In Excel, name the range of cells that you want to import. In MapPoint 2001,
	  you can use the Data Mapping Wizard to select a Named Range of cells.
	
	  For information about how to name a range of cells in Excel, start Excel,
	  click Microsoft Excel Help on the Help menu, type "Name a cell or a range of
	  cells" (without the quotation marks), click "Name cells in a workbook", and
	  then click "Name a cell or a range of cells".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft MapPoint 2001.
	
	Additional query words: mp2001 map point importing ranges
	
	======================================================================
	Keywords          : kbinterop kbtool kbui kbimu kbfaq
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001 kbMapPoint2002
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
