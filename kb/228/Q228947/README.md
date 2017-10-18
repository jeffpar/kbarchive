---
layout: page
title: "Q228947: Midtown Madness: Snow Textures, Cloud Shadows Appear Triangular"
permalink: kb/228/Q228947/
---

## Q228947: Midtown Madness: Snow Textures, Cloud Shadows Appear Triangular

	Article: Q228947
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgame
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a race in Midtown Madness, cloud shadows or snow textures on the
	ground may flicker or appear as triangular shapes.
	
	CAUSE
	=====
	
	This behavior can occur if a video adapter based on one of the following chip
	sets is installed in your computer:
	
	- 3Dfx Voodoo2
	- 3Dfx Vodoo Banshee
	- nVIDIA Riva 128
	- nVIDIA Riva TNT
	
	RESOLUTION
	==========
	
	To work around this issue, use the control software for your video adapter to
	disable MipMapping. For information about how to do this, please see the printed
	documentation or online Help file for your video adapter.
	
	To resolve this issue, download and install the latest version of the video
	driver for your video adapter.
	
	For a list of links to video adapter manufacturers, please visit the appropriate
	following Web site for your video adapter chip set.
	
	  http://www.3dfx.com
	
	  http://www.nvidia.com
	
	If an STB Velocity 128, STB Velocity 4400, or STB BlackMagic 3D video adapter is
	installed in your computer, download and install the latest version of the video
	driver for your video adapter from the following STB Systems Web site:
	
	  http://www.stb.com
	
	NOTE: Certain Diamond video driver installation programs may replace the
	Comctl32.dll file on your computer with a version that is incompatible with
	Internet Explorer 5. If a video adapter manufactured by Diamond Multimedia is
	installed in your computer and Microsoft Internet Explorer 5.0 is installed on
	your computer, you may need to restore the Comctl32.dll file after you install
	the latest version of the video driver.
	
	For additional information about how to install the latest version of a Diamond
	video driver on a computer running Internet Explorer 5, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q225040 Error Messages Displayed After Installing Internet Explorer
	
	Additional query words: 1.00 msgame midmad display card
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
