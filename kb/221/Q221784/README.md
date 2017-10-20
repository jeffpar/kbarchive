---
layout: page
title: "Q221784: Screen Saver Grace Period Bypasses Password Protection"
permalink: /kb/221/Q221784/
---

## Q221784: Screen Saver Grace Period Bypasses Password Protection

{% raw %}

	Article: Q221784
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you configure your computer to use a password-protected screen saver, you
	may be able to bypass the password security and unlock the computer (using a key
	press or mouse movement) after the screen saver has started.
	
	CAUSE
	=====
	
	There is a delay between the time the screen saver locks the computer and the
	attendant password protection is established. During this interval, you can use
	a key press or mouse movement to unlock the computer without having to type in
	the configured password.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, change (reduce) the screen saver password registration
	interval in the registry. To do this:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Windows menu, click "HKEY_LOCAL_ MACHINE on Local Machine".
	
	3. Double-click the \Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	  folder.
	
	4. On the Edit menu, click Add Value, type "ScreenSaverGracePeriod" (without the
	  quotation marks), click REG_SZ in the Data Type box, and then click OK.
	
	5. Type a number representing the password activation delay (in number of
	  seconds) in the Data box, and then click OK. You can enter any whole number
	  between 0 and 2,147,483. The default entry is 5. If you use an entry of zero,
	  there is no password protection delay.
	
	6. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
