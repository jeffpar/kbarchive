---
layout: page
title: "Q288157: Wallpaper Set by System Policy Overriden by Active Desktop"
permalink: /kb/288/Q288157/
---

## Q288157: Wallpaper Set by System Policy Overriden by Active Desktop

{% raw %}

	Article: Q288157
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use system policies to apply wallpaper settings, a user who is running
	Active Desktop (which is available with Internet Explorer 4.0) can use Microsoft
	Paint to override the settings. The user can open a bitmap image, and then click
	Set As Wallpaper (tiled or centered) on the File menu. The wallpaper does not
	revert to the policy-applied settings, even when the user logs off or restarts
	the computer.
	
	CAUSE
	=====
	
	This behavior can occur because Active Desktop uses a different registry
	location to store its wallpaper settings.
	
	RESOLUTION
	==========
	
	To resolve this behavior, force the Active Desktop to reset the wallpaper to the
	policy-applied settings:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe), and then locate the following key in
	  the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Desktop\Components\
	
	2. Double-click the GeneralFlags value, and then type "1" (without the quotation
	  marks) in the Value data box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This key is enumerated when the user logs on. The value 1 is invalid for this
	key. During logon, the system detects this invalid state. The components key and
	other values relating to the wallpaper are generated, and by default they use
	the standard wallpaper that is set by the policy.
	
	You can use a system policy or a .reg file in a logon script to avoid having to
	reset the GeneralFlags value at every logon.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
