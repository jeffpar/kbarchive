---
layout: page
title: "Q120565: How to Read Text Mode Screen of MS-DOS Session in Windows"
permalink: /kb/120/Q120565/
---

## Q120565: How to Read Text Mode Screen of MS-DOS Session in Windows

{% raw %}

	Article: Q120565
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is necessary to read the text from the screen of an MS-DOS session
	running under Windows version 3.1 in 386 Enhanced mode. Use a simple VxD to read
	the screen in an MS-DOS session. You don't need to access the MS-DOS session
	screen through the VDD or GRABBER to read it.
	
	MORE INFORMATION
	================
	
	In a VxD, by using VM Control Block (handle) for the virtual machine (VM) that
	contains the MS-DOS session, you can obtain the base linear address of the VM
	from the CB_High_Linear member of the control block. CB_High_Linear will contain
	the linear address of "virtual 0000:0000" for the MS-DOS session.
	
	Use this linear address to offset to [CB_High_Linear + 0400h] in the VM to poke
	around in the BIOS DATA area. Information such as what video mode is active, how
	many screen columns are active, and so on can be found in the BIOS DATA area.
	You can use this data to determine the address and the size of the text screen
	in the MS-DOS session. Then you can use the address and size to read the whole
	screen or a portion of it.
	
	By using MEMORY.LST included with Ralf Brown's Interrupt List compilation, or by
	using a good BIOS DATA reference found in many books, you can get this
	information:
	
	===========================================================================
	Format of BIOS Data Segment at segment 40h:
	               {items in curly braces not documented by IBM}
	Offset  Size    Description
	 . . .
	49h    BYTE    Video current mode
	4Ah    WORD    Video columns on screen
	4Ch    WORD    Video page (regen buffer) size in bytes
	4Eh    WORD    Video current page start address in regen buffer
	50h 16 BYTEs   Video cursor position (col, row) for eight pages,
	               0 based
	60h    WORD    Video cursor type, 6845 compatible, hi=startline,
	               lo=endline
	62h    BYTE    Video current page number
	63h    WORD    Video CRT controller base address: color=03D4h,
	               mono=03B4h
	65h    BYTE    Video current setting of mode select register
	               03D8h/03B8h
	66h    BYTE    Video current setting of CGA palette register 03D9h
	===========================================================================
	
	By reading at [CB_High_Linear + 449h], for example, you can determine the screen
	mode active in the MS-DOS session. If it is 7, it is text mode on an MDA
	adapter, and the text screen buffer is at [CB_High_Linear + 0B000h]. Otherwise,
	if it is a text video mode number, a color text mode is in use in the MS-DOS
	session, and the text screen buffer is at [CB_High_Linear + 0B800h].
	
	If you determine that a color text mode is in use, the adapter could be CGA, EGA,
	or VGA, so the MS-DOS session could be in either 25-, 43-, or 50-line mode.
	
	The size of the screen regenerate buffer is stored at [CB_High_Linear + 044Ch].
	Based on the number of bytes the screen takes and the number of screen columns,
	you can determine the number of screen rows.
	
	The screen regenerate buffer will typically contain one of the following values:
	
	  On CGA (25 lines, 40 columns), the buffer size will be 0800h (2048d)
	  On CGA (25 lines, 80 columns), the buffer size will be 1000h (4096d)
	  On EGA (43 lines, 80 columns), the buffer size will be 1BE0h (7136d)
	  On VGA (50 lines, 80 columns), the buffer size will be 2040h (8256d)
	
	The number of columns on the screen is stored at [CB_High_Linear + 044Ah]. By
	dividing the buffer size by the number of columns, then dividing by two (unless
	screen attributes need to be read, too), you can determine the number of rows on
	the screen:
	
	 Buffer size   Number of columns   Skip Attribs   Result
	 -------------------------------------------------------
	 2048          / 40                / 2             25.6
	 4096          / 80                / 2             25.6
	 7136          / 80                / 2             44.6
	 8256          / 80                / 2             51.6
	
	NOTE: the results are not exact. Therefore, if the regenerate buffer is greater
	than 4096 bytes or if the number of screen columns is not equal to 25, the
	result must be decremented by 1 to get the real number of screen lines.
	
	Once you determine the screen buffer offset, number of columns, and size of text
	screen, you can read the screen by dereferencing to the screen buffer and
	reading the characters out of the screen buffer memory.
	
	REFERENCES
	==========
	
	Windows 3.1 Device Driver Kit "Virtual Device Adaptation Guide" Microsoft
	Developers Network "Developers Library" CD
	
	Additional query words: 3.10 VxD VDD DISPLAY
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
