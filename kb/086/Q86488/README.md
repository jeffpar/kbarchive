---
layout: page
title: "Q86488: MIDI Sound Scrambled When Played Through Media Player"
permalink: /kb/086/Q86488/
---

## Q86488: MIDI Sound Scrambled When Played Through Media Player

{% raw %}

	Article: Q86488
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When playing MIDI files with a sound card configured with the Adlib driver from
	Microsoft Windows operating system version 3.1, the sound produced may be
	scrambled or distorted.
	
	RESOLUTION
	==========
	
	To eliminate this problem, use the MIDI Mapper to disable channel 10.
	
	1. From Control Panel, run MIDI Mapper.
	
	2. From the MIDI Mapper dialog box, choose Setups in the Show area.
	
	3. Choose Edit.
	
	4. In the MIDI setup window, cancel the selection of Channel 10 in the Active
	  column.
	
	5. Choose OK.
	
	MORE INFORMATION
	================
	
	Channel 10 is customarily the drum track and may be interpreted as notes,
	producing a scrambled or distorted sound. This article deals with playing MIDI
	files using the Media Player.
	
	Additional query words: 3.10 3.11 garbled .mid mid
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
