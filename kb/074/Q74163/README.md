---
layout: page
title: "Q74163: Hewlett-Packard Type Director Soft Fonts 2.0 and Windows"
permalink: /kb/074/Q74163/
---

## Q74163: Hewlett-Packard Type Director Soft Fonts 2.0 and Windows

	Article: Q74163
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Type Director by Hewlett-Packard (HP) is a typeface and font management package.
	Like other font packages, you select the typefaces and the sizes desired (in any
	point size from 4 to 200 in half-point increments, depending on your application
	and available system memory), and then the application builds the fonts for
	you.
	
	This package is different from others because it can create fonts for several
	applications (Windows versions 2.03, 2.10, 2.11, and 3.0; Microsoft Word 4.0 and
	5.0; Aldus PageMaker 1.0a and 3.0; and Ventura Publisher). Type Director creates
	both printer and screen fonts for Windows.
	
	MORE INFORMATION
	================
	
	Currently, there are two versions of Type Director packages. The first version
	does not have a version number; let's call it version 1.0 in this article. Type
	Director 2.0 is the second version.
	
	The major differences between Type Director 2.0 and Type Director 1.0 are the
	following:
	
	- Type Director 2.0 is compatible with more software packages and printers than
	  the original version.
	
	- Type Director 2.0 incorporates outline fonts for the LaserJet III instead of
	  bitmaps. This increases speed and print quality.
	
	When you install fonts for Windows, Type Director 1.0 and 2.0 adds the fonts to
	your WIN.INI automatically. There is no need to use the Soft Font Installer. You
	must be careful to choose Windows as the application for which you are creating
	the fonts and use the Windows character set. You can create a specific typeface
	and size for a specific group of characters to conserve on memory.
	
	Type Director 1.0 and 2.0 can create reduced symbol sets also. However, if you
	create a reduced symbol set that contains any symbol that is not available to
	your Windows application, you won't be able to print from that application
	properly.
	
	Fonts created for another specific application cannot be used for Windows or vice
	versa. You must create fonts specifically for all of your applications supported
	by Type Director 2.0.
	
	Type Director 2.0 has a utility that downloads the soft fonts that you created to
	your LaserJet. This utility is not necessary when you use the Type Director
	fonts with Windows. The HPPCL.DRV driver downloads the fonts for you
	automatically, whether you have them installed permanently or temporarily.
	
	
	Additional query words: typedir typedirector typdirector hp typdir 2.0 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
