---
layout: page
title: "Q87877: Err Msg: System Error: Write Protected Disk in Drive x:"
permalink: kb/087/Q87877/
---

## Q87877: Err Msg: System Error: Write Protected Disk in Drive x:

	Article: Q87877
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you run Windows 3.1 with Stacker
	versions 1.x or 2.0:
	
	  System Error: Write protected disk in drive x:
	
	NOTE: The message may appear when you boot your machine.
	
	CAUSE
	=====
	
	This error appears when Stacker write protects the STACVOL.DSK file that it
	creates when Stacker is installed. Thus, any time Windows or any other program
	tries to write to the hard drive, it cannot because this file is write
	protected.
	
	RESOLUTION
	==========
	
	For information on how to remove the write protection from STACVOL.DSK, contact
	Stac Electronics.
	
	
	MORE INFORMATION
	================
	
	If a file on the compressed drive becomes corrupt, Stacker write protects the
	STACVOL.DSK. It does this to protect the integrity of the stacked drive. (This
	file is located on the uncompressed drive and has the attributes read-only,
	hidden, and system. For example if there is one partition, drive C, then drive D
	has the STACVOL.DSK.)
	
	Stacker is manufactured by a vendor independent of Microsoft; we makeno warranty,
	implied or otherwise, regarding this product'sperformance or reliability.
	
	KBCategory: kb3rdparty kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 3rdParty 1.0 1.1 2.0 SuperStor pro
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
