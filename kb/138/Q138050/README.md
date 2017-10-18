---
layout: page
title: "Q138050: Plug and Play Printer Detected Every Time Windows 95 Starts"
permalink: kb/138/Q138050/
---

## Q138050: Plug and Play Printer Detected Every Time Windows 95 Starts

	Article: Q138050
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbprint win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you start Windows 95, the following message may be displayed
	
	  New Hardware Found
	
	  <device>
	
	  Windows has found new hardware and is installing the software for it
	
	where <device> is a Plug and Play device. If the device is a Plug and Play
	printer, this message may appear each time you start Windows 95, even though the
	printer is already installed.
	
	This problem is known to occur with the following Plug and Play printers:
	
	- Hewlett-Packard 4L
	
	- Hewlett-Packard DeskJet 660C
	
	- Epson Stylus Color Iis
	
	- Canon BJC-4000
	
	CAUSE
	=====
	
	This problem can occur if the following registry key becomes damaged:
	
	  Hkey_Local_Machine\Enum\Lptenum
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Remove the registry key listed above and then restart your computer. When Windows
	95 starts, it will detect the printer and install support for it. Once the
	printer is installed, it will no longer be detected each time you start Windows
	95.
	
	MORE INFORMATION
	================
	
	When a Plug and Play printer is detected and installed, Windows 95 add the key
	listed above to the registry. When this key is present, Windows 95 does not
	attempt to detect Plug and Play printers. If the key becomes damaged, the
	printer may be detected each time you start Windows 95.
	
	Additional query words: hp
	
	======================================================================
	Keywords          : kbenv kbprint win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
