---
layout: page
title: "Q98318: Tandy DAC or PSSJ Windows Sound Driver"
permalink: kb/098/Q98318/
---

## Q98318: Tandy DAC or PSSJ Windows Sound Driver

	Article: Q98318
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tandy Corporation has a Microsoft Windows 3.1 compatible sound driver designed
	to take advantage of the Digital Audio Circuitry (DAC) sound chip found in
	several Tandy computers.
	
	MORE INFORMATION
	================
	
	Tandy manufactures a line of computers that use a DAC chip for playing and
	recording sound. The DAC chip offers higher performance sound generation than
	the standard PC Speaker sound driver. This driver can play and create .WAV files
	on the following Tandy machines:
	
	  2500XL       2500SX25
	  2500XL/2     1000RSX
	  2500SX       2500RSX
	  2500SX20     2500SX/33
	
	NOTE: The 2500RSX computer can play .WAV files but cannot create them because it
	does not have an MIC port.
	
	Files included with the Tandy sound driver are as follows:
	
	  TDACWAVE.DRV     9040  11-05-92  1:52P
	  OEMSETUP.INF     1785  11-05-92  1:48P
	  READ.ME          1302  11-05-92  1:18P
	
	Below is the text of the READ.ME file that comes with the Tandy sound driver.
	
	READ.ME
	-------
	
	READ.ME
	-------
	
	To install TDACWAVE.DRV as a Windows 3.1 sound driver:
	
	1. Run Windows 3.1.
	
	2. Run the Control Panel from the Main group.
	
	3. Choose the Drivers icon.
	
	4. Choose the Add button.
	
	5. In the List of Drivers box, select Add Unlisted or Updated Driver
	  and then choose the OK button.
	
	6. Insert this disk into a drive and, if necessary, change the drive
	  name displayed in the dialog box to the drive name containing this
	  disk.
	
	7. Choose the OK button.
	
	8. Select Tandy DAC Wave from the list and choose the OK button.
	
	Advanced installation notes:
	
	TDACWAVE.DRV supports a section in the SYSTEM.INI file titled
	[TDACWAVE.DRV]. This section may have any or none of the following
	parameters
	
	  port=
	  int=
	  dmachannel=
	
	where the port is a hexadecimal value, int is the IRQ setting in
	decimal, and dmachannel is the DMA channel in decimal.
	
	If port is not specified, the driver attempts to obtain this value from
	a BIOS call. If dmachannel is not specified, the driver defaults to DMA
	Channel 1. If int is not specified, the driver defaults to interrupt 7.
	
	Note that TDACWAVE.DRV does not create the [TDACWAVE.DRV] section. If the
	system needs to override the driver's default values for any of the above
	parameters, the SYSTEM.INI file must be manually edited.
	
	Contact your local Radio Shack store or Radio Shack Computer Support
	Services for technical support or to obtain the driver disk.
	
	The Tandy Sound Driver is manufactured by Tandy Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
