---
layout: page
title: "Q120463: Scenes 2.0: Causes Divide by Zero Error Under Windows NT"
permalink: /kb/120/Q120463/
---

## Q120463: Scenes 2.0: Causes Divide by Zero Error Under Windows NT

{% raw %}

	Article: Q120463
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When password protection is turned on while you are running Windows NT, and the
	screen saver is interrupted and no password is entered, Scenes pauses and then
	starts the screen saver. The amount of time Scenes pauses depends on the amount
	of time set in the Start Screen Saver After option.
	
	This may cause the following error message:
	
	  Application Error: integer divide by 0.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Scenes version 2.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you are running Windows 3.1 or Windows for Workgroups 3.11, Scenes waits
	three minutes before starting the screen saver under the above conditions.
	Scenes will not wait the amount of time entered in the Start Screen Saver After
	option like it does in Windows NT.
	
	Additional query words: msscenes screen saver screensaver winnt
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbScenesSearch kbScenes200
	Version           : 2.00
	
	=============================================================================
	

{% endraw %}
