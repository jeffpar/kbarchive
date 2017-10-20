---
layout: page
title: "Q58340: Contents of Windows 3.0 SYSINI.TXT"
permalink: /kb/058/Q58340/
---

## Q58340: Contents of Windows 3.0 SYSINI.TXT

{% raw %}

	Article: Q58340
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	SYSINI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	SYSINI.TXT ON-LINE DOCUMENT
	===========================
	
	Introduction
	------------
	
	SYSTEM.INI is one of two Windows initialization files that are included
	with Windows. Windows initialization files contain information that
	defines your Windows environment. Windows and applications can use the
	information stored in these files to configure themselves to meet your
	needs and preferences.
	
	There are two standard Windows initialization files:
	
	* SYSTEM.INI, which primarily contains settings that allow you to
	 customize Windows to meet your system's hardware needs
	
	* WIN.INI, which primarily contains settings that allow you to alter
	 your Windows environment according to your preferences
	
	This document describes the contents of the SYSTEM.INI file and how
	you can alter them.
	
	For information on the WIN.INI file, see the WININI.TXT file.
	
	Format
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
	
	How to Read Listings in This Document
	-------------------------------------
	
	In this document, settings in SYSTEM.INI are listed alphabetically
	within the sections that contain them. These sections are listed in
	the following order:
	
	  [boot]
	  [keyboard]
	  [NonWindowsApp]
	  [standard]
	  [386enh]
	
	The settings will not appear alphabetically in the SYSTEM.INI file. If
	you want to change a setting, you will have to search for the setting
	in the appropriate section. Many of the settings explained in this
	file are rarely needed and will not appear in your SYSTEM.INI file
	unless you add them yourself.
	
	The syntax, purpose, and recommended method for changing each setting
	appears in the following format:
	
	------------------------------------------------------------
	SettingName=<value-type>
	Purpose: This paragraph briefly describes the function of the setting
	        and its default value (if applicable).
	Can change by: This sentence states the recommended method for
	        changing the value of this setting.
	------------------------------------------------------------
	
	The <value-type> indicates whether the value should be a number, a
	letter, a range of numbers, Boolean, or something else. For more
	information on Boolean values, see "Acceptable Boolean Values," later
	in this document.
	
	Changing Settings
	-----------------
	
	Windows created the SYSTEM.INI files when you installed Windows. Many
	of the settings contained in this file were set to default values
	defined by Windows.
	
	It may be necessary to change one or more of these values in order to
	improve the performance of Windows or an application with your system.
	
	Most of the values in SYSTEM.INI can be changed only by opening
	SYSTEM.INI and editing it using a text editor, such as Notepad. For
	more information on how to use Notepad, see Chapter 10, "Additional
	Accessories," in the User's Guide.
	
	CAUTION: You should use extreme care when making changes to your
	SYSTEM.INI file using a text editor. You can disable your system if
	you incorrectly edit these files. The listings in this document
	indicate which settings can be changed without opening SYSTEM.INI. Use
	the recommended method whenever possible.
	
	Acceptable Boolean Values
	-------------------------
	
	Several settings in the [386enh] section of SYSTEM.INI are Boolean.
	There are several ways you can enter the value to indicate whether the
	setting is to be enabled or disabled.
	
	If you want the setting to be enabled, you can enter:
	
	  * true
	  * yes
	  * on
	  * 1
	
	If you want the setting to be disabled, you can type:
	
	  * false
	  * no
	  * off
	  * 0
	
	Except for 1 and 0 (zero), these values are not case sensitive.
	
	What Is in SYSTEM.INI?
	----------------------
	
	The SYSTEM.INI file contains global system information that Windows
	uses when it is started. Generally, you cannot change these settings
	through Control Panel. Any changes to the file do not affect Windows
	until you restart Windows.
	
	The following sections can appear in SYSTEM.INI:
	
	  Section           Purpose
	  -------           -------
	
	  [boot]            Lists drivers and Windows modules.
	
	  [keyboard]        Contains information about the keyboard.
	
	  [NonWindowsApp]   Contains information used by non-Windows
	                    applications.
	
	  [standard]        Contains information used by Windows in standard
	                    mode.
	
	  [386enh]          Contains information used by Windows in 386
	                    enhanced mode.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
