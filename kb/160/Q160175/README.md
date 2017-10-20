---
layout: page
title: "Q160175: What Does WinNT 4.0 look for in a Valid WinNT 3.51 Install"
permalink: /kb/160/Q160175/
---

## Q160175: What Does WinNT 4.0 look for in a Valid WinNT 3.51 Install

{% raw %}

	Article: Q160175
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows NT 4.0 Setup cannot find a previous version of Windows NT to
	upgrade, it is usually because one of the following checks failed:
	
	- Boot.Ini entry - Setup looks for a valid path to the Software hive.
	
	- Loads the Software hive for version number and product ID, loads the System
	  hive.
	
	- A System32 directory, Ntoskrnl.exe, and Ntdll.dll must be present.
	
	- A System32\Drivers directory must exist.
	
	- Must have Windows NT version 3.X installation CD to perform an upgrade to
	  clean directory if you have the upgrade or step-up version of Windows NT 4.0.
	
	
	MORE INFORMATION
	================
	
	- If an application or the user has altered the Software hive version or
	  Product ID, Windows NT setup will not find a valid upgrade path. If the
	  Software hive is corrupt, the computer typically will not boot.
	
	- If the Software or System hives are corrupt, Windows NT Setup will not find a
	  valid installation and require a clean install. A possible work around is to
	  export third-party registry keys, particularly in the Software hive, until
	  the Software hive is recognized as valid. Then reinstall the 3rd-party
	  components after the upgrade.
	
	  NOTE: You can run Rdisk.exe and select update repair information then expand
	  the System._ and Software._ files found in the %SystemRoot%\Repair directory.
	  Using Regedt32 on another Windows NT computer running the newer version, try
	  to load the expanded System or Software Hives to see if they load without
	  error.
	
	- Windows NT will parse the Boot.ini file or look in NVRAM on RISC computers to
	  find a valid Windows NT installation. The Boot.ini entries must be correct
	  and should follow these guidelines:
	
	   - Contain no spaces in the ARC path except: "The description between quotes"
	
	   - Contain only ACSII characters and end with a CR LF - use EDIT.COM to add a
	     hard return after each line
	
	   - Contain no blank lines between entries
	
	- If Windows NT does not find a valid installation, ensure that the boot drive
	  and the system drive are attached to disk controllers that are detected by
	  Windows NT. One drive may be controlled by a retired driver or a controller
	  driver that is not being detected (though in most cases this will result in a
	  STOP: 0x0000007b - inaccessible boot device error message). If the error is
	  occurring, use F6 during the hardware detection phase ("Setup is examining
	  your hardware configuration") to select the correct controllers or load a 3rd
	  party device driver.
	
	
	- Windows NT will not upgrade Server to Workstation. Make certain the system
	  being upgraded is not a member server.
	
	- There is no back-door to fooling setup for upgrade purposes. If the Windows
	  NT 3.51 installation is deleted, you will need a Windows NT 3.51 CD (the
	  "Step-Up" Version will work) to continue.
	
	- In some cases, a parallel installation of Windows NT will help Setup identify
	  the original installation as an upgrade candidate.
	
	- The resource kit utility C2config.exe (C2 Configuration Manager) Registry
	  Security option was run on the Windows NT 3.51 computer before the upgrade.
	  The registries Access Control List entries (permissions) had been changed so
	  that setup was unable to access the information necessary to locate the
	  previous installation. This is by design and is part of the C2 Security
	  specification.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q159995
	  TITLE : Windows NT Does Not Detect Previous Window NT 3.5x Installation
	
	Additional query words: previous version upgrade c2
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	

{% endraw %}
