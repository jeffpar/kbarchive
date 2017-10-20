---
layout: page
title: "Q237997: Midtown Madness: Cannot Start Game at Resolution Above 640 x 480"
permalink: /kb/237/Q237997/
---

## Q237997: Midtown Madness: Cannot Start Game at Resolution Above 640 x 480

{% raw %}

	Article: Q237997
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu
	Last Modified: 05-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to start Microsoft Midtown Madness if your computer is
	configured to use a screen resolution that is higher than 640 x 480 pixels.
	
	CAUSE
	=====
	
	This behavior can occur if Midtown Madness does not properly detect your video
	adapter.
	
	RESOLUTION
	==========
	
	You may be able to resolve this issue by editing the Video.cfg file to include
	screen resolutions higher than 640 x 480 pixels:
	
	1. Quit Midtown Madness if it is running.
	
	2. Click Start, point to Find, and then click "Files or Folders."
	
	3. In the Named box, type "video.cfg" (without the quotation marks).
	
	4. In the "Look in" box, click My Computer, and then click Find Now.
	
	5. In the list of found files, double-click Video.cfg.
	
	6. In the Open With box, click Wordpad.
	
	7. In the Video.cfg file, increase the value on the Resolutions= line by one.
	
	8. Immediately below the Resolutions= line, add the resolution you want to use
	  in Midtown Madness.
	
	  For example, if you want to use a resolution of 800 x 600 pixels, type "800
	  600 <xxxxxxxx>" (without the quotation marks), where <xxxxxxxx>
	  is the 8-digit number included in the existing settings.
	
	9. On the File menu, click Save.
	
	10. On the File menu, click Exit.
	
	11. Start Midtown Madness.
	
	12. On the main Midtown Madness screen, click Options.
	
	13. Click Graphics Options.
	
	14. In the Resolution box, click the resolution you want to use, and then click
	  Done.
	
	15. Start a race to test the new resolution.
	
	If your computer stops responding (hangs) after you edit the Video.cfg file, the
	video resolution you entered may not be supported by your video adapter.
	
	To resolve this issue, replace the resolution you entered in step 8 with a lower
	resolution.
	
	Additional query words: 1.00 msgame midmad display screen
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
