---
layout: page
title: "Q220956: Err Msg: Cannot Find 'C:&#92;Program' or One of Its Components"
permalink: /kb/220/Q220956/
---

## Q220956: Err Msg: Cannot Find 'C:&#92;Program' or One of Its Components

{% raw %}

	Article: Q220956
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  Cannot find C:\Program or one of its components.
	
	Or, if there is a C:\Program folder on your computer, the folder may open
	automatically when you start your computer.
	
	CAUSE
	=====
	
	This behavior can occur if you have America Online (AOL) Instant Messenger
	installed. Windows NT cannot read past the space in the "C:\Program
	Files\Aim95\Aim95.exe" value located in the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
	
	  Name: AIM
	  Type: REG_SZ
	  Data: C:\Program Files\aim95\aim95.exe -cnetwait.odl
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use the appropriate method:
	
	Method 1
	--------
	
	1. In AOL Instant Messenger (AIM), click Setup.
	
	2. On the General tab, click to clear the "Start AIM when Windows Starts" check
	  box.
	
	This removes AIM from the Run key in the registry.
	
	Method 2
	--------
	
	View the following key with Registry Editor:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
	
	If any value contains a space (such as "C:\Program Files"), edit the value and
	place quotation marks (") at the beginning and end of the value. For example,
	
	  "C:\Program Files\Aim95\Aim95.exe"
	
	instead of
	
	  C:\Program Files\Aim95\Aim95.exe
	
	NOTE:This same error can occur if the following entry is in place. The same
	registry key needs to be checked for the following entry.
	
	  MSMSGS"="C:\\Program Files\\Messenger\\msmsgs.exe /background
	
	Method 3
	--------
	
	Either remove the entry or open MSN instant messenger from the taskbar. Or Select
	Tools/options/Preferences and unselect the following options.
	
	  1. Run this program when windows starts
	  2. Allow this program to run in the background.
	  3. Change the registry key
	
	If any value contains a space (such as "C:\Program Files"), edit the value and
	place quotation marks (") at the beginning and end of the value. For example:
	
	  C:\Program Files\ Messenger\msmsgs.exe /background
	
	instead of
	
	  C:\Program Files\Messenger\msmsgs.exe /background
	
	MORE INFORMATION
	================
	
	This problem can occur if you clear the "Start AIM when Windows Starts" check
	box and then later select it again.
	
	When AIM is initially installed, it adds itself to the Run key in the registry
	using the MS-DOS version of the path (C:\Progra~1\Aim95\Aim95.exe). If you clear
	the check box and then select it later, AIM add the setting using long file
	names but no quotation marks (C:\Program Files\Aim95\Aim95.exe).
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
