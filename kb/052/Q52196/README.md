---
layout: page
title: "Q52196: Serial Communications Parity Definition"
permalink: /kb/052/Q52196/
---

## Q52196: Serial Communications Parity Definition

	Article: Q52196
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In serial communications, the parity bit is used in a simple error detection
	algorithm. As a stream of data bits is formed, an extra bit, called the parity
	bit, is added. This bit is set on (1) or off (0), depending on the serial
	communications parameters set in the UART chip. The following table lists the
	available parity parameters and their meanings:
	
	  Parameter  Meaning
	  ---------  -------
	
	  ODD        Parity bit set so that there is an odd number of 1 bits
	  EVEN       Parity bit set so that there is an even number of 1 bits
	  NONE       Parity bit is ignored, value is indeterminate
	  MARK       Parity bit is ALWAYS set to 1
	  SPACE      Parity bit is ALWAYS set to 0
	
	MORE INFORMATION
	================
	
	For the ASCII characters "G" (0x47) and "I" (0x049), the binary equivalents are
	00100111 and 00101001. The following table is an example of how a parity bit
	would be coded for these values (the last bit is used as the parity bit):
	
	             G             I
	
	  ODD   - 001001111     001010010
	  EVEN  - 001001110     001010011
	  NONE  - 00100111?     00101001?
	  MARK  - 001001111     001010011
	  SPACE - 001001110     001010010
	
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
