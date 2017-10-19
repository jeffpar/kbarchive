---
layout: page
title: "Q142458: X.400: How to Test TP4 Connection Before X.400 Installation"
permalink: /kb/142/Q142458/
---

## Q142458: X.400: How to Test TP4 Connection Before X.400 Installation

	Article: Q142458
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the TP4 utilities (PING, TTXT.EXE, and TRXT.EXE) to test a network
	connection before you install Microsoft Mail Gateway to X.400.
	
	MORE INFORMATION
	================
	
	Notes:
	
	- The Mail Gateway to X.400 provides a TP4 transport or connectionless protocol
	  (CLNP).
	
	- The TP4/CLNP protocol also includes diagnostic utilities: PING, TTXT.EXE, and
	  TRXT.EXE.
	
	PING
	----
	
	The PING utility tests the DLI/protocol driver interface at the data link level,
	verifying data link layer connectivity. The PING utility operates as a loopback
	test between the local network workstation that will be running the X.400
	gateway MTA (X400GATE.EXE) and a remote network workstation, often the receiving
	MTA running TP4 protocol.
	
	1. Install the Microsoft Mail TP4/CLNP Drivers and Utilities disk on the hard
	  drive of the gateway computer and modify PROTOCOL.INI, CONFIG.SYS, and
	  AUTOEXEC.BAT as documented in Chapter 2 of the Microsoft Mail Gateway to
	  X.400 "Administrator's Guide," pages 25-31.
	
	2. From the C:\TP4\DIAG directory, created by the Microsoft Mail TP4/CLNP
	  Drivers and Utilities disk, type:
	
	  "ping MAC-address [count] [length] [subnetwork] [-u driver]" (without the
	  quotation marks)
	
	  The MAC-address is a 12 digit hexadecimal value of the receiving network
	  workstation. If the MAC-address is unknown, have the remote user determine
	  MAC-address from Microsoft Diagnostic Utility (MSD.EXE) under Networks or
	  from the C:\TP4\UTIL\GETMAC.EXE utility.
	
	  For more information on the use of the GETMAC.EXE utility, see page 40 of
	  Microsoft Mail Gateway to X.400 TP4/CLNP "Administrator's Reference."
	
	  NOTE: If the receiving network workstation is on another subnetwork make sure
	  to include the subnetwork value that specifies the number of the adapter
	  connected to the subnetwork where the remote system resides.
	
	3. With the command line of PING 00AA00342C79 1000, a successful returning
	  result will be:
	
	  1000 test packet sent and received
	
	TTXT and TRXT
	-------------
	
	1. Install the Microsoft Mail TP4/CLNP Drivers and Utilities disk on hard drive
	  of the gateway computer and modify PROTOCOL.INI, CONFIG.SYS, and AUTOEXEC.BAT
	  as documented in Chapter 2 of the Microsoft Mail Gateway to X.400
	  "Administrator's Guide," pages 25-31.
	
	2. Go to the computer designated as the receiver. To determine the receivers
	  NSAP, type GETNSAP from C:\TP4\UTIL directory.
	
	  If no NSAP is displayed, use SETNSAP as documented on page 52 of Microsoft
	  Mail Gateway to X.400 TP4/CLNP "Administrator's Reference."
	
	3. Type "TRXT" (without the quotation marks) from the C:\TP4\DIAG directory.
	
	4. Move to the computer designated as the transmitter.
	
	5. Type "TTXT -N rx_nsap -c" (without the quotation marks) 3 from the
	  C:\TP4\DIAG directory.
	
	  Replace rx_nsap with the value for the receiver NSAP determined in step 2.
	
	6. When you have typed the ttxt command line, one or more transport connection
	  establishment messages appear on each system. For example, the transmitter
	  station displays:
	
	     00:00:00:   STC00  established 
	     00:00:00:   STC01  established 
	     00:00:00:   STC02  established
	
	  The receiver station displays similar messages:
	
	     00:00:01:   RTC00  established 
	     00:00:01:   RTC01  established 
	     00:00:01:   RTC02  established
	
	During the trxt and ttxt testing, both computers periodically display throughput
	messages, unless quiet mode was specified. If the default value was used for
	reporting the interval, messages such as the following will be displayed at the
	transmitter station after 30 seconds:
	
	 00:00:30:   STC000    179.92  KB/sec     11.3   TSDU/sec     88   ms/TSDU
	 00:00:30:   STC001    179.92  KB/sec     11.3   TSDU/sec     88   ms/TSDU
	 00:00:30:   STC002    179.92  KB/sec     11.3   TSDU/sec     88   ms/TSDU
	
	 00:00:30:   TOTAL3  CON  538.69  KB/sec 33.9 TSDU/sec 29   ms/TSDU
	
	Similar messages will also be displayed at the receiver station after 30
	seconds:
	
	00:00:30:   RTC000    176.21  KB/sec     11.1   TSDU/sec     90   ms/TSDU
	00:00:30:   RTC001    176.21  KB/sec     11.1   TSDU/sec     90   ms/TSDU
	00:00:30:   RTC002    175.68  KB/sec     11.1   TSDU/sec     90   ms/TSDU
	00:00:30:   TOTAL3  CON  528.11  KB/sec 33.3 TSDU/sec 30   ms/TSDU
	
	1. To stop trxt and ttxt testing, press any key on the transmitter computer's
	  keyboard. The receiver displays messages similar to the following:
	
	     00:03:45:   RTC00    disconnected   reason   128
	     00:03:45:   RTC01    disconnected   reason   128
	     00:03:45:   RTC02    disconnected   reason   128
	
	2. To stop the receiver, press any key on the receiver's keyboard.
	
	  NOTE: Do not press CTRL+C or BREAK to stop the ttxt or trxt diagnostic
	  utilities.
	
	For further procedures and command line options for TP4/CLNP utilities, see
	Chapter 3 of Microsoft Mail Gateway to X.400 TP4/CLNP "Administrator's
	Reference."
	
	Additional query words: 3.00 3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
