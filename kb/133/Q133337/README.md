---
layout: page
title: "Q133337: Automate Setup to Configure TCP/IP for Static Addressing Fails"
permalink: /kb/133/Q133337/
---

## Q133337: Automate Setup to Configure TCP/IP for Static Addressing Fails

	Article: Q133337
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TCP/IP protocol is configured for DHCP addressing instead of static
	addressing after you install Windows NT.
	
	This problem occurs when you install TCP/IP using the unattended setup feature of
	Windows NT Setup or Computer Profile Setup (CPS) after you set
	!UpgradeEnableDHCP equal to NO in the answer file, UNATTEND.TXT.
	
	NOTE: The file UNATTEND.TXT is available on the compact disc shipped with the
	Windows NT 3.5 Resource Kit. For additional information about the unattended
	Setup feature, see the Windows NT 3.5 Resource Kit, Volume 1, pages 99 - 100.
	For additional information about Computer Profile Setup (CPS), see the Windows
	NT 3.5 Resource Kit, Volume 1, pages 67 - 69.
	
	CAUSE
	=====
	
	OEMNXPTC.INF does not check your answer file for the !UpgradeEnableDHCP value
	and by default configures TCP/IP for DHCP addressing.
	
	RESOLUTION
	==========
	
	To resolve this problem, modify the IPINFO.INF and OEMNXPTC.INF files.
	
	To automatically configure TCP/IP for static IP addressing when you use an answer
	file with Windows NT Setup or when you use CPS:
	
	WARNING: Modification of INF files can cause serious, system-wide problems before
	and after Setup and may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the modification of
	INF files can be solved. Make INF modifications at your own risk.
	
	1. Copy the \I386 directory from the Windows NT compact disc to your hard drive.
	
	2. Expand the compressed versions of the IPINFO.INF and OEMNXPTC.INF files using
	  the EXPAND.EXE command.
	
	  The EXPAND.EXE file is located in the %SystemRoot%\SYSTEM32 directory.
	
	3. Make a backup copy of the IPINFO.INF and OEMNXPTC.INF files.
	
	4. If you are running Windows NT 3.5, copy the OEMNXPTC.INF file from Windows NT
	  3.51 over your current copy. If you do not have Windows NT 3.51, contact
	  Microsoft Product Support Services.
	
	5. Modify the IPINFO.INF file to include the appropriate static IP values in the
	  [DefaultIPInfo] section. For additional information on how to do this, please
	  see the following article(s) in the Microsoft Knowledge Base:
	
	  Q135463 IPINFO.INF Values Ignored During Setup
	
	  Note: Do not pad IP addresses with leading zeroes. This can result in
	  incorrect address assignments and cause unexpected behavior.
	
	6. In OEMNXPTC.INF, search for the [InstallOptions] heading to find the
	  following problem code fragment:
	
	         ifstr(i) $(!STF_GUI_UNATTENDED) == YES
	            set EnableDHCPFlag = 1
	         endif
	         ifstr(i) $(EnableDHCPFlag) == ""
	            set EnableDHCPFlag = 0
	         endif
	
	7. Modify the second line so that the EnableDHCPFlag is set to 0 as in the
	  following example:
	
	        ifstr(i) $(!STF_GUI_UNATTENDED) == YES
	           set EnableDHCPFlag = 0
	        endif
	        ifstr(i) $(EnableDHCPFlag) == ""
	           set EnableDHCPFlag = 0
	        endif
	
	8. To take advantage of the changes you made, run Setup from the directory on
	  your hard drive.
	
	Computer Profile Setup:
	
	Make the above modifications to IPINFO and OEMNXPTC.INF on the Master System
	before running UPLODPRF.EXE.
	
	Additional query words: prodnt upgrade
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
