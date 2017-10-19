---
layout: page
title: "Q299760: Train Simulator: How to Use the Troubleshooter"
permalink: /kb/299/Q299760/
---

## Q299760: Train Simulator: How to Use the Troubleshooter

	Article: Q299760
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Microsoft Train Simulator Troubleshooter to customize the Train
	Simulator startup process in such a way as to resolve certain problems that you
	may encounter when you attempt to start or play the game. This article discusses
	this troubleshooter and the options available.
	
	An update has been create to update Train Simulator Troubleshooter. To download
	and install the update, browse to the following Microsoft Web site:
	
	  http://www.microsoft.com/games/trainsim
	
	MORE INFORMATION
	================
	
	To start the Troubleshooter, click Start, point to Programs, point to Microsoft
	Games, point to Train Simulator, and then click Train Simulator Troubleshooter.
	Then, click Troubleshooting.
	
	Note that you are offered a list of graphical issues that you may be
	experiencing. Select the item in this list that matches your issue, and then
	click OK. Now click Play Train Simulator.
	
	The following is a list of these possible graphical issues, along with a brief
	accompanying description of each issue.
	
	- Smoke is displayed in block form
	
	  This behavior occurs because the card incorrectly reports that it cannot mask
	  z-writes. This behavior can also cause z-order issues with shadows and the
	  objects that cast the shadows. The fix patches the caps so that the
	  simulation engine "believes" that the card can mask z-writes.
	
	- Text is displayed in block form
	
	  This forces the pixel bias setting to cope with the problem described under
	  the "Skip checking pixel bias behavior" issue. The symptoms can also be
	  described as "Text display is blurred/distorted."
	
	- Textures are distorted
	
	  Some drivers incorrectly report the size of texture they can use (typically
	  they report 512 x 512 or greater, when the actual limit is 256 x 256). This
	  forces 256 x 256 textures in the game.
	
	- Seams are visible in cab cockpits
	
	  This is the same as the command line option /nofiltercab. This removes visible
	  seams in the cab cockpits, which are caused by filtering artifacts at the
	  edges of textures.
	
	- Text is distorted or not displayed
	
	  This works around some problems that result when calls to DirectDraw blit
	  functions fail but do not return an error. This blit issue causes problems in
	  the TrueType font-caching system in Train Simulator, which causes text to
	  only partially or completely fail to display, or in text being rendered
	  incorrectly.
	
	- Skip texture size limit test
	
	  Some code is run at startup to establish the maximum and minimum texture sizes
	  that the card can handle by actually creating textures at each size. By
	  selecting this box, you are able to skip this check just in case it causes
	  problems on a particular card.
	
	- Skip pixel behavior test
	
	  Some code is run at startup to establish whether the card correctly implements
	  texture mapping in the one pixel to one texel case; that is, it's an
	  automated check to determine whether the "Text is blocky." By selecting this
	  check box, you are able to skip this check just in case it causes problems on
	  a particular card.
	
	- Snow causes game to crash or does not display
	
	  This works around problems with drivers either reporting that they can't do
	  "guard band clipping" when they can, and/or drivers failing to implement D3D
	  clipping correctly or implementing in a manner that causes the game to stop
	  responding (hang). This option uses very simplistic clipping within the
	  engine to work around these issues.
	
	You can also use the Troubleshooter to reprofile your Sound and Video hardware
	and drivers after you update or upgrade. To do this follow the steps below:
	
	1. Click Start, point to Programs, point to Microsoft Games, point to Train
	  Simulator, and then click "Train Simulator Troubleshooter".
	
	2. Click "Change Video Driver".
	
	3. Click OK.
	
	4. Click "Play Train Simulator".
	
	Additional query words: msgame trainsim tshoot troubleshoot
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbTrainSim
	Version           : :1.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
