---
layout: page
title: "Q150338: Microsoft Voice Does Not Extract WordPad Commands"
permalink: /kb/150/Q150338/
---

## Q150338: Microsoft Voice Does Not Extract WordPad Commands

{% raw %}

	Article: Q150338
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): win95 msphone1
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start WordPad using the mouse or keyboard, and then open a second
	instance of WordPad using the "Start Running WordPad" voice command,
	WordPad-specific voice commands may not be executed. In addition, issuing the
	"What can I say" voice command may not display the list of WordPad- specific
	voice commands.
	
	CAUSE
	=====
	
	Microsoft Voice normally extracts commands from the menus of an application when
	you start or switch focus to that application. However, in the situation noted
	in the "Symptoms" section, the menu extraction of WordPad commands does not take
	place when WordPad starts.
	
	RESOLUTION
	==========
	
	To force Microsoft Voice to extract the list of commands available for WordPad,
	switch focus away from the voice-initiated instance of WordPad, and then switch
	focus back to that instance of WordPad. At this point, you will be able to
	execute WordPad-specific voice commands and view WordPad- specific voice
	commands by issuing the "What Can I Say" command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Voice version 1.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	NOTE: This problem occurs only with WordPad, and does not occur with other
	Windows 95 programs such as Notepad or Paint.
	
	
	Additional query words: 1.00 tazz commands
	
	======================================================================
	Keywords          : win95 msphone1 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
