---
layout: page
title: "Q72527: DOCERR: TOOLS.INI Tags for Video Not Recognized by PWB"
permalink: /kb/072/Q72527/
---

## Q72527: DOCERR: TOOLS.INI Tags for Video Not Recognized by PWB

	Article: Q72527
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft C Advanced Programming Techniques" manual that ships with
	Microsoft C versions 6.0, 6.0a, and 6.0ax incorrectly states on page 159 that
	you can place a PWB tag in the TOOLS.INI file that will be recognized only if
	you have a specific graphics adapter.
	
	For example, the manual states that the tag [PWB-vga] will allow the Programmer's
	WorkBench (PWB) to make the assignments following this tag only if you run PWB
	on a machine with a VGA graphics adapter. This is documented incorrectly. The
	ability to test graphics adapters was not implemented with the Programmer's
	WorkBench versions 1.0 and 1.1.
	
	MORE INFORMATION
	================
	
	The following four tags are listed on page 159 but are not implemented by PWB:
	
	  [PWB-mono]
	  [PWB-cga]
	  [PWB-ega]
	  [PWB-vga]
	
	The tags above may be used but you must manually load the switches under these
	tags. To assign the switches under a tagged section in the TOOLS.INI file,
	perform the following key sequence:
	
	  Arg textarg Initialize
	
	For example, to load the assignments that are listed under the tag [PWB-vga], you
	would press ALT+A, type "vga" (without the quotation marks) and then press
	SHIFT+F8. (Note: This assumes you are set up with the default key assignments.)
	
	Additional query words: 1.00 1.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
