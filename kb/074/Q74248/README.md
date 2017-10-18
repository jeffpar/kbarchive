---
layout: page
title: "Q74248: Frozen Ballpoint Mouse Pointer in Enhanced mode"
permalink: kb/074/Q74248/
---

## Q74248: Frozen Ballpoint Mouse Pointer in Enhanced mode

	Article: Q74248
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Ballpoint mouse, connected to a PS/2 port, works correctly in real and
	standard modes but its pointer freezes in 386 enhanced mode, do the following:
	
	1. Check the disks that accompanied the Ballpoint mouse for the BPVKD.386 file.
	
	2. Copy the file into the \WINDOWS\SYSTEM subdirectory.
	
	3. Modify the [386Enh] section of the SYSTEM.INI file as follows:
	
	     Change                              To
	     ------                              --
	
	     [386enh]                            [386enh]
	     keyboard=vkd.386                    keyboard=bpvkd.386
	
	4. Save the file.
	
	5. Exit Windows and restart.
	
	MORE INFORMATION
	================
	
	BPVKD.386 replaces the default virtual keyboard driver (VKD.386) for a ballpoint
	mouse plugged into a PS/2 port. It is used to put the mouse driver into
	ballpoint mode. Without it, the ballpoint input is treated as a normal mouse
	(non-ballpoint) signal.
	
	Additional query words: 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
