---
layout: page
title: "Q153123: How to Enable Eastern Europe Keyboards for MS-DOS Applications"
permalink: /kb/153/Q153123/
---

## Q153123: How to Enable Eastern Europe Keyboards for MS-DOS Applications

{% raw %}

	Article: Q153123
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT includes support for most Eastern European countries. Windows NT does
	not include keyboard support under the MS-DOS-based environment for the
	following countries:
	
	  Albania
	  Ukrainia
	  Belarussia
	  Slovenia
	  Estonia
	  Latvia
	  Lithuania
	  Serbia (Cyrillic)
	  Polish (Regular keyboard)
	
	MORE INFORMATION
	================
	
	Windows NT only supports the Polish Programmers keyboard in MS-DOS emulation
	mode. This section describes how to set this up using existing driver files from
	MS-DOS. The Estonian keyboard is used as an example.
	
	Before you perform the steps below you must obtain a keyboard description file
	(Keyboard.sys replacement) and a full-screen font file (Ega.cpi replacement) for
	your country. For Estonia, the keyboard description file can be retrieved from
	the following ftp site:
	
	  ftp://ftp.itedu.ee/microsoft/windows9x/windows_95/updates/addest11.exe
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The full-screen font file you need for Estonia is Ega3.cpi and is available with
	the Pan European version of Windows 95. The following table gives you the font
	file names for other countries:
	
	  Country            Font File   File Name
	  ------------------------------------------
	  Albania            Ega.cpi     Third-party
	  Ukrainia           Ega3.cpi    Keybrd3.sys
	  Belarussia         Ega3.cpi    Keybrd3.sys
	  Slovenia           Ega.cpi     Keybrd2.sys
	  Estonia            Ega3.cpi    See ftp site above
	  Latvia             Ega3.cpi    Third-party
	  Lithuania          Ega3.cpi    Third-party
	  Serbia (Cyrillic)  Ega3.cpi    Keybrd2.sys
	  Polish (Regular)   Ega.cpi     Keyboard.sys
	
	Perform the following steps to install the keyboard support:
	
	1. Go to the following registry key to obtain the number for the keyboard
	  layout:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layouts
	
	  The value for the Estonian keyboard is 00000425.
	
	2. Find the value from step 1 above in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ Keyboard
	  Layout\DosKeybCodes
	
	  and then replace "us" with the two-letter code for your keyboard. This code
	  should be defined in the documentation for the keyboard description. The
	  value for Estonia is "ee" (without the quotation marks).
	
	3. Click Start, point to Settings, click Control Panel, and then double- click
	  Regional Settings.
	
	4. Click the Regional Settings tab and make sure your country is set as the
	  system default locale. If you click Set As System Default Locale and then
	  click OK, do not restart your computer at this point.
	
	5. Click Start, point to Settings, click Control Panel, and then double- click
	  Keyboard.
	
	6. Click the General tab and make sure your local keyboard is selected as the
	  default keyboard.
	
	7. Rename the current Keyboard.sys file in the %systemroot%\system32 folder and
	  copy the new keyboard description file in its place.
	
	8. Use Mv.exe from the Windows NT 4.0 Resource Kit to rename the current Ega.cpi
	  file. To do this, type the following command:
	
	  "MV /x /d EGA.CPI EGA.CPI.SAVE" (without the quotation marks)
	
	  NOTE: You cannot use the copy or rename commands because the file is locked by
	  the system.
	
	9. Use the following command to place the new CPI file in the
	  %systemroot%\system32 folder. After the file is copied, restart your
	  computer.
	
	  MV /x /d EGA3.CPI EGA.CPI
	
	NOTE: You can skip steps 8 and 9 if you do not need to run MS-DOS-based
	applications in full-screen mode on Intel platforms.
	
	When you work with MS-DOS applications, make sure you select a True Type font for
	display. The bitmap font available with Windows NT does not have the characters
	needed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
