---
layout: page
title: "Q107670: Writer/Artist: Directory Name Disappears on Network Install"
permalink: kb/107/Q107670/
---

## Q107670: Writer/Artist: Directory Name Disappears on Network Install

	Article: Q107670
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for the Macintosh, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for the Macintosh, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type two or more consecutive colons (:) in the directory path name when
	you are installing Creative Writer or Fine Artist on a network, the name of the
	directory disappears.
	
	Microsoft has confirmed this to be a problem in Creative Writer versions 1.0,
	1.1, and 1.1a. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	It is not correct syntax to use more than one colon in a row as a divider
	character in a path. To avoid this problem, don't type more than one colon
	between each item in your directory path.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the setup program for Creative Writer or Fine Artist.
	
	2. Choose to install to a network.
	
	3. Choose "Change the disk."
	
	4. In the New Folder field, type the following:
	
	  "1:2:::" (without the quotation marks)
	
	The pathname appears below the New Folder field in the "Set up On:" area. As soon
	as you type the second colon after the "2," however, the directory path
	disappears. It may also be replaced by garbage characters.
	
	Additional query words: 1.00 kids server installation subdirectory mac mskids 1.10 mczee wm_artist path statement colons 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbCreativeWriter110Mac kbCreativeWriter110aMac kbCreativeWriter100Mac kbFineArtist110Mac kbFineArtist110aMac kbFineArtist100Mac
	Version           : MACINTOSH:1.0,1.1,1.1a
	
	=============================================================================
	
