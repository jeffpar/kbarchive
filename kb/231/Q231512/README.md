---
layout: page
title: "Q231512: MapPoint 2000: Data Import Wizard Assigns ZIP Heading to Column"
permalink: kb/231/Q231512/
---

## Q231512: MapPoint 2000: Data Import Wizard Assigns ZIP Heading to Column

	Article: Q231512
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtool kbui kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Data Import wizard in Microsoft MapPoint 2000 may incorrectly assign the ZIP
	heading to a column that does not contain zip codes.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The imported data includes only one column of all five-digit numbers, and
	  this column does not contain zip codes.
	
	- The imported data includes more than one column of all five-digit numbers,
	  and the first such column does not contain zip codes.
	
	NOTE: MapPoint 2000 automatically assigns the ZIP heading to the first column of
	data that contains all five-digit numbers.
	
	RESOLUTION
	==========
	
	To work around this issue, manually change the column heading in the Data Import
	wizard. To do this:
	
	1. On the File menu, click Import Data.
	
	2. Click to select the document you want, and then click Open.
	
	  NOTE: If the document you want to open is a Microsoft Excel workbook, click
	  the worksheet containing the data you want to import, and then click Next.
	
	3. Click a pre-defined heading in the heading box, or type the heading you want
	  in the heading box.
	
	4. Click Finish.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft MapPoint 2000.
	
	Additional query words: mp2000 wrong header zipcode 5-digit
	
	======================================================================
	Keywords          : kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
