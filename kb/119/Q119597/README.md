---
layout: page
title: "Q119597: Incorrect Top Margin with Citizen Dot-Matrix Printers"
permalink: /kb/119/Q119597/
---

## Q119597: Incorrect Top Margin with Citizen Dot-Matrix Printers

{% raw %}

	Article: Q119597
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing to a Citizen dot-matrix printer results in a larger top margin than set
	in the application.
	
	CAUSE
	=====
	
	The Citizen drivers, like other Windows 95 dot-matrix drivers, default to an
	unprintable top of 0 inches for tractor feed. Most Citizen printers, however,
	have the factory default top-of-form set to 1 inch. This causes the printing
	from Windows 95 to be shifted 1 inch down the page.
	
	RESOLUTION
	==========
	
	Go to the Properties settings for the Citizen printer. On the paper property
	tab, click the "Unprintable Area..." button. Set the unprintable top setting to
	1000. (The setting is in 1/1000ths of an inch).
	
	MORE INFORMATION
	================
	
	If you are using a sheet-feeder, make sure to set the paper source to
	"Sheet-Feeder...", then click the "Unprintable Area..." button and click the
	"Defaults" button in the Unprintable Area dialogue. This will correctly set the
	default unprintable regions for the sheet-feeder.
	
	Most of the Citizen printers have a customizable top-of-form setting for the push
	tractor feeder. If you have changed this setting to something other than 1 inch,
	you will need to adjust the unprintable top setting in the Paper properties tab
	accordingly. For example, if you have set your top- of-form to .5 inch on the
	printer, you will need to set the unprintable top setting to 500. For more
	information on setting the top-of-form on your printer, refer to your printer's
	manual.
	
	Additional query words: gsx 240 140 plus + 220 130 145 190 230 245 esc/P2 Swift 200 24 e x
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
