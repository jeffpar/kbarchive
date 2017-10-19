---
layout: page
title: "Q64472: PostScript Soft Fonts Download on Each Page of Document"
permalink: /kb/064/Q64472/
---

## Q64472: PostScript Soft Fonts Download on Each Page of Document

	Article: Q64472
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
	
	By design, the Microsoft Windows PostScript printer driver downloads soft fonts
	once for each page of the document. To speed printing, soft font developers,
	such as Adobe and Bitstream, provide utilities that download soft fonts prior to
	printing (that is, in the AUTOEXEC.BAT).
	
	MORE INFORMATION
	================
	
	Soft fonts are downloaded on a per page basis, mainly because the PostScript
	language does not allow memory to be reclaimed once it has been used. There are
	PostScript commands to "save" and "restore" the state of the printer (the memory
	that has been allocated). It is necessary to issue a save/restore pair around
	every page so that the printer does not run out of memory (due to the regular
	process of printing, or to downloading soft fonts).
	
	The result is that the fonts have to be downloaded on a per page basis because
	fonts that are downloaded inside a save/restore pair are lost.
	
	Download the fonts before the print job and treat them as if they are permanently
	installed.
	
	
	Additional query words: 3.0 3.0a 3.00 3.00a WIN286 WIN386
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
