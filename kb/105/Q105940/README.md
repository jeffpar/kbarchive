---
layout: page
title: "Q105940: Troubleshooting Serial Port Problems in Windows"
permalink: /kb/105/Q105940/
---

## Q105940: Troubleshooting Serial Port Problems in Windows

{% raw %}

	Article: Q105940
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Windows or Microsoft Windows for Workgroups Terminal
	program, you have problems connecting to the modem, or you receive the following
	error message:
	
	  The COM<x> port is currently assigned to a MS-DOS application. Do you
	  want to reassign the port to Windows?
	
	You may also have difficulty attaching to the modem through other Windows- based
	communications packages, or your mouse (or other serial device) may not operate
	properly in Windows.
	
	CAUSE
	=====
	
	Most problems associated with the serial ports occur when a machine does not
	recognize that it has the specified communications (COM) port available.
	
	Windows supports the use of COM ports 3 and 4, although the following steps may
	be necessary to make them accessible. For example, if your mouse is not working
	in Windows, or you cannot access your modem through Windows, you may need to
	rewrite the BIOS Data Area for your serial ports. By placing an address for each
	serial port in a Debug script file, you can ensure future compatibility if you
	add or remove a device. (Creating a Debug script file should not be required for
	Windows for Workgroups 3.11.)
	
	RESOLUTION
	==========
	
	1. When you troubleshoot communications problems in Windows, an MS-DOS-based
	  communications program is often required to test the modem and ports outside
	  Windows. This can help you to determine if you are having an issue in with
	  Windows, or something else.
	
	  If an MS-DOS-based program cannot be used, you can test the modem connections
	  by typing the following command at a safe-mode command prompt outside
	  Windows
	
	  Echo ATM1L3X0DT12345 > COMx
	
	  where "x" represents the COM port in question.
	
	  The modem should dial the touch tone digits "12345".
	
	  To hang up the modem, type
	
	  Echo ATH0 > COMx
	
	  where "x" represents the COM port in question.
	
	  The ATM1L3X0DT12345 command is a signal to the modem to dial the numbers
	  "12345". The first command, Attention, signals to the modem that it is about
	  to receive information, M1 is a universal command to turn the modem's speaker
	  on if it is off by default, L3 is a universal command to raise the modem's
	  speaker volume to the maximum level if it is at the lowest by default, X0 is
	  a universal command that signals the modem to execute the command without
	  waiting for a dial tone (useful if modem and voice calls use the same phone
	  line), and the DT12345 command instructs the modem to dial out the digits
	  1-5.
	
	2. To determine if your machine is recognizing the existence of the COM port
	  your modem or mouse is on, do the following:
	
	  a. Use the MS-DOS DEBUG command to look at the BIOS table.
	
	     NOTE: You may also run the Microsoft Diagnostics utility (MSD).
	
	  b. Quit Windows. At the MS-DOS command prompt, type:
	
	  debug
	
	     This returns a hyphen prompt (-).
	
	  c. At the hyphen prompt, type:
	
	  d40:0
	
	     This returns a listing of the BIOS data and the hyphen prompt.
	
	     NOTE: After you review the table, you can type "Q" (without the quotation
	     marks) to quit Debug.
	
	  d. Look at the table of data on the screen. The first row is the important
	     one. It shows a line resembling the following:
	
	  0040:0000 F8 03 F8 02 E8 03 00 00-78 03 00 00 00 00 00 00
	
	     All values to the left of the hyphen are COM ports; all values to the right
	     are LPT ports. The example above shows that the computer has COM1 at
	     address 03F8 (it is listed in reverse byte order), COM2 at 02F8, and COM3
	     at 03E8. COM4 is not found; therefore, 0000 is displayed just to the left
	     of the hyphen. If the machine does not recognize the COM port desired to
	     be used by Terminal (identified by the 0000 entries), continue as follows.
	     If the machine does recognize the desired COM port, skip to the
	     "SYSTEM.INI Modifications" section below in this article.
	
	3. The following instructions help you write the Debug script and place it in
	  the AUTOEXEC.BAT file:
	  a. Use a text editor such as Microsoft Windows Notepad and create the
	     following file:
	
	           E40:0
	           F8 03 F8 02 E8 03 E8 02
	           q
	
	     NOTE: You must follow the "Q" with a carriage return (press ENTER).
	
	  b. Save the three-line file, and give it a name such as:
	
	  c:\fixcom.deb
	
	  c. Execute the Debug script file by typing the following at an MS-DOS command
	     prompt outside Windows:
	
	  debug < fixcom.deb > nul
	
	  d. If the step above works correctly, add a line to the end of the
	     AUTOEXEC.BAT file (but before launching Windows), such as the following:
	
	  debug < fixcom.deb > nul
	
	     NOTE: The > NUL ending is just to keep the script from being echoed back
	     to the screen. You can use Debug again to look at d40:0 and see if the
	     change took effect.
	
	  e. Save the AUTOEXEC.BAT file and reboot the machine.
	
	     This procedure should work even if the machine does not have devices on all
	     four serial ports. This also corrects problems if a device has been
	     removed from COM1 and the addresses have slid down, which may cause mouse
	     problems.
	
	     You should now be able to run MSD or Debug and see all four COM ports.
	
	SYSTEM.INI Modifications
	------------------------
	
	If the port is recognized by the machine, note the address that is listed when
	using Debug, and, for Windows 3.0 and 3.0a, edit the SYSTEM.INI file and include
	the following COMxBase= lines to coincide with the base I/O address used by the
	hardware. The examples given above for COM1 and COM2 do not require any changes
	to the SYSTEM.INI file. If you are using Windows 3.0, the examples given below
	for COM3 and COM4 require the following entries in the [386Enh] section of the
	SYSTEM.INI file:
	
	  COMxBase Setting                Windows 3.0 Default
	  ---------------------------------------------------
	  COM1Base=3F8h                   <default is 3F8h>
	  COM2Base=2F8h                   <default is 2F8h>
	  COM3Base=3E8h                   <default is 2E8h>
	  COM4Base=2E8h                   <default is 2E0h>
	
	For Windows 3.1 and Windows for Workgroups 3.1 and 3.11, choose the Ports icon in
	Control Panel to set the base I/O address and interrupt for each COM port
	instead of editing the SYSTEM.INI file.(This is the only step required for
	Windows for Workgroups 3.11.)
	
	The defaults for Windows 3.1 and Windows for Workgroups 3.x are:
	
	  COM1Base=3F8h                   <default is 3F8h>
	  COM2Base=2F8h                   <default is 2F8h>
	  COM3Base=3E8h                   <default is 3E8h>
	  COM4Base=2E8h                   <default is 2E8h>
	
	MORE INFORMATION
	================
	
	If you are using a serial mouse on COM1 and you have an internal modem on COM3,
	this configuration may not work because the mouse is using the interrupt that
	COM3 wants to share. This behavior also occurs if you are using a serial mouse
	on COM2 and want to use an internal modem on COM4. This configuration is more
	likely to work on machines that allow for IRQ sharing (such as Micro Channel
	Architecture [MCA] computers).
	
	If COM3 is required, it should be reconfigured at the board level to use a
	different interrupt that is free, such as IRQ 5.
	
	
	Additional query words: 3.00 3.10 3.00a BIOS slide slip move sliding debugging terminal.exe com1 com2 com3 com4 AT DT DOS w_works hometool works for windows win95 hyperterminal win95x
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,95
	
	=============================================================================
	

{% endraw %}
