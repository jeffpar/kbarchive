---
layout: page
title: "Q109222: Writer/Artist: Do Not Run in Windows 3.1 Standard Mode"
permalink: /kb/109/Q109222/
---

## Q109222: Writer/Artist: Do Not Run in Windows 3.1 Standard Mode

	Article: Q109222
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Creative Writer and Fine Artist do not run in Windows 3.1 Standard Mode and
	generate the following message if you try to run the program:
	
	  You need to run Windows in Enhanced Mode to start Creative Writer.
	
	  -or-
	
	  You need to run Windows in Enhanced Mode to start Fine Artist.
	
	The advanced animation and sound features in these programs require that Windows
	be running in enhanced mode. These features are not adequately supported by
	standard mode. That is why the product boxes state that you need a 386 or higher
	processor, and recommend a minimum of 4 MB of RAM.
	
	RESOLUTION
	==========
	
	To avoid this problem, follow these steps:
	
	1. Exit Windows.
	
	2. At the MS-DOS command prompt, type "win /3" (without the quotation marks).
	  This runs Windows in Enhanced Mode.
	
	3. Start Creative Writer or Fine Artist.
	
	After following these steps, you should be able to run Creative Writer or Fine
	Artist successfully.
	
	Additional query words: 1.00 kbhowto windows enhanced mode kids 3.10 startup launch boot win mczee mskids 1.10 wm_artist 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a
	
	=============================================================================
	
