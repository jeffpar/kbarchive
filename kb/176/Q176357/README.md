---
layout: page
title: "Q176357: Err Msg: Critical Information About the Desktop Could Not Be..."
permalink: /kb/176/Q176357/
---

## Q176357: Err Msg: Critical Information About the Desktop Could Not Be...

{% raw %}

	Article: Q176357
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbui
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Emergency Repair process to repair or verify your Windows NT
	system files, you may receive the following error message when you log in to
	Windows NT:
	
	  Critical information about the desktop could not be retrieved from the
	  registry. Your registry may be corrupted.
	
	When you click OK, a blank desktop with only your background wallpaper appears.
	The Start button, taskbar, and desktop icons are not displayed.
	
	CAUSE
	=====
	
	Some of the updated Windows NT 4.0 system files required by Internet Explorer
	4.0 have been replaced by the original Windows NT 4.0 files.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Remove Internet Explorer 4.0 using the Ieremove.exe tool. For information
	  about using the Ieremove.exe tool, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q166314 Removing Internet Explorer for Windows NT 4.0 Using Ieremove.exe
	
	2. Reinstall the latest Windows NT Service Pack.
	
	  NOTE: When you install a Windows NT 4.0 Service Pack, it is important to
	  create an Uninstall folder only during the first installation of the Service
	  Pack. Uninstall folders created during subsequent installations of the
	  Service Pack do not properly uninstall the Service Pack.
	
	3. Reinstall Internet Explorer 4.0.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To repair or verify the Windows NT system files on a computer that has Internet
	Explorer 4.0 installed, first uninstall Internet Explorer and the Windows NT
	Service Pack. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon, click Microsoft Internet Explorer
	  4.0, click Add/Remove, click "Uninstall Internet Explorer 4.0 and all its
	  components," and then click OK.
	
	3. When you are finished uninstalling Internet Explorer, uninstall the Windows
	  NT Service Pack. To do so, start the Service Pack installation program and
	  choose the Uninstall The Service Pack option when you are prompted.
	
	4. Repair or verify the Windows NT 4.0 system files using the Emergency Repair
	  process. For more information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q103280 Using an Emergency Repair Disk Created by Windows NT
	
	5. When the Emergency Repair process is complete, reinstall the latest Windows
	  NT Service Pack, and then reinstall Internet Explorer 4.0.
	
	For more information about the Emergency Repair process and Windows NT 4.0
	Service Pack 3, see the following article in the Microsoft Knowledge Base:
	
	  Q146887 Repairing Windows NT After the Application of Service Pack 3
	
	Additional query words: ERD SP3 msient
	
	======================================================================
	Keywords          : kbenv kberrmsg kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	
	=============================================================================
	

{% endraw %}
