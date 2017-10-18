---
layout: page
title: "Q66531: Copying from CON to a Subdirectory Doesn't Result in Error"
permalink: kb/066/Q66531/
---

## Q66531: Copying from CON to a Subdirectory Doesn't Result in Error

	Article: Q66531
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a directory called C:\TEMP and you try to create a file called TEMP
	using the COPY CON command as follows
	
	  C:\>copy con temp
	  hello
	  ^Z
	
	instead of creating a file called TEMP, MS-DOS echoes "hello" and "1 file copied"
	on the screen as follows:
	
	  C:\>copy con temp
	  hello
	  ^Z
	  hello
	         1 file(s) copied
	
	No error message is displayed.
	
	CAUSE
	=====
	
	This is expected MS-DOS behavior. When C:\TEMP is a directory, the command
	
	  C:\>copy con temp
	
	is the same as
	
	  C:\>copy con C:\temp\*.*
	
	-or-
	
	  C:\>copy con C:\temp\con
	
	CON is short for console and consists of the keyboard (input) and the display
	(output). It always exists, even in subdirectories. Therefore, this command
	copies input from CON (keyboard) to CON (display).
	
	Additional query words: 6.22 3.20 3.30 3.30a 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	
