---
layout: page
title: "Q96703: Defining Custom Events for SoundBits"
permalink: /kb/096/Q96703/
---

## Q96703: Defining Custom Events for SoundBits

{% raw %}

	Article: Q96703
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SoundBits version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using SoundBits, you can define custom events for specific applications. To do
	this, insert a line in the [Sounds] section of the Win.ini file using the
	following syntax:
	
	  <Application .EXE filename><Event>=<Path to waveform
	  file>,<Text to appear in SND.CPL>
	
	For example, the following line defines a custom Open event for Microsoft
	Cinemania 1995:
	
	     [Sounds]
	     cnmnia95Open=C:\Windows\Chimes.wav,Cinemania 95 Start
	
	NOTE: The path to the program (in this case Cnmnia95.exe) must be included on the
	path statement in the Autoexec.bat file. You cannot type the full path to the
	.exe file in the [Sounds] section of the Win.ini file.
	
	MORE INFORMATION
	================
	
	Custom events are available for the following events:
	
	  Open
	  Close
	  Minimize
	  Maximize
	  RestoreDown
	  RestoreUp
	
	The event name is what appears in the Sound Event dialog box and is not case
	sensitive.
	
	Additional query words: 1.00 Custom Event Define multimedia multi media multi-media sound bits Hanna-Barbera classic hollywood movies mgm musical instruments world
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbSoundBitsSearch kbSoundBits
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
