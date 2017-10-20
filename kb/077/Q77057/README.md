---
layout: page
title: "Q77057: Increasing the Foreground Application's Keyboard Response"
permalink: /kb/077/Q77057/
---

## Q77057: Increasing the Foreground Application's Keyboard Response

{% raw %}

	Article: Q77057
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running more than one application at a time, you may find that your
	system's keyboard response is slower. To alleviate this, you can adjust the
	amount of time allocated to processing keystrokes when running Windows 3.0 in
	386 enhanced mode.
	
	MORE INFORMATION
	================
	
	To increase the priority of the foreground application's scanning of the
	keyboard, add the KeyBoostTime= setting to the [386Enh] section of the
	SYSTEM.INI file. You can do this with a text editor such as Notepad.
	
	The KeyBoostTime default setting is:
	
	       KeyBoostTime=.001
	
	When you set up your system, this line is not automatically added to the [386Enh]
	in this section and you must add it. If you need to change this setting, start
	with
	
	       KeyBoostTime=.005
	
	Increase the setting in small increments until you achieve the desired response.
	
	NOTE: When Windows runs multiple programs, it divides the processor's time among
	them. The amount of time each application receives depends upon the foreground
	and background priority settings for each application. As you increase the
	number of background applications, the foreground application receives less and
	less time to process keystrokes.
	
	REFERENCES
	==========
	
	SYSINI3.TXT
	
	"Inside Microsoft Windows," September 1991. Vol 2 No. 9
	
	Additional query words: 3.00 win30 3.00a key board
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
