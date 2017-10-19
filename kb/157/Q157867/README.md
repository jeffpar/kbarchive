---
layout: page
title: "Q157867: Writer 2: Cannot Open Artwork with Real-Mode CD-ROM Drivers"
permalink: /kb/157/Q157867/
---

## Q157867: Writer 2: Cannot Open Artwork with Real-Mode CD-ROM Drivers

	Article: Q157867
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsgkbfaq
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Creative Writer 2, when you try to create a new document from one of the
	templates, insert music, or change a theme, you may receive the following error
	message:
	
	  Could not open a piece of artwork...
	
	CAUSE
	=====
	
	This error message may occur if your computer is using real mode drivers to
	access the CD-ROM drive. When you choose to insert an object, Creative Writer
	attempts to load it from the compact disc using a long file name. If the CD-ROM
	driver does not support long file names, the file may not be found.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the most recent version of protected mode drivers
	for your CD-ROM drive from your hardware manufacturer.
	
	If you have difficulty accessing your CD-ROM drive from a Command prompt, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q135174 Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt
	
	Additional query words: 2.00 mskids max writer cw2 cw2.0 2 CD-ROM CD ROM NT4 compact disc disk
	
	======================================================================
	Keywords          : kberrmsg kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
