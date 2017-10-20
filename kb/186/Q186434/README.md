---
layout: page
title: "Q186434: Slow Network Default Profile Operation"
permalink: /kb/186/Q186434/
---

## Q186434: Slow Network Default Profile Operation

{% raw %}

	Article: Q186434
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you have a policy enabled to automatically detect slow network connections,
	a slow network connection prompts you to either download your profile or to use
	the locally cached copy. By default, after 30 seconds, it will use your roaming
	profile if you do not explicitly choose to use the locally cached copy.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	In Service Pack 4, there is an additional policy under Default Computer\Windows
	NT User Profiles called Slow Network Default Profile Operation. With this, you
	have the ability to choose which option the user will be given as a default:
	either download the roaming profile, or use the local cached copy. The service
	pack is required for the policy file to fix the problem. The hotfix is needed
	only if your are applying the fix by manually editing the registry.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency
	
	To enable this option through the registry instead of using a policy:
	
	1. Start Regdt32 and locate the following path:
	
	  HKEY_Local_Machine\Software\Microsoft\Windows NT
	  \CurrentVersion\Winlogon
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Create a new value called SlowLinkProfileDefault as type REG_DWORD.
	
	3. Assign it the value of 1 if you want to download the roaming profile, Assign
	  it a value of 0 if you want to use the local profile.
	
	Additional query words: Slow net user profiles locally cached download
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
