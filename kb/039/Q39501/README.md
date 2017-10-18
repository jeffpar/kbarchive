---
layout: page
title: "Q39501: Simple Example Using _bios_serialcom()"
permalink: kb/039/Q39501/
---

## Q39501: Simple Example Using _bios_serialcom()

	Article: Q39501
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is an example of using the C run-time library function _bios_serialcom()
	to transmit and receive a single character over the serial-communications port
	COM1.
	
	The _bios_serialcom() routine simply calls the PC's ROM BIOS interrupt 14h. On
	most PCs, these routines are not interrupt-driven or buffered. As a result,
	characters may be lost if a significant amount of processing occurs between
	status checks and reads and/or when receiving very high-speed transmissions,
	1200 baud is the recommended maximum. Although Microsoft does not provide
	interrupt-driven serial I/O routines with our C compilers, there are several
	third-parties that do. A partial listing is available in the Language Support
	Directory that comes with the compiler.
	
	For additional information about ROM BIOS calls, please refer to "IBM ROM BIOS"
	by Ray Duncan, published by Microsoft Press.
	
	If ROM BIOS routines are not operating as expected, you may need to contact the
	company that supplied the BIOS for your particular machine.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	   - The following program is a simple example which sends and receives
	     one character to/from COM1:
	  */ 
	
	  #include <stdio.h>
	  #include <bios.h>
	
	  void main(void)
	  {
	      unsigned com1_status;
	      unsigned com1_send;
	      unsigned com1_rec;
	      unsigned com1_init;
	      int result, mask;
	
	      /* open serial port at 1200 baud, 8 data bits,
	      ** No parity, 1 stop bit */ 
	      com1_init = _bios_serialcom(_COM_INIT, 0,
	          _COM_CHR8 | _COM_NOPARITY | _COM_STOP1 | _COM_1200);
	      printf("Init status: 0x%4.4X\n", com1_init);
	
	      /* send an '*' to com1 */ 
	      com1_send = _bios_serialcom(_COM_SEND, 0, '*');
	      printf("Send status: 0x%4.4X\n", com1_send);
	
	      mask = 0x6100;
	      /* value used to mask:
	      *    bits 0-7 are related to modems,
	      *    bits 8-15 are for port status,
	      *      check to see that the following bits are set:
	      *         8 (data ready)
	      *        13 (Transmission-hold  register empty)
	      *        14 (Transmission-shift register empty)
	      */ 
	
	      /* check the status */ 
	      com1_status = _bios_serialcom(_COM_STATUS, 0, 0);
	      printf("COM1 status: 0x%4.4X\n", com1_status);
	
	      /* wait until a character is ready */ 
	      do {
	          /* check the status */ 
	          com1_status = _bios_serialcom(_COM_STATUS, 0, 0);
	
	          /* mask off the low order byte of com1_status */ 
	          com1_status = com1_status & 0xFF00;
	      } while( (mask & com1_status) == 0);
	
	      /* get a character */ 
	      com1_rec =  _bios_serialcom(_COM_RECEIVE, 0, 0);
	      printf("Read status: 0x%4.4X\n", com1_rec);
	
	      /* print the character we just received */ 
	      result = com1_rec & 0x00FF;
	      printf("Character: 0x%2.2X  =  %c\n", result, (char)result);
	  }
	
	Additional query words: kbinf 5.10 6.00 6.00a 6.00ax 7.00 1.00 1.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
