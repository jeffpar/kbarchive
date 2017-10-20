---
layout: page
title: "Q186060: Troubleshooting Active Movie Playback Problems"
permalink: /kb/186/Q186060/
---

## Q186060: Troubleshooting Active Movie Playback Problems

{% raw %}

	Article: Q186060
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbtshoot aoe ccabtf cc fsim fs98 kbimu msgame golf98 outwars mtm2kbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Monster Truck Madness, version 1.0 
	- DreamWorks Interactive, Lost World: Jurassic Park Chaos Island, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Microsoft ActiveMovie to play a video clip, or when you
	attempt to play a video clip in one of the Microsoft programs listed at the
	beginning of this article, you may encounter either of the following symptoms:
	
	- Video playback may be distorted or scrambled.
	
	- The video clip may not play.
	
	CAUSE
	=====
	
	This behavior can occur if there is a problem with Microsoft Video for Windows
	or Microsoft DirectDraw.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Insert the CD-ROM for the game you want to troubleshoot into the CD-ROM
	  drive. Press and hold down the SHIFT key as you insert the CD-ROM to prevent
	  the program from starting automatically.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "*.avi" (without the quotation marks).
	
	4. In the Look In box, click the CD-ROM drive that contains the CD-ROM.
	
	5. Click Find Now.
	
	6. In the list of found files, right-click a video clip (.avi) file, and then
	  click Properties.
	
	7. On the Preview tab, click the Play button. If the issue continues to occur,
	  or if you receive any error messages, there may be a problem with Microsoft
	  Video for Windows. For additional information about how to troubleshoot Video
	  for Windows issues, click the article numbers below to view the articles in
	  the Microsoft Knowledge Base:
	
	  Q136983 No Sound, MMSystem or MCI Errors In Windows 95
	
	  Q141349 Error Msg: MMSYSTEM281 This File Could Not Be Played
	
	  Q139806 Error Message: MMSYSTEM266 The Device Could Not Be Loaded...
	
	  If the issue does not occur when you play the video clip, close the video clip
	  Properties window, and then proceed to the next step.
	
	8. In the list of found files in the Find window, right-click a video clip file,
	  and then click Open.
	
	9. Click the Play button. If the issue continues to occur, test each of the
	  DirectDraw features used by ActiveMovie. To do this:
	
	  a. Right-click the video clip image, and then click Properties.
	
	  b. On the Advanced tab, click Video Renderer in the Filter Properties box,
	     and then click Properties.
	
	  c. On the DirectDraw tab, click one of the following DirectDraw check boxes
	     to clear it:
	
	      - YUV Flipping
	      - RGB Flipping
	      - YUV Overlays
	      - RGB Overlays
	      - YUV Offscreen
	      - RGB Offscreen
	      - DDraw Primary
	      - DCI Primary
	
	  d. Click OK, click OK again, and then play the video clip.
	
	     If the issue continues to occur, repeat step 9, clicking the cleared check
	     box to select it, and then clicking the next check box in the list to
	     clear it.
	
	     If the DirectDraw tab is missing, there may be a problem with DirectX.
	
	     For additional information about how to troubleshoot DirectX, click the
	     article numbers below to view the articles in the Microsoft Knowledge
	     Base:
	
	  Q184251 Description of DirectX Tools for DirectX 5.0 and 5.2
	
	  Q178098 How to Troubleshoot DirectX Video Problems
	
	Additional query words: 1.00 2.00 ror 98 active movie vfw msgame
	
	======================================================================
	Keywords          : kbdisplay kbenv kbtshoot aoe ccabtf cc fsim fs98 kbimu msgame golf98 outwars mtm2 kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbOutwarsSearch kbOutwars kbCloseCombatSearch kbCARTRacingSearch kbMonsterTMSearch kbAOESearch kbMonsterTM kbMonsterTM2 kbCloseCombat2 kbCloseCombat kbFlightSim2000 kbFlightSim98 kbDILostWorldJurassic kbCARTRacing kbDISearch kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
