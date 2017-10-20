---
layout: page
title: "Q166289: Cannot Remove or Reinstall Windows Messaging"
permalink: /kb/166/Q166289/
---

## Q166289: Cannot Remove or Reinstall Windows Messaging

{% raw %}

	Article: Q166289
	Product(s): Microsoft Windows NT
	Version(s): 4.0 97
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to remove Windows Messaging by clearing the Windows
	Messaging check box on the Windows NT Setup tab in the Add/Remove Programs tool
	in Control Panel. When you try to clear the check box, your computer beeps.
	
	CAUSE
	=====
	
	This behavior occurs when Microsoft Outlook has been installed after Windows
	Messaging was installed. This occurs so that Outlook cannot be made
	nonfunctional by the removal of another program.
	
	RESOLUTION
	==========
	
	To remove Windows Messaging, you must first remove Outlook. After you remove
	Outlook and restart the computer, you can remove Windows Messaging.
	
	If you want to reinstall Windows Messaging, you should do so before reinstalling
	Outlook.
	
	MORE INFORMATION
	================
	
	Although you cannot remove Windows Messaging, you can still add and remove
	information services. To do so, click Windows Messaging on the Windows NT Setup
	tab in the Add/Remove Programs tool, and then click Details.
	
	Additional query words: uninstall
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : 4.0 97
	
	=============================================================================
	

{% endraw %}
