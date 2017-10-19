---
layout: page
title: "Q177567: Inbox Starts Microsoft Exchange Instead of Windows Messaging"
permalink: /kb/177/Q177567/
---

## Q177567: Inbox Starts Microsoft Exchange Instead of Windows Messaging

	Article: Q177567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbtool osr2
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click Keep to keep Windows Messaging installed when you are removing
	Microsoft Outlook 97, Microsoft Exchange may be started when you double-click
	the Inbox icon on the desktop.
	
	CAUSE
	=====
	
	Microsoft Office 97 installs both Outlook 97 and Microsoft Exchange. Microsoft
	Exchange replaces Windows Messaging and uses the Inbox icon. Outlook 97 has its
	own icon on the Start menu.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall Windows Messaging. To do so, follow these
	steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	2. Click the Windows Setup tab, click the Windows Messaging check box to clear
	  it, and then click OK.
	
	3. When you are prompted to restart Windows, do so.
	
	4. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	5. Click the Windows Setup tab, click the Windows Messaging check box to select
	  it, and then click OK.
	
	6. When you are prompted to restart Windows, do so.
	
	MORE INFORMATION
	================
	
	To prevent this problem from occurring, use the following steps to remove
	Outlook 97 and Microsoft Exchange, and then reinstall Windows Messaging:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	2. In the list of installed programs, click either "Microsoft Office 97,
	  Professional Edition" or "Microsoft Outlook 97," whichever is available, and
	  then click Add/Remove.
	
	3. Click Add/Remove, and then click the Microsoft Outlook check box to clear it.
	
	4. Click Continue, click Yes to remove components, and then click Remove All.
	
	5. If you are prompted, restart Windows.
	
	6. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	7. Click the Windows Setup tab, click the Windows Messaging check box to clear
	  it, and then click OK.
	
	8. When you are prompted to restart Windows, do so.
	
	9. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	10. Click the Windows Setup tab, click the Windows Messaging check box to select
	  it, and then click OK.
	
	11. When you are prompted to restart Windows, do so.
	
	When you run Windows Messaging, there may be folders remaining (such as the
	Journal and Tasks folders) from the Outlook 97 installation. You can delete
	these folders if you want.
	
	
	Additional query words: 95 osr2
	
	======================================================================
	Keywords          : kbtool osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
