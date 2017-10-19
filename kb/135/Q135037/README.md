---
layout: page
title: "Q135037: How to Connect a LaserDisc Player Using MCI Driver"
permalink: /kb/135/Q135037/
---

## Q135037: How to Connect a LaserDisc Player Using MCI Driver

	Article: Q135037
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to connect a Pioneer LaserDisc player using the MCI
	Pioneer LaserDisc device in Windows 95.
	
	MORE INFORMATION
	================
	
	To connect a LaserDisc player using the MCI Pioneer LaserDisc device, the
	LaserDisc player must meet the following criteria:
	
	- It must be a LaserDisc player manufactured by Pioneer.
	
	- The connecting cable must be a Pioneer cable (part number CC-12 or CC-13) to
	  connect to a 9-pin or 25-pin serial port.
	
	
	  The Pioneer CC-12 and CC-13 cables are RS-232 cables that connect
	  Pioneer's LD-V8000, LDV4000, CLD-V2600, CLD-V2400, LD-V2200, or
	  LD-V4200 LaserDisc player, and the LC-330 AutoChanger to a computer
	  with a 9- or 25-pin male D-sub-connector RS-232 port.
	
	- The LaserDisc player must have Level III capabilities.
	
	LaserDisc Player Control Methods
	--------------------------------
	
	Level I - Manual Control:
	
	In Level I, the player is controlled using the remote control, the front panel
	buttons, or a laser barcode reader. All current Pioneer industrial LaserDisc
	players support Level I. Level I alone does not support computer control.
	
	Level II - Internal Program Control:
	
	The Pioneer LD-V6000A (discontinued) and the LD-V8000 are the only models that
	currently support Level II. In this level, programs encoded on a LaserDisc are
	sent to the player's memory. Level II program codes can also be sent to the
	player using the remote control or by a computer. This configuration could
	communicate with a computer, but would not need the MCI Pioneer LaserDisc device
	driver. If the device driver were installed, it would overwrite the information
	encoded on the LaserDisc, and would probably cause the connection to be
	dropped.
	
	Level III - External Computer Control:
	
	In Level III, commands to control the player are sent through an RS-232 cable
	from a computer or controller. The MCI Pioneer LaserDisc device driver is
	required for this configuration.
	
	Installing the Pioneer LaserDisc (Media Control) Device
	-------------------------------------------------------
	
	To install the Pioneer LaserDisc device driver, follow these steps:
	
	1. In Control Panel, double-click the Multimedia icon.
	
	2. On the Advanced tab, double-click Media Control Devices.
	
	3. Click Pioneer LaserDisc Device (Media Control), and then click Properties.
	
	4. Click the Use This Media Control Device option, and then click Settings.
	
	5. Click the appropriate communications port option, and then click OK.
	
	6. Click OK, and then click OK again.
	
	7. When you are prompted to restart your computer, do so.
	
	Additional query words: videodisc laser disc
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
