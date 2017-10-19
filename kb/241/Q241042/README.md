---
layout: page
title: "Q241042: Access to ProfileList Key Restricted"
permalink: /kb/241/Q241042/
---

## Q241042: Access to ProfileList Key Restricted

	Article: Q241042
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symptoms may occur:
	
	- When a user logs on to a computer running Windows NT 4.0, a profile other
	  than the user's assigned profile may be loaded and may run malicious files
	  placed in the StartUp folder. The user may be unaware that the profile
	  substitution has taken place.
	
	- A normal domain user can add his or her account to the Domain Administrators
	  group and obtain the permissions of that group by copying the profile to a
	  self-deleting batch file and specifying the path to that file in the
	  ProfileImagePath value in the Administrator's ProfileList key. The next time
	  someone uses the Administrator account and password to log on, the batch file
	  runs and adds that user's profile to the Domain Administrators group.
	
	- Users may be able to bypass mandatory profiles.
	
	CAUSE
	=====
	
	This behavior occurs in Windows NT 4.0 because the registry key listed below
	grants the SetValue permission to the Everyone group by default, so that any
	user (even guests) can edit the information in the ProfileList registry key and
	its subkeys:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\ProfileList
	
	Editing these keys can be performed locally or remotely, and setting permissions
	in the Access Control List (ACL) on the Winreg key (HKEY_LOCAL_MACHINE\System)
	does not limit remote access because the path to the CurrentVersion key is an
	allowed path and can be edited regardless of the permissions assigned to the
	Winreg key.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	When you apply Windows NT 4.0 Service Pack 6 (SP6), the default permission on the
	Everyone group is set to read access only. Also, the process created by
	Winlogon.exe creates the user's Security Identifier (SID) subkey in the System
	account, instead of under the CurrentVersion key, and then writes the necessary
	values to the ProfileList key.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For more information about making your Windows NT 4.0 installation secure,
	obtain the "Securing Windows NT Installation" white paper at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/NTServer/security/exec/overview/Secure_NTInstall.asp
	
	Additional query words: sp6
	
	======================================================================
	Keywords          : kbenv kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
