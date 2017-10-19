---
layout: page
title: "Q123324: File Transfer Protocols Supported by HyperTerminal"
permalink: /kb/123/Q123324/
---

## Q123324: File Transfer Protocols Supported by HyperTerminal

	Article: Q123324
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a brief description of the file transfer protocols
	supported by HyperTerminal.
	
	MORE INFORMATION
	================
	
	Kermit
	------
	
	Kermit is a public domain protocol developed at Columbia University. It is a
	sliding-window protocol that supports batch file transfers and has a maximum
	block size of 94 bytes. It uses either half or full duplex. Kermit is unique
	because it supports either 7-bit or 8-bit data transmission, enabling PC to
	mainframe transfers. Kermit uses either CRC or Checksum error correction. Kermit
	transfers the filename, date, and size.
	
	X-Modem
	-------
	
	X-Modem is a public domain 8-bit, error-checking communications protocol. It is a
	single file protocol, has a block size of 128 bytes, and transmits using
	half-duplex. The filename, date, and size are not transmitted by X-Modem. You
	must provide the name of the file being downloaded. X-Modem uses either CRC or
	Checksum error checking, with CRC being the default.
	
	X-Modem-1K
	----------
	
	X-Modem-1K is identical to X-Modem except that the block size is 1024 bytes.
	
	Y-Modem
	-------
	
	The Y-Modem protocol is virtually the same as X-Modem, with one exception.
	Y-Modem uses 1024-byte blocks compared to the X-Modem 128-byte block. Because of
	its larger block size, Y-Modem is generally faster than X-Modem on a noise-free
	line. On noisy lines, X-Modem may be faster because when an error occurs, the
	block must be re-sent. Y-Modem must retransmit a 1024- byte block; with
	X-Modem's smaller blocks, less data has to be re-sent.
	
	Y-Modem-G
	---------
	
	Y-Modem-G is a variant of the Y-Modem protocol. Y-Modem-G is a streaming protocol
	that sends 1024-byte blocks until instructed to stop. Y-Modem-G supports batch
	transfers. This protocol does not provide error correction or recovery. If an
	error is detected, the transfer is aborted. On a noise- free phone line using
	error-correcting modems, Y-Modem-G may be the fastest protocol.
	
	NOTE: Y-Modem-G does not provide error correction or recovery. It is designed
	specifically for high-speed error-correcting modems using V.42 or other hardware
	error correction.
	
	Z-Modem
	-------
	
	The Z-Modem file transfer protocol provides reliable file transfers with complete
	end-to-end data integrity. Z-Modem uses 32-bit CRC error correction and a
	sliding-window block up to 1024 bytes in length. Z-Modem uses intelligent error
	recovery, which automatically decreases block size if the phone line
	deteriorates and attempts to increase block size as the phone line improves.
	Z-Modem also provides automatic downloads. When the host computer begins
	transferring using Z-Modem, the remote computer recognizes this and begins
	receiving the download automatically.
	
	Additional query words: upload zmodem ymodem ymodemg ymodem-g xmodem hyperterm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
