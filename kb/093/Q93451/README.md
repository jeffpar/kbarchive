---
layout: page
title: "Q93451: WININI.WRI from Windows for Workgroups Version 3.1"
permalink: /kb/093/Q93451/
---

## Q93451: WININI.WRI from Windows for Workgroups Version 3.1

	Article: Q93451
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.1 WININI.WRI file.
	
	MORE INFORMATION
	================
	
	WIN.INI File Settings
	---------------------
	
	Windows initialization files contain information that defines your
	Windows environment. Windows for Workgroups and Windows-based
	applications can use the information stored in these files to
	configure themselves to meet your needs and preferences.
	
	There are two standard Windows initialization files:
	
	- WIN.INI, which primarily contains settings that Windows maintains
	  to customize your Windows environment according to your
	  preferences.
	
	- SYSTEM.INI, which primarily contains settings that customize
	  Windows to meet your system's hardware needs.
	
	This document describes only a few of the settings in the WIN.INI
	file. You can get a more complete listing of the WIN.INI settings by
	purchasing the Windows for Workgroups Resource Kit for the Microsoft
	Windows Operating System Version 3.1. The Windows for Workgroups
	Resource Kit provides complete technical information about Windows for
	Workgroups for the support professional. It includes a technical
	reference manual and a disk containing helpful utilities, system-
	resource viewers, drivers, and accessories.
	
	To order the Windows for Workgroups Resource Kit within the United
	States, call (800) 642-7676.
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	Format of the WIN.INI File
	--------------------------
	
	The WIN.INI file contains several sections, each of which consists of
	a group of related settings. The sections and settings are listed in
	the WIN.INI file in the following format:
	
	  [section name]
	  keyname=value
	
	In this example, [section name] is the name of a section. The square
	brackets ([ ]) are required, and the left bracket must be in the
	leftmost column on the screen.
	
	The keyname=value statement defines the value of each setting. A
	keyname is the name of a setting. It can consist of any combination of
	letters and digits in uppercase or lowercase, and it must be followed
	immediately by an equal sign (=). The value can be an integer, a
	string, or a string enclosed in quotation marks, depending on the
	setting.
	
	You can include comments in initialization files. You must begin each
	line of a comment with a semicolon (;).
	
	Updating WIN.INI from Previous Versions of Windows
	--------------------------------------------------
	
	If you update your system to Windows for Workgroups version 3.1 from
	Windows version 3.0, Setup automatically updates your WIN.INI file by
	making the following changes. For detailed information about these
	settings, refer to the Windows for Workgroups Resource Kit.
	
	In the [windows] section, Setup adds three new settings:
	
	  KeyboardDelay=
	  ScreenSaverTimeout=
	  DosPrint=
	
	If the following settings are already present in the 3.0 version of
	the WIN.INI file, Setup does not change them. If they are not present,
	Setup adds them:
	
	  Device=
	  Documents=
	  Programs=com exe bat pif
	
	In the [extensions] section, Setup adds one new setting:
	
	  bmp=pbrush.exe ^.bmp
	
	Setup adds two other settings to the [extensions] section, if they are
	not already present in the 3.0 version of the WIN.INI file:
	
	  pcx=pbrush.exe ^.pcx
	  rec=recorder.exe ^.rec
	
	In the [ports] section, Setup adds:
	
	  LPT1.DOS
	  LPT2.DOS
	
	Setup adds three other settings to the [ports] section, if they are
	not already present in the 3.0 version of WIN.INI:
	
	  FILE:
	  COM3:=9600,n,8,1,x
	  COM4:=9600,n,8,1,x
	
	Setup adds the following section and settings to support TrueType
	fonts:
	
	  [FontSubstitutes]
	  Helv=MS Sans Serif
	  Tms Rmn=MS Serif
	  Times=Times New Roman
	  Helvetica=Arial
	
	Setup adds the following sections and settings to support multimedia:
	
	  [mci extensions]
	  wav=waveaudio
	  mid=sequencer
	  rmi=sequencer
	
	Setup adds the following sections and settings to support sound:
	
	  [sounds]
	  SystemDefault=ding.wav, Default Beep
	  SystemExclamation=chord.wav, Exclamation
	  SystemStart=tada.wav, Windows Start
	  SystemExit=chimes.wav, Windows Exit
	  SystemHand=chord.wav, Critical Stop
	  SystemQuestion=chord.wav, Question
	  SystemAsterisk=chord.wav, Asterisk
	
	Setup adds the following section and settings to support object
	linking and embedding:
	
	  [embedding]
	  SoundRec=Sound,Sound,SoundRec.exe,picture
	  Package=Package,Package,packager.exe,picture
	  PBrush=Paintbrush Picture,Paintbrush Picture,pbrush.exe,picture
	
	Setup also makes additional changes, depending on the applications and
	devices installed on your system.
	
	How to Read this Document
	-------------------------
	
	In this document, WIN.INI settings are listed alphabetically within
	sections. However, the settings do not appear alphabetically in the
	WIN.INI file. To change a setting, you need to search for it within
	the appropriate section.
	
	This document lists the syntax, default value, purpose, and
	recommended method for changing each setting, using the following
	format.
	
	SettingName=<value-type>
	
	Default:   The Windows default value for this setting.
	
	Purpose:   This paragraph briefly describes the function of the setting
	               and its default value (if applicable).
	
	To change: Describes the recommended method for changing the value
	               of this setting.
	
	<value-type> indicates whether the value should be an integer, a
	letter, a range of numbers, or something else.
	
	Changing Settings
	-----------------
	
	When the Setup program creates the WIN.INI file, it assigns default
	values to the settings. Some settings that are listed in this document
	may not appear in your WIN.INI file.
	
	There are two ways to change WIN.INI settings:
	
	- You can use Control Panel to change most settings. This is the
	  safest and most recommended way because there is no need to open
	  and edit the WIN.INI file, where it is easier to make mistakes. For
	  more information about Control Panel, see Chapter 9, "Customizing
	  Windows for Workgroups," in the Microsoft Windows for Workgroups
	  User's Guide.
	
	- You can use a text editor, such as Notepad, to edit the WIN.INI
	  file directly. (Do not use a formatting editor, such as Write; it
	  can corrupt your WIN.INI file.) You must use this method to change
	  the settings that you cannot change by using Control Panel. After
	  you have edited the WIN.INI file, you must restart Windows for
	  Workgroups for the settings to take effect. For more information
	  about Notepad, see Help for Notepad.
	
	Caution: Always back up your WIN.INI file before you make changes, so
	that you can restore the original file in case you accidentally damage
	the WIN.INI file or make changes that cause problems when running
	Windows for Workgroups. It is recommended that you do not change any
	settings that are not described in this document. However, if you need
	to change additional settings, refer to the Windows for Workgroups
	Resource Kit. Be careful when using a text editor to edit the WIN.INI
	file. Incorrect changes to WIN.INI can cause unexpected results when
	you run Windows for Workgroups.
	
	[windows] Section Settings
	==========================
	
	The [windows] section contains settings that affect general areas of
	your Windows environment, such as which applications run when you
	start Windows for Workgroups and how information appears on your
	screen.
	
	The [windows] section can contain the following settings.
	
	DoubleClickHeight=<pixels>
	
	Default:   4
	
	Purpose:   Specifies the height (in pixels) that the mouse
	               pointer can move between clicks when you double-click.
	               If the mouse pointer is moved further up or down, the
	               two clicks are treated as separate single clicks. For
	               example, if DoubleClickHeight=10, the mouse pointer
	               cannot move vertically more than 5 pixels between
	               clicks in order for the two clicks to be recognized as
	               a double-click. If you use an odd number, it is
	               rounded up to the nearest even number. This setting is
	               helpful if you are using a pen-tablet pointing device.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	DoubleClickWidth=<pixels>
	
	Default:   4
	
	Purpose:   Specifies the width (in pixels) that the mouse pointer can
	               move between clicks when you double-click. If the
	               mouse pointer is moved further right or left, the two
	               clicks are treated as separate single clicks. For
	               example, if DoubleClickWidth=10, the mouse pointer
	               cannot move horizontally more than 5 pixels between
	               clicks in order for the two clicks to be recognized as
	               a double-click. If you use an odd number, it is
	               rounded up to the nearest even number. This setting is
	               helpful if you are using a pen-tablet pointing device.
	
	To change:    Use Notepad to edit the WIN.INI file.
	
	Load=<filename(s)>
	
	Default:   None
	
	Purpose:   Specifies one or more applications to run as icons when
	               Windows for Workgroups is started. This value is a
	               list of one or more filenames of applications, or
	               documents that are associated with an application,
	               each separated by a space. Specify the complete path
	               if the application or document is not located in the
	               Windows directory.
	
	To change:    Add the application to the StartUp group in Program
	               Manager, and then select the Minimize On Use check box
	               in the Properties dialog box.
	
	MenuDropAlignment=<0-or-1>
	
	Default:   0
	
	Purpose:   Specifies whether menus open right-aligned or left-aligned
	               with the menu title. If this setting is 0, menus open
	               so that they are left-aligned. If it is 1, menus open
	               so that they are right-aligned.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	MenuShowDelay=<milliseconds>
	
	Default:   0 for 80386 computers; 400 for 80286 computers
	
	Purpose:   Specifies how long Windows waits before displaying a
	               cascading menu.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	Programs=<extensions>
	
	Default:   com exe bat pif
	
	Purpose:   Defines which files Windows considers applications. A
	               filename extension is separated by a space and does
	               not include the preceding period.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	Run=<filename(s)>
	
	Default:   None
	
	Purpose:   Causes Windows for Workgroups to run one or more specified
	               applications when it is started. The value is a list
	               of one or more filenames of applications, or documents
	               associated with applications, each separated by a
	               space. Specify the complete path if the application or
	               document is not located in the Windows directory.
	
	To change: Add the application to the StartUp group in Program
	               Manager.
	
	[desktop] Section Settings
	==========================
	
	The [desktop] section contains optional settings that control the
	appearance of the screen background (desktop) and the positioning of
	windows and icons on the screen. Most of these settings (which are not
	listed in this document) can be changed by using Control Panel. The
	following setting must be changed by editing the WIN.INI file.
	
	IconVerticalSpacing=<pixels>
	
	Default:   Windows determines the default value based on the icon title
	               font and the display adapter you are using.
	
	Purpose:   Specifies the number of pixels that appear vertically
	               between icons. Increasing this number increases the
	               amount of vertical space between icons.
	
	[fonts] Section Settings
	========================
	
	The [fonts] section describes one or more font files that are loaded
	when Windows for Workgroups is started.
	
	The [fonts] section can contain one or more occurrences of the
	following setting.
	
	<font-name>=<font-file>
	
	Purpose:   Specifies a font file. The <font-name> keyname is the
	               descriptive name of a font. The <font-file> value is
	               the filename of a file that contains font resources.
	
	To change: In the Control Panel window, choose the Fonts icon.
	
	[mci extensions] Section Settings
	=================================
	
	The [mci extensions] section contains settings that associate
	different types of media files with different Media Control Interface
	(MCI) device drivers. Whenever a media file is selected, Windows uses
	the associated driver to play it.
	
	The [mci extensions] section can contain one or more occurrences of
	the following setting.
	
	<extension>=<mci-device-type>
	
	Purpose:   Associates files that have the specified extension with the
	               specified MCI device driver. Windows uses the
	               specified driver to play the media file associated
	               with it.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	[Windows Help] Section Settings
	===============================
	
	The [Windows Help] section includes settings that specify the size and
	placement of the Help window and dialog boxes, in addition to the
	color of text that, when chosen, displays a macro, pop-up window, or
	new Help window.
	
	The [Windows Help] section can include the following settings.
	
	JumpColor=<red-value> <green-value> <blue-value>
	
	Purpose:   Specifies the color of text that, when chosen, leads to a
	               new window of Help information. For example,
	               specifying 000 000 000 as values results in black text
	               on a white background.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	Note: If no PopupColor value is specified, the JumpColor also applies
	to text that, when chosen, displays a pop-up window.
	
	PopupColor=<red-value> <green-value> <blue-value>
	
	Purpose:   Specifies the color of text that, when chosen, displays a
	               pop-up window (the type of window used for glossary
	               definitions). For example, specifying 000 000 000 as
	               values results in black text on a white background.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	MacroColor=<red-value> <green-value> <blue-value>
	
	Purpose:   Specifies the color of text that, when chosen, runs a
	               Help macro.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	IFJumpColor=<red-value> <green-value> <blue-value>
	
	Purpose:   Specifies the color of text that, when chosen, leads to a
	               new window of Help information, located in a different
	               Help file.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	IFPopupColor=<red-value> <green-value> <blue-value>
	
	Purpose:   Specifies the color of text that, when chosen, displays a
	               pop-up window (the type of window used for glossary
	               definitions), located in a different Help file.
	
	To change: Use Notepad to edit the WIN.INI file.
	
	Additional query words: 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
