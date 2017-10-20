---
layout: page
title: "Q104964: Games May Hang with Gravis UltraSound Sound Card"
permalink: /kb/104/Q104964/
---

## Q104964: Games May Hang with Gravis UltraSound Sound Card

{% raw %}

	Article: Q104964
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Arcade for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The games provided in Microsoft Arcade may stop responding (hang) if you use the
	16-bit UltraSound sound card manufactured by Advanced Gravis Computer Technology
	Ltd. with the default settings.
	
	RESOLUTION
	==========
	
	To solve this problem, try one of the following solutions.
	
	Solution 1
	----------
	
	Upgrade to the most recent version of the Gravis UltraSound driver that corrects
	this problem. To obtain the driver, call the Advanced Gravis Bulletin Board
	Service at (604) 431-5927. The filename is GUS0035.ZIP.
	
	Solution 2
	----------
	
	This problem can also be solved by opening WAVEMIX.INI from the Windows directory
	and using a text editor such as Notepad to add the following lines to the bottom
	of the file (include the subheader):
	
	  [UltraSound Waveform Output]
	  Remix=2
	  GoodWavePos=0
	  WaveBlocks=3
	  SamplesPerSec=11
	
	Save the file, exit Notepad, and restart Windows.
	
	Sounds being played by the games may have a slight delay; that is, you will see
	an explosion on the screen first, followed a split second later by the sound
	effect. However, the delay in sounds should not interfere in anyway to the game
	play itself.
	
	MORE INFORMATION
	================
	
	For more information about using the UltraSound sound card, contact Advance
	Gravis in Burnaby, B.C. (Canada).
	
	- Technical support (604) 431-1807
	
	- Fax (604) 431-5155
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 ultra sound crash freeze up lockup lock
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbArcadeSearch kbArcade
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
