---
layout: page
title: "Q133036: No Recording Control Slider with SoundBlaster Pro Sound Card"
permalink: /kb/133/Q133036/
---

## Q133036: No Recording Control Slider with SoundBlaster Pro Sound Card

{% raw %}

	Article: Q133036
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Creative Labs SoundBlaster Pro sound card with Windows or
	Windows for Workgroups version 3.1 or 3.11, you may not see a Recording Control
	slider in the Audio Control tool.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. On the View menu, click Detailed View.
	
	2. Click Voice Commands.
	
	3. Click the Line option button.
	
	4. Make the changes you want and then save the configuration.
	
	MORE INFORMATION
	================
	
	When you are using a SoundBlaster Pro (or compatible) sound card with Windows
	drivers, there is no level control for voice commands in the Audio Control tool.
	Creative Labs uses an "auto gain" feature that sets the level for you
	automatically.
	
	By default, when you install the Microsoft Windows Sound System with a
	SoundBlaster Pro sound card, Windows Sound System sets the voice commands to the
	microphone. However, the microphone input on the SoundBlaster Pro sound card
	uses an "auto gain" feature that does not allow you to change the input. The
	Windows Sound System microphone, which uses an adapter to amplify the microphone
	to a line level, is always plugged into the line input of a true SoundBlaster
	Pro sound card because a true SoundBlaster Pro sound card does not provide power
	through its microphone input. Generally, you will want to use the Windows Sound
	System microphone for voice commands, as well as for most microphone input,
	because the SoundBlaster Pro sound card does not normally include a microphone.
	
	Since there is no button for voice commands in the Audio Control tool in this
	situation, it is difficult to change voice commands to line input. Normally, you
	can double-click the volume control of the function in Audio Control of which
	you want a detailed view; however, the Recording Control slider is not present
	with the Creative Labs "auto gain" feature.
	
	Additional query words: 3.10 3.11 SBPro autogain
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
