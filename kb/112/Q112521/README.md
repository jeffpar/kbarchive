---
layout: page
title: "Q112521: Changing CD on SFM Causes Mac Client Error"
permalink: /kb/112/Q112521/
---

## Q112521: Changing CD on SFM Causes Mac Client Error

	Article: Q112521
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Macintosh computer when you use the Chooser to connect to shared CD- ROM
	drive on a Windows NT Advanced Server with Services for Macintosh (SFM), the
	Macintosh operating system creates a file handle for the CD-ROM. If you change
	the compact disc and try to access it from the Macintosh the following error
	message appears:
	
	  ERROR: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	
	WORKAROUND
	==========
	
	Put the original compact disc back into the drive. You can now access the remote
	CD-ROM drive. To access a different compact disc, disconnect your network
	connection to the remote drive and reconnect to it after you have put the new
	disc in the drive.
	
	The Macintosh product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt CD Mac
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
