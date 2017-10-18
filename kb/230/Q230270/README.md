---
layout: page
title: "Q230270: Program Reports that 3D Hardware Acceleration Is Unavailable"
permalink: kb/230/Q230270/
---

## Q230270: Program Reports that 3D Hardware Acceleration Is Unavailable

	Article: Q230270
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbimu msgame
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the products listed earlier, you may receive an
	error message similar to the following:
	
	  Could not find any 3D acceleration hardware on your system. Please make sure
	  that your card is properly installed.
	
	When you try to start Microsoft Flight Simulator 2002, it may only start in Safe
	mode, and you may receive the following message:
	
	  Safe mode has been enabled because your system is currently unable to use
	  hardware acceleration.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following NeoMagic video adapters is
	installed in your computer:
	
	- NeoMagic MagicGraph 128XD
	- NeoMagic MagicGraph 128ZV+
	- NeoMagic MagicMedia 256AV
	- NeoMagic MagicMedia 256XL+
	
	MORE INFORMATION
	================
	
	While in Safe mode, you can run Flight Simulator and troubleshoot hardware
	issues, but performance and display quality are affected. Product Support
	Services does not support Safe mode. For more information, see the Readme file,
	which is available from the Flight Simulator link in your windows Start menu.
	
	Microsoft Motorcross Madness
	
	These NeoMagic video adapters use software to emulate 3D acceleration and do not
	support true Direct3D acceleration. As a result, Motocross Madness cannot detect
	any of these video adapters.
	
	Microsoft Train Simulator
	
	Microsoft Train Simulator has detected that your graphics hardware may be lacking
	essential features that it needs to run. Please ensure that you have the latest
	drivers from your graphics card manufacturer's web site.
	
	  -or-
	
	When starting the Train Simulator Troubleshooter, you may see this message:
	
	  Train simulator requires hardware acceleration.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q191660 Err Msg: Could Not Find Any 3D Acceleration Hardware...
	
	  Q299690 Train Simulator: Known Video Issues
	
	  Q309638 Flight Simulator 2002: Known Video-Related Issues
	
	  Q309673 Flight Simulator 2002: Minimum System Requirements
	
	
	Additional query words: 1.00 msgame mcm display card motorcross motorcycle
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbFlightSimSearch kbZNotKeyword _IK kbMotocrossSearch kbMotocrossM kbTrainSim kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
