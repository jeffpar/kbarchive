---
layout: page
title: "Q74808: How Display Drivers Use Shadow RAM"
permalink: /kb/074/Q74808/
---

## Q74808: How Display Drivers Use Shadow RAM

{% raw %}

	Article: Q74808
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, the term "shadow memory" refers
	to the "invisible" portion of the video memory. That is, the contents of the
	shadow memory is not displayed on the screen. Some Windows display drivers use
	this memory as storage to save and restore screen bitmaps when requested by the
	user module of Windows. By doing so, Windows achieves better performance.
	
	Another possible use of shadow memory is to store a device bitmap. For more
	information, see pages 39 and 40 of the "Microsoft Windows Device Driver Kit:
	Device Driver Adaptation Guide" for Windows 3.1.
	
	The article discusses some details about the implementation of shadow memory,
	which are not documented in the Windows Device Driver Kit (DDK).
	
	MORE INFORMATION
	================
	
	Drivers that support shadow memory export a SaveScreenBitmap() function for the
	user module to call.
	
	The display driver creates an imitation device, ssb_device, containing a BITMAP
	data structure. This device is almost the same as the physical_device in the
	display driver, but ssb_device has a different height. The height of the
	physical_device is SCREEN_HEIGHT (for example, 480 for VGA). The height of
	ssb_device is larger to include the entire video memory. Using VGA as an
	example, 64K of address space can hold up to 819 scan lines (640 pixels, or 80
	bytes per scan line). For this fictitious example device, the first 480 scan
	lines form the visible portion. However, the storage portion does not start at
	the 481st scan line (or scan line 480, 0-indexed) but at the 616th scan line (or
	scan line 615). This scan line is the first scan line in the first 4K page of
	"invisible" memory. The driver uses the space between the end of the 480th scan
	line to the end of the last visible page to save and restore the mouse cursor
	image. In addition, the virtual display device (VDDEGA/VGA) requires that the
	last 16 bytes in the last visible 4K page be reserved.
	
	Scan line 615 starts at offset C030h (or 80 * 615 = 49200) into the video RAM.
	The value 615 is represented by a constant, SSB_START_SCAN. This value is used
	by the routine SaveScreenBitmap when it performs a bitblt (bit block-transfer
	operation) to save or restore a screen bitmap. From the offset C030h to the end
	of the video memory (address FFFFh), there is space for a total of 204 scan
	lines. This is the value for the SSB_TOTAL_SCANS constant. This value is also
	used by the SaveScreenBitmap routine in the display driver.
	
	Upon initialization, the display driver calls the BIOS Interrupt 10h Function 12h
	with BL=10h to determine the amount of video memory installed. If the return
	value indicates 256K memory is available, the driver sets the RC_SAVEBITMAP bit
	in the ssb_mask variable; otherwise, the driver clears that bit.
	
	Another variable, ssb_shadow_status, maintains the status of the shadow memory.
	The status bits are SSB_EXISTS, SSB_IN_USE, and SSB_TRASHED. The SSB_EXISTS bit
	is set by the physical_enable function if ssb_mask has RC_SAVEBITMAP set.
	
	Note: The names of variables and constants mentioned in this article were
	obtained from the VGA/EGA display driver source code in version 3.0 of the DDK.
	These names may be changed in the future versions of the DDK.
	
	REFERENCES
	==========
	
	For more information, please refer to the display driver source code included in
	the Windows DDK.
	
	Additional query words: 3.00 3.10 3.11 DDKDISPLAY
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWFWSearch kbWinDDK300 kbWinDDK310 kbWFW311
	Version           : :3.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
