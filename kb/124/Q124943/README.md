---
layout: page
title: "Q124943: Musical Instruments: Pictures Do Not Print in Color"
permalink: kb/124/Q124943/
---

## Q124943: Musical Instruments: Pictures Do Not Print in Color

	Article: Q124943
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Musical Instruments for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The print command in Musical Instruments results in a black and white image,
	even though the printer you are using supports color.
	
	If you copy the image into another application, it still prints in gray scale
	only.
	
	CAUSE
	=====
	
	The pictures in Musical Instruments are Device Independent Bitmap (.Dib) images.
	Some printers will not print these images in color.
	
	RESOLUTION
	==========
	
	Use one of the following methods to print color pictures from Microsoft Musical
	Instruments.
	
	Method 1
	--------
	
	If you have a graphics program that directly supports .Dib images, you may be
	able to print in color by copying the image to the Windows Clipboard, then
	pasting it into a graphics program. In this case, the graphics program assumes
	control of printing.
	
	To copy the Musical Instruments picture, on the menu bar click Options, and then
	click Copy. To Paste the picture into a graphics program, refer to the
	documentation for that program.
	
	Method 2
	--------
	
	To paste color pictures from Musical Instruments into programs that understand
	Device Independent Bitmaps (for example, Microsoft Word for Windows, version
	6.0) copy the screen to the clipboard using the following steps:
	
	1. Locate the picture in Musical Instruments you want to print.
	
	2. Press and hold down the ALT key while you press the PRINT SCREEN key
	  (ALT+PRINT SCREEN).
	
	3. Start the destination program and paste the picture into a document. For
	  program-specific pasting instructions, see the documentation that came with
	  the application.
	
	NOTE: The Microsoft Windows 3.x Write and Paintbrush programs and the Microsoft
	Windows 95 Paint program do not support the printing of color .Dib pictures
	pasted from Musical Instruments.
	
	
	MORE INFORMATION
	================
	
	According to the Musical Instruments Readme.txt file, "you should be able to
	print gray scale images." It also states that printing in color is only
	"possible." Although Windows 3.x Write and Paintbrush, and Windows 95 Paint will
	not print these images in color. Other graphics programs may be able to paste
	the image and print in color.
	
	Additional query words: mmtitles .DIB
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbZNotKeyword kbMusicalInst
	Version           : WINDOWS:1.0
	
	=============================================================================
	
