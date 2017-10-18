---
layout: page
title: "Q191266: HP LaserJet 4 Plus Miniport Driver Mixes Lower and Upper Tray"
permalink: kb/191/Q191266/
---

## Q191266: HP LaserJet 4 Plus Miniport Driver Mixes Lower and Upper Tray

	Article: Q191266
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To be able to fill the correct paper trays with the necessary paper sizes and
	formats, it is important to understand how paper tray selection works. This
	article explains paper tray issues for the HP LaserJet 4 Plus.
	
	MORE INFORMATION
	================
	
	The HP LaserJet 4 Plus can feed from the following paper trays:
	
	- Multipurpose tray (also known as MP tray)
	
	- Paper cassette
	
	- Envelope feeder (Optional)
	
	- Lower cassette assembly (Optional)
	
	It is important to note that the above are the HP physical names. The following
	Windows NT 4.0 driver names correspond to the above trays:
	
	- Upper paper tray (and manual feed)
	
	- Lower paper tray
	
	- Envelope feeder (Optional)
	
	- Large capacity (Optional)
	
	The following should represent a side view of the printer with all trays
	installed:
	
	   |---|-----------|-|
	   | 1 |           |4|
	   |---|           | |
	  2----|           | |
	       |-----------| |
	       |3          | |
	       |-----------| |
	       |4          | |
	       |-----------|-|
	       |5          |
	       |-----------|
	
	where the numbers correspond to the following HP physical names:
	
	1. Envelope feeder (optional)
	
	2. MP tray
	
	3. Paper cassette
	
	4. Duplex init (optional)
	
	5. Lower cassette assembly (optional)
	
	By opening the door in the front of the printer, you can use the MP tray or the
	optional envelope feeder.
	
	The names used in the Windows NT driver may lead to confusion. For example,
	imagine that the optional lower cassette assembly (number 5) is installed.
	Although the paper cassette (number 3) is above the lower cassette assembly
	(number 5), the Windows NT driver name for paper cassette is lower paper tray.
	Thus, if you select to print to the lower paper tray from an application, you
	might expect the paper to be pulled from the lowest tray, which, in this case,
	is not true: the paper is pulled from the paper cassette, which is above the
	lower cassette assembly.
	
	To complete this information, the following explains how the MP tray setting
	determines where the paper is pulled from (pulling order) and how to change this
	setting:
	
	When you leave the paper source setting in the driver set to the default, the
	pulling order determines from where the paper is pulled. In general the largest
	tray has highest priority except when the MP tray is set to First.
	
	If the MP tray is set to First, the order is:
	
	1. MP tray
	
	2. Optional lower cassette (if installed)
	
	3. Paper cassette
	
	If the MP tray is set to Cassette, the order is:
	
	1. Optional lower cassette (if installed)
	
	2. Paper cassette
	
	3. MP tray
	
	On the LaserJet 4Plus control panel, the MP tray is set to First by default. This
	can be changed as follows:
	
	1. Take the printer offline.
	
	2. Press the Menu button until you see the Configuration menu.
	
	3. Press the Item button once. MP TRAY = FIRST should appear on the display.
	
	4. Use the plus (+) button to change the value to either Cassette or Manual.
	
	5. Press the Select button.
	
	6. Press the Online button to take the printer online.
	
	The First setting means that the printer will pull the paper from the MP tray
	before it pulls from any other cassette (if they contain the same paper size).
	Setting the MP tray to cassette changes this: the paper cassette (or lower
	cassette if installed) becomes the default tray.
	
	NOTE: The MP Paper Size button only works when the MP tray is set to cassette.
	When set to manual, it only operates as a manual tray.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
