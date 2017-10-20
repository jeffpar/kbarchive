---
layout: page
title: "Q141543: Selected Screen Saver Is Never Displayed"
permalink: /kb/141/Q141543/
---

## Q141543: Selected Screen Saver Is Never Displayed

{% raw %}

	Article: Q141543
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using user profiles in Windows 95, the screen saver you selected
	may not consistently activate at the time specified in Display properties.
	
	CAUSE
	=====
	
	Registry entries may not be properly updated when a screen saver is selected in
	a specific user's profile when no screen saver is selected in the default
	profile.
	
	
	RESOLUTION
	==========
	
	Activate the screen saver in the default user profile. To do this, follow these
	steps:
	
	1. Restart the computer.
	
	2. When you are prompted to log in, click Cancel. This logs you in as the
	  default user.
	
	  NOTE: If no login screen appears, you have chosen to use a blank password. You
	  must rename your password list file (<username>.pwl) in the Windows
	  folder and then restart Windows 95.
	
	  NOTE: If you are using a personal certificate, you should export it before
	  renaming your .pwl file. If you do not do so, it may be unavailable when you
	  send e-mail. For more information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	3. In Control Panel, double-click Display.
	
	4. Click the Screen Saver tab.
	
	5. Select the screen saver you want to use.
	
	6. Click OK.
	
	7. Restart the computer. Log in normally.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
