---
layout: page
title: "Q85738: Windows 3.1 EPS Files Do Not Include TIFF Preview"
permalink: /kb/085/Q85738/
---

## Q85738: Windows 3.1 EPS Files Do Not Include TIFF Preview

	Article: Q85738
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you print to an encapsulated PostScript (EPS) file from Microsoft Windows
	version 3.1 using the PSCRIPT.DRV version 3.5 or 3.51 driver, the output file
	does not contain a tagged image file format (TIFF) or Windows metafile (WMF)
	preview graphic like those associated with EPS files produced with Adobe
	Illustrator or CorelDRAW.
	
	This feature may be included in a future release.
	
	EPS files are device independent, which means they can be imported into other
	applications that support EPS files and may be using a different type of
	PostScript printer. The version 3.5 and 3.51 Windows PostScript printer drivers
	support a Mirror option that flips the output of the PostScript job so that it
	is reversed or mirrored, based upon the printer selected. Therefore, you cannot
	use the Mirror option when printing to an EPS file that has been imported into
	another document because EPS files are device independent and the Mirror option
	is device dependent.
	
	MORE INFORMATION
	================
	
	In general, an EPS file is an ASCII text file that contains Adobe page
	description language describing a bounding box and the text and/or graphics
	within it. An advanced version of the EPS file also contains a TIFF or WMF
	graphic used to represent the contents of the EPS file.
	
	The TIFF or WMF file is required to render the picture on devices that are
	non-PostScript, such as a display. Without this file, there is no way for you to
	see the image before printing it. EPS files that do not contain these
	non-PostScript representations cannot support what-you-see-is-what-you-get
	(WYSIWYG) functionality because the images cannot be displayed on screen. This
	causes a conflict because many applications offer WYSIWIG functionality.
	
	EPS files cannot be sent directly to a PostScript printer with reliable results.
	Instead, first import the EPS file into a document. Then, from the application,
	print the file as part of that document.
	
	EPS files cannot be printed to non-PostScript printers. If the EPS file has an
	attached TIFF graphic, you may be able to import the TIFF graphic into your
	application and then print the TIFF file instead of the EPS file.
	
	How to Print an EPS File from Windows
	-------------------------------------
	
	1. In the Control Panel window, choose the Printers icon.
	
	2. Choose the Setup button, then choose the Options button.
	
	3. Select the Encapsulated PostScript File option button and type a filename in
	  the Name box.
	
	
	Additional query words: 3.10 windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
