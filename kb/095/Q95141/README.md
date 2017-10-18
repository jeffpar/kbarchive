---
layout: page
title: "Q95141: Dvorak Keyboard Layouts"
permalink: kb/095/Q95141/
---

## Q95141: Dvorak Keyboard Layouts

	Article: Q95141
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11; Win2000:3.1,3.11,95; winnt:3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbenable kbfile win31 msdos win95 kbEnableSight kbEnableMove kbgraphxlinkcritical
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The downloadable Ga0650.exe file contains Dvorak keyboard layouts that make the
	most frequently typed characters on a keyboard more accessible to people who
	have difficulty using the standard "QWERTY" layout.
	
	There are three Dvorak layouts: one for two-handed users, one for people who type
	only with their left hand, and one for people who type only with their right
	hand. The left- or right-hand keyboard layouts can also be used by people who
	type with a wand.
	
	NOTE: The single-handed layouts are designed for computers that use Intel
	x86-based processors, and are not compatible with MIPS or other non-Intel- based
	computers running Windows NT.
	
	MORE INFORMATION
	================
	
	THE TEXT OF GA0650
	------------------
	
	======================================================================
	 Microsoft(R) Product Support Services Application Note (Text File)
	
	                   GA0650: DVORAK KEYBOARD LAYOUTS
	
	======================================================================
	
	                                                  Revision Date: 3/96
	
	The following information applies to Microsoft MS-DOS(R), Windows(R), Windows for
	Workgroups, Windows NT(R), and Windows 95 (see below for version numbers).
	
	--------------------------------------------------------------------
	| INFORMATION PROVIDED IN THIS DOCUMENT AND ANY SOFTWARE THAT MAY    |
	| ACCOMPANY THIS DOCUMENT (collectively referred to as an            |
	| Application Note) IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY      |
	| KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO    |
	| THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A     |
	| PARTICULAR PURPOSE. The user assumes the entire risk as to the     |
	| accuracy and the use of this Application Note. This Application    |
	| Note may be copied and distributed subject to the following        |
	| conditions: 1) All text must be copied without modification and    |
	| all pages must be included; 2) If software is included, all files  |
	| on the disk(s) must be copied without modification [the MS-DOS     |
	| utility DISKCOPY is appropriate for this purpose]; 3) All          |
	| components of this Application Note must be distributed together;  |
	| and 4) This Application Note may not be distributed for profit.    |
	|                                                                    |
	| Copyright 1996 Microsoft Corporation. All Rights Reserved.         |
	| Microsoft, MS-DOS, Windows, and Windows NT are registered          |
	| trademarks of Microsoft Corporation.                               |
	|                                                                    |
	| Intel is a registered trademark of Intel Corporation.              |
	| This document was created using Word for Windows.                  |
	--------------------------------------------------------------------
	
	This Application Note applies to MS-DOS 5.0, 6.0, 6.2, 6.21, or 6.22, Windows
	3.1, Windows for Workgroups 3.1 or 3.11, Windows NT 3.1, 3.5, or 3.51, and
	Microsoft Windows 95.
	
	INTRODUCTION
	------------
	
	Microsoft distributes Dvorak keyboard layouts that make the most frequently typed
	characters on a keyboard more accessible to people who have difficulty using the
	standard "QWERTY" layout. There are three Dvorak layouts: one for two-handed
	users, one for people who type only with their left hand, and one for people who
	type only with their right hand. The left- or right-hand keyboard layouts can
	also be used by people who type with a wand.
	
	The enclosed disk includes files that provide new keyboard layouts for Microsoft
	MS-DOS 5.0, 6.0, 6.2, 6.21, or 6.22, Windows 3.1, Windows for Workgroups 3.1 or
	3.11, Windows NT 3.1, 3.5, or 3.51, and Microsoft Windows 95.
	
	This application note explains how to install these layouts and restore your
	original layout. It also provides illustrations of the layouts.
	
	WHAT IS A KEYBOARD LAYOUT?
	--------------------------
	
	A keyboard layout is a map or a definition of how keys are laid out on your
	keyboard. The keyboard layout you use is determined by software in your
	computer. The letters on your keys indicate the standard layout for your
	keyboard. There are many different keyboard layouts in use throughout the world.
	The one you ordinarily use depends on the country you are in or the language you
	use.
	
	Dvorak Keyboard Layouts
	-----------------------
	
	Dvorak keyboard layouts are based on designs created by Dr. August Dvorak, a
	professor at the University of Washington during the 1930s and 1940s. Dr. Dvorak
	studied the way people type standard English, and determined the most common
	letter combinations. He then designed new keyboard layouts to speed up typing
	and reduce fatigue. These layouts, now called Dvorak or simplified keyboard
	layouts, were initially developed for two-handed typists. Following World War
	II, Dvorak layouts were developed for typists who use the right or left hand
	alone.
	
	INSTALLING A DVORAK KEYBOARD LAYOUT FOR MS-DOS
	----------------------------------------------
	
	This Application Note provides the Dvorak.sys file. This file supports the Dvorak
	keyboard layouts for two-handed and single-handed typists who use MS-DOS 5.0,
	6.0, 6.2, 6.21, or 6.22.
	
	To Install a United States (U.S.) Dvorak Keyboard Layout for MS-DOS
	-------------------------------------------------------------------
	
	1. If you received a disk with this Application Note, insert the disk in the
	  appropriate floppy disk drive.
	
	  If you downloaded this Application Note from an online service, skip to step
	  2. This procedure assumes that you have already downloaded and extracted the
	  compressed file.
	
	2. Copy the Dvorak.sys file from the GA0650 disk or from the folder containing
	  the file you downloaded from an online service to your MS-DOS directory by
	  typing the following command at the MS-DOS command prompt and pressing
	  ENTER:
	
	  "copy <drive>:\dvorak.sys <destination>" (without the quotation
	  marks)
	
	  where <drive> is the floppy disk drive containing the GA0650 disk or the
	  folder containing the file you downloaded from an online service and
	  <destination> is the drive and directory where your MS-DOS files
	  reside. For example, if you inserted the GA0650 disk in drive A and your
	  MS-DOS directory is called DOS and is on drive C, type the following line at
	  the MS-DOS command prompt and press ENTER:
	
	  "copy a:\dvorak.sys c:\dos\dvorak.sys" (without the quotation marks)
	
	3. To begin using one of the new keyboard layouts, type the appropriate command
	  (as shown in the table below) at the MS-DOS command prompt and press ENTER:
	
	      Keyboard Layout     Command
	      ----------------------------------------------
	      Two-handed          keyb dv,,c:\dos\dvorak.sys
	      Right-handed        keyb rh,,c:\dos\dvorak.sys
	      Left-handed         keyb lh,,c:\dos\dvorak.sys
	
	To load one of these keyboard layouts automatically when your computer starts,
	include the appropriate KEYB command in your Autoexec.bat file. The KEYB command
	should be placed after a PATH command that includes your MS-DOS directory. If
	your Autoexec.bat file includes the WIN or DOSSHELL command, make sure the KEYB
	command comes before the WIN or DOSSHELL command.
	
	Once you have loaded one of the Dvorak layouts, you can easily switch between the
	Dvorak layout and the U.S. standard layout. To switch back to the U.S. standard
	layout, press CTRL+ALT+F1. To switch to the Dvorak layout, press CTRL+ALT+F2.
	
	To Disable the United States (U.S.) Dvorak Keyboard Layout for MS-DOS
	---------------------------------------------------------------------
	
	To disable the United States (U.S.) Dvorak keyboard layout for MS-DOS, open the
	Autoexec.bat file (with a text editor such as MS-DOS Editor), delete the line
	with the KEYB command, save the file, and restart your computer.
	
	INSTALLING A DVORAK KEYBOARD LAYOUT FOR WINDOWS 3.1 OR WINDOWS FOR WORKGROUPS
	-----------------------------------------------------------------------------
	
	This Application Note provides the Kbdusr.dll and Kbdusl.dll files. These files
	support the Dvorak keyboard layouts for Windows 3.1 or Windows for Workgroups
	3.1 or 3.11 users who type with the right hand or left hand alone. Windows
	already includes the U.S. Dvorak keyboard layout for users who type with two
	hands.
	
	NOTE: If you use MS-DOS-based programs with Windows, you must install the Dvorak
	layouts for MS-DOS in order to get Dvorak support for those programs. For
	instructions, see the previous section, "Installing a Dvorak Keyboard Layout for
	MS-DOS."
	
	To Install the U.S. Dvorak Keyboard Layout for Two-Handed Typists
	-----------------------------------------------------------------
	
	1. Run Control Panel.
	
	2. In Control Panel, double-click the International icon. The International
	  dialog box appears.
	
	3. In the Keyboard Layout box, click US-Dvorak.
	
	4. Click OK.
	
	To disable the two-handed Dvorak layout and restore your original layout, follow
	the steps in the preceding procedure. In step 3, choose your original layout.
	
	To Install a U.S. Dvorak Keyboard Layout for Single-Handed Typists
	------------------------------------------------------------------
	
	1. If you received a disk with this Application Note, insert the disk in the
	  appropriate floppy disk drive.
	
	  If you downloaded this Application Note from an online service, skip to step
	  2. This procedure assumes that you have already downloaded and extracted the
	  compressed file.
	
	2. If you want to use the right-handed Dvorak layout, copy the Kbdusr.dll file
	  to the Windows\System folder on your hard disk. If you want to use the
	  left-handed Dvorak layout, copy the Kbdusl.dll file to the Windows\System
	  folder on your hard disk. You can do this by typing the following command at
	  the MS-DOS command prompt and pressing ENTER:
	
	  "copy <drive>:\<progname> <destination>" (without the
	  quotation marks)
	
	  where <drive> is the floppy disk drive containing the GA0650 disk or the
	  folder containing the file you downloaded from an online service,
	  <progname> is Kbdusr.dll for the right-handed layout or Kbdusl.dll for
	  the left-handed layout, and <destination> is the drive and folder for
	  the Windows\System folder.
	
	  For example, if you inserted the GA0650 disk in drive A and your Windows
	  folder is called Windows and is on drive C, type one of the following
	  commands at the MS-DOS command prompt:
	
	  "copy a:\kbdusr.dll c:\windows\system\kbdusr.dll" (without the quotation
	  marks)
	
	  -or-
	
	  "copy a:\kbdusl.dll c:\windows\system\kdbusl.dll" (without the quotation
	  marks)
	
	  If you are using a shared copy of Windows that is installed on a network
	  server, copy the file to your private Windows folder.
	
	3. Use a text editor, such as Notepad, to open the System.ini file in the
	  Windows folder.
	
	4. Find the section that begins with the following line:
	
	  [keyboard]
	
	5. Within the [keyboard] section, find the following line:
	
	  keyboard.dll=
	
	6. Depending on which keyboard layout you want to use, type KBDUSL.DLL or
	  KBDUSR.DLL after the equal sign (=). When you are finished, the line should
	  look like one of the following lines:
	
	  keyboard.dll=kbdusl.dll
	
	  -or-
	
	  keyboard.dll=kbdusr.dll
	
	7. Save the System.ini file.
	
	8. Quit and then restart Windows.
	
	To Disable the Single-Handed Layout and Restore Your Original Windows Keyboard Layout
	-------------------------------------------------------------------------------------
	
	1. Run Control Panel.
	
	2. In Control Panel, double-click the International icon. The International
	  dialog box appears.
	
	3. In the Keyboard Layout box, click the keyboard layout you previously used.
	
	4. Click OK.
	
	INSTALLING A DVORAK KEYBOARD LAYOUT FOR WINDOWS NT 3.1, 3.5, OR 3.51
	--------------------------------------------------------------------
	
	To Install a U.S. Dvorak Keyboard Layout for Two-Handed Typists
	---------------------------------------------------------------
	
	1. Run Control Panel.
	
	2. In Control Panel, double-click the International icon. The International
	  dialog box appears.
	
	3. In the Keyboard Layout box, click US-Dvorak.
	
	4. Click OK.
	
	To disable the two-handed Dvorak layout and restore your original layout, follow
	the steps in the preceding procedure. In step 3, choose your original layout.
	
	To Install a U.S. Dvorak Keyboard Layout for Single-Handed Typists
	------------------------------------------------------------------
	
	NOTE: The Dvorak single-handed keyboard layouts support only Intel(R) processors.
	They do not support RISC processors at this time.
	
	1. If there is an Oemlay0.inf file in the Windows NT\System32 folder, rename it
	  with a unique file name. For example, rename it Oemlay1.inf (if there is not
	  already an Oemlay1.inf file in the System32 folder) with the following
	  command:
	
	  "ren c:\winnt\system32\oemlay0.inf c:\winnt\system32\oemlay1.inf" (without the
	  quotation marks)
	
	  NOTE: When you rename an Oemlayn.inf file, choose the next unused number to
	  ensure Windows NT reads all the Oemlayn.inf files correctly (where n is a
	  number). For example, if you have three Oemlay.inf files (Oemlay0.inf,
	  Oemlay1.inf, and Oemlay2.inf), rename Oemlay0.inf to Oemlay3.inf.
	
	2. If you received a disk with this Application Note, insert the disk in the
	  appropriate floppy disk drive.
	
	  If you downloaded this Application Note from an online service, skip to step
	  3. This procedure assumes that you have already downloaded and extracted the
	  compressed file.
	
	3. Copy the Oemlay0.inf file from the GA0650 disk or the folder containing the
	  file you downloaded from an online service to the Windows NT\System32 folder
	  on the hard disk. You can do this by typing the following command at the
	  MS-DOS command prompt and pressing ENTER:
	
	  "copy <drive>:\oemlay0.inf <destination>" (without the quotation
	  marks)
	
	  where <drive> is the floppy disk drive containing the GA0650 disk or the
	  folder containing the file you downloaded from an online service and
	  <destination> is the drive and folder for the Windows NT\System32
	  folder.
	
	  For example, if the GA0650 disk is in drive A and your Windows NT folder is
	  called WINNT and is on drive C, type the following command at the MS-DOS
	  command prompt and press ENTER:
	
	4. Run Control Panel.
	
	5. In Control Panel, double-click the International icon. The International
	  dialog box appears.
	
	6. In the Keyboard Layout box, click US Left Single-Handed Layout or US Right
	  Single-Handed Layout.
	
	7. Click OK. Windows NT prompts you to type the path to the Kbdrh.dll or
	  Kbdlh.dll file.
	
	8. Type the path to the floppy disk drive that contains the GA0650 disk or to
	  the folder containing the file you downloaded from an online service. For
	  example, if you put the disk in drive A, you would type the following:
	
	  "a:" (without the quotation marks)
	
	9. Click Continue.
	
	To Disable the Single-Handed Layout and
	Restore Your Original Windows NT Keyboard Layout
	----------------------------------------------------------------------------------------
	
	1. Run Control Panel.
	
	2. In Control Panel, double-click the International icon. The International
	  dialog box appears.
	
	3. In the Keyboard Layout box, click the keyboard layout you previously used.
	
	4. Click OK.
	
	INSTALLING A DVORAK KEYBOARD LAYOUT FOR WINDOWS 95
	--------------------------------------------------
	
	To Install a U.S. Dvorak Keyboard Layout for Two-Handed Typists
	---------------------------------------------------------------
	
	NOTE: If you use MS-DOS-based programs with Windows 95, you must install the
	Dvorak layouts for MS-DOS in order to get Dvorak support for those programs. For
	instructions, see the previous section, "Installing a Dvorak Keyboard Layout for
	MS-DOS."
	
	1. In Control Panel, double-click the Keyboard icon. Or, in Control Panel,
	  select the Keyboard icon with the ARROW keys and then press ENTER.
	
	2. Click the Language tab. Or, select the Language tab by pressing CTRL+TAB.
	
	3. Click the language to which you want to add the Dvorak layout, and then click
	  Properties. Or, use the ARROW keys to select the language to which you want
	  to add the Dvorak layout, press TAB until Properties is selected, and then
	  press ENTER.
	
	4. In the Keyboard Layout box, click United States-Dvorak, and then click OK.
	  Or, use the ARROW keys to select United States-Dvorak, and then press ENTER.
	
	5. Click OK. Or, press TAB until OK is selected, and then press ENTER.
	
	To Install a U.S. Dvorak Keyboard Layout for Single-Handed Typists
	------------------------------------------------------------------
	
	1. If you received a disk with this Application Note, insert the disk in the
	  appropriate floppy disk drive.
	
	  If you downloaded this Application Note from an online service, skip to step
	  2. This procedure assumes that you have already downloaded and extracted the
	  compressed file.
	
	2. Use Windows Explorer or My Computer to copy the following files from the
	  GA0650 disk or the folder containing the file you downloaded from an online
	  service to an empty folder on the hard disk:
	
	  Dvoraklr.inf
	  Kbddvl.kbd
	  Kbddvr.kbd
	  Multilng.inf
	
	3. In Windows Explorer or My Computer, use the right mouse button to click the
	  Dvoraklr.inf file you copied to the new folder in step 2, and then click
	  Install on the menu that appears. Or, use the ARROW keys to select the
	  Dvoraklr.inf file, and then press SHIFT+F10.
	
	4. In Control Panel, double-click the Keyboard icon. Or, in Control Panel,
	  select the Keyboard icon with the ARROW keys and then press ENTER.
	
	5. Click the Language tab. Or, select the Language tab by pressing CTRL+TAB.
	
	6. Click the language to which you want to add the Dvorak layout, and then click
	  Properties. Or, use the ARROW keys to select the language to which you want
	  to add the Dvorak layout, press TAB until Properties is selected, and then
	  press ENTER.
	
	7. In the Keyboard Layout box, click either United States-LH Dvorak for
	  left-handed typists or United States-RH Dvorak for right- handed typists, and
	  then click OK. Or, use the ARROW keys to select either United States-LH
	  Dvorak for left-handed typists or United States-RH for right-handed typists,
	  and then press ENTER.
	
	8. Click OK. Or, press TAB until OK is selected, and then press ENTER.
	
	To Disable the Dvorak Layout and Restore Your Original Windows 95 Keyboard Layout
	---------------------------------------------------------------------------------
	
	1. In Control Panel, double-click the Keyboard icon. Or, in Control Panel,
	  select the Keyboard icon with the ARROW keys and then press ENTER.
	
	2. Click the Language tab. Or, select the Language tab by pressing CTRL+TAB.
	
	3. Click the language from which you want to remove the Dvorak layout, and then
	  click Properties. Or, use the ARROW keys to select the language from which
	  you want to remove the Dvorak layout, press TAB until Properties is selected,
	  and then press ENTER.
	
	4. In the Keyboard Layout box, click the layout you previously used, and then
	  click OK. Or, use the ARROW keys to select the layout you previously used,
	  and then press ENTER.
	
	5. Click OK. Or, press TAB until OK is selected, and then press ENTER.
	
	To Switch Between a Dvorak Layout and Another Layout
	----------------------------------------------------
	
	You may need to switch back and forth between the Dvorak layout and another
	layout. An easy way to do this is to set up the Dvorak layout as another
	language, and then switch back and forth between languages. To do so, follow
	these steps:
	
	1. Make sure the Dvorak layout you want to use is already installed and
	  operational on your computer. Refer to the previous sections if you need
	  instructions for installing the Dvorak layout.
	
	2. Follow the instructions in the "To disable the Dvorak layout and restore your
	  original Windows 95 keyboard layout" section above to restore your original
	  layout.
	
	3. In Control Panel, double-click the Keyboard icon. Or, in Control Panel,
	  select the Keyboard icon with the ARROW keys and then press ENTER.
	
	4. Click the Language tab. Or, select the Language tab by pressing CTRL+TAB.
	
	5. Click Add, or press ALT+D.
	
	6. In the Language box, click a language other than the language you are
	  currently using, and then click OK. Or, use the ARROW keys to select a
	  language other than the language you are currently using, and then press
	  ENTER.
	
	  NOTE: It does not matter which language you choose, because the Dvorak layout
	  will be applied to the language instead of the normal keyboard layout for
	  that language. It is helpful to choose a language that has a different
	  two-letter code to indicate which language is in use. We recommend choosing
	  Danish because it uses "Da" as its two-letter code, which might be helpful in
	  distinguishing it as the Dvorak layout.
	
	7. Click the language to which you want to add the Dvorak layout, and then click
	  Properties. Or, use the ARROW keys to select the language to which you want
	  to add the Dvorak layout, press TAB until Properties is selected, and then
	  press ENTER.
	
	  NOTE: Make sure to apply the Dvorak layout to the new language, and not to the
	  "English (United States)" language.
	
	8. In the Keyboard Layout box, click United States-Dvorak for two- handed
	  typists, United States-LH Dvorak for left-handed typists, or United States-RH
	  Dvorak for right-handed typists, and then click OK. Or, use the ARROW keys to
	  select United States-Dvorak for two-handed typists, United States-LH Dvorak
	  for left-handed typists, or United States-RH for right-handed typists, and
	  then press ENTER.
	
	9. In the Switch Languages box, click the option you want to use to switch
	  languages. Or, press TAB until the selection enters the Switch Languages box,
	  and then use the ARROW keys to select the option you want.
	
	10. If you want a constant language indicator on the screen, click the Enable
	  Indicator On Taskbar check box to select it. Or, press TAB until Enable
	  Indicator On Taskbar is selected, and then press SPACE BAR to place a check
	  mark in the check box.
	
	11. Click OK. Or, press TAB until OK is selected, and then press ENTER.
	
	  NOTE: If you enabled the Enable Indicator On Taskbar option, you can click
	  the two-letter language code on the taskbar and then click the language you
	  want to use. You can also use the right mouse button to click the two-letter
	  code and then click What's This for help or Properties to open Keyboard
	  properties.
	
	LEARNING TO USE THE DVORAK KEYBOARD LAYOUTS
	-------------------------------------------
	
	The illustrations on the next page can help you learn a new keyboard layout. You
	may want to take a class or purchase stickers to put on your keys so that you
	can see the new layout as you type. For information about classes and stickers,
	contact:
	
	  KEYTIME
	  5508 Roosevelt Way NE
	  Seattle, WA 98105-3631
	  voice 206-522-8973 (222-TYPE)
	  fax 206-524-2238
	  http://www.keytime.com
	
	STANDARD QWERTY KEYBOARD LAYOUT
	
	--------------------------------------------
	~  !  @  #  $  %  ^  &  *  (  )  _  +
	`  1  2  3  4  5  6  7  8  9  0  -  =  bks
	--------------------------------------------
	                                  {  }  |
	tb  Q  W  E  R  T  Y  U  I  O  P  [  ]  \ 
	--------------------------------------------
	cps                             :  "
	lck  A  S  D  F  G  H  J  K  L  ;  '  entr
	--------------------------------------------
	                           <  >  ?
	shft  Z  X  C  V  B  N  M  ,  . /   shft
	--------------------------------------------
	
	TWO-HANDED DVORAK KEYBOARD LAYOUT
	--------------------------------------------
	~  !  @  #  $  %  ^  &  *  (  )  {  }
	`  1  2  3  4  5  6  7  8  9  0  [  ]  bks
	--------------------------------------------
	    "  <  >                       ?  +
	tb  '  ,  . P  Y  F  G  C  R  L  /  =  \ 
	--------------------------------------------
	cps                                _
	lck  A  O  E  U  I  D  H  T  N  S  -  entr
	--------------------------------------------
	      :
	shft  ;  Q  J  K  X  B  M  W  V  Z   shft
	--------------------------------------------
	
	RIGHT SINGLE-HANDED DVORAK KEYBOARD LAYOUT
	--------------------------------------------
	~  !  @  #  $                 ?  {  }
	`  1  2  3  4  J  L  M  F  P  /  [  ]  bks
	--------------------------------------------
	    %  ^     >                    :  +  |
	tb  5  6  Q  . O  R  S  U  Y  B  ;  =  \ 
	--------------------------------------------
	cps  &  *                          _
	lck  7  8  Z  A  E  H  T  D  C  K  -  entr
	--------------------------------------------
	      (  )     <                 "
	shft  9  0  X  ,  I  N  W  V  G  '   shft
	--------------------------------------------
	
	LEFT SINGLE-HANDED DVORAD KEYBOARD LAYOUT
	--------------------------------------------
	~  {  }  ?                 $  #  @  !
	`  [  ]  /  P  F  M  L  J  4  3  2  1  bks
	--------------------------------------------
	    :                       >  ^  %  +  |
	tb  ;  Q  B  Y  U  R  S  O  . 6  5  =  \ 
	--------------------------------------------
	cps  _                          *  &
	lck  -  K  C  D  T  H  E  A  Z  8  7  entr
	--------------------------------------------
	      "                    <  )  (
	shft  '  X  G  V  W  N  I  ,  0  9   shft
	--------------------------------------------
	
	--------------------------------------------------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Ga0650.exe now (
	  http://download.microsoft.com/download/win31/keybd/1/w31/en-us/ga0650.exe)
	
	Release Date: June 29, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22 3.10 3.11 3.50 3.51
	
	======================================================================
	Keywords          : kbenable kbfile win31 msdos win95 kbEnableSight kbEnableMove kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin3xSearch kbWin95search kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500
	Version           : MS-DOS:5.0,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11; Win2000:3.1,3.11,95; winnt:3.1,3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
