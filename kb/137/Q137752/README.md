---
layout: page
title: "Q137752: Cannot Print to Microsoft Fax Printer Driver"
permalink: /kb/137/Q137752/
---

## Q137752: Cannot Print to Microsoft Fax Printer Driver

{% raw %}

	Article: Q137752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:; Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though faxing from Microsoft Exchange may operate normally, you may be
	unable to print to the Microsoft Fax printer driver from compatible programs.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Fax printer driver is missing or
	damaged.
	
	RESOLUTION
	==========
	
	To reinstall the Microsoft Fax printer driver, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the Microsoft Fax icon in the Printers
	  folder, and then click Delete.
	
	3. Click the Start button, and then click Run.
	
	4. In the Open box, type the following line, and then click OK:
	
	  " awadpr32.exe " (without the quotation marks)
	
	  This command rebuilds and reinstalls the Microsoft Fax printer driver.
	
	MORE INFORMATION
	================
	
	Reinstalling the Microsoft Fax service in a Microsoft Exchange profile does not
	reinstall the Microsoft Fax printer driver. If you remove the Microsoft Fax
	printer driver from the Printers folder, use the method above to reinstall it.
	
	You can also reinstall the Microsoft Fax printer driver by removing and
	reinstalling Microsoft Exchange, but this can be a complicated task.
	
	Additional query words: corrupt msfax ms fax awfax
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE
	Version           : WINDOWS:; Win2000:95
	
	=============================================================================
	

{% endraw %}
