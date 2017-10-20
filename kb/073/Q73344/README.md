---
layout: page
title: "Q73344: Troubleshooting the Logitech Cordless Mouseman"
permalink: /kb/073/Q73344/
---

## Q73344: Troubleshooting the Logitech Cordless Mouseman

{% raw %}

	Article: Q73344
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Logitech has released an RF- (radio frequency) based serial, cordless mouse
	called the Cordless Mouseman. Standard mouse troubleshooting techniques
	generally apply with this mouse; however, some additional considerations should
	be taken into account when troubleshooting this mouse.
	
	
	MORE INFORMATION
	================
	
	In addition to standard troubleshooting techniques, follow these steps when
	troubleshooting the Logitech Cordless Mouseman:
	
	1. Verify that the mouse and the receiver are on the same horizontal plane (that
	  is, both are on the desktop). It is acceptable for the receiver to be out of
	  the line-of-sight of the mouse (that is behind the CPU); however, both should
	  be on the same horizontal plane for proper operation.
	
	2. Verify that the mouse is no greater than 2 meters (about 5 feet) from the
	  receiver because this is the maximum reception distance for the Cordless
	  Mouseman.
	
	3. Temporarily remove any possible source of RF interference, such as a cordless
	  phone or other transmitting device, from the general area.
	
	4. Check for the correct mouse driver. The latest version of the Cordless
	  Mouseman is version 5.01, which is dated 3/19/91 and has a file size of
	  33,977 bytes.
	
	5. Verify that the mouse (transmitter) and the receiver are operating at the
	  same frequency by removing the battery from the mouse for a few seconds and
	  then placing it back into the mouse. This will reset both the mouse and the
	  receiver to frequency 4. Frequencies 1-7 are available and can be selected
	  manually so that the receiver and mouse match each other at another frequency
	  if desired. To set the frequency manually, you must be at the MS-DOS command
	  prompt.
	
	  Do the following:
	
	  a. Take the cover off of the mouse and note the number of flashes per second
	     that the green light indicates--this number is the current frequency.
	
	  b. Use the left mouse button to set the frequency lower and use the right
	     mouse button to set the frequency higher.
	
	  c. Turn the dial on the receiver to the same frequency number that you set
	     the mouse to.
	
	6. Review the AUTOEXEC.BAT file to ensure that there is a MODE command to
	  initialize the applicable COM port for 9600 bits per second (BPS) (that is,
	  "mode com1:96,n,8,1,p" (without the quotation marks)).
	
	  Also, from Windows, review the Settings option (accessed by choosing the Ports
	  icon in Control Panel) to ensure that the port being used is set at 9600 BPS.
	  This setting is required for the Cordless Mouseman to operate correctly.
	
	7. Make sure the COM ports are correctly configured. The Logitech virtual mouse
	  driver (LVMD.386) is hard coded for the standard base port addresses and
	  interrupt requests (IRQs). The base addresses for COM1 and COM2 should be
	  3F8h and 2F8h, respectively. If the COM addresses are not configured
	  correctly, or the IRQs are not standard, the Logitech series mouse fails to
	  work in 386 enhanced mode.
	
	8. If you are running Windows 3.1 in 386 enhanced mode, you may encounter
	  problems, such as an unresponsive pointer, when the MS-DOS Prompt or any
	  MS-DOS-based application is run in a window. To correct this problem, do the
	  following:
	
	  a. Change the baud-rate setting for the mouse driver. To do this, add the
	     following line to the [LogiMouse] section of the SYSTEM.INI file:
	
	  BaudRate=1200
	
	  b. Include the 1200 option on the command line that loads the MS-DOS Logitech
	     mouse driver (which is provided with Windows 3.1) as follows:
	
	  LMOUSE 1200
	
	     Add the above line to your AUTOEXEC.BAT file to load the mouse driver each
	     time you start your system. The next time you start Windows, your mouse
	     should work correctly.
	
	NOTE: The command lines "logimenu" (without the quotation marks) and "click"
	(without the quotation marks), which are usually loaded from the AUTOEXEC.BAT
	file, are included with this mouse as well as other Logitech mice. They are
	terminate-and-stay-resident programs (TSRs), and as such, may cause problems
	with Windows installation and/or operation.
	
	For more information, contact Logitech Product Support.
	
	The Logitech product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 3.0 3.00 3.0a 3.00a TSHOOT 3.1 3.10 3.11 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
