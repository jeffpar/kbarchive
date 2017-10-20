---
layout: page
title: "Q35436: IBM PC, XT, AT, and PS/2 Error Codes"
permalink: /kb/035/Q35436/
---

## Q35436: IBM PC, XT, AT, and PS/2 Error Codes

{% raw %}

	Article: Q35436
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of IBM PC, XT, and AT PS/2 Diagnostic Error Codes. This
	list has been compiled from a variety of sources, including the IBM Technical
	Reference manuals, IBM Hardware Maintenance and Service manuals, technical
	articles, and bulletin board listings.
	
	MORE INFORMATION
	================
	
	Code  Description
	------------------
	
	01x   Undetermined problem errors
	02x   Power supply errors
	
	1xx     System Board Errors
	---------------------------
	
	  101  System board error - Interrupt failure
	  102  System board error - Timer failure
	  103  System board error - Timer interrupt failure
	  104  System board error - Protected mode failure
	  105  System board error - Last 8042 command not accepted
	  106  System board error - Converting logic test
	  107  System board error - Hot NMI test
	  108  System board error - Timer bus test
	  109  Direct memory access test error
	  110  System board memory
	  111  Adapter memory
	  112  (any adapter in system unit)
	  113  (any adapter in system unit)
	  121  Unexpected hardware interrupts occurred
	  131  Cassette wrap test failed
	  151  System Board Error; Defective battery
	  152  System Board Error; Real time clock failure
	  161  System Options Error - (Run SETUP) Battery failure
	  162  System options not set correctly-(Run SETUP)
	  163  Time and date not set - (Run SETUP)
	  164  Memory size error - (Run SETUP)
	  165  System options not set - (Run SETUP)
	  166  (any adapter in system unit)
	  199  User-indicated configuration not correct
	
	2xx    Memory (RAM) Errors
	       xxyyyy yyzz 201 bad ram chip in bank xx row zz
	------------------------------------------------------
	
	  201  Memory test failed
	  202  Memory address error
	  203  Memory address error
	  215  (system board memory failure)
	  216  (system board memory failure)
	
	3xx    Keyboard Errors
	-----------------------
	
	  301  Keyboard did not respond to software reset correctly, or a
	       stuck key failure was detected. If a stuck key was detected,
	       the scan code for the key is displayed in hexadecimal. For
	       example, the error code 49 301 indicates that Key 73, the PAGE
	       UP key, has failed (49 hex = 73 decimal)
	  302  User-indicated error from the keyboard test, or AT keylock is
	       locked
	  303  Keyboard or system unit error
	  304  Keyboard or system unit error; CMOS does not match system
	  305  Models 50 and 60 fuse or keyboard cable error
	  341  Replace keyboard
	  342  Replace interface cable
	  343  Replace enhancement card or cable
	
	4xx    Monochrome Monitor Errors
	---------------------------------
	
	  401  Monochrome memory test, horizontal synchronous frequency test,
	       or video test failed
	  408  User-indicated display attributes failure
	  416  User-indicated character set failure
	  424  User-indicated 80 X 25 mode failure
	  432  Parallel port test failed (monochrome adapter)
	
	5xx    Color Monitor Errors
	----------------------------
	
	  501  Color memory test failed, horizontal synchronous frequency
	       test, or video test failed
	  508  User-indicated display attribute failure
	  516  User-indicated character set failure
	  524  User-indicated 80 X 25 mode failure
	  532  User-indicated 40 X 25 mode failure
	  540  User-indicated 320 X 200 graphics mode failure
	  548  User-indicated 640 X 200 graphics mode failure
	
	6xx    Floppy Disk Drive Errors
	--------------------------------
	
	  601  Disk power-on diagnostics test failed
	  602  Disk test failed; boot record is not valid
	  603  Disk size error
	  606  Disk verify function failed
	  607  Write-protected disk
	  608  Bad command disk status returned
	  610  Disk initialization failed
	  611  Timeout - disk status returned
	  612  Bad NEC (controller) - disk status returned
	  613  Bad DMA - disk status returned
	  614  DMA Boundary error
	  621  Bad seek - disk status returned
	  622  Bad CRC - disk status returned
	  623  Record not found - disk status returned
	  624  Bad address mark - disk status returned
	  625  Bad NEC (controller) seek - disk status returned
	  626  Disk data compare error
	  627  Disk change line error
	  628  Disk removed
	
	7xx    8087 or 80287 Math Coprocessor Errors
	---------------------------------------------
	
	  701  Math coprocessor test failed
	
	9xx    Parallel Printer Adapter Errors
	---------------------------------------
	
	  901  Parallel printer adapter test failed
	
	10xx    Reserved for Parallel Printer Adapter
	---------------------------------------------
	
	 1001  Alt printer Adapter test failed
	
	11xx   Asynchronous Communications Adapter Errors
	-------------------------------------------------
	
	 1101 Asynchronous communications adapter test failed
	 1102 Any serial device (system board)
	 1106 Any serial device (system board)
	 1107 Communications cable (system board)
	 1108 Any serial device (system board)
	 1109 Any serial device (system board)
	 1110 Modem status register not clear
	 1111 Ring indicate failure
	 1112 Trailing edge ring indicate failure
	 1113 Receive and delta receive line signal detect failure
	 1114 Receive line signal detect failure
	 1115 Delta receive line signal detect failure
	 1116 Line control register; all bits cannot be set
	 1117 Line control register; all bits cannot be reset
	 1118 Xmit holding and/or shift register is stuck on
	 1119 Data ready stuck on
	 1120 Interrupt enable register, all bits cannot be set
	 1121 Interrupt enable register, all bits cannot be reset
	 1122 Interrupt pending stuck on
	 1123 Interrupt ID register stuck on
	 1124 Modem control register, all bits cannot be set
	 1125 Modem control register, all bits cannot be reset
	 1126 Modem status register, all bits cannot be set
	 1127 Modem status register, all bits cannot be reset
	 1128 Interrupt ID failure
	 1129 Cannot force overrun error
	 1130 No modem status interrupt
	 1131 Invalid interrupt pending
	 1132 No data ready
	 1133 No data available interrupt
	 1134 No transmit holding interrupt
	 1135 No interrupts
	 1136 No received line status interrupt
	 1137 No receive data available
	 1138 Transmit holding register not empty
	 1139 No modem status interrupt
	 1140 Transmit holding register not empty
	 1141 No interrupts
	 1142 No IRQ4 interrupt
	 1143 No IRQ3 interrupt
	 1144 No data transferred
	 1145 Maximum BAUD rate failed
	 1146 Minimum BAUD rate failed
	 1148 Timeout error
	 1149 Invalid data returned
	 1150 Modem status register error
	 1151 No DSR and Delta DSR
	 1152 No data set ready
	 1153 No delta
	 1154 Modem status register not clear
	 1155 No CTS and Delta CTS
	 1156 No clear to send
	 1157 No delta CTS
	
	12xx   Alternate Asynchronous Communications Adapter Errors
	-----------------------------------------------------------
	
	 1201 Alternate asynchronous communications adapter test failed
	 1202 Dual Asynchronous Adapter/A (Any serial device)
	 1206 Dual Asynchronous Adapter/A (Any serial device)
	 1207 Dual Asynchronous Adapter/A board error
	 1208 Dual Asynchronous Adapter/A (Any serial device)
	 1209 Dual Asynchronous Adapter/A (Any serial device)
	
	13xx   Game Control Adapter Errors
	----------------------------------
	
	 1301 Game control adapter test failed
	 1302 Joystick test failed
	
	14xx   Printer Errors
	---------------------
	
	 1401 Printer test failed
	 1404 Matrix printer failed
	
	15xx   Synchronous Data Link Control (SDLC) Communications Adapter Errors
	-------------------------------------------------------------------------
	
	 1510 8255 Port B failure
	 1511 8255 Port A failure
	 1512 8255 Port C failure
	 1513 8253 Timer 1 did not reach terminal count
	 1514 8253 Timer 1 stuck on
	 1515 8253 Timer 0 did not reach terminal count
	 1516 8253 Timer 0 stuck on
	 1517 8253 Timer 2 did not reach terminal count
	 1518 8253 Timer 2 stuck on
	 1519 8273 Port B error
	 1520 8273 Port A error
	 1521 8273 command/read timeout
	 1522 Interrupt level 4 failure
	 1523 Ring Indicate stuck on
	 1524 Receive clock stuck on
	 1525 Transmit clock stuck on
	 1526 Test indicate stuck on
	 1527 Ring indicate not on
	 1528 Receive clock not on
	 1529 Transmit clock not on
	 1530 Test indicate not on
	 1531 Data set ready not on
	 1532 Carrier detect not on
	 1533 Clear to send not on
	 1534 Data set ready stuck on
	 1536 Clear to send stuck on
	 1537 Level 3 interrupt failure
	 1538 Receive interrupt results error
	 1539 Wrap data miscompare
	 1540 DMA channel 1 error
	 1541 DMA channel 1 error
	 1542 Error in 8273 error checking or status reporting
	 1547 Stray interrupt level 4
	 1548 Stray interrupt level 3
	 1549 Interrupt presentation sequence timeout
	
	16xx   Display Emulation Errors (327x, 5520, 525x)
	--------------------------------------------------
	
	17xx   Fixed Disk Errors
	------------------------
	
	The following is a listing of Personal Computer AT Error Codes for the
	fixed disk drive and fixed disk drive adapter:
	
	 1700 Fixed Disk/Adapter
	 1701 HDD Controller Failure
	 1702 Time out error
	 1703 Seek error
	 1704 Disk adapter error
	 1705 No record found
	 1706 Write fault error
	 1707 Track 0 error
	 1708 Head select error
	 1709 Defective ECC
	 1710 Read buffer overrun
	 1711 Bad address mark
	 1712 Error-cause not determined
	 1713 Data compare error
	 1714 Drive not ready
	 1780 Disk 0 failure
	 1781 Disk 1 failure
	 1782 Disk adapter error
	 1790 Disk 0 error
	 1791 Disk 1 error
	
	18xx   I/O Expansion Unit Errors
	--------------------------------
	
	 1801 I/O expansion unit POST error
	 1810 Enable/Disable failure
	 1811 Extender card warp test failed (disabled)
	 1812 High order address lines failure (disabled)
	 1813 Wait state failure (disabled)
	 1814 Enable/Disable could not be set on
	 1815 Wait state failure (disabled)
	 1816 Extender card warp test failed (enabled)
	 1817 High order address lines failure (enabled)
	 1818 Disable not functioning
	 1819 Wait request switch not set correctly
	 1820 Receiver card wrap test failure
	 1821 Receiver high order address lines failure
	
	19xx   3270 PC Attachment Card Errors
	-------------------------------------
	
	20xx   Binary Synchronous Communications (BSC) Adapter Errors
	-------------------------------------------------------------
	
	 2010 8255 Port A failure
	 2011 8255 Port B failure
	 2012 8255 Port C failure
	 2013 8253 Timer 1 did not reach terminal count
	 2014 8253 Timer 1 stuck on
	 2016 8253 Timer 2 did not reach terminal count, or timer 2 stuck on
	 2017 8251 Data set ready failed to come on
	 2018 8251 Clear to send not sensed
	 2019 8251 Data set ready stuck on
	 2020 8251 Clear to send stuck on
	 2021 8251 Hardware reset failed
	 2022 8251 Software reset failed
	 2023 8251 Software "error reset" failed
	 2024 8251 Transmit ready did not come on
	 2025 8251 Receive ready did not come on
	 2026 8251 Could not force "overrun" error status
	 2027 Interrupt failure - no timer interrupt
	 2028 Interrupt failure - transmit, replace card or planar
	 2029 Interrupt failure - transmit, replace card
	 2030 Interrupt failure - receive, replace card or planar
	 2031 Interrupt failure - receive, replace card
	 2033 Ring indicate stuck on
	 2034 Receive clock stuck on
	 2035 Transmit clock stuck on
	 2036 Test indicate stuck on
	 2037 Ring indicate stuck on
	 2038 Receive clock not on
	 2039 Transmit clock not on
	 2040 Test indicate not on
	 2041 Data set ready not on
	 2042 Carrier detect not on
	 2043 Clear to send not on
	 2044 Data set ready stuck on
	 2045 Carrier detect stuck on
	 2046 Clear to send stuck on
	 2047 Unexpected transmit interrupt
	 2048 Unexpected receive interrupt
	 2049 Transmit data did not equal receive data
	 2050 8251 detected overrun error
	 2051 Lost data set ready during data wrap
	 2052 Receive timeout during data wrap
	
	21xx   Alternate Binary Synchronous Communications Adapter Errors
	-----------------------------------------------------------------
	
	 2110 8255 Port A failure
	 2111 8255 Port B failure
	 2112 8255 Port C failure
	 2113 8253 Timer 1 did not reach terminal count
	 2114 8253 Timer 1 stuck on
	 2115 8253 Timer 2 did not reach terminal count, or timer 2 stuck on
	 2116 8251 Data set ready failed to come on
	 2117 8251 Clear to send not sensed
	 2118 8251 Data set ready stuck on
	 2119 8251 Clear to send stuck on
	 2120 8251 Hardware reset failed
	 2121 8251 Software reset failed
	 2122 8251 Software "error reset" failed
	 2123 8251 Transmit ready did not come on
	 2124 8251 Receive ready did not come on
	 2125 8251 Could not force "overrun" error status
	 2126 Interrupt failure - no timer interrupt
	 2128 Interrupt failure - transmit, replace card or planar
	 2129 Interrupt failure - transmit, replace card
	 2130 Interrupt failure - receive, replace card or planar
	 2131 Interrupt failure - receive, replace card
	 2133 Ring indicate stuck on
	 2134 Receive clock stuck on
	 2135 Transmit clock stuck on
	 2136 Test indicate stuck on
	 2137 Ring indicate stuck on
	 2138 Receive clock not on
	 2139 Transmit clock not on
	 2140 Test indicate not on
	 2141 Data set ready not on
	 2142 Carrier detect not on
	 2143 Clear to send not on
	 2144 Data set ready stuck on
	 2145 Carrier detect stuck on
	 2146 Clear to send stuck on
	 2147 Unexpected transmit interrupt
	 2148 Unexpected receive interrupt
	 2149 Transmit data did not equal receive data
	 2150 8251 detected overrun error
	 2151 Lost data set ready during data wrap
	 2152 Receive timeout during data wrap
	
	22xx   Cluster Adapter Errors
	-----------------------------
	
	24xx   Enhanced Graphics Adapter Errors
	---------------------------------------
	
	26xx   XT/370 Error Codes
	-------------------------
	
	27xx   XT/370 Error Codes
	-------------------------
	
	29xx   Color Matrix Printer Errors
	----------------------------------
	
	 2901
	 2902
	 2904
	
	30xx   Primary PC Network Adapter Errors
	----------------------------------------
	
	 3001 CPU Failure
	 3002 ROM Failure
	 3003 ID Failure
	 3004 RAM Failure
	 3005 HIC Failure
	 3006 +/- 12v Failed
	 3007 Digital Loopback Failure
	 3008 Host Detected HIC Failure
	 3009 Synchronous Fail & No Go Bit
	 3010 HIC Test OK & No Go Bit
	 3011 Go Bit & No CMD 41
	 3012 Card not present
	 3013 Digital Failure ( Fall Through )
	 3015 Analog Failure
	 3041 Hot Carrier (not this card)
	 3042 Hot Carrier (This Card)
	
	31xx   Secondary PC Network Adapter Errors
	------------------------------------------
	
	 3101 CPU Failure
	 3102 ROM Failure
	 3103 ID Failure
	 3104 RAM Failure
	 3105 HIC Failure
	 3106 +/- 12v Failed
	 3107 Digital Loopback Failure
	 3108 Host Detected HIC Failure
	 3109 Synchronous Fail & No Go Bit
	 3110 HIC Test OK & No Go Bit
	 3111 Go Bit & No CMD 41
	 3112 Card not present
	 3113 Digital Failure ( Fall Through )
	 3115 Analog Failure
	 3141 Hot Carrier (not this card)
	 3142 Hot Carrier (THIS CARD !!)
	
	33xx   Compact Printer Errors
	-----------------------------
	
	74xx   Display Adapter 8514/A
	-----------------------------
	
	850x   80286 Expanded Memory Adapter/A
	--------------------------------------
	
	851x   80286 Expanded Memory Adapter/A
	--------------------------------------
	
	852x   Memory Module Package on the 80286 Expanded Memory Adapter/A
	-------------------------------------------------------------------
	
	860x   PS/2 Pointing Device Errors
	----------------------------------
	
	  8601   Pointing device (IBM mouse)
	  8602   Pointing device
	  8603   System board error
	  8604   System board : Pointing device
	
	100xx  Multiprotocol Adapter/A
	------------------------------
	
	  10002  Multiprotocol Adapter/A any serial device
	  10006  Multiprotocol Adapter/A any serial device
	  10007  Communications cable Multiprotocol Adapter/A
	  10008  Multiprotocol Adapter/A any serial device
	  10009  Multiprotocol Adapter/A any serial device
	
	101xx Modem Adapter/A
	---------------------
	
	  10102  Modem Adapter/A any serial device
	  10106  Modem Adapter/A any serial device
	  10108  Modem Adapter/A any serial device
	  10109  Modem Adapter/A any serial device
	
	104xx Fixed Disk Adapter (ESDI) Drives 0 or 1 (C or D)
	------------------------------------------------------
	
	  10480  Fixed disk C, adapter (ESDI) or system board error
	  10481  Fixed disk D, adapter (ESDI) or system board error
	  10482  Fixed disk C or system board error
	  10483  Fixed disk adapter (ESDI) or system board error
	  10490  Fixed disk C or adapter (ESDI) error
	  10491  Fixed disk C or adapter (ESDI) error
	
	  16500  6157 Tape Attachment Adapter
	
	  16520  6157 Streaming Tape Drive
	
	  16540  6157 Streaming Tape Drive or tape attachment adapter
	
	Additional query words: 3rdParty win286 win386 3.00 3.00a 3.10 3.11 win30 win31 KBHW errmsg err msg wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
