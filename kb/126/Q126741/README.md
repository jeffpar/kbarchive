---
layout: page
title: "Q126741: Reinstalling HP DeskJet Version 3.x Printer Driver"
permalink: /kb/126/Q126741/
---

## Q126741: Reinstalling HP DeskJet Version 3.x Printer Driver

{% raw %}

	Article: Q126741
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reinstall the Hewlett-Packard (HP) DeskJet 500
	series version 3.0 or 3.1 printer driver after you have installed the version
	4.0, 4.1, or 5.0 driver.
	
	MORE INFORMATION
	================
	
	When you install the HP DeskJet 500 series version 4.0 or higher printer driver,
	the HPSETUP program enters a line of code in the [spooler] section of the
	WIN.INI file. You must remove this line in order for an older version of the
	printer driver to work correctly. Use any text editor (such as Notepad) to
	remove the following line from the [spooler] section of the WIN.INI file before
	you reinstall the older version of the printer driver.
	
	If you are using an HP DeskJet 540 printer, remove this line:
	
	     qp.LPT1=hpvvin.dll
	
	If you are using any other HP DeskJet printer, remove this line:
	
	     qp.LPT1=hpviod.dll
	
	To install the older HP DeskJet printer driver, follow these steps:
	
	1. In Windows Program Manager, choose Run from the File menu.
	
	2. Insert the HP DeskJet Series Printer Driver Installation disk in the
	  appropriate disk drive and then type
	
	  <drive>:\hpsetup
	
	  in the Command Line box, where <drive> is the drive letter of the floppy
	  drive containing the installation disk. For example, if the installation disk
	  is in drive A, type:
	
	  a:\hpsetup
	
	3. When you are prompted as to whether you want to continue installing over a
	  previous version of the driver, choose Yes.
	
	4. When the installation is finished, quit and then restart Windows.
	
	Additional query words: hpdj 500 520 550 DJ 560 c 540 510 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
