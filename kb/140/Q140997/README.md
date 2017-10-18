---
layout: page
title: "Q140997: PPT7: How to Play Video Clips Full Screen in PowerPoint"
permalink: kb/140/Q140997/
---

## Q140997: PPT7: How to Play Video Clips Full Screen in PowerPoint

	Article: Q140997
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you embed a Windows .avi file as a Media Player object in a PowerPoint
	presentation, it plays in a window instead of full screen, even if you select
	the Full Screen option. To see the Full Screen option, click Multimedia
	Properties in Control Panel, and then click the Video tab.
	
	This behavior occurs even if the Play In Client Document option is turned off in
	the media player properties.
	
	RESOLUTION
	==========
	
	There are three ways to make a media clip object play full-screen in a slide
	show. Method 3 is the only one you can use with Windows NT.
	
	Method 1: Insert the Media Clip as an Icon
	------------------------------------------
	
	1. On the Insert menu, click Object.
	
	2. In the Object Type list, click Media Clip.
	
	3. Select the Display As Icon check box, and then click OK.
	
	4. On the File menu, click Open.
	
	5. Select the desired .avi file, and then click Open.
	
	6. On the Device menu, click Properties.
	
	7. Click Full Screen.
	
	8. Click OK.
	
	9. On the File menu, click Exit And Return. Click Yes to update the object.
	
	  This creates an icon on your slide. When you click this icon during the slide
	  show, the Media Clip will play full-screen.
	
	Method 2: Use Interactive Settings to Play the Media Clip
	---------------------------------------------------------
	
	1. Create or select a drawing object, such as a rectangle.
	
	2. On the Tools menu, click Interactive Settings.
	
	3. Click Run Program.
	
	4. Type the path to Mplayer.exe followed by the path to the .avi file you want
	  to play, like this example:
	
	      C:\Windows\Mplayer.exe C:\Videos\Movie.avi
	
	5. Click OK.
	
	  When you run your slide show and click the rectangle, the Media Clip plays
	  full-screen.
	
	Method 3: Resize the .avi File to Fill the Screen
	-------------------------------------------------
	
	1. On the Insert menu, click Movie.
	
	2. Select the desired .avi file, and then click OK.
	
	3. Use the resize handles to enlarge the movie until it is the same size as your
	  slide.
	
	4. On the Edit menu, point to Video Clip Object, and then click Edit.
	
	5. On the Edit menu, click Options.
	
	6. Click to clear the Control Bar On Playback and the Border Around Object check
	  boxes.
	
	7. Click the gray area outside the slide to exit.
	
	  The media clip should now play in full screen instead of in a window. The size
	  of the object in the screen is dependent on the video resolution.
	
	MORE INFORMATION
	================
	
	These instructions apply only to embedded Video for Windows files. Media Player
	can embed media objects of any type for which a Media Control Interface (MCI)
	driver is installed in Control Panel.
	
	Each type of media has a different set of options. To locate the options, click
	the Edit or Device menu in Media Player.
	
	Additional query words: power point powerpt audio visual ppt7 winppt interleave
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Issue type        : kbhowto
	
	=============================================================================
	
