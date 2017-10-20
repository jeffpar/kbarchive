---
layout: page
title: "Q179821: How to Delete the MSN Icon on the Desktop"
permalink: /kb/179/Q179821/
---

## Q179821: How to Delete the MSN Icon on the Desktop

{% raw %}

	Article: Q179821
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,2.51,2.52,2.6,5.0,5.1,95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 2.0, 2.5, 2.51, 2.52, 2.6, 5.0, 5.1 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to remove the MSN or The Microsoft Network icon from
	your desktop.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove the MSN or The Microsoft Network icon from your desktop, delete the
	following registry key, and then restart the computer:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\explorer\Desktop\NameSpace\{88667D10-10F0-11D0-8150-00AA00BF8457}
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. MSN Delete Icon
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbOSWin98 kbOSWin95 kbOSWin98SE kbOSWinSearch kbMSNSearch kbMSN510 kbMSN500 kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.0,2.5,2.51,2.52,2.6,5.0,5.1,95,98,98 Second Edition
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
