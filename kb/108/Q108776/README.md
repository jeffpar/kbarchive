---
layout: page
title: "Q108776: Excel Prints at 300 DPI to HP LaserJet 4 Series Printers"
permalink: /kb/108/Q108776/
---

## Q108776: Excel Prints at 300 DPI to HP LaserJet 4 Series Printers

{% raw %}

	Article: Q108776
	Product(s): Microsoft Windows Printing Issues
	Version(s): 3.1,4.0,4.0a,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows 95 
	- Microsoft Excel for Windows, versions 4.0, 4.0a 
	- Microsoft Excel for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The cell-shading patterns from the Format Patterns Pattern dialog box in
	Microsoft Excel may print at 300 dots per inch (dpi) to Hewlett-Packard (HP)
	LaserJet 4-series and 5-series printers using the HPPCL5E.DRV driver, even
	though the driver is set for 600 dpi.
	
	This problem has been reproduced with HPPCL5E.DRV versions 1.18, 1.20, and 1.26.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Format the cells for a solid shading pattern and choose a shade of gray for
	  the foreground color. This type of shading prints correctly at 600 dpi.
	
	-or-
	
	- Place some type of graphic on each page of the worksheet. This forces
	  Microsoft Excel to print the shading patterns at 600 dpi. An empty Microsoft
	  Draw object can be used.
	
	STATUS
	======
	
	Microsoft and Hewlett-Packard are researching this problem and will post more
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 4M 4si 4siMX mx 4p 4mp 4l 4ml laser jet hp5
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbWin3xSearch kbWin95search kbExcel95 kbExcel95Search kbZNotKeyword3 kbExcel400 kbExcel400a kbWin310 kbExcelWinSearch
	Version           : :3.1,4.0,4.0a,7.0
	
	=============================================================================
	

{% endraw %}
