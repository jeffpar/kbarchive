---
layout: page
title: "Q106019: SoundScapes: Playing Sounds from Any Directory Using WSS 1.0x"
permalink: /kb/106/Q106019/
---

## Q106019: SoundScapes: Playing Sounds from Any Directory Using WSS 1.0x

{% raw %}

	Article: Q106019
	Product(s): Miscellaneous Windows Products
	Version(s): 1.00 1.00a
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 9 of the "Windows Sound System Software Specifications: SoundScapes"
	(Revision 1.04) states that SoundScapes should play waveform files from any
	directory by adding the following path in the [SndScape.<environment
	name>] section of the CONTROL.INI file
	
	  Path=<Pathname>
	
	where <Pathname> is the directory where the waveform files not located in
	the SoundScape default directory are found.
	
	SoundScapes plays only waveform files in the SoundScapes default directory
	specified in the CONTROL.INI file. The workaround is described below.
	
	MORE INFORMATION
	================
	
	Windows Sound System uses the CONTROL.INI file in the Windows directory to store
	information about SoundScapes. The Path= statement in the [SoundScapes] section
	indicates the SoundScapes default directory. All the [SndScape.<soundscape
	name>] sections have SoundXX=" statements (where "X" stands for a single
	digit) to indicate the waveform files to use for that SoundScapes sound.
	
	To play a waveform file for a SoundScapes sound, Windows Sound System
	concatenates the default SoundScapes path with the name of the waveform file. If
	this does not produce a valid path and waveform file combination, no sound is
	played. If the waveform files are in the default SoundScapes directory, this
	works because the waveform file has no other path attached to it.
	
	WORKAROUND
	==========
	
	Do the following:
	
	1. Open the CONTROL.INI file in the Windows directory.
	
	2. Delete any entry in the Path= statement in the [SoundScapes] section. (That
	  is, the statement should be "Path=". Nothing should be after the equal [=]
	  sign on the Path= line).
	
	3. Change all the Sound<sound number>= statements in the
	  [SndScape.<soundscape name>] section to include the path to the
	  appropriate file. For example, change "Sound00=tada.wav" to
	  "Sound00=c:\windows\tada.wav".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Sound System versions
	1.0 and 1.0a. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	For more information about this topic, query on the following word in the
	Microsoft Knowledge Base:
	
	  SoundScapes
	
	Additional query words: 1.00 1.00a multi media multimedia multi-media system sound snd scape soundscape sound scape .wav wav wave
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	Version           : 1.00 1.00a
	
	=============================================================================
	

{% endraw %}
