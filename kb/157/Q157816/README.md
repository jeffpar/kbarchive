---
layout: page
title: "Q157816: SMS: Hardware Inventory Changes Lotus Organizer Sound Output"
permalink: /kb/157/Q157816/
---

## Q157816: SMS: Hardware Inventory Changes Lotus Organizer Sound Output

{% raw %}

	Article: Q157816
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsound kbInventory smsinv kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After the Systems Management Server Inventory Agent runs on an IBM ThinkPad 700
	Series that has Lotus Organizer installed, the Lotus Organizer sound output will
	be changed. The sound names remain the same, but the sound quality will be
	softer. This behavior is not seen with .wav files.
	
	CAUSE
	=====
	
	The Inventory Agent executable file Getcomp.exe affects how the Lotus Organizer
	stores the sound files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: poor quality lower reduced volume
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbsound kbInventory smsinv kbHardware 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
