---
layout: page
title: "Q83317: Use Mouse Driver 8.1 to Outline Mouse Pointer in MS-DOS Shell"
permalink: /kb/083/Q83317/
---

## Q83317: Use Mouse Driver 8.1 to Outline Mouse Pointer in MS-DOS Shell

	Article: Q83317
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS 5.0 Shell will display a normal graphic pointer inside a black
	box if you use the Microsoft Mouse driver version 8.1 and configure the pointer
	size to large.
	
	To remove the black box from around the pointer, use an editor (for example,
	MS-DOS Editor or Edlin) to edit the MOUSE.INI file, and set the
	POINTERSIZE=small in the [DOSPOINTER] section.
	
	MORE INFORMATION
	================
	
	A feature of Microsoft Mouse driver 8.1 is that you can have a large mouse
	pointer. This large pointer may also include the regular graphic pointer
	embedded within it. To display the large mouse pointer, do the following:
	
	1. Open the MOUSE.INI file in MS-DOS Editor (or another text editor). MOUSE.INI
	  should be in the \MOUSE or \WINDOWS directory.
	
	2. In the [DOSPOINTER] section, set POINTERSIZE=large. For example:
	
	  [DOSPointer]
	  PointerSize=large
	
	  NOTE: The entry is not case sensitive.
	
	3. Save the changes you made in the MOUSE.INI file, and reboot the machine so
	  the changes will take effect.
	
	4. Execute Shell.
	
	The mouse pointer will display surrounded by a black box.
	
	Additional query words: 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
