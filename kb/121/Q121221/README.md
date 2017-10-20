---
layout: page
title: "Q121221: Money: Modem Troubleshooting Guide for Windows 3.x"
permalink: /kb/121/Q121221/
---

## Q121221: Money: Modem Troubleshooting Guide for Windows 3.x

{% raw %}

	Article: Q121221
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.11
	Operating System(s): 
	Keyword(s): kbonline
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	- Microsoft Money, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a list of steps to troubleshoot modem connection
	and online service problems in Money.
	
	MORE INFORMATION
	================
	
	Check the following steps in Money:
	
	1. Check the On-Line services and Modem settings.
	
	  a. From the Tool Menu, choose Options and Modem.
	
	  b. Check that the COM Port, Baud Rate, Dial Tone, and Phone Number are
	     entered correctly.
	
	  c. From the On-Line Services Menu, choose Setup On-Line Services.
	
	  d. Make sure the Applicant and Co-Applicant information matches the On- Line
	     Services order form exactly. On-Line Services compares this information as
	     part of its initialization with Money. If the information doesn't match,
	     the system will terminate the call.
	
	2. Try reconnecting. The line may have been noisy or the service may have been
	  down.
	
	3. Reduce the baud rate of the modem to 2400 and try reconnecting. Windows does
	  not use its Universal Asynchronous Receiver-Transmitter (UART) Chip to buffer
	  data transfer at these lower baud rates.
	
	  Call (800) 848-8980 to get a different number at a lower baud rate if needed.
	
	TROUBLESHOOTING MODEM CONNECT PROBLEMS
	--------------------------------------
	
	1. Check the communications driver.
	
	  a. The COMM.DRV is located in the WINDOWS\SYSTEM subdirectory. Make sure the
	     COMM.DRV driver has the following byte size and date stamp.
	
	     Windows 3.1            Windows for Workgroups 3.11
	     --------------------------------------------------
	
	     Byte Size: 9280        Byte Size: 5968
	     Date:      3/10/92     Date:      11/1/93
	
	     If your COMM.DRV file does not match this information, try re- expanding it
	     from the original Windows Disks.
	
	     Windows 3.1            Windows for Workgroups 3.11
	     --------------------------------------------------
	
	     Disk: 1 (3.5)          Disk: 2  (3.5)
	     Disk: 2 (5.25)         Disk: 2  (5.25)
	
	  b. The COMM.DRV setting in SYSTEM.INI under the [Boot] section should be:
	
	  COMM.DRV=COMM.DRV
	
	     If any other driver is listed here place a ; at the beginning of the line
	     so that it reads ;COMM.DRV=xxxCOMM.DRV and add a new line next to it that
	     shows COMM.DRV=COMM.DRV. Also, make sure you have the following devices in
	     the [386 ENH] section of the SYSTEM.INI file:
	
	  device=*vcd
	  device=*combuff
	
	     For example, the Delrina WinFax modem may install its own COMM driver in
	     the [Boot] section of SYSTEM.INI as follows:
	
	  COMM.DRV=WFXCOMM.DRV
	
	     This line must be changed to
	
	  ;COMM.DRV=WFXCOMM.DRV
	
	     and you should add the following line below it:
	
	  COMM.DRV=COMM.DRV
	
	
	1. Check the Port settings in the Control Panel Ports section.
	
	  The settings should be set to:
	
	     Baud Rate:    match modem's baud rate (for example, 2400,
	                   9600, 14400)
	     Data Bits:    8
	     Parity:       None
	     Stop Bits:    1
	     Flow Control: Xon/Xoff
	
	  NOTE: You may try changing flow control to none. Some older modems do not
	  handle Xon/Xoff.
	
	     Advanced section:
	
	         COM 1      Address 03F8   IRQ 4
	         COM 2      Address 02F8   IRQ 3
	         COM 3      Address 03E8   IRQ 4
	         COM 4      Address 02E8   IRQ 3
	
	  Some earlier system BIOS do not recognize COM3 or COM4; to register these COM
	  Ports in Windows make sure to add the above information in the Control Panel
	  Ports section.
	
	2. Try initializing with the modem in Terminal.
	
	  a. From the Accessories group, run Terminal.
	
	  b. From the Settings menu, choose Modem Commands.
	
	  c. In the Originate setting box, enter Money's INIT string ATQ0V1E0X4S0=0
	
	  d. Try connecting to a local bulletin board service (BBS) or Internet service
	     provider (ISP).
	
	     If you are able to connect, skip to step 5.
	
	     If you are not able to connect with Terminal using Money's INIT string,
	     then add the following line to the WIN.INI file:
	
	  [MNYESRV]
	  InitModem=(Enter your modems specific INIT string)
	
	3. Try initializing with the modem by typing the following at the MS-DOS prompt
	  and pressing ENTER after each line, and then press CTRL+Z (where com1 is your
	  COM port; use a different COM port number if your COM port is not COM1):
	
	  copy con com1:
	
	  atdt 555
	
	  a. If you can initialize in MS-DOS but not in Terminal, query on the
	     following keywords in the "Microsoft Knowledge Base":
	
	  com and port and tshoot and debug
	
	  b. If you are unable to dial out on the modem at MS-DOS prompt, you have a
	     hardware interrupt conflict and you will have to contact the manufacturer
	     for more information.
	
	4. If you are able to connect at Terminal, you still may have an interrupt
	  conflict.
	
	  Interrupt conflicts can occur under the following conditions:
	
	  If you have an internal modem configured to use a COM port and that same COM
	  port exists on the system. (For example, if your internal modem uses COM1 and
	  you have a physical COM1 port.) You must disable the COM1 port card and try
	  connecting the modem again. Check your hardware documentation for more
	  information on how to disable your COM ports.
	
	  If you have devices using the same interrupt, (for example, a Mouse on COM 2
	  and a Modem on COM 4,) a conflict will result. Unplug, or remove the Mouse
	  card from the computer and then try using the Modem.
	
	  Run MSD at the MS-DOS prompt. Check the COM Ports and IRQ sections to
	  determine which COM ports are available and what IRQs are being used.
	
	5. If you upgraded to Microsoft Windows for Workgroups 3.11 from an OEM version
	  of Windows 3.1, make sure that the [386enh] section in your SYSTEM.INI file
	  includes the following settings:
	
	  device=vcomm.386
	  device=serial.386
	
	NOTE: The following lists the known hardware incompatibility problems:
	
	1. If you are using a Telebit QBlazer modem for On-Line Services, add the
	  following lines to your WIN.INI file:
	
	  [MNYESRV]
	  InitModem=S58=0S180=0S190=0
	
	2. If you will be using On-Line Services with a PDI at work, as opposed to a
	  standard telephone modem, add these lines to your WIN.INI file:
	
	  [MNYESRV]
	  InitModem=S32=0&C1&D3
	
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: kbhowto communication error occurred 3.1 3.11 tshoot
	
	======================================================================
	Keywords          : kbonline 
	Technology        : kbHomeProdSearch kbWin3xSearch kbMoneySearch kbMoney300 kbZNotKeyword3 kbWin311
	Version           : :3.0,3.11
	
	=============================================================================
	

{% endraw %}
