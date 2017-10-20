---
layout: page
title: "Q67490: Problem with Printer Setup from Calendar, Cardfile, Notepad"
permalink: /kb/067/Q67490/
---

## Q67490: Problem with Printer Setup from Calendar, Cardfile, Notepad

{% raw %}

	Article: Q67490
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Notepad, Cardfile, and Calendar do not automatically highlight the default
	printer, which was set up from the Control Panel, as the default printer
	selection when you select Printer Setup from the File menu. The first printer in
	the list of printers is selected, rather than the printer most recently set as
	the default printer. From Notepad, Cardfile, and Calendar, if no printer is
	selected under Printer Setup, these applications print to the default printer
	listed as the Default Printer in the Control Panel.
	
	MORE INFORMATION
	================
	
	Once a printer has been selected under Printer Setup from the File menu, it
	remains the active printer until another one is chosen or the work session ends.
	When you go back into the Printer Setup menu, you see that the first printer on
	the list is selected again.
	
	Notepad, Cardfile, and Calendar list all printer devices listed in the WIN.INI
	file. As a result, you can select a printer from Printer Setup that is not
	connected to a port or is marked as inactive. Attempting to print to a printer
	that is not connected or is marked as inactive results in the following error
	message:
	
	  Cannot print (filename);
	  ensure the printer is connected and properly set up
	
	Select a printer that is connected to a port and is marked active.
	
	When choosing Printer Setup from the File menu, the printer that remains selected
	is the printer that was added last through the Control Panel or Setup. The order
	of the printers in Notepad's Printer Setup is opposite to the order listed in
	the WIN.INI file under [Printer Ports] (the last printer added is first on the
	list).
	
	Windows applications such as Word for Windows, Excel, or Terminal select and
	change the Windows default printer with Printer Setup.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.00 3.00a 3.0 3.0a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a,95
	
	=============================================================================
	

{% endraw %}
