---
layout: page
title: "Q155956: Cannot Restore Default Setting for Shutdown Button"
permalink: /kb/155/Q155956/
---

## Q155956: Cannot Restore Default Setting for Shutdown Button

{% raw %}

	Article: Q155956
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click the "Enable shutdown from the Authentication dialog box" check box
	in System Policy Editor (Poledit.exe) so that it is selected, the Shutdown
	button in the Logon Information dialog box is enabled in both Windows NT 4.0
	Server and Workstation. If you clear the "Enable shutdown from the
	Authentication dialog box" check box, the Shutdown button is disabled in both
	Windows NT 4.0 Server and Workstation.
	
	By default, the Shutdown button is disabled in Windows NT Server and enabled in
	Windows NT Workstation. If you change the setting, you cannot restore the
	default setting.
	
	CAUSE
	=====
	
	System Policy Editor does not have an option to restore the default setting.
	
	RESOLUTION
	==========
	
	Using System Policy Editor, manually connect to each computer for which you want
	to enable or disable the Shutdown button setting, and change the setting as
	needed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
