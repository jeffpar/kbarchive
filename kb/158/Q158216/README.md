---
layout: page
title: "Q158216: Unable to Directly Access Any Applet In Control Panel"
permalink: /kb/158/Q158216/
---

## Q158216: Unable to Directly Access Any Applet In Control Panel

{% raw %}

	Article: Q158216
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbother kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	***k Korean (Hangul) Windows NT 3.5 is not a localized version but an
	emulation version and all these Control Panel applets are in English, all
	Control Panel applets can be directly accessed.
	
	SYMPTOMS
	========
	
	In all Far East localized versions of Windows NT 3.5x, when you attempt to run a
	Control Panel applet by typing the following text in the New Task field of the
	Task List dialog box (invoked by Ctrl+Esc), the applet does not run.
	
	WORKAROUND
	==========
	
	To work around this problem,
	
	- run Control Panel applets from the Control Panel Program Group instead of
	  from the Task List dialog box.
	
	-or-
	
	- type "Control <applet_file_name>.cpl" (without the quotation marks)
	  instead of "Control <applet_icon_name>:" (without the quotation marks)
	
	To learn what the file names are that correspond to the names that appear under
	the corresponding icon of the applet in Control Panel, search for all
	%SystemRoot%\System32*.cpl files on your system drive. For example, from a
	command prompt, type at the root directory of your system drive:
	
	" Dir *.cpl /s " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The following table lists Control Panel applet icon names in the left column
	along with their corresponding applet file names in parentheses if there is a
	standalone file available. Not all Control Panel applets have a standalone
	program .cpl file. Applet icon names followed by a single asterisk (*) are
	available only on Windows NT Server 3.5x (not available on Windows NT
	Workstation 3.5x), for example, the Licensing applet has an asterisk and is only
	available on Windows NT Server. Some applet icon names only appear in the
	Control Panel if the corresponding applications that don't ship with Windows NT,
	for example, Gateway Services for NetWare (GSNW), and Macfile, are installed on
	Windows NT. The second through the sixth column from the left each correspond to
	a localized version of Windows NT 3.5 and/or 3.51. If a version number is listed
	in the column title, that column only pertains to that version of Windows NT.
	The Yes and No entries under the second through the sixth column indicate
	whether you may run the applet listed in the same row under the first column by
	typing Control <applet_icon_name> in the localized version:
	
	Applet Icon Name (applet file name)
	Traditional  Simplified
	Chinese      Chinese   Japanese   Korean3.5   Korean3.51
	-------      -------   --------   ---------   ----------
	Color (Main.cpl)
	No           No        No         Yes         No
	Fonts
	No           No        No         Yes         No
	Ports
	No           No        No         Yes         No
	Mouse
	No           No        No         Yes         No
	Desktop
	No           No        No         Yes         No
	Keyboard
	No           No        No         Yes         No
	Printers
	No           No        No         Yes         No
	International (Intl.cpl***1)
	No           No        No         Yes         No
	System
	No           No        No         Yes         No
	Date/time
	No           No        No         Yes         No
	Console (Console.cpl)
	No           No        No         No*2        No
	Cursors (Cursors.cpl)
	No           No        No         Yes         No
	Display (Display.cpl)
	No           No        No         Yes         No
	Licensing (Liccpa.cpl) *
	No           No        No         Yes         No
	Mail (Mlcfg32.cpl)
	No           No        No         Yes         No
	Sound (Multimed.cpl)
	Yes          Yes       Yes        Yes         Yes
	Drivers
	Yes          Yes       Yes        Yes         Yes
	Network (Ncpa.cpl)
	No           No        No         Yes         No
	ODBC (Odbccp32.cpl)
	Yes          Yes       Yes        Yes         Yes
	Server (Srvmgr.cpl) ***3
	No           No        No         Yes         No
	Services
	No           No        No         Yes         No
	Devices
	No           No        No         Yes         No
	UPS (Ups.cpl)
	Yes          yes       No         Yes         Yes
	GSNW/CSNW (Nwc.cpl) *
	Yes          Yes       Yes        Yes         Yes
	Internet (Inetcpl.cpl)
	Yes          Yes       Yes        Yes         Yes
	Monitoring Agent (Bhctrl.cpl)
	No           No        No         No          No
	Macfile
	Yes          Yes       Yes        Yes         Yes
	Tape Devices (ctape.cpl) ***4
	<Chinese IME> (Cime.cpl)
	No           No
	<JPN/Kor 35 IME> (Imesel.cpl) ***4
	                      No         No
	
	***1: Not available in JPN Windows NT 3.5x version.
	*2:   Not available in Korean Windows NT 3.5.
	***3: Do not confuse with Srvmgr.exe which is for Server Manager.
	     Srvmgr.cpl is for Server Control Panel Applet.
	***4: No icon in Control Panel at all in FE localizations.
	***5: Korean (Hangul) Windows NT 3.51 does not have an applet in Control
	     Panel for IME.\*
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: Control Panel NCPA Far East Localization localized
	
	======================================================================
	Keywords          : kbother kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
