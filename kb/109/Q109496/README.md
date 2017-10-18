---
layout: page
title: "Q109496: WININI.WRI from Windows for Workgroups 3.11"
permalink: kb/109/Q109496/
---

## Q109496: WININI.WRI from Windows for Workgroups 3.11

	Article: Q109496
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 WININI.WRI.
	
	MORE INFORMATION
	================
	
	WIN.INI File Settings
	__________________________________________________________
	Windows initialization files contain information that defines your
	Windows environment. Windows for Workgroups and Windows-based
	applications can use the information stored in these files to make
	their configurations meet your needs and preferences.
	
	There are two standard Windows initialization files:
	
	<B7>  WIN.INI, which primarily contains settings that Windows maintains
	  to customize your Windows environment according to your preferences.
	
	<B7>  SYSTEM.INI, which primarily contains settings that customize
	  Windows to meet your system's hardware needs.
	
	This document describes only a few of the settings in the WIN.INI
	file. You can get a more complete listing of the WIN.INI settings by
	purchasing the Windows for Workgroups Resource Kit. The Windows for
	Workgroups Resource Kit provides complete technical information about
	Windows for Workgroups for the support professional. It includes a
	technical reference manual and a disk containing helpful utilities,
	system-resource viewers, drivers, and accessories.
	
	To order the Windows for Workgroups Resource Kit within the United
	States, dial:
	
	1-800-642-7676
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	Format of the WIN.INI File
	
	The WIN.INI file contains several sections, each of which consists of
	a group of related settings. The sections and settings are listed in
	the WIN.INI file in the following format:
	
	 [section name]
	 keyname=value
	
	In this example, [section name] is the name of a section. The
	enclosing brackets ([ ]) are required, and the left bracket must be
	in the leftmost column on the screen.
	
	The keyname=value statement defines the value of each setting. A
	keyname is the name of a setting. It can consist of any combination
	of letters and digits in uppercase or lowercase, and it must be
	followed immediately by an equal sign (=). The value can be an
	integer, a string, or a quoted string, depending on the setting.
	
	You can include comments in initialization files. You must begin each
	line of a comment with a semicolon (;).
	
	How to Read the Listings in This Document
	
	In this document, WIN.INI file settings are listed alphabetically
	within each section. However, the settings do not appear
	alphabetically in the WIN.INI file. To change a setting, you need to
	search for it within the appropriate section of the WIN.INI file.
	
	This document lists the syntax, default value, purpose, and
	recommended method for changing each setting, using the following
	format.
	____________________________________________________________
	SettingName=<value-type>
	
	Default:     The Windows default value for this setting.
	Purpose:     The function of the setting and its default value (if
	applicable).
	To change:     The recommended method for changing the value of this
	setting.
	
	<value-type> indicates whether the value should be an integer, a
	letter, a range of numbers, or something else.
	____________________________________________________________
	
	Changing Settings
	
	When the Setup program creates the WIN.INI file, it assigns default
	values to the settings. Some settings that are listed in this
	document may not appear in your WIN.INI file.
	
	There are two ways to change WIN.INI settings:
	
	- You can use Control Panel to change most settings. This is the
	  safest and most recommended way because there is no need to open and
	  edit the WIN.INI file, where it is easier to make mistakes. For more
	  information about Control Panel, see Help for Control Panel.
	
	- You can use a text editor, such as Notepad, to edit the WIN.INI
	  file directly. (Do not use a formatting editor, such as Write; it can
	  corrupt your WIN.INI file.) You must use this method to change the
	  settings that you cannot change by using Control Panel. After you
	  have edited the WIN.INI file, you must restart Windows for Workgroups
	  for the settings to take effect. For more information about Notepad,
	  see Help for Notepad.
	
	Caution:  Always back up your WIN.INI file before you make changes,
	so that you can restore the original file in case you accidentally
	damage the WIN.INI file or make changes that cause problems when
	running Windows for Workgroups. It is recommended that you do not
	change any settings that are not described in this document. However,
	if you need to change additional settings, refer to the Windows for
	Workgroups Resource Kit. Be careful when using a text editor to edit
	the WIN.INI file. Incorrect changes to the WIN.INI file can cause
	unexpected results when you run Windows for Workgroups.
	
	[windows] Section Settings
	
	The [windows] section contains settings that affect general areas of
	your Windows environment, such as which applications run when you
	start Windows for Workgroups and how information appears on your
	screen.
	
	The [windows] section can contain the following settings:
	____________________________________________________________
	DoubleClickHeight=<pixels>
	
	Default:     4
	Purpose:     Specifies the height (in pixels) that the mouse
	pointer can move between clicks when you double-click. If the mouse
	pointer is moved further up or down, the two clicks are treated as
	separate single clicks. For example, if DoubleClickHeight=10, the
	mouse pointer cannot move vertically more than 5 pixels between
	clicks in order for the two clicks to be recognized as a
	double-click. If you use an odd number, it is rounded up to the
	nearest even number. This setting is helpful if you are using a
	pen-tablet pointing device.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	DoubleClickWidth=<pixels>
	
	Default:     4
	Purpose:     Specifies the width (in pixels) that the mouse
	pointer can move between clicks when you double-click. If the mouse
	pointer is moved further right or left, the two clicks are treated as
	separate single clicks. For example, if DoubleClickWidth=10, the
	mouse pointer cannot move horizontally more than 5 pixels between
	clicks in order for the two clicks to be recognized as a
	double-click. If you use an odd number, it is rounded up to the
	nearest even number. This setting is helpful if you are using a
	pen-tablet pointing device.
	To change:      Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	Load=<filename(s)>
	
	Default:     None
	Purpose:     Specifies one or more applications to run as icons
	when Windows for Workgroups is started. This value is a list of one
	or more filenames of applications, or documents that are associated
	with an application, each separated by a space. Specify the complete
	path if the application or document is not located in the Windows
	directory. This setting works like the StartUp group in Program
	Manager, but adding an icon to the StartUp group does not change this
	setting.
	To change:      Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	MenuDropAlignment=<0-or-1>
	
	Default:     0
	Purpose:     Specifies whether menus open right-aligned or
	left-aligned with the menu title. If this setting is 0, menus open so
	that they are left-aligned. If it is 1, menus open so that they are
	right-aligned.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	MenuShowDelay=<milliseconds>
	
	Default:     0 for 80386 computers; 400 for 80286 computers
	Purpose:     Specifies how long Windows waits before displaying a
	cascading menu.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	Programs=<extensions>
	
	Default:     com exe bat pif
	Purpose:     Defines which files Windows considers applications. A
	filename extension is separated by a space and does not include the
	preceding period.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	Run=<filename(s)>
	
	Default:     None
	Purpose:     Causes Windows for Workgroups to run one or more
	specified applications when it is started. The value is a list of one
	or more filenames of applications, or documents associated with
	applications, each separated by a space. Specify the complete path if
	the application or document is not located in the Windows directory.
	This setting works like the StartUp group in Program Manager, but
	adding an icon to the StartUp group does not change this setting.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	
	[desktop] Section Settings
	
	The [desktop] section contains optional settings that control the
	appearance of the screen background (desktop) and the positioning of
	windows and icons on the screen. Most of these settings (which are
	not listed in this document) can be changed by using Control Panel,
	except the following setting:
	____________________________________________________________
	IconVerticalSpacing=<pixels>
	
	Default:     Windows determines the default value based on the
	icon title font and the display adapter you are using.
	Purpose:     Specifies the number of pixels that appear vertically
	between icons. Increasing this number increases the amount of
	vertical space between icons.
	To change:   Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	
	[fonts] Section Settings
	
	The [fonts] section describes one or more font files that are loaded
	when Windows for Workgroups is started.
	
	The [fonts] section can contain one or more occurrences of the
	following setting:
	____________________________________________________________
	<font-name>=<font-file>
	
	Default:
	Purpose:     Specifies a font file. The <font-name> keyname is the
	descriptive name of a font. The <font-file> value is the filename of
	a file that contains font resources.
	To change:     From Control Panel, choose the Fonts icon.
	____________________________________________________________
	
	[mci extensions] Section Settings
	
	The [mci extensions] section contains settings that associate
	different types of media files with different Media Control Interface
	(MCI) device drivers. Whenever a media file is selected, Windows uses
	the associated driver to play it.
	
	The [mci extensions] section can contain one or more occurrences of
	the following setting:
	____________________________________________________________
	<extension>=<mci-device-type>
	
	Purpose:     Associates files that have the specified extension
	with the specified MCI device driver. Windows uses the specified
	driver to play the media file associated with it.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	
	[WinPopup] Section Settings
	
	The [WinPopup] section includes settings that specify the
	characteristics of a popup message.
	
	The [WinPopup] section can include the following settings:
	____________________________________________________________
	Sound=<0-or-1>
	
	Default:1
	Purpose:Specifies whether a sound is played when a new message arrives.
	To change:     From the Messages menu in WinPopup, choose Options.
	____________________________________________________________
	AlwaysOnTop=<0-or-1>
	
	Default:0
	Purpose:Specifies whether a message always appears on top of all open
	windows.
	To change:     From the Messages menu in WinPopup, choose Options.
	____________________________________________________________
	MaxOnMsgRcv=<0-or-1>
	
	Default:0
	Purpose:Specifies whether the WinPopup dialog box opens to display a
	new message when the message arrives.
	To change:     From the Messages menu in WinPopup, choose Options.
	____________________________________________________________
	MultiUserWarn=<0-or-1>
	
	Default:     1
	Purpose:Specifies whether WinPopup displays a warning message if you
	try to log on to more than one machine with the same logon name. If
	this setting is 1, then when you log on to a second machine with the
	same username, WinPopup displays a warning on the second machine.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	
	[Windows Help] Section Settings
	
	The [Windows Help] section includes settings that specify the size
	and placement of the Help window and dialog boxes, in addition to the
	color of text that, when chosen, displays a macro, pop-up window, or
	new Help window.
	
	The [Windows Help] section can include the following settings:
	____________________________________________________________
	JumpColor=<red-value> <green-value> <blue-value>
	
	Default:     0,128,0
	Purpose:     Specifies the color of text that, when chosen, leads
	to a new window of Help information. For example, specifying 000 000
	000 as values results in black text on a white background.
	To change:     Use Notepad to edit the WIN.INI file.
	
	Note: If no PopupColor value is specified, the JumpColor setting also
	applies to text that, when chosen, displays a pop-up window.
	____________________________________________________________
	PopupColor=<red-value> <green-value> <blue-value>
	
	Default:     JumpColor
	Purpose:     Specifies the color of text that, when chosen,
	displays a pop-up window (the type of window used for glossary
	definitions). For example, specifying 000 000 000 as values results
	in black text on a white background.
	To change:     Use Notepad to edit the WIN.INI file.
	___________________________________________________________
	MacroColor=<red-value> <green-value> <blue-value>
	
	Default:     JumpColor
	Purpose:     Specifies the color of text that, when chosen, runs a
	Help macro.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	IFJumpColor=<red-value> <green-value> <blue-value>
	
	Default:     JumpColor
	Purpose:     Specifies the color of text that, when chosen, leads
	to a new window of Help information, located in a different Help
	file.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	IFPopupColor=<red-value> <green-value> <blue-value>
	
	Default:     PopupColor
	Purpose:     Specifies the color of text that, when chosen,
	displays a pop-up window (the type of window used for glossary
	definitions), located in a different Help file.
	To change:     Use Notepad to edit the WIN.INI file.
	____________________________________________________________
	
	[WinSetup] Section Settings
	
	The [WinSetup] section includes settings used by Windows Setup.
	
	The [WinSetup] section can include the following setting:
	____________________________________________________________
	Source_Disk_Path=<path>
	
	Default:     A:\ 
	Purpose:     Specifies the path where Windows for Workgroups files
	were located when you installed Windows for Workgroups.
	To change:     Use Notepad to edit the WIN.INI file.
	
	____________________________________________________________
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
