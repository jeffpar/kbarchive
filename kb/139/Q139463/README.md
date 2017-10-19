---
layout: page
title: "Q139463: PC Win: How to Customize Mail 3.x MailBeep under Windows 95"
permalink: /kb/139/Q139463/
---

## Q139463: PC Win: How to Customize Mail 3.x MailBeep under Windows 95

	Article: Q139463
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On multimedia enhanced IBM-compatible computers, (computers that have a sound
	card and speakers), Mail for Windows supports substituting a .WAV file for the
	standard beep that is played in the PC speaker when the spooler detects new
	mail.
	
	To enable this option, from the Mail menu, choose Options. Then select New Mail
	and Sound Chime.
	
	NOTE: Microsoft Mail for Windows MailBeep can still function under Microsoft
	Windows 95, but configuring the custom sound file requires a different
	procedure.
	
	MORE INFORMATION
	================
	
	In Windows 3.1, the WIN.INI file parameter can list a custom sound for New Mail
	notification using the following syntax:
	
	  [Sounds]
	  MailBeep=<valid path>\<soundfile>.WAV,MailBeep
	
	In addition, the following line should exist in the MSMAIL.INI file under the
	[Microsoft Mail] section:
	
	  [Microsoft Mail]
	  MailBeep=<valid path>\<soundfile>.WAV
	
	Microsoft Windows 95 moves the MailBeep entry in the WIN.INI file (if one exists)
	to the following registry key every time you exit Microsoft Windows 95:
	
	  HKey_Current_User\AppEvents\Schemes\Apps\.Default\MailBeep\.Current
	
	In addition to the registry entry, the following line must exist in the
	MSMAIL.INI file under the [Microsoft Mail] section:
	
	  [Microsoft Mail]
	  MailBeep=<anything, but not NULL>
	
	Configuring a Custom Sound for Mail under Microsoft Windows 95
	--------------------------------------------------------------
	
	It is not recommended that the registry be edited directly. When you run Mail for
	Windows under Microsoft Windows 95, the following steps are recommended to
	assign a custom .WAV sound for New Mail notification:
	
	1. Edit the MSMAIL.INI file, and ensure that only the following MailBeep entry
	  exists under the [Microsoft Mail] section:
	
	  MailBeep=x
	
	2. Edit the WIN.INI file. Add the following entry under the [Sounds] section:
	
	  " MailBeep=<validpath>\<wavefilename>.WAV,MailBeep" (without the
	  quotation marks)
	
	3. Shutdown Microsoft Windows 95.
	
	4. Restart Microsoft Windows 95.
	
	5. Restart Mail
	
	Additional query words: 3.20 win95 new mail sound beep 3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
