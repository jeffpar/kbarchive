---
layout: page
title: "Q85750: PPT: Inserting Sound Objects in Presentations"
permalink: /kb/085/Q85750/
---

## Q85750: PPT: Inserting Sound Objects in Presentations

	Article: Q85750
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PowerPoint allows you to insert, embed, or link several different kinds of
	objects from other applications into your presentations. Not only can you embed
	pictures, spreadsheets, and charts, but you can also embed sounds and other
	playable items.
	
	Microsoft Windows operating system version 3.1 comes with Sound Recorder, a
	utility for placing sound into other files for playback. Sound Recorder uses the
	OLE specification. An embedded or linked Sound Recorder object is represented on
	the slide or page by a Sound Recorder icon.
	
	Inserting a Sound Object
	------------------------
	
	To insert a sound object into your PowerPoint presentation, use the following
	steps. Note that Sound Recorder must be closed for this to procedure to work.
	
	1. Start Sound Recorder. The icon for this program is usually located in the
	  Accessories group of Program Manager.
	
	2. From the Sound Recorder File menu, choose Open. Select a file with a .WAV
	  filename extension. A small selection of .WAV files are provided with Windows
	  3.1.
	
	3. From the Edit menu, choose Copy. This places the sound object on the
	  Clipboard.
	
	4. Close Sound Recorder. If the sound object is pasted into PowerPoint and Sound
	  Recorder is still open, the sound will not play during the slide show.
	
	5. Switch to PowerPoint. Go to the slide where you want to place the sound
	  object.
	
	6. Use one of the following methods to insert the sound object into your
	  presentation:
	   - From the Edit menu in PowerPoint, choose Paste. This embeds the sound
	     object into the slide.
	
	     -or-
	
	   - From the Edit menu in PowerPoint, choose Paste Special, and then select
	     the Paste Link option. This links the sound object into the slide so that
	     it will update automatically if the sound itself is modified later.
	
	During the slide show, the sound object will play when you move to the slide into
	which it was inserted. The sound driver you are using and the sound driver
	settings will determine whether the sound plays before or during the transition
	to the slide. For best playback, your computer should conform to the multimedia
	PC (MPC) specification.
	
	Why Won't the Sound Object Play?
	--------------------------------
	
	For the sound object to be played back during a slide show, it must be placed on
	a slide in Slide view. It will not play if it was placed on a slide in any other
	available view or on the Notes page.
	
	Also, Sound Recorder must be closed for the Sound object to play. If the sound is
	pasted into PowerPoint and Sound Recorder is still open, the sound will not play
	during the slide show.
	
	In addition, the sound object will not play during a slide show if the system
	sounds are not enabled. To enable system sounds:
	
	1. From the Control Panel, choose the Sound icon.
	
	2. In the Sound dialog box there will either be a check box for Enable System
	  Sounds or a scroll list for Sound Schemes if additional sound software has
	  been installed. The check box must be selected or the scroll list for Sound
	  Schemes must be set to anything other than "<none>".
	
	  For more information about using Control Panel, refer to your "Microsoft
	  Windows User's Guide."
	
	For more information about using Sound Recorder objects in PowerPoint slide
	shows, query on the following words in the Microsoft Knowledge Base:
	
	  powerpoint and sound and play and speaker and driver
	
	Additional query words: 3.00 4.00c 7.00 ppt95 winppt
	
	======================================================================
	Keywords          : kbinterop kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
