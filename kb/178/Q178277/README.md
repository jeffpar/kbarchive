---
layout: page
title: "Q178277: Setting DNS Domain Suffix Search Order During Unattend Install"
permalink: kb/178/Q178277/
---

## Q178277: Setting DNS Domain Suffix Search Order During Unattend Install

	Article: Q178277
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The unattended setup mode of Windows NT does not offer a way to specify the
	domain suffix search order. The ability to use a domain suffix search order may
	be very useful in certain business situations and can be accomplished at the end
	of the unattended installation process.
	
	The unattended setup mode of Windows 2000 does offer a way to specify the domain
	suffix search order. In some configurations this may not work. In this situation
	you can use the following methods to add the DNSSuffixSearchOrder during the
	unattended setup.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Method 1
	--------
	
	1. Create a text file with the following two lines of text and save it as
	  Suffix.txt. The spacing must be exactly as shown below, where "xxxxxxxx.xxx"
	  signifies a domain suffix. Up to six domain suffixes may be specified. The
	  search order is left to right.
	
	  For Windows NT 4.0 Systems:
	
	  \\HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TCPIP
	  \Parameters
	  SearchList="testxxxx.com test2xxxx.net test3xxxx.gov"
	
	  For Windows 2000 Systems you need to put a comma between the different DNS
	  Suffixes:
	
	  \\HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TCPIP\ 
	  Parameters
	
	  SearchList="testxxxx.com, test2xxxx.net, test3xxxx.gov"
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Copy Regini.exe and Suffix.txt to the $OEM$ subdirectory at the installation
	  sharepoint. Regini.exe is a Windows NT Resource Kit Utility
	
	3. If one does not exist, create a Cmdlines.txt file in the $OEM$ and add the
	  following line including the quotes:
	
	        [Commands]
	        ".\REGINI SUFFIX.TXT"
	
	  Only one instance of the [Commands] heading should exist in the Cmdlines.txt
	  file.
	
	4. Make sure the entry OEMPREINSTALL = Yes exists in the [UNATTEND] section of
	  your Unattended.txt file.
	
	Method 2
	--------
	
	1. Create a registry file with the following two lines of text and save it as
	  Suffix.reg. The spacing must be exactly as shown below, where "xxxxxxxx.xxx"
	  signifies a domain suffix. Up to six domain suffixes may be specified. The
	  search order is left to right.
	
	        REGEDIT4
	
	        \\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	        "SearchList"="testxxx1.com testxxx2.net testxxx3.gov"
	
	  For Windows 2000 Systems:
	
	  REGEDIT4
	
	        \\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	        "SearchList"="testxxx1.com, testxxx2.net, testxxx3.gov"
	
	2. Copy Regedit.exe and Suffix.reg to the $OEM$ subdirectory at the installation
	  sharepoint. Regedit.exe is provided with Windows NT.
	
	3. If one does not exist, create a Cmdlines.txt file in the $OEM$ and add the
	  following line including the quotes:
	
	        [Commands]
	        ".\REGEDIT /s SUFFIX.REG"
	
	  Only one instance of the [Commands] heading should exist in the Cmdlines.txt
	  file.
	
	4. Make sure the entry OEMPREINSTALL = Yes exists in the [UNATTEND] section of
	  your Unattended.txt file
	
	
	Additional query words: unattended registry suffix domain setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin2000ProSP1
	Version           : :2000,2000 SP1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
