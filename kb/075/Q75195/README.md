---
layout: page
title: "Q75195: Requesting MS-DOS Version Number with DEBUG"
permalink: /kb/075/Q75195/
---

## Q75195: Requesting MS-DOS Version Number with DEBUG

	Article: Q75195
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Debug script will allow you to request the MS-DOS version from the
	MS-DOS kernel (MSDOS.SYS). With some versions of MS-DOS, the VER command and
	COMMAND.COM's startup banner display a different version number than the
	kernel.
	
	Programs, including MS-DOS 5 Upgrade SETUP.EXE, use this method to determine the
	MS-DOS version.
	
	MORE INFORMATION
	================
	
	The text in the center column is the required user input, followed by pressing
	ENTER. The items on the left are what Debug will return (the values to the left
	of the colon will not be an exact match to the example). The right column
	contains comments.
	
	Debug           User
	Response        Input           Comments
	--------        -----           --------
	
	C:\>            debug           ; Start the Debug utility
	-               rax             ; Displays and alters contents in AX
	AX 0000                         ; Current value in AX
	:               3000            ; Set function 30h in AH for Int 21
	-               a 100           ; Assemble starting at 100
	16A0:0100       int 21          ; General MS-DOS services
	16A0:0102       int 20          ; End MS-DOS services
	16A0:0104       ENTER
	-               p               ; Proceed
	
	After the final step, the true MS-DOS version number will be returned in the AX
	register, as follows:
	
	AX=0005  BX=FF00  CX=0000  DX=0000  SP=FFEE  BP=0000  SI=0000  DI=0000
	DS=16A0  ES=16A0  SS=16A0  CS=16A0  IP=0102   NV UP EI PL NZ NA PO NC
	16A0:0102 CD20          INT     20
	-               q               ; quit debug
	
	The number in the AX register is in hexadecimal and in reverse order. So, if
	AX=0A02, it is MS-DOS version 2.1, or if AX=0005, it is MS-DOS version 5.0. The
	hexadecimal conversion is as follows:
	
	0-9 hexadecimal = 0-9 decimal
	A(h)=10
	B(h)=11
	C(h)=12
	D(h)=13
	E(h)=14
	F(h)=15
	
	Example
	-------
	
	If AX=0A02, reverse the pairs to:               02 0A
	Convert these hex numbers to decimal numbers:   02 10
	The MS-DOS version number is:                   2.10
	
	Reference(s):
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 399-431
	
	"Supercharging MS-DOS," Appendix E, Microsoft Press
	
	"The New Peter Norton Programmer's Guide to the PC & PS/2," Appendix B,
	Microsoft Press
	
	Additional query words: 3.00 3.10 3.20 3.30 3.30a 4.00 4.00a 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0
	
	=============================================================================
	
