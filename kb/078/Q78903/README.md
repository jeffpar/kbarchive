---
layout: page
title: "Q78903: Problems Attaching to Novell Print Server"
permalink: /kb/078/Q78903/
---

## Q78903: Problems Attaching to Novell Print Server

	Article: Q78903
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While running Microsoft Windows on a Novell Network, you cannot attach to a
	print server by typing the full name of the file server. You must select the
	file server with your mouse or type the first letter of the file server name and
	then use the arrow keys to choose the correct server.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	Let's assume you have three servers: James, Jane, Noid.
	
	When you perform step 4 above and type "J" (without the quotation marks), it
	would display
	
	  James
	  Jane
	  Noid
	
	and "James" would be selected. If you continue and type the name "Jane" (rather
	than just "J"), the display will change when you type the character "n". It will
	then change to the server "Noid".
	
	This behavior occurs because the attach function only looks at the first letter
	of the server and ignores the other letters.
	
	The Novell products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.0 3.0a 3.00 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
