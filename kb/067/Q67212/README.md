---
layout: page
title: "Q67212: Calendar Program Cannot Print Month View"
permalink: /kb/067/Q67212/
---

## Q67212: Calendar Program Cannot Print Month View

{% raw %}

	Article: Q67212
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows Calendar does not print the month view graphics grid. Calendar
	only prints text that describes the appointment schedule, along with the dates
	and times displayed in the day view for each day within the From/To print
	range.
	
	You can work around these limitations as described in the following paragraphs.
	
	MORE INFORMATION
	================
	
	Printing the Month View
	-----------------------
	
	To print the month view, proceed as follows:
	
	1. Display the month on your screen.
	
	2. Press ALT+PRTSC to capture the month into the clipboard.
	
	3. Open Windows Paintbrush, and paste the month view in. Be sure to maximize
	  Paintbrush before pasting, or some of the calendar may be truncated.
	
	4. Print the month view from Paintbrush.
	
	Printing Blank Appointment Schedule Times
	-----------------------------------------
	
	Calendar only prints appointment schedule times that have appointment entries. To
	force Calendar to print a "blank" appointment entry, enter a space on each time
	line that you want to print.
	
	Printing Headers and Footers
	----------------------------
	
	Calendar can also print headers and footers that contain text and special codes
	that insert the following information:
	
	  Code    Information
	  ----    -----------
	
	  &d      The current date
	  &p      Page numbers
	  &f      The current filename
	  &l      Header or footer text justified at the left margin
	  &r      Header or footer text justified at the right margin
	  &c      Header or footer text centered between the margins
	  &t      The current time
	
	REFERENCES
	==========
	
	For more information on managing and printing a Calendar file, see pages 383-386
	of the "Microsoft Windows User's Guide" for Windows version 3.0 or pages 420-434
	of the "Microsoft Windows User's Guide" for Windows version 3.1.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
