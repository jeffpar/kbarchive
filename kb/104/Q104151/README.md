---
layout: page
title: "Q104151: Setup Doesn't Install Audio Drivers in NT"
permalink: kb/104/Q104151/
---

## Q104151: Setup Doesn't Install Audio Drivers in NT

	Article: Q104151
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Schubert, Stravinsky or Mozart under Microsoft Windows NT,
	neither the CD Audio driver nor the Microsoft Audio Compression Manager driver
	are installed. If you then try to run Schubert, Stravinsky or Mozart, the
	following error message appears (assuming the CD-ROM is drive D:):
	
	  The correct CD must be in drive D: to continue.
	
	You may also receive the following error message:
	
	  Unable to play sound file.
	
	The Setup program purposely omits installing these drivers because including them
	in the installation procedure causes problems under Windows NT.
	
	RESOLUTION
	==========
	
	After installing Schubert, Stravinsky or Mozart, you can install the two missing
	audio drivers as follows:
	
	1. In the Windows NT Control Panel, choose Drivers.
	
	2. From the list in the Drivers dialog box, select the following two drivers:
	
	  Microsoft Audio Compression Manager
	  [MCI] CD Audio
	
	3. Choose Add.
	
	4. Close the Drivers dialog box, the Control Panel, and Windows NT.
	
	5. Restart Windows NT.
	
	Schubert, Stravinsky and Mozart should now run correctly.
	
	Additional query words: multi media multimedia multi-media sound play 3.1 3.10 new technology VBasic Dev/Drv Usage
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMMozart100a
	
	=============================================================================
	
