---
layout: page
title: "Q151913: Decimal Character Appears as a Comma"
permalink: /kb/151/Q151913/
---

## Q151913: Decimal Character Appears as a Comma

{% raw %}

	Article: Q151913
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Calculator tool in Windows 95, the decimal may appear as
	a comma.
	
	CAUSE
	=====
	
	The decimal symbol was changed to a comma in the Regional Settings tool.
	
	RESOLUTION
	==========
	
	To change the decimal symbol back to a period, follow these steps:
	
	1. In Control Panel, double-click Regional Settings.
	
	2. Click the Number tab.
	
	3. Change the Decimal Symbol setting to a period (.).
	
	4. Click OK.
	
	Also, be sure to confirm that the locale setting on the Regional Settings tab is
	correct. A comma is commonly used in European countries; the country may be set
	to English (United Kingdom) by mistake. In this case, changing the decimal
	character may not correct the entire issue and other issues may arise.
	
	MORE INFORMATION
	================
	
	Changing the Decimal Symbol setting can also cause problems in other programs
	that use numerical functions. For example, when you start Microsoft Excel for
	Windows 95, you receive the following error message:
	
	  The list and decimal separators specified by the system are identical.
	  Substituting ";" for the list separator.
	
	Microsoft Excel then starts normally, but some functions using a decimal may not
	function correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
