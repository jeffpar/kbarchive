---
layout: page
title: "Q107658: Writer: No Network Setup Option on Lantastic"
permalink: /kb/107/Q107658/
---

## Q107658: Writer: No Network Setup Option on Lantastic

	Article: Q107658
	Product(s): Microsoft Home Kids Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Creative Writer or Fine Artist on a computer that is on a
	Lantastic network, the setup program may not offer you the option to do a
	network installation.
	
	This occurs if Windows does not recognize the presence of a network drive.
	Lantastic is a peer-to-peer network. Using Lantastic, you can connect to another
	computer in such a way that it appears to your Windows installation as if it
	were a local drive. For the Creative Writer and Fine Artist network setup to be
	available, you must connect to the other computer (or "server") in such a way
	that it appears to your Windows installation to be a network drive.
	
	RESOLUTION
	==========
	
	If you do not see a network setup button in Creative Writer or Fine Artist
	Setup, do the following:
	
	1. Exit from the setup program.
	
	2. Start File Manager. Look at the icon of your network drive. If it looks the
	  same as the icon of your hard drive, you have not connected to the other
	  computer correctly.
	
	3. From the Main group, choose Windows Setup.
	
	4. From the Options menu, choose Change System Settings.
	
	5. From the Network list, select the Lantastic network driver. Choose OK.
	
	6. Return to File Manager and double check that the shared drive now has a
	  network drive icon.
	
	When the shared drive is recognized by Windows to be a network drive, you should
	be able to do a network installation of Creative Writer.
	
	
	Additional query words: unavailable missing grayed out greyed server shared other kids win mskids mczee wm_artist max maggie landtastic network share 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	
	=============================================================================
	
