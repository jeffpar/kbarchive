---
layout: page
title: "Q255141: MP2001: Geographic Information Is Needed to Import or Link Data"
permalink: /kb/255/Q255141/
---

## Q255141: MP2001: Geographic Information Is Needed to Import or Link Data

{% raw %}

	Article: Q255141
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool kbui kbimukbfaq
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Import Data Wizard or the Link Data Wizard in Microsoft
	MapPoint 2001 to import or link data, the data that you want to import or link
	should contain at least one column heading that refers to geographic information
	to successfully import or link the data.
	
	The Import Data Wizard or the Link Data Wizard searches for a column heading in a
	database or for the first cell in a spreadsheet column that refers to geographic
	information, such as "Street Address," "State," "Province," or "ZIP Code." When
	a column heading or first cell of this type is found, the wizard is able to plot
	the contents of each record or row on the map.
	
	For example, if the source from which you want to import or link data contains
	the column heading or first cell name, "City Names," the wizard plots the data
	in each record or row at the location of each city that is listed in the City
	Names column. When this process is finished, you receive the following message:
	
	  Matching records to City Names in the country / region <countryname>
	
	If the wizard does not find a column heading or first cell that contains a
	reference to geographic information, it searches the data for fields or cells
	that contain five-digit numbers (which it interprets as ZIP codes), number and
	letter combinations (which it interprets as postal codes), and two-letter
	sequences (which it interprets as abbreviations for states or provinces).
	
	If the wizard does not find data that matches these criteria, it cannot plot any
	of the data on the map.
	
	Additional query words: mp2001 map point importing linking
	
	======================================================================
	Keywords          : kbtool kbui kbimu kbfaq
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
