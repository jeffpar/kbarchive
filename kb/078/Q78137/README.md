---
layout: page
title: "Q78137: Installing Multiple ELNK16 Adapters in a LAN Man Machine"
permalink: kb/078/Q78137/
---

## Q78137: Installing Multiple ELNK16 Adapters in a LAN Man Machine

	Article: Q78137
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article applies to LAN Manager versions 2.0, 2.1, 2.1a, and 2.2 running
	under OS/2 versions 1.2 and 1.3 or MS-DOS version 5.0.
	
	SYMPTOMS
	========
	
	3Com ELNK16 adapters are not jumper-configurable. Instead, they contain an
	EEPROM that stores configuration information. You set up the interrupt, I/O base
	address, transceiver type, and so on by running the 3Com 3c507 Setup program.
	Because the card doesn't contain jumpers to set the I/O base, the ELNK16 uses
	I/O base 100 as a reference point during start-up and diagnostics. Once the
	driver is activated (at binding), it uses the configuration settings stored in
	the EEPROM.
	
	When the computer starts up, both ELNK16 cards use I/O base 100 as a reference
	point. Because the ELNK16 is ROM configurable, there is no way for the driver to
	know which adapter is being bound. Thus, the following messages may appear upon
	rebooting (an OS/2 machine):
	
	  HPFS File system driver is installed MS OS/2 Lan Manager Protocol V1.1 3Com
	  OS/2 Network Driver for the Etherlink16 (3C507) V1.1 3Com OS/2 Network Driver
	  for the Etherlink16 (3C507) V1.1 Microsoft OS/2 NetBEUI 2.0 Installing
	  NETWKSTA.SYS Ver2.0.292 (May 25, 1991)
	
	  PRO003: INTERRUPT CONFLICT in binding NETBEUI to ELNK16_NIF2 SYS1719: The file
	  "C:\LANMAN\NETPROG\NETWKSTA.SYS" specified in the IFS command on line 46 of
	  the CONFIG.SYS file does not contain a valid device driver or file system
	  driver.
	
	CAUSE
	=====
	
	Normally, jumpers and the IOADDRESS= parameter in PROTOCOL.INI differentiate
	adapters from one another so the drivers know where to look for the board. In
	the case of the ELNK16 adapters, the IOBASE= parameter must be put under the
	DRIVERNAME=ELNK16$ (and ELNK16x$) in PROTOCOL.INI so the driver can find the
	appropriate address to bind. Leaving out this parameter generates the above
	interrupt conflict message, even though there may appear to be no conflict with
	the interrupt.
	
	MORE INFORMATION
	================
	
	Listed below is a sample configuration, tested on a Compaq 386/33 with LAN
	Manager 2.0c and OS/2 1.3, running NETBEUI protocol:
	
	Card Configurations
	-------------------
	
	                 Card 1 Settings     Card 2 Settings
	                 ---------------     ---------------
	
	I/O base address:     300 Hex             320 Hex
	Interrupt level:      10                  12
	Transceiver type:     ON-Board            ON-Board
	RAM base address:     C0000 Hex           D0000 Hex
	RAM size:             64 KB               64 KB
	ROM base address:     DA000 Hex           DE000 Hex
	ROM size:             00 KB               00 KB
	Zero wait state:      DISABLE             DISABLE
	Data mode:            TURBO               TURBO
	
	CONFIG.SYS, LANMAN Section
	--------------------------
	
	  REM  ===== LANMAN 2.0 === DO NOT MODIFY BETWEEN THESE LINES ==== LANMAN
	  DEVICE=C:\LANMAN\DRIVERS\PROTMAN\PROTMAN.OS2 /i:C:\LANMAN
	  DEVICE=C:\LANMAN\DRIVERS\ETHERNET\ELNK16\ELNK16.OS2
	  DEVICE=C:\LANMAN\DRIVERS\ETHERNET\ELNK16\ELNK16.OS2
	  DEVICE=C:\LANMAN\DRIVERS\PROTOCOL\NETBEUI\NETBEUI.OS2
	  DEVICE=C:\LANMAN\NETPROG\RDRHELP.SYS
	  IFS=C:\LANMAN\NETPROG\NETWKSTA.SYS /i:C:\LANMAN
	  REM ===== LANMAN 2.0 === DO NOT MODIFY BETWEEN THESE LINES ==== LANMAN
	
	PROTOCOL.INI
	------------
	
	  [PROTOCOL MANAGER]
	          DRIVERNAME = PROTMAN$
	
	  [NETBEUI_XIF]
	          DRIVERNAME = NETBEUI$
	          BINDINGS = "ELNK16_NIF","ELNK16_NIF2"
	
	  [ELNK16_NIF]
	  ; protocol.ini section for 3Com Etherlink16 and Etherlink16 TP Adapter card
	          DRIVERNAME = ELNK16$
	          IOBASE = 0x300
	
	  [ELNK16_NIF2]
	          DRIVERNAME = ELNK16X$
	          IOBASE = 0x320
	
	LANMAN.INI
	----------
	
	  In [NETWORKS] section:
	     net1 = netbeui$,0
	     net2 = netbeui$,1
	
	  In [WORKSTATION] section:
	     wrknets = net1,net2
	
	  In [SERVER] section:
	     srvnets = net1,net2
	
	Notes
	-----
	
	1. Any ISA adapter that uses an EEPROM to store settings will operate in a
	  similar manner.
	
	2. NetBEUI is not a routable protocol. As a result, nodes attached to the two
	  network segments connected to the server can communicate with the server, but
	  cannot exchange information between themselves.
	
	Additional query words: 2.00 2.10 2.10a 2.20 1.20 1.30 5.00 etherlink16 bind conflict
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
