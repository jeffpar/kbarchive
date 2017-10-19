---
layout: page
title: "Q156471: Writer 2: Print Jobs May Spool to 10+ MB Files"
permalink: /kb/156/Q156471/
---

## Q156471: Writer 2: Print Jobs May Spool to 10+ MB Files

	Article: Q156471
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	2.00
	WINDOWS
	kbprint kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Creative Writer 2, print jobs may spool to very large files. This can slow
	down printing, or even halt the printing process entirely.
	
	RESOLUTION
	==========
	
	There are several factors to consider in the spooling of a print job:
	
	- Decrease printer dpi. The dpi of the printer affects the complexity, and
	  therefore size of the spooled file.
	
	- Decrease color depth. The video driver in use affects complexity; higher
	  color depths increase spool files.
	
	- Decrease complexity. Multiple stickers, backgrounds, and/or borders increase
	  the complexity of a document spool file.
	
	- Increase free hard disk space. Hard disk space can be consumed by spool
	  files. On machines with little free hard disk space, more complex documents
	  may not print.
	
	Creative Writer 2 creates very large spool files by design. Use the steps
	outlined above to avoid difficulties when printing.
	
	Additional query words: 2.00 kids mskids artist maggie max writer cw2 cw2.0
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
