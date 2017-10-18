---
layout: page
title: "Q169441: MSB Human Body Minimizes When Printing To HP Deskjet"
permalink: kb/169/Q169441/
---

## Q169441: MSB Human Body Minimizes When Printing To HP Deskjet

	Article: Q169441
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbprint
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print the driver's license from Magic School Bus Explores
	the Human Body to a Hewlett Packard (HP) DeskJet printer, the program may become
	minimized or seem to disappear.
	
	CAUSE
	=====
	
	The Magic School Bus (MSB) Human Body and the HP DeskJet Status Monitor are
	running on your computer at the same time and competing for the same resources
	in Windows 95. The HP DeskJet Status Monitor software is installed when you
	install your DeskJet's printer driver.
	
	When you try to print a driver's license, MSB Human Body must minimize because
	the HP DeskJet Status Monitor software begins running. MSB Human Body is still
	running, but it has been minimized and moved to the taskbar.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the two methods outlined below.
	
	Method 1: Maximize MSB Human Body
	---------------------------------
	
	1. Locate the taskbar; it is the strip that contains the START button and is
	  usually found running across the bottom of the your Windows 95 desktop.
	
	2. Locate the MSB HUMAN BODY button on the taskbar and click it once to activate
	  it.
	
	3. The MSB Human Body program should now be running at normal size on your
	  desktop. You will need to repeat these steps each time you want to print from
	  the driver's license screen.
	
	Method 2: Remove the HP DeskJet Status Monitor
	----------------------------------------------
	
	1. Use the right mouse button to click the taskbar and then click Properties on
	  the menu that appears.
	
	2. On the Start Menu Programs tab, click the Remove button.
	
	3. Click the plus sign (+) to the left of the Startup folder to expand the
	  branch.
	
	4. Select the HP DeskJet Status Monitor shortcut and then click the Remove
	  button.
	
	5. Click Close.
	
	6. Restart your computer.
	
	With the HP DeskJet Status Monitor disabled, your DeskJet printer will still
	print, but MSB Human Body will no longer be minimized.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbprint 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticHuman kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
