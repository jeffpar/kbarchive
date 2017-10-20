---
layout: page
title: "Q78123: HP PaintJet with MS-DOS GRAPHICS.COM and GRAPHICS.PRO"
permalink: /kb/078/Q78123/
---

## Q78123: HP PaintJet with MS-DOS GRAPHICS.COM and GRAPHICS.PRO

{% raw %}

	Article: Q78123
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to execute a print screen of a graphics image to a
	Hewlett-Packard (HP) PaintJet color printer, the printout will always appear in
	black and white.
	
	The GRAPHICS.COM and GRAPHICS.PRO files provided with the MS-DOS 5 or later
	Upgrade do not provide support for color printing on HP PaintJet printers.
	
	MORE INFORMATION
	================
	
	The GRAPHICS utility is a TSR (terminate-and-stay-resident) program that must be
	installed before executing a print screen. There are several options you can use
	when invoking the GRAPHICS utility, which are described on pages 505-508 of the
	version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	Along with the GRAPHICS.COM utility, there is a GRAPHICS.PRO file that contains
	printer information for 16 printer types. When using one of these printers, the
	printer type can be specified when installing GRAPHICS.COM.
	
	Example
	-------
	
	  GRAPHICS PaintJet [drive]:\[path]\GRAPHICS.PRO
	
	(Where [drive] and [path] are the location of the graphics files.)
	
	Graphics profiles are text files that contain a list of supported printers and
	the commands for each video mode of the printers listed.
	
	In the MS-DOS 5.0 GRAPHICS.PRO file, the section definition for the PaintJet
	explicitly states:
	
	  The profile treats the PaintJet as a black and white device for both text and
	  color. Specifying one color plane uses just black and white as the two
	  available colors.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
