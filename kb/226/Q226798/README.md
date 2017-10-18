---
layout: page
title: "Q226798: Desktop Icons Are Rearranged After You Install Windows NT SP4"
permalink: kb/226/Q226798/
---

## Q226798: Desktop Icons Are Rearranged After You Install Windows NT SP4

	Article: Q226798
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 (SP4) on your computer, all
	desktop icons are arranged in alphabetical order on the left side of the screen,
	regardless of their previous location.
	
	CAUSE
	=====
	
	This behavior occurs because SP4 enables the desktop icon Auto Arrange feature.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Right-click an empty area of the desktop.
	
	2. Point to Arrange Icons, and then click Auto Arrange to clear the check mark.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Following is the registry key and value:
	
	Registry key: HKEY_CURRENT_USER\Software\Microsoft\Windows\Current
	Version\Explorer\Deskview
	
	Value: 01 00 00 00 20 02 00 00
	
	When the fifth set of hexadecimal numbers is set to 21, Auto Arrange is on. When
	it is 20, Auto Arrange is off. However, this setting cannot be enforced. If the
	user changes the desktop so that it does not have Auto Arrange, this setting
	does not stay at logoff. When the system policy or logoff script runs upon the
	next login, the Auto Arrange setting is set for the desktop.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
