---
layout: page
title: "Q115593: Troubleshooting Remote Access in Windows for Workgroups 3.11"
permalink: /kb/115/Q115593/
---

## Q115593: Troubleshooting Remote Access in Windows for Workgroups 3.11

{% raw %}

	Article: Q115593
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbtshoot win31
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a step-by-step guide for troubleshooting Remote Access
	Services (RAS) in Windows for Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	Steps to Troubleshoot Problems with Remote Access Services
	----------------------------------------------------------
	
	1. Determine whether the modem works at the MS-DOS command prompt.
	
	  Exit Windows and, at the MS-DOS command prompt, issue the command "Echo
	  ATDT5555555 > COMx" (without the quotation marks), where x is the number
	  of the communications port. If you hear the tone from the modem dialing
	  555-5555, proceed to step 2. If you do not hear a dial tone, the modem may
	  need to be reconfigured for the correct port address and interrupt. Also, if
	  the modem is external, check the serial cable to ensure a good connection and
	  make sure the proper cable is being used. If the modem is internal, move the
	  modem to a different slot in the computer and check the configuration of the
	  jumps on the modem (if any exist). Refer to with the modem documentation for
	  setup and technical support information.
	
	2. Determine whether the modem works in Windows Terminal.
	
	  In the Accessories group, open Terminal and type the command "ATDT" (without
	  the quotation marks). If the correct communications (COM) port is selected
	  for the modem, a dial tone should be heard and OK or 0 (zero) should be
	  returned to the modem terminal screen. Pressing ENTER should cancel the
	  command to the modem and the message "NO CARRIER" should be returned to the
	  screen. If you do not hear a dial tone after the ATDT command, choose
	  Communications from the Settings menu to make sure the correct Connector (COM
	  Port) setting is selected. If you do not see the text echoed back to the
	  screen as you type the command, choose Terminal Preferences from the Settings
	  menu and select the Local Echo option under Terminal Modes. If the modem does
	  not work in Terminal, the modem may not be correctly configured for Windows
	  (or possibly MS-DOS). If so, try the following:
	
	   - Disable 32-bit file access. To do so, choose the 386 Enhanced icon in
	     Control Panel, choose the Virtual Memory button, choose the Change button,
	     and then clear the Use 32-Bit Disk Access check box.
	
	   - In the Windows directory, open the SYSTEM.INI file and check the [Boot]
	     section for the proper communications driver used globally throughout
	     Windows. The line should read, COMM.DRV=COMM.DRV. If COMM.DRV= is set to
	     anything other than COMM.DRV, change the line to read COMM.DRV=COMM.DRV.
	     Also, make sure the COMM.DRV file in the Windows SYSTEM subdirectory has
	     the file date 11/1/93 and a file size of 5968 bytes.
	
	  If the modem still does not work in Terminal, see the following article In the
	  Microsoft Knowledge Base:
	
	  Q92447 Windows 3.1 and Serial Communications
	
	3. Check RAS again after performing the above steps.
	
	  If Terminal is working and RAS is still not working, add the line COMxFIFO=0
	  to the [386Enh] section of the SYSTEM.INI file using a text editor. This
	  command turns off the 16-bit buffer built into the 16550 UART chip, forcing
	  one-bit operation of serial data through the UART chip.
	
	4. Check the file RASMAC.386 in the Windows SYSTEM subdirectory.
	
	  If RASMAC.386 is dated 11/1/93, disable software compression. To do this,
	  choose Disable Software Compression from the Options menu in RAS. (The next
	  time you open the Options menu, a check mark should be beside Disable
	  Software Compression.) If disabling software compression helps, use hardware
	  compression instead.
	
	5. Try a lower bits-per-second (bps) rate.
	
	  Slowing the speed of the modem can often help decrease noise on the phone
	  lines. It can also help with compatibility problems when using high-speed
	  modems (9600 bps and above) that differ slightly in their compression and
	  error-correction standards. If the lower bps rate works, you may want to
	  disable hardware flow control and/or modem compression. To do this, choose
	  the Phone Book Edit button in RAS, choose the Modem button, and then clear
	  the Enable Hardware Flow Control and/or Enable Modem Compression options.
	
	6. Check the modem documentation to see if the recommended initialization string
	  differs from the one in the MODEM.INF file found in the Windows SYSTEM
	  subdirectory. If it does, try entering the command manually. Choose the Phone
	  Book Edit button, choose Modem, and select the Enter Modem Commands Manually
	  option. This allows you to enter a modem command string manually to determine
	  whether the default one in the MODEM.INF is related to the problem.
	
	7. Check the BIOS date of the modem.
	
	  Check the BIOS date of the modem with the manufacturer to see if a newer BIOS
	  is available. To check the BIOS date of the modem using Terminal, issue the
	  command ATIx (where x is a value between 1 and 9). For example, in Terminal,
	  issue the command ATI3, then <enter>. A BIOS version number should be
	  displayed on the screen, (for example, V1.200 or ver .59). If there is a
	  newer BIOS available, update the BIOS by downloading the firmware (software)
	  from the modem manufacturer's bulletin board service (BBS) or CompuServe
	  Information Service (CIS) forum if available. Some modem manufacturers have a
	  single-chip upgrade available if the BIOS of the modem is not software
	  upgradeable.
	
	8. Determine whether the modem is supported in RAS.
	
	  If it is an unsupported modem, refer to step 6 above for information about
	  checking for the correct communication string sent by RAS from the MODEM.INF
	  file. You can make your own section by cutting and pasting the information
	  from a related modem section with your own section heading (such as [my
	  modem]). This method is not supported, but it may be the only way RAS can
	  communicate with your modem.
	
	Common Error Messages in RAS
	----------------------------
	
	Error 615:
	
	When you use RAS in Windows for Workgroups 3.11, you may receive the message
	"Error 615: The port was not found." (without the quotation marks) This error
	can occur when the Remote Access Phone Book file and the current Remote Access
	configuration are inconsistent. If you have changed your communications
	equipment (for example, your serial port or modem), be sure to reconfigure RAS.
	(For more information, see "Reconfiguring Remote Access" in the online help
	file.) If the error persists, remove and re-create the affected Phone Book entry
	or reinstall RAS. The Remote Access Phone Book (RASPHONE.PBK) is in the Windows
	subdirectory.
	
	Error 640:
	
	The message "Error 640: A Net BIOS error has occurred" (without the quotation
	marks) is generated when the modem does not negotiate the connection correctly
	or when the line is noisy. Set the modem to a lower initial bits-per-second
	(bps) speed, and then dial again. (For more information, refer to "Setting Modem
	Features" in the online help in RAS.)
	
	If reducing the modem speed does not correct this error, RAS is probably running
	out of conventional memory to set up its session. RAS uses conventional memory
	(about 90 kilobytes [K]) without being in the Answer mode as the server. With
	RAS set up as the server and in Answer mode, RAS uses about 120K of conventional
	memory. You may want to clean boot to see if you can make more conventional
	memory available. Most RAS NetBIOS error 640 messages occur when your system has
	less than 500K free conventional memory at MS-DOS before starting Windows for
	Workgroups. Remove any terminate-and- stay-resident (TSR) programs and other
	network drivers to determine whether more conventional memory solves the
	problem.
	
	NOTE: Having the NET START command in the AUTOEXEC.BAT file and IFSHLP.SYS in the
	CONFIG.SYS file are required to run RAS.
	
	For more information on Error 640, query on the following words in the Microsoft
	Knowledge Base:
	
	  netbios and error and 640
	
	Error 692:
	
	When dialing using RAS, you may receive the message "Error 692: Hardware Failure
	in Port or Attached Device" even though all other communication software is
	working correctly. This error message is reported when RAS cannot correctly
	communicate with the modem. To correct this problem, you must first know the
	reason RAS cannot communicate with the modem. Check the selected modem for RAS
	with the following steps:
	
	1. Choose the RAS icon in the Network group.
	
	2. Choose Setup from the menu list and then choose Configure.
	
	3. Check the device selected and the port to which it is assigned.
	
	The modem's handshaking requirements may not match what is being sent by RAS, or
	the emulation for the modem may be incorrect. RAS uses a file called MODEM.INF
	in the Windows SYSTEM subdirectory to send the right communication strings to
	the modem through the selected modem in RAS. If you use a text editor (such as
	Windows Write) with the No Conversion option selected to open the MODEM.INF
	file, you can find the modem you have selected in RAS to look at the
	COMMAND_INIT string. COMMAND_INIT string is the communication string RAS sends
	to set up the modem for communication. Refer to the modem documentation or check
	with the modem manufacturer for the correct communication string for your
	modem.
	
	For more information on this error message, query on the following words in the
	Microsoft Knowledge Base:
	
	  RAS and ERROR and 692
	
	NOTE: The following updated communication Application Notes are available from
	Microsoft:
	
	Additional query words: 3.11 tshoot remote access service baud
	
	======================================================================
	Keywords          : kbtshoot win31 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
