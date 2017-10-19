---
layout: page
title: "Q168355: Kids: Error Message When Copying Clipart from Picture Picker"
permalink: /kb/168/Q168355/
---

## Q168355: Kids: Error Message When Copying Clipart from Picture Picker

	Article: Q168355
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbusage
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy a piece of clipart from the Picture Picker you may receive
	the following error message:
	
	  Media Gallery couldn't find that item.
	
	  If it's one of the ones that came with Media Gallery, make sure the CD is
	  available.
	
	  If it's something you added to the collection, make sure the file is still
	  there on your computer (in the same place where it was when you added it).
	
	  You can delete "lost" files (that you added) - just click the item in the
	  collection, and press the Delete key.
	
	CAUSE
	=====
	
	This occurs if you have the Creative Writer 2 compact disc in the CD-ROM drive,
	but the piece of clipart you have selected was installed with the Microsoft
	Plus! For Kids program. By design, Picture Picker will attempt to copy the
	clipart from the compact disc of the program that installed it.
	
	RESOLUTION
	==========
	
	To copy the selected clipart, you must insert the compact disc from which the
	clipart was installed. For example, if the Creative Writer compact disc is in
	the drive when the message above appears, then you should insert the Plus! For
	Kids compact disc into the CD-ROM drive.
	
	Note: The clipart for both Creative Writer 2 and Plus! For Kids is stored in
	C:\Program Files\Microsoft Kids\Common Files\Shared Content in the form of *.ath
	files, i.e. Writer21.ath and Kidsplus.ath.
	
	Additional query words: kids kbmm homekids mskids kidsplus kidsplus! pack plus plus! clip art
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbusage 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch kbCreativeWriter200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
