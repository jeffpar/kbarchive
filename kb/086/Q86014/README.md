---
layout: page
title: "Q86014: Wrong PostScript Printer Information in Printer Setup Dialog"
permalink: /kb/086/Q86014/
---

## Q86014: Wrong PostScript Printer Information in Printer Setup Dialog

{% raw %}

	Article: Q86014
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a PostScript printer driver that requires a Windows printer description
	(.WPD) file is installed and the .WPD file is subsequently deleted, the title of
	the Printer Setup dialog boxes for all PostScript printers reverts to Apple
	LaserWriter Plus.
	
	RESOLUTION
	==========
	
	To correct this problem, delete and reinstall the printer driver through the
	Printers icon in the Control Panel. This copies the appropriate .WPD file to the
	Windows SYSTEM subdirectory and add the following entries to the [PSCRIPT]
	section of the WIN.INI file:
	
	  External Printers=x
	
	  (where "x" is the number of .WPDs installed)
	
	  Printerx=wpdfilename.wpd
	
	  (where "x" is the number of a specific printer and "wpdfilename.wpd" is the
	  MS-DOS filename of the .WPD file)
	
	MORE INFORMATION
	================
	
	A .WPD file provides Windows with PostScript printer-specific information such
	as paper sizes, paper sources, and available fonts.
	
	If a PostScript printer requires a .WPD file, but the .WPD file is missing,
	printer-specific special features may not be available. The printer is correctly
	listed in the Installed Printers list in the Control Panel, but the Printer
	Setup dialog box reverts to the Apple LaserWriter Plus and its default
	settings.
	
	
	Additional query words: 3.10 WIN31 WPD 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
