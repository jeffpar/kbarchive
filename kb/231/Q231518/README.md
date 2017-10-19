---
layout: page
title: "Q231518: MP2000: Empty Quotation Marks in Error Message When Linking Data"
permalink: /kb/231/Q231518/
---

## Q231518: MP2000: Empty Quotation Marks in Error Message When Linking Data

	Article: Q231518
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to link data from an open Microsoft Excel workbook to Microsoft
	MapPoint 2000, you may receive an error message similar to the following:
	
	  File: <filename>
	
	  There was a problem opening this file: <filename>. The Microsoft Jet
	  database engine cannot open the file ''. It is already opened exclusively by
	  another user, or you need permission to view this data.
	
	Note that the file name does not appear between the single quotation marks in the
	error message.
	
	CAUSE
	=====
	
	This behavior can occur if you are running MapPoint 2000 on a Microsoft Windows
	NT 4.0-based computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, close the Excel workbook that contains the data you want
	to link to MapPoint 2000 before you attempt to link the data.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft MapPoint 2000.
	
	Additional query words: mp2000 quotes blank nt4 winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
