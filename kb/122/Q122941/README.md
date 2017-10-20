---
layout: page
title: "Q122941: Invalid Voice Pilot Macro Hangs System"
permalink: /kb/122/Q122941/
---

## Q122941: Invalid Voice Pilot Macro Hangs System

{% raw %}

	Article: Q122941
	Product(s): Miscellaneous Windows Products
	Version(s): 2.00 2.00a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a Switch To macro created with the Voice Pilot feature of
	the Windows Sound System, your system may stop responding (hang).
	
	CAUSE
	=====
	
	This problem occurs when the name of the application that the macro is to switch
	to is placed outside the square brackets surrounding the words "Switch To" as in
	the following example:
	
	  [Switch To]
	  Notepad
	
	This frequently occurs when "Switch To" is selected from the Special Command
	menu, rather than being typed in manually.
	
	RESOLUTION
	==========
	
	To correct this problem, place the name of the application inside the square
	brackets as follows:
	
	  [Switch To Notepad]
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200 kbWinSoundSys200a
	Version           : 2.00 2.00a
	
	=============================================================================
	

{% endraw %}
