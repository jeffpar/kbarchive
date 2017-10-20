---
layout: page
title: "Q136841: Streets 4.0: Can Not Find Numbered Streets"
permalink: /kb/136/Q136841/
---

## Q136841: Streets 4.0: Can Not Find Numbered Streets

{% raw %}

	Article: Q136841
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to locate an address where the street name is a combination of
	a number and two compass points, the address may not be successfully located.
	For example, you may not be able to locate the following address:
	
	  W 100 North St
	
	RESOLUTION
	==========
	
	To find a street where the name consists of a numbered street name with multiple
	compass points, such as East or North, enter the address as:
	
	  W 100_North St
	
	where the actual street name is
	
	  W 100 North St
	
	MORE INFORMATION
	================
	
	The address search routine used by Automap Streets version 4.0 was designed to
	use only one compass direction per address. When multiple directions are used to
	name a street, the program tries to match the search request using the most
	common street naming convention.
	
	Additional query words: fails failed search address street auto auto-map automap reference
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapStreets400
	
	=============================================================================
	

{% endraw %}
