---
layout: page
title: "Q126004: MSB Solar and Ocean: Err Msg: Run Magic School Bus Setup Again"
permalink: /kb/126/Q126004/
---

## Q126004: MSB Solar and Ocean: Err Msg: Run Magic School Bus Setup Again

{% raw %}

	Article: Q126004
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimukbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of the programs listed at the top of this article, you may see
	the Microsoft Home logo, followed by the Scholastic School Bus logo, followed by
	this message:
	
	  Please restart Windows and run Magic School Bus Setup again.
	
	Reinstalling the program may not correct the problem. The message appears even if
	the companion product, Magic School Bus Human Body, runs correctly
	
	RESOLUTION
	==========
	
	To resolve the problem, search for the following components and remove them
	using the appropriate steps below for your version of Windows:
	
	- Sound Driver for PC Speaker
	
	- Sound Source Windows Sound Driver
	
	Windows 95/98
	-------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab.
	
	4. Double-click Audio Devices to expand the branch.
	
	5. Click Audio For Sound Driver For PC-Speaker, and then click Properties.
	
	6. Click Remove. When you are prompted to confirm the removal of the driver,
	  click Yes.
	
	7. Click Sound Source Windows Sound Driver, and then click Properties.
	
	8. Click Remove. When you are prompted to confirm the removal of the driver,
	  click Yes.
	
	9. Click OK to close the Multimedia Properties dialog box.
	
	10. Shut down and restart Windows.
	
	Windows 3.1
	-----------
	
	1. Run Control Panel, then choose the Drivers icon.
	
	2. Check the list of Installed Drivers for the following:
	
	   - Sound Driver for PC Speaker
	
	   - Sound Source Windows Sound Driver
	
	3. Click Audio For Sound Driver For PC-Speaker to remove the Sound Driver for PC
	  Speaker.
	
	  Click Sound Source Windows Sound Driver to remove the Sound Source Windows
	  Sound Driver.
	
	4. Click Remove.
	
	5. Exit Windows and restart your computer.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	After following these steps, Magic School Bus Solar System or Ocean should run
	correctly on your computer.
	
	MORE INFORMATION
	================
	
	To run correctly, Magic School Bus Solar System and Ocean requires a true sound
	card and compatible drivers. PC Speaker is intended for use on computers that do
	not have a true sound card.
	
	
	Additional query words: 1.00 kids hangs lock locks up freeze error message msbss msb-ss schoolbus liz frizz frizzle soundboard soundcard board winmsbhuman msbhuman winmsbsolar msbsolar
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticOcean kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
