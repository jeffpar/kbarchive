---
layout: page
title: "Q100484: SoundBits: GP Fault after Switching Back to Windows"
permalink: /kb/100/Q100484/
---

## Q100484: SoundBits: GP Fault after Switching Back to Windows

{% raw %}

	Article: Q100484
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SoundBits (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you launch SND.CPL (the Sound dialog box included with SoundBits 1.0) and
	then switch back to Windows, you may receive a general protection (GP) fault
	that hangs Windows. This problem only occurs if at least one session of SND.CPL
	is already running (it only occurs with second or subsequent sessions).
	
	This problem does not occur while using the original Windows 3.1 Sound dialog
	box. You are using the original Windows 3.1 Sound dialog if the SND.CPL file on
	your system is dated 03/10/92 and has a size of 8,192 bytes.
	
	Microsoft has confirmed this to be a problem in SoundBits version 1.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run File Manager.
	
	2. From the File menu, choose Run.
	
	3. In the Command Line field, type the following
	
	  "CONTROL SND.CPL" (without the quotation marks)
	
	  and choose OK. The Sound dialog box should now appear.
	
	4. Leave the Sound option running and switch back to File Manager by pressing
	  ALT+TAB.
	
	5. Repeat steps 2 to 4 until Windows crashes.
	
	Many applications use this method of starting the Sound dialog box. By running a
	few applications or utilities that run the Sound dialog box, you may
	inadvertently cause Windows to crash. For example, this behavior occurs when
	running applications such as the Windows Clock and Minesweeper.
	
	Additional query words: multi media multimedia multi-media Hanna-Barbera classic hollywood movies mgm Sound Bits musical instruments world Crun Usage
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbSoundBitsSearch kbSoundBits
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
