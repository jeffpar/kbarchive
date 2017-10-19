---
layout: page
title: "Q99383: Access Pack for Windows WIN.INI Settings"
permalink: /kb/099/Q99383/
---

## Q99383: Access Pack for Windows WIN.INI Settings

	Article: Q99383
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbenable win31 kbEnableSight kbEnableMove kbEnableHear kbEnableLearn
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the WIN.INI file settings used by Access Pack for
	Windows, version 3.0a. These entries are only added to your WIN.INI file when
	you explicitly save setting changes using the Access Utility provided with
	Access Pack.
	
	WARNING: Be very careful when you modify WIN.INI file settings; refer to the
	Access Pack WININI.WRI file for more information.
	
	To change these settings, choose your settings using the Access Utility, and then
	save them using the Save Parameter Changes to Disk command from the File menu.
	
	If you cannot run the Access Utility because of unsupported hardware, you can add
	these entries to your WIN.INI file using a text editor, such as Microsoft
	Windows Notepad. See the Access Pack WININI.WRI file for more information about
	the structure of the WIN.INI file and instructions on making changes.
	
	MORE INFORMATION
	================
	
	The WIN.INI settings are describes below.
	
	[FilterKeys] Section Settings
	-----------------------------
	
	On=<0 or 1>>
	
	Default: 0
	Purpose: Specifies if the Keyboard Response features (SlowKeys,
	        RepeatKeys and BounceKeys) are on or off when Windows is
	        started. If this setting is 0, these features are off until
	        activated using the keyboard or the Access Utility. If the
	        setting is 1, the features are on until deactivated.
	
	OnOffFeedback=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether the system should produce a rising or
	        falling audible tone to indicate when the Keyboard Response
	        features are turned on or off when using the keyboard. If this
	        setting is 0, no sound is emitted.
	
	DelayBeforeAcceptance=<milliseconds>
	
	Default: 1000
	Purpose: Specifies how long a key must be held down before being
	        accepted.
	
	AutoRepeatDelay=<milliseconds>
	
	Default: 1000
	Purpose: Specifies how long a key must be held down before it begins
	        automatically repeating.
	
	AutoRepeatRate=<milliseconds>
	
	Default: 500
	Purpose: Specifies the amount of time between automatically repeated
	        keystrokes when a key is held down long enough to activate
	        the auto-repeat feature. Set this value to 32760 to turn off
	        auto-repeat altogether.
	
	BounceTime=<milliseconds>
	
	Default: 500
	Purpose: Specifies amount of time a particular key should be ignored
	        after it is pressed and released once.
	
	[StickeyKeys] Section Settings
	-----------------------------
	
	On=<0 or 1>
	
	Default: 0
	Purpose: Specifies if the StickyKeys feature is on or off when Windows
	        is started. If this setting is 0, these features are off
	        until activated using the keyboard or the Access Utility. If
	        the setting is 1, the feature is on until deactivated.
	
	OnOffFeedback=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether the system should produce a rising or
	        falling audible tone to indicate when the StickyKeys feature
	        is turned on or off with the keyboard. If this setting is 0,
	        no sound is emitted.
	
	TriState=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether pressing a modifier key by itself twice in
	        a row should cause the key to be locked down until it is
	        pressed a third time. If the setting is 1, the modifier keys
	        may be locked down using this procedure. If the setting is 0,
	        pressing a modifier key a second time releases the key.
	
	TwoKeysOff=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether pressing two modifier keys or a modifier and
	        a nonmodifier key simultaneously turns off the StickyKeys
	        feature. If this setting is 1, pressing two modifier keys or
	        one modifier key and a nonmodifier key at the same time
	        turns off the StickyKeys feature.
	
	AudibleFeedback=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether the system should indicate when a modifier
	        key is being latched, locked, or released by generating
	        audible tones. If this setting is 1, the system generates
	        these tones.
	
	[MouseKeys] Section Settings
	----------------------------
	
	On=<0 or 1>
	
	Default: 0
	Purpose: Specifies if the MouseKeys feature is on or off when Windows
	        is started. If this setting is 0, this feature is off until
	        activated using the keyboard or the Access Utility. If the
	        setting is 1, the feature is on until deactivated.
	
	OnOffFeedback=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether the system should produce a rising or
	        falling audible tone to indicate when the MouseKeys feature
	        is turned on or off when using the keyboard. If this setting
	        is 0, no sound is emitted.
	
	TimeToMaximumSpeed=<milliseconds>
	
	Default: 3000
	Purpose: Specifies the amount of time it takes the mouse cursor to
	        attain full speed when a mouse movement key is held down.
	
	MaximumSpeed=<pixels-per-second>
	
	Default: 40
	Purpose: Specifies the maximum speed the mouse cursor can attain
	        when a mouse movement key is held down.
	
	[ToggleKeys] Section Settings
	-----------------------------
	
	On=<0 or 1>
	
	Default: 0
	Purpose: Specifies if the ToggleKeys feature is on or off when Windows
	        is started. If this setting is 0, this feature is off until
	        activated using the keyboard or the Access Utility. If the
	        setting is 1, the feature is on until deactivated.
	
	OnOffFeedback=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether the system should produce a rising or
	        falling audible tone to indicate when the ToggleKeys feature
	        is turned on or off when using the keyboard. If this setting
	        is 0, no sound is emitted.
	
	[TimeOut] Section Settings
	--------------------------
	
	On=<0 or 1>
	
	Default: 0
	Purpose: Specifies if the TimeOut feature is on or off when Windows is
	        started. If this setting is 0, this feature is off until
	        activated using the Access Utility. If the setting is 1 the
	        feature is on until deactivated.
	
	OnOffFeedback=<0 or 1>
	
	Default: 1
	Purpose: Specifies whether the system should produce a falling tone to
	        indicate when the Access Pack features have been turned off
	        because of a time-out. If this setting is 0, no sound is
	        emitted.
	
	TimeToWait=<minutes>
	
	Default: 5
	Purpose: Specifies the amount of time the system must be idle, with
	        no mouse or keyboard input, before all Access Pack features
	        is automatically turned off.
	
	[GIDEI] Section Settings
	------------------------
	
	On=<0 or 1>
	
	Default: 0
	Purpose: Specifies if the SerialKeys feature is on or off when the
	        Access Utility is started. If this setting is 0, this feature
	        is off until activated using the Access Utility.  If the
	        setting is 1, the feature is on until deactivated.
	
	BaudRate=<baud-rate>
	
	Default: 300
	Purpose: Specifies the speed at which incoming SerialKeys data is
	        expected.
	
	Port=<1, 2, 3, or 4>
	
	Default: 1
	Purpose: Specifies the serial port on which incoming SerialKeys data
	        is expected. If this setting is 1, the data is expected on
	        COM1; if the setting is 2, the data is expected on COM2,
	        and so on.
	
	[ShowSounds] Section Settings
	-----------------------------
	
	Screen=<0 or 1>
	
	Default: 0
	Purpose: Specifies whether the screen should flash when Access Pack
	        detects that an application has generated a sound. This
	        setting is unavailable on some types of computer displays.
	
	Caption=<0 or 1>
	
	Default: 0
	Purpose: Specifies whether the title bar of the foreground window
	        should flash when Access Pack detects that an application has
	        generated a sound.
	
	KBCategory: kbref kbdisplay kbsound kbtool kbui kbhw
	KBSubcategory: win30 win31
	
	Additional query words: video blink acces disabled handicap accessibility disabilities disability
	
	======================================================================
	Keywords          : kbenable win31 kbEnableSight kbEnableMove kbEnableHear kbEnableLearn 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
