---
layout: page
title: "Q78805: Terminal Does Not Accept Eight Data Bits and Odd Parity"
permalink: /kb/078/Q78805/
---

## Q78805: Terminal Does Not Accept Eight Data Bits and Odd Parity

{% raw %}

	Article: Q78805
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Page 339 of the "Microsoft Window User's Guide" states that when using
	the kermit protocol and eight data bits, parity can be specified as
	even, odd, or none.
	
	By definition, parity is the eighth bit. If eight data bits are specified,
	parity cannot be specified (odd, even, mark or space). This is the
	definition and is supported in the serial chip (Intel 8250).
	
	Terminal simply supports the available communications protocols, which are
	unrelated to the download protocol chosen (Xmodem, Kermit, ASCII, and so
	on).
	
	Additional query words: 3.00 doc err wincomm 3.00a docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
