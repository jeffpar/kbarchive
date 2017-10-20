---
layout: page
title: "Q161363: Installing Crystal Semiconductor CS4232/CS4236 PnP Driver"
permalink: /kb/161/Q161363/
---

## Q161363: Installing Crystal Semiconductor CS4232/CS4236 PnP Driver

{% raw %}

	Article: Q161363
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The compact disc distribution of Service Pack 2 for Windows NT 4.0 now contains
	a driver for the Crystal Semiconductor CS4232/CS4236 Plug and Play Sound Card.
	For more information, see the Readme.txt file on the compact disc in the
	directory Drvlib\Audio\Crystal. This article describes how to install the
	driver.
	
	MORE INFORMATION
	================
	
	If you are installing the driver on a Toshiba Tecra 720/730 or Motorola
	Powerstack II computer, install the driver as a legacy audio driver. (If you are
	not installing the driver on one of these computers, skip to the first line
	after step 5 immediately below.) To install the driver as a legacy audio driver
	for use with the specified Toshiba and Motorola computers, complete the
	following steps:
	
	1. Open the Multimedia Control Panel.
	
	2. Choose the Devices tab and click the Add button.
	
	3. Select Unlisted or Updated Driver.
	
	4. Point to the Oemsetup.inf in the proper processor architecture directory. For
	  example, when installing on a Toshiba laptop, choose the Oemsetup.inf file in
	  the Drvlib\Audio\Crystal\I386 directory.
	
	5. Complete the installation procedure by skipping to step 1 immediately below
	  and following the steps listed.
	
	If you are installing the Plug and Play driver on any computer besides the
	above-specified Tecra and Motorola models, you need to ensure that the Plug and
	Play ISA Enabler is installed. Information on how to install the PnP ISA Enabler
	can be found in the following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q156344
	  TITLE : Plug and Play Devices Not Detected or Installed
	
	After the Plug and Play ISA Enabler is installed (or if are installing the Plug
	and Play driver on one of the above-specified Tecra or Motorola computers), use
	the following steps to install the sound driver.
	
	1. Log on to your computer with Administrator privileges.
	
	2. The words "New Hardware Found" will appear and then you will be prompted to
	  install drivers for several functions on your card.
	
	3. Select the option "Driver from disk provided by hardware manufacturer."
	
	4. Enter the path name for the CS423x driver as in step 4 above.
	
	5. On the Select Device screen, select OK.
	
	6. If you are not presented with resource settings, select Manual Configuration.
	
	7. If there are any conflicting devices at the bottom of the screen, perform one
	  of the following two procedures:
	
	  a. Resolve the devices by selecting a basic configuration that allows the
	     selection of resources that do not conflict with devices already
	     installed
	
	     -or-
	
	  b. Change the resources settings. To do this, performing the following steps:
	
	     1. Highlight the setting to be changed in the Resource Settings window.
	
	     2. Click Change Setting, and select a setting that does not conflict with
	        another device.
	
	     3. When finished, select OK.
	
	     4. Repeat for any settings that show a conflict.
	
	8. If prompted for Crystal Semiconductor MPU-401 Driver, select "Windows NT
	  default driver."
	
	  NOTE: The MPU-401 driver requires a Basic Configuration that includes an
	  interrupt value. The driver will fail to load if no interrupt is assigned to
	  the driver.
	
	9. If prompted for Crystal Semiconductor Control Base, select "Windows NT
	  default driver."
	
	10. If prompted for Microsoft Joystick Port Enabler, select "Windows NT default
	  driver."
	
	11. If prompted for Crystal CS4232 or CS4236 Sound Chip (compact disc), select
	  "Do not install a driver (Windows NT will not prompt you again)."
	
	12. If prompted for an IDE CD-ROM or Hard Disk Controller, select "Do not
	  install a driver (Windows NT will not prompt you again)."
	
	13. When prompted, restart your computer.
	
	At this point, your Crystal Semiconductor CS423x card should work properly. If
	you need to change the resources that your card uses, open the Multimedia tool
	in Control Panel, select the Devices tab, select Properties for the Crystal
	Semiconductor driver, and click the Settings button. This will bring up the same
	resource-picking dialog box that was invoked during installation of the device.
	
	NOTE: This driver supports only the CS4232 and CS4236 cards completely. The SRS
	and QSound capabilities of the CS4237 and CS4238, respectively, are not being
	supported at this time. The CS4231 chip is also not supported by this driver.
	There is, at this time, no Plug and Play support for the Crystal Semiconductor
	Standard IDE Controller.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt plug-n-play PnP
	======================================================================
	Keywords          : kbenv kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
