---
layout: page
title: "Q195616: Writer 2: Creative Writer Couldn't Open a Piece of Art Work"
permalink: kb/195/Q195616/
---

## Q195616: Writer 2: Creative Writer Couldn't Open a Piece of Art Work

	Article: Q195616
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg mskids kbimu
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a Greeting Card template in Microsoft Creative Writer,
	you may receive the following message when you click one of the available
	templates:
	
	  Creative Writer couldn't open a piece of art work.
	
	  If you're just starting Creative Writer, or trying to play a video:
	
	  Check to make sure the Creative Writer CD is in the CD-ROM drive.
	
	  If you're trying to paste some art or music:
	
	  Make sure the CD is in the CD-ROM drive.
	
	  If you were pasting something that you added to an art or music collection,
	  make sure the file is still on your computer and hasn't been moved to a
	  different folder.
	
	  You can delete "lost" files (that you added) - just click the item in the
	  collection, and press the Delete key.
	
	CAUSE
	=====
	
	This behavior can occur if your computer is using real mode (16-bit) drivers to
	access your CD-ROM drive, or if the CD-ROM drive is operating in MS-DOS
	Compatibility mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that you are using protected mode (32-bit) CD-ROM
	drivers. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab.
	
	4. Verify that the File System entry is 32-bit. If the File System entry is
	  "Some drives are using MS-DOS compatibility," you may be using real mode
	  (16-bit) CD-ROM drivers. Contact the manufacturer of your CD-ROM drive to
	  obtain protected mode drivers for your CD-ROM drive.
	
	Additional query words: cw2.0 thumbnail thumbnails clipart
	
	======================================================================
	Keywords          : kbenv kberrmsg mskids kbimu 
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
