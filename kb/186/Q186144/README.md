---
layout: page
title: "Q186144: Dialog Box w/ Red Circle &amp; White X During WinNT 3.51 Upgrade"
permalink: /kb/186/Q186144/
---

## Q186144: Dialog Box w/ Red Circle &amp; White X During WinNT 3.51 Upgrade

{% raw %}

	Article: Q186144
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Windows NT 3.51 to Windows NT 4.0, Windows NT restarts to
	GUI-mode and you get a dialog box with "f" in the title bar and a red circle
	with a white "x", a capital "A", and the OK button.
	
	CAUSE
	=====
	
	The Setupapi.dll file on the system is newer than the Windows NT 4.0
	Setupapi.dll file dated Aug. 8, 1996; therefore, it is not replaced with the
	Windows NT 4.0 Setupapi.dll file.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- If Windows NT is installed on a FAT partition, boot to MS-DOS and rename
	  Setupapi.dll to SetupapiOLD.dll. Copy the Windows NT 4.0 Setupapi.dll file to
	  the local hard disk drive. The file is located in the %SystemRoot%\System32
	  folder.
	
	  -or-
	
	- If Windows NT is installed on an NTFS partition, reinstall Windows NT to a
	  separate folder (for example, NTTEMP). Log on to this parallel installation
	  and rename Setupapi.dll in the %SystemRoot%\System32\ folder of the original
	  Windows NT installation to SetupapiOLD.dll. Copy the Windows NT 4.0
	  Setupapi.dll file to the local hard disk.
	
	MORE INFORMATION
	================
	
	If an attempt was made to install Internet Explorer 4.0 Preview Version to
	Windows NT 3.51 and the installation failed, the Setupapi.dll file dated July
	24, 1997, may be left in the %SystemRoot%\System32\ folder. During the Windows
	NT 3.51 to Windows NT 4.0 upgrade, the Setupapi.dll file dated July 24, 1997, is
	not replaced by the Windows NT 4.0 file dated Aug. 8, 1996, because it is newer.
	
	Additional query words: Popup, Red Circle, White X,
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
