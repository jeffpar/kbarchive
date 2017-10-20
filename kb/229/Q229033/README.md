---
layout: page
title: "Q229033: Programs That Replace Msgina.dll May Cause &quot;STOP 0x0000001E&quot;"
permalink: /kb/229/Q229033/
---

## Q229033: Programs That Replace Msgina.dll May Cause &quot;STOP 0x0000001E&quot;

{% raw %}

	Article: Q229033
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Programs (such as remote-control software or third-party redirectors) may
	replace the Msgina.dll file with a third-party version of the file. Replacing
	the Microsoft Msgina.dll file with a third-party version may result in the
	following error message on a blue screen:
	
	  STOP: 0x0000001E (0xC0000005, 0xA0036FC2, 0x00000000, 0x00000004)
	  KMODE_EXCEPTION_NOT_HANDLED address 0xA0036FC2 in Win32K.sys
	
	Note that the second parameter may differ for Win32k.sys, depending on the system
	configuration.
	
	This Kernel-mode trap occurs on reboot, shortly before the logon prompt is
	displayed.
	
	CAUSE
	=====
	
	There is an incompatibility with the third-party file and the Win32k.sys driver
	in Windows NT. The third-party file probably needs to be updated to be
	compatible with the Microsoft Windows NT service pack version you are running.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem:
	
	1. Install a parallel copy of Windows NT in a different folder on the hard disk.
	
	2. Restart the computer with the new installation of Windows NT.
	
	3. Start Registry Editor (Regedt32.exe).
	
	4. On the the Window menu, click "HKEY_LOCAL_MACHINE on Local Machine". On the
	  Registry menu, click Load Hive. Type the path to the Software hive of the
	  prior installation (%SystemRoot%\System32\Config\Software), and then click
	  Open.
	
	5. When you are prompted for the name of the key, type "test" (without the
	  quotation marks).
	
	6. Scroll down to the following registry entry:
	
	  HKEY_LOCAL_MACHINE\TEST\Microsoft\Windows NT\Current Version\WinLogon
	
	7. Delete the GinaDLL value. Deleting this entry forces Windows NT to default to
	  the Msgina.dll file at startup.
	
	8. Double-click the minus sign in the folder representing the TEST key, and then
	  click the TEST key. On the Registry menu, click Unload Hive. This saves the
	  registry changes to the prior installation's SOFTWARE hive.
	
	9. Quit Registry Editor, and then restart the computer using the prior
	  installation of Windows NT.
	
	MORE INFORMATION
	================
	
	For further information, please contact the manufacturer of the program you
	installed.
	
	
	Additional query words: gina
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
