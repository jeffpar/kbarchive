---
layout: page
title: "Q256258: MapPoint 2001: Imported Records Do Not Appear on the Map"
permalink: kb/256/Q256258/
---

## Q256258: MapPoint 2001: Imported Records Do Not Appear on the Map

	Article: Q256258
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kbui kbimukbfaq
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If imported records do not appear on a map that you created in Microsoft
	MapPoint 2001, check to see if any of the following conditions exist:
	
	- You have not given the correct headings to the location columns.
	
	For every column that contains location information, you must select a heading
	from the drop-down list that is located at the top of each column. MapPoint 2001
	uses these headings to place your records on the map.
	
	Each heading should describe the type of geographical information that is
	contained in that column.
	
	- You have not specified the correct country.
	
	For example, if you are importing or linking to Canadian data, you must select
	Canada in the Country/Region list when you choose a valid heading for each
	location field. If your data contains records from more than one country, select
	<Multi/Other> in the Country/Region list.
	
	If you are mapping data from multiple countries, you must include a column or a
	field that contains the country name for each record in your source data.
	
	- You have specified the correct country, but the column headings are
	  incorrect.
	
	If you are mapping data from multiple countries, make sure that you have chosen
	correct column headings. For example, if you are mapping data from the United
	States and Canada, you must choose the heading State/Province rather than State
	or Province.
	
	- You have not formatted the source data correctly and consistently.
	
	You must organize the information in your source data consistently. For example,
	all ZIP Codes or postal codes must be placed in the same column.
	
	Additional query words: mp2001 map point invisible data points
	
	======================================================================
	Keywords          : kbdisplay kbui kbimu kbfaq
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001 kbMapPoint2002
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
