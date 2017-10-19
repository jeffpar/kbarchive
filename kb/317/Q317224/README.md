---
layout: page
title: "Q317224: &quot;Cdralw2k Service Failed&quot; Err Msg Installing Media Player 7.0"
permalink: /kb/317/Q317224/
---

## Q317224: &quot;Cdralw2k Service Failed&quot; Err Msg Installing Media Player 7.0

	Article: Q317224
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg ocsso
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install Windows Media Player 7.0 on a Windows NT 4.0-based computer and
	then restart the computer, you may receive the following error message:
	
	  The Cdralw2k service failed to start due to the following error: The system
	  cannot find the file specified.
	
	CAUSE
	=====
	
	The behavior occurs because Windows Media Player 7.0 is not supported in Windows
	NT 4.0 or Microsoft Windows 95.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall Windows Media Player 7.0 by using the
	Add/Remove Programs tool in Control Panel, and then install Windows Media Player
	6.4.
	
	If you are unable to uninstall Windows Media Player 7.0 by using Add/Remove
	Programs, manually remove Windows Media Player 7.0, and then install Windows
	Media Player 6.4. To do this, follow these steps:
	
	1. Start Windows Explorer, and then locate and delete the following files:
	
	  C:\winnt\wmplibrary_v_0_12
	  C:\winnt\system\wmplenc.dll
	  C:\winnt\system\wmpui.dll
	  C:\winnt\system\wmp.ocx
	  C:\winnt\system\wmploc.dll
	  C:\winnt\system\wmpcore.dll
	  C:\winnt\system\wmpcd.dll
	  C:\winnt\system\wmpscheme.xml
	  C:\winnt\inf\wmp.inf
	  C:\winnt\help\wmplayer.chm
	  C:\program files\windows media player\wmplayer.exe
	
	2. Start Registry Editor (Regedt32.exe).
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	3. Locate and select the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\WMP7
	
	4. On the Edit menu, click Delete, and then click Yes to confirm.
	
	5. Locate and select the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Active Setup\Installed
	  Components\{6BF52A52-394A-11d3-B153-00C04F79FAA6}
	
	NOTE: The preceding registry key is one path; it has been wrapped for
	readability.
	
	6. On the Edit menu, click Delete, and then click Yes to confirm.
	
	7. Quit Registry Editor.
	
	8. Download and install Windows Media Player 6.4. To do this, browse to the
	  following Microsoft Web site:
	
	  http://www.microsoft.com/windows/windowsmedia/download/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg ocsso 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
