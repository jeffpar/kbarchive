---
layout: page
title: "Q149883: Problems Installing Windows Sound Driver on Compaq Prolinea"
permalink: kb/149/Q149883/
---

## Q149883: Problems Installing Windows Sound Driver on Compaq Prolinea

	Article: Q149883
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Users who have purchased Compaq Prolinea computers with Compaq Business Audio
	may have problems installing the Windows Sound System driver or the Compaq
	Business Audio driver because of the limited range of I/O addresses available in
	the driver configuration dialog box.
	
	MORE INFORMATION
	================
	
	The Windows Sound System and the Compaq Business Audio are basically the same
	driver (Sndsys32.dll). Either of these can be added after Windows NT is set up
	by going into Control Panel, Drivers, and clicking the Add button. Numerous
	drivers will be listed, including Windows Sound System and Compaq Business
	Audio.
	
	When either of these drivers is added to Windows NT, a dialog box with
	configuration options appears. The user can select from among DMA Channel, I/O
	Address, and Interrupt. Valid values offered in this dialog box are:
	
	  DMA Channel       I/O Address       Interrupt
	  ------------      ------------      ----------
	     DMA 0             530            Interrupt 7
	     DMA 1             604            Interrupt 9
	     DMA 3             E80            Interrupt 10
	                       F40            Interrupt 11
	
	There is also an Advanced setting for DMA Buffer Size.
	
	The options for a particular setting may not be available if numerous other
	devices--for example, a network card, video adapter, and internal modem-- are
	installed. To solve this problem, use one of the following two options:
	
	1. Try to rearrange the DMA, I/O, and Interrupts used by these add-on devices
	  (either by changing the jumper/dip switch settings or reconfiguring the
	  software, perhaps with a utility such as Intel's SoftSet), and then give the
	  Windows or Compaq Audio driver one of the newly available settings.
	
	  OR
	
	2. Try installing the Creative Labs 1.x Pro 16 driver that comes with Windows
	  NT, instead of the Windows Sound System or Compaq Business Audio drivers. The
	  Creative Labs driver allows I/O Addresses from 210 to 280 and Interrupts
	  2,3,5, and 7. Unlike the Windows or Compaq drivers, the Creative Labs driver
	  does not require you to configure the DMA channel. After the driver is
	  installed, the system will need to be restarted.
	
	To verify correct operation of either of the two solutions outlined, check the
	System Event Log and look for events related to your audio driver. If there is a
	Stop or warning sign next to the entries for your driver, there may yet be
	conflicts with Interrupt, I/O Address, or DMA. View the detail of the event and,
	if a conflict is indicated, verify all Interrupt, I/O, and DMA settings (you can
	use Windows NT Diagnostics, in the Administrative Tools Group). Change any
	settings that conflict and restart the system. If no conflicts are indicated,
	try connecting speakers to the sound board and testing some sound files using
	the Sound Mapper in Control Panel.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
