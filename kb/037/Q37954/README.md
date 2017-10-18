---
layout: page
title: "Q37954: Cannot Set Border Color with ANSI.SYS"
permalink: kb/037/Q37954/
---

## Q37954: Cannot Set Border Color with ANSI.SYS

	Article: Q37954
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the ANSI.SYS device driver allows changing of foreground, background,
	and text attributes, it does not change the border color. However, there is a
	ROM BIOS interrupt call that allows the border color to be changed if your ROM
	BIOS supports it.
	
	MORE INFORMATION
	================
	
	The ROM BIOS interrupt 10H contains the ROM BIOS video services. Subservices 0BH
	or 10H should be used, depending on the graphics adapter installed. The
	following is a partial assembly-language code example of how to set the border
	color using these ROM BIOS video subservices:
	
	      ; For CGA:
	      ;
	      mov  ah,0BH  ; video subservice 0BH: set palette
	      mov  bh,00H  ; palette subservice 0: set border
	      mov  bl,06H  ; color = 6
	      int  10H     ; call ROM BIOS video interrupt 10H
	   
	      ; For PCjr, EGA, VGA, and MCGA:
	      ;
	      mov  ah,10H  ; video subservice 10H: set palette
	      mov  al,01H  ; palette subservice 1: set border
	      mov  bh,06H  ; color = 6
	      int  10H     ; call ROM BIOS video interrupt 10H
	
	REFERENCES
	==========
	
	For more information on IBM (and 100-percent compatible) ROM BIOS, refer to the
	reference "IBM PS/2 and PC BIOS Interface Technical Reference," part number
	68X2260, available from IBM. Another reference that contains similar material is
	the Microsoft Press book "Programmer's Quick Reference Series: IBM ROM BIOS" by
	Ray Duncan, ISBN 1-55615-135-7. For OEM ROM BIOS extensions, refer to your OEM's
	hardware technical reference manuals.
	
	Additional query words: 6.22 2.x 3.x 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
