---
layout: page
title: "Q151715: How to Toggle the CAPS LOCK and NUM LOCK Keys"
permalink: kb/151/Q151715/
---

## Q151715: How to Toggle the CAPS LOCK and NUM LOCK Keys

	Article: Q151715
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbProgramming win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create MS-DOS-based programs to toggle the CAPS
	LOCK and NUM LOCK keys on and off.
	
	MORE INFORMATION
	================
	
	To Toggle the CAPS LOCK Key On
	------------------------------
	
	1. Use any text editor (such as Notepad) to create the following file:
	
	     a 100
	     mov ax,0040
	     mov ds,ax
	     or byte ptr [0017],40
	     mov ah,1
	     int 16
	     mov ax,4c00
	     int 21
	
	     r cx
	     0013
	     n CAPS_ON.COM
	     w
	     q
	
	2. Save the file as Capson.deb
	
	3. Type the following line at a command prompt:
	
	  " debug < capson.deb " (without the quotation marks)
	
	  This creates an MS-DOS-based program named Caps_on.com that toggles the CAPS
	  LOCK key on.
	
	To Toggle the CAPS LOCK Key Off
	-------------------------------
	
	1. Use any text editor (such as Notepad) to create the following file:
	
	     a 100
	     mov ax,0040
	     mov ds,ax
	     and byte ptr [0017],bf
	     mov ah,1
	
	     int 16
	     mov ax,4c00
	     int 21
	
	     r cx
	     0013
	     n CAPS_OFF.COM
	     w
	     q
	
	2. Save the file as Capsoff.deb
	
	3. Type the following line at a command prompt:
	
	  " debug < capsoff.deb " (without the quotation marks)
	
	  This creates an MS-DOS-based program named Caps_off.com that toggles the CAPS
	  LOCK key off.
	
	To Toggle the NUM LOCK Key On
	-----------------------------
	
	1. Use any text editor (such as Notepad) to create the following file:
	
	     a 100
	     mov ax,0040
	     mov ds,ax
	     or byte ptr [0017],20
	     mov ah,1
	
	     int 16
	     mov ax,4c00
	     int 21
	
	     r cx
	     0013
	     n NUM_ON.COM
	     w
	     q
	
	2. Save the file as Numon.deb
	
	3. Type the following line at a command prompt:
	
	  " debug < numon.deb " (without the quotation marks)
	
	  This creates an MS-DOS-based program named Num_on.com that toggles the NUM
	  LOCK key on.
	
	To Toggle the NUM LOCK Key Off
	------------------------------
	
	1. Use any text editor (such as Notepad) to create the following file:
	
	     a 100
	     mov ax,0040
	     mov ds,ax
	     and byte ptr [0017],df
	     mov ah,1
	
	     int 16
	     mov ax,4c00
	     int 21
	
	     r cx
	     0013
	     n NUM_OFF.COM
	     w
	     q
	
	2. Save the file as Numoff.deb
	
	3. Type the following line at a command prompt:
	
	  " debug < numoff.deb " (without the quotation marks)
	
	  This creates an MS-DOS-based program named Num_off.com that toggles the NUM
	  LOCK key off.
	
	Using the Toggle Programs
	-------------------------
	
	Place the appropriate command in the Autoexec.bat or Config.sys file to
	automatically toggle the keys you want. For example, adding
	
	  NUMLOCK=OFF
	
	  -or-
	
	  NUMLOCK=ON
	
	to the Config.sys file will turn off or turn on the NUM LOCK key.
	
	NOTE: You must be using MS-DOS version 6.x or later. This function was retained
	in Windows 95.
	
	Additional query words: capslock numlock caps num elite boot
	
	======================================================================
	Keywords          : kbProgramming win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :95
	Issue type        : kbhowto
	
	=============================================================================
	
