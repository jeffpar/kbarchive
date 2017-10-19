---
layout: page
title: "Q58331: Contents of Windows 3.0 WININI.TXT"
permalink: /kb/058/Q58331/
---

## Q58331: Contents of Windows 3.0 WININI.TXT

	Article: Q58331
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows 3.0 WININI.TXT
	README file. The Windows Setup program copies this file to the Windows
	directory.
	
	MORE INFORMATION
	================
	
	                    WININI.TXT Online Document
	                    --------------------------
	
	INTRODUCTION
	------------
	
	WIN.INI is one of two Windows initialization files that are included
	with Windows. Windows initialization files contain information that
	defines your Windows environment. Windows and applications can use the
	information stored in these files to configure themselves to meet your
	needs and preferences.
	
	There are two standard Windows initialization files:
	
	* WIN.INI, which primarily contains settings that allow you to alter
	 your Windows environment according to your preferences.
	
	* SYSTEM.INI, which primarily contains settings that allow you to
	 customize Windows to meet your system's hardware needs.
	
	This document describes the contents of the WIN.INI file and how you
	can alter it.
	
	For information on the SYSTEM.INI file, see the SYSINI.TXT file.
	
	FORMAT
	------
	
	Windows initialization files have the following format:
	
	  [section name]
	  keyname=value
	
	In this example, [section name] is the name of a section. Sections are
	used to break settings into logical groups. The enclosing brackets
	([]) are required.
	
	The keyname=value statement defines the value of each setting. A
	keyname is the name of a setting. It can consist of any combination of
	letters and digits, and must be followed immediately by an equal sign
	(=). A value is the setting's value. It can be an integer, a string,
	or a quoted string, depending on the setting.
	
	HOW TO READ LISTINGS IN THIS DOCUMENT
	-------------------------------------
	
	In this document, WIN.INI settings are listed alphabetically within
	the sections that contain them. These sections are listed in the
	following order:
	
	  [windows]
	  [desktop]
	  [extensions]
	  [ports]
	  [fonts]
	  [colors]
	  [intl]
	  [PrinterPorts]
	  [devices]
	
	The settings do not appear alphabetically in WIN.INI. If you want to
	change a setting, you will have to search for it within the
	appropriate section.
	
	The syntax, purpose, and recommended method for changing each setting
	appears in the following format:
	
	SettingName=<value-type>
	------------------------
	
	Purpose:   This paragraph briefly describes the function of the setting
	          and its default value (if applicable).
	
	To change: This sentence states the recommended method for changing
	          the value of this setting.
	
	The <value-type> indicates whether the value should be a number, a
	letter, a range of numbers, or something else.
	
	CHANGING SETTINGS
	-----------------
	
	Windows created the WIN.INI file when you installed Windows. All of
	the settings contained in these files were set to default values
	defined by Windows.
	
	You may want to change one or more of these values in order to change
	the appearance or performance of Windows to suit your needs.
	
	There are two ways to change WIN.INI settings:
	
	* You can use Control Panel to change most settings.
	
	* Use a text editor such as Notepad to directly edit the files.
	
	Most settings in WIN.INI can be changed by using Control Panel. This
	method allows you to avoid opening these files as text files, where it
	is easier to make mistakes.
	
	For more information on Control Panel, see Chapter 5, "Control Panel,"
	in the User's Guide.
	
	Some changes cannot be made using Control Panel. For these changes,
	you must open the WIN.INI file and edit it using a text editor, such
	as Notepad. For more information on how to use Notepad, see Chapter
	10, "Additional Accessories," in the User's Guide.
	
	CAUTION: You should use care when making changes to your WIN.INI file
	using a text editor. Incorrect changes to WIN.INI can lead to
	unexpected results when you run Windows. The listings in this document
	indicate which settings can be changed using Control Panel. Use this
	method whenever possible.
	
	UPDATING WIN.INI FROM PREVIOUS VERSIONS OF WINDOWS
	--------------------------------------------------
	
	If you update your system to Windows Version 3.00 from Windows
	Versions 2.x, Setup will automatically update your WIN.INI file by
	making the following changes:
	
	In the [windows] section, Setup will add one setting
	
	  Documents=
	
	and will unset another setting:
	
	  Device=
	
	In the [extensions] section, Setup will add two settings:
	
	  pcx=pbrush.exe ^.pcx
	  rec=recorder.exe ^.rec
	
	In the [devices] section, Setup will remove all entries. The previous
	drivers, fonts and other resources will remain in your system. But,
	Setup will ask you whether you want to upgrade to the new driver or
	stay with the previous one.
	
	All other sections are left unchanged.
	
	If you are updating to Windows Version 3.00 from Windows Versions 1.x,
	your WIN.INI file will not be automatically updated.
	
	WHAT IS IN WIN.INI?
	-------------------
	
	The settings in the WIN.INI file allow you to personalize your Windows
	environment. WIN.INI contains several sections, each of which consists
	of a group of related settings. Your WIN.INI file may not have all of
	these sections, or it might have additional sections. This depends on
	your system's hardware and software requirements. The following
	sections can appear in WIN.INI:
	
	This Section               Does This
	------------               ---------
	
	[windows]                  Affects an assortment of elements in your
	                          Windows environment.
	
	[desktop]                  Controls the appearance of the screen
	                          background (desktop) and the positioning of
	                          windows and icons.
	
	[extensions]               Associates specified types of files with
	                          corresponding applications.
	
	[ports]                    Lists all available communications ports.
	
	[fonts]                    Describes the font files that are loaded by
	                          Windows.
	
	[colors]                   Defines colors for parts of the Windows
	                          display.
	
	[intl]                     Describes how to display items for
	                          countries other than the United States.
	
	[PrinterPorts]             Lists active and inactive output devices
	                          that can be accessed by Windows.
	
	[devices]                  Lists active output devices that can be
	                          accessed by Windows.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
