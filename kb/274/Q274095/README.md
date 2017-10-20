---
layout: page
title: "Q274095: Games Err Msg: Exception 01h in Module &lt;Unknown&gt;"
permalink: /kb/274/Q274095/
---

## Q274095: Games Err Msg: Exception 01h in Module &lt;Unknown&gt;

{% raw %}

	Article: Q274095
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Baseball 2001 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links 2001 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs that are listed at the beginning of this
	article on a Hewlett-Packard computer, you may receive the following error
	message:
	
	  This program has performed an illegal operation and will be shut down.
	
	When you click Details, you receive the following error message:
	
	  <Game> caused an exception 01H in module <unknown> at
	  0000:0042d3bc.
	  Registers:
	  EAX=00000000 CS=0028 EIP=0042d3bc EFLGS=00000297EBX=0042d3b1 SS=016f
	  ESP=0067d9bc EBP=0067da08
	  ECX=0067da30 DS=016f ESI=c0001350 FS=113f
	  EDX=c17303b0 ES=016f EDI=000000cf GS=0000
	  Bytes at CS:EIP:
	  89 45 e8 eb 06 8b 45 e8 0f 23 d0 0f 01 4d ec 8b
	  Stack dump:
	  00400000 bffa084d 0067da08 0067d9dc 00000001 c17303b0 0067da30 00001010
	  00400000 bffa084d 00000001 00001010 00000167 00000000 c00002ff 00008009
	
	CAUSE
	=====
	
	This behavior can occur if the Hewlett-Packard FDC update is installed on the
	computer.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall the FDC update:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double click Add/Remove Programs.
	
	3. Click FDCMGR9x, and then click Add/Remove.
	
	4. Click Yes, and then click "Yes to All".
	
	5. Click OK. When you are prompted to restart the computer, do so.
	
	
	MORE INFORMATION
	================
	
	The preceding instructions have been approved for use by Hewlett-Packard
	Technical Support. If you have any questions regarding the use or removal of the
	FDC patch, please direct your questions to Hewlett Packard support at (800)
	742-9729.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: msgame aoe2 aoeii aok combatfs cfs2 flightsim fltsim fs2k fs2000 mm2 midmad hewlett packard hp
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMetalGearSearch kbPandoraSearch kbMotocrossSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbMidtownMadness kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2000 kbMetalGearSolid kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbLinks2001 kbNBAInsideDrive2000 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
