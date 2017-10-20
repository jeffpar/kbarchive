---
layout: page
title: "Q223305: MSB Animals: Character Stops Talking and Program Hangs"
permalink: /kb/223/Q223305/
---

## Q223305: MSB Animals: Character Stops Talking and Program Hangs

{% raw %}

	Article: Q223305
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsound mskids msb kbimu
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the World of Animals for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Magic School Bus Explores the World of Animals, a character may
	stop talking in the middle of a sentence, and the program may stop responding
	(hang).
	
	CAUSE
	=====
	
	This behavior can occur if Closed Captioning is enabled, and if any of the
	following conditions are true:
	
	- Your sound card is disabled.
	
	- A hardware resource conflict exists between your sound card and another
	  device in the computer.
	
	- No sound card is installed in the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use Device Manager to determine if your sound card is
	working properly.
	
	For additional information about how to use Device Manager to troubleshoot
	hardware resource conflicts, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q133240 Troubleshooting Device Conflicts with Device Manager
	
	NOTE: If no devices are listed in the Sound, Video And Game Controllers branch,
	either the sound card is not installed correctly, or no sound card is installed
	in the computer. For more information about your sound card installation, please
	contact your sound card manufacturer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Scholastic's Magic
	School Bus Explores the World of Animals for Windows, version 1.0.
	
	Additional query words: 1.00 kids mskids character frizzle owl freeze freezing hang hanging cc close caption lock
	
	======================================================================
	Keywords          : kbsound mskids msb kbimu 
	Technology        : kbHomeProdSearch kbKidsSearch kbScholasticAnimals kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
