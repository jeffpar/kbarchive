---
layout: page
title: "Q216078: DirectX: List of New Features Included in Microsoft DirectX 6.1"
permalink: /kb/216/Q216078/
---

## Q216078: DirectX: List of New Features Included in Microsoft DirectX 6.1

{% raw %}

	Article: Q216078
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbimu msgame KbDirectXkbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat III: The Russian Front 
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the new features included in Microsoft DirectX 6.1.
	
	MORE INFORMATION
	================
	
	DirectX 6.1 is composed of the following six components:
	
	- Direct3D (used for 3-dimensional rendering)
	- DirectPlay (used for multi-player gaming)
	- DirectDraw (used for screen graphics)
	- DirectSound (used for audio playback)
	- DirectInput (used for input device support)
	- DirectMusic (used for message-based musical data)
	
	The new features in DirectX 6.1 are in addition to the new features included in
	DirectX 6.0. For additional information the features included in DirectX 6.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q191829 DirectX: List of New Features Included in Microsoft DirectX 6.0
	
	For additional information about how to download and install the latest version
	of DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	The following new features are included in DirectX 6.1:
	
	DirectMusic
	-----------
	
	- Several new DirectMusic components.
	
	DirectDraw
	----------
	
	- Enables AGP Command Buffers.
	
	- ModeX fixed for AGP computers.
	
	Direct3D
	--------
	
	- Improved performance of DX5 RAMP rasterizer.
	
	- Improved support for video memory vertex buffers.
	
	- Improved support for PowerVR usage of Clear2.
	
	- Drivers implementing ValidateDevice can now consider texture format if
	  required.
	
	- Multitexture stage counting is now more accurate.
	
	- Directional and Spot light types now operate correctly on Pentium II
	  computers.
	
	- Ramp rasterizer now uses blue channel for gray-scale instead of averaging.
	  This is for compatibility with earlier releases.
	
	- Vertex fog now works with SPECULARENABLE set to false.
	
	- 16-Bit ramp rasterizer now supports COPY mode.
	
	- New cap bit for textures which are not powers of two.
	
	DirectPlay
	----------
	
	- The serial service provider could attempt to send multiple blocks of data
	  simultaneously, which could cause the connection to be lost. Now access is
	  serialized.
	
	- If a client was dropped from a session ungracefully and someone else tried to
	  join the game before the host timed out that player, all subsequent joins
	  would fail. Now joins succeed again once the host completely times out all
	  players.
	
	DirectInput
	-----------
	
	No new DirectInput features are included in DirectX 6.1.
	
	DirectSound
	-----------
	
	No new DirectSound features are included in DirectX 6.1
	
	Additional query words: msgame dx dx6 dx6.1
	
	======================================================================
	Keywords          : kbenv kbtool kbimu msgame KbDirectX kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbMotocrossSearch kbCloseCombatSearch kbMonsterTMSearch kbAOESearch kbMonsterTM2 kbAOEExpRome kbCloseCombat3 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim98 kbMotocrossM kbSimSearch
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
