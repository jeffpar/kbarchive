---
layout: page
title: "Q94312: How To: Customizing the WFWG Mail and Schedule+ Chime Sound"
permalink: kb/094/Q94312/
---

## Q94312: How To: Customizing the WFWG Mail and Schedule+ Chime Sound

	Article: Q94312
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail and Schedule+ programs packaged with Windows for Workgroups (WFWG) have
	the option to play a sound when mail is received or when you have scheduled a
	reminder. The chime is the system default sound. It is not possible to change
	the chime without changing the system default sound unless the appropriate entry
	is added to the WIN.INI file.
	
	MORE INFORMATION
	================
	
	To customize the sound, proceed as follows:
	
	1. Use a text editor (such as Notepad) to open the WIN.INI file.
	
	2. To customize the Mail chime, add the following entry to the [Sounds] section
	  of the WIN.INI file:
	
	  MailBeep=<wavefilename>,MailBeep
	
	  where <wavefilename> is the name of the wave (.WAV) file you wish to
	  play.
	
	3. To customize the Schedule+ Reminders sounds, add the following entry to the
	  [Sounds] section of the WIN.INI file:
	
	  SchdplusReminder=<wavefilename>,SchedulePlusReminders
	
	  where <wavefilename> is the name of the wave (.WAV) file you wish to
	  play.
	
	4. Save your changes, then restart Windows for the changes to take effect.
	
	You can replace the wave file name with any playable wave (.WAV) file either by
	using the Control Panel Sound option or by editing the WIN.INI file. To play
	wave files that aren't in the Windows directory, add a valid path to the file.
	
	The Mail chime is active by default. To change this setting:
	
	1. Run Mail.
	
	2. From the Mail menu, choose Options and clear the Sound Chime check box.
	
	NOTE: The computer must be configured with either a sound card or the PC speaker
	driver to use this feature.
	
	Additional query words: 3.10 notify
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
