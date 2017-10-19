---
layout: page
title: "Q123855: PC MMTA: MMTA and Digiboard Configurations"
permalink: /kb/123/Q123855/
---

## Q123855: PC MMTA: MMTA and Digiboard Configurations

	Article: Q123855
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In setting up a Digiboard product to work with version 3.2 of Microsoft Mail
	Multitasking Message Transfer Agent (MMTA), specific switches must be modified
	in order for the MMTA to run properly. For example, OS/2 will initialize all
	ports as data type E,7,1 and 1200 baud by default, unless otherwise specified
	with the Digiboard driver.
	
	Example command line for Digiboard driver used with the MMTA:
	
	  DEVICE=C:\DIGI\XALL.SYS /b:9600 /d:N81 /p:200 /m:D8000 /n:"digi"1
	
	MORE INFORMATION
	================
	
	The Digiboard driver (XALL.SYS or similar) is loaded from the CONFIG.SYS file.
	The command format line syntax is described as follows.
	
	NOTE: Only pertinent switches for the MMTA are defined:
	
	  DEVICE=C:\DIGI\XALL.SYS /n:names /b:baud /d:data type /a:a
	
	  where:
	
	  /n: ---> Defines the naming convention for Digiboard ports
	
	  If this switch is omitted, the first port will be named COM3, the second COM4
	  and so on by default. Regardless of how the ports are named, they must match
	  the AsyncCommPort= settings in each EXTERNAL.INI instance.
	
	  /b: ---> Sets the default baud rate to be used with all ports
	
	  Since the OS/2 default baud rate for serial ports is only 1200, the switch
	  should be included to obtain better performance. The switch will support up
	  to 38,400 baud; however, more reliable results can be obtained by using rates
	  of 19,200 or less.
	
	  /d: ---> Sets the initial data type (parity, # of data bits, stop bit #)
	
	  If this switch is not used, all serial ports will be set to even parity, 7
	  data and 1 stop bit(s). The MMTA requires no parity, 8 data bits and 1 stop
	  bit for asynchronous connections.
	
	  /a:a ---> Enables the alternate pin assignment of Carrier Detect (DCD)
	
	  For Digiboard RJ45 port interfaces only.
	
	  This switch will allow an 8-pin RJ45 cable to be used instead of a 10-pin RJ45
	  cable by re-assigning the Carrier Detect pin from pin 1 to pin 2. Using an
	  8-pin cable will also eliminate 2 signals, ring indictor (RI) and data set
	  ready (DSR). This switch is not recommended for use with the MMTA, largely
	  because RTS/CTS (hardware) handshaking requires the 2 eliminated signals.
	
	  NOTE: Digiboard uses an additional pin assignment for cable shielding (GND)
	  that is not required for the MMTA.
	
	For more information, please see Microsoft Mail Multi-Tasking MTA 3.2
	"Administrator's Guide" INSTALL.DOC file for DIGIBOARD XALL.SYS driver version
	1.4.5 and "Digiboard Xem System Hardware Configuration Guide."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
