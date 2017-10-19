---
layout: page
title: "Q149617: Eudora Changes Default MailTo Handler"
permalink: /kb/149/Q149617/
---

## Q149617: Eudora Changes Default MailTo Handler

	Article: Q149617
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are browsing a page on the Word Wide Web with Microsoft Internet
	Explorer, clicking an e-mail address may cause the Eudora Internet mail client
	to be started instead of Microsoft Exchange.
	
	CAUSE
	=====
	
	When you install Eudora, the registry is modified so that Eudora is called to
	handle mail requests from Internet Explorer instead of Microsoft Exchange.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat)before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Eudora updates the registry when it is installed and each time it runs. You must
	restore the registry settings after running Eudora every time you run Eudora. To
	do so, follow these steps:
	
	1. Modify the following registry key
	
	  HKEY_CLASSES_ROOT\mailto\shell\open\command
	
	  by changing the (Default) value to:
	
	  rundll32.exe url.dll,MailToProtocolHandler %1
	
	2. In Registry Editor, navigate to the following key:
	
	  HKEY_CLASSES_ROOT\mailto\shell\open\command
	
	3. On the Registry menu, click Export Registry File.
	
	4. Type a name for the registry file, and then click Save. This creates a file
	  on the desktop.
	
	5. Double-click the file you created in step 4 after you run Eudora to restore
	  the registry settings.
	
	MORE INFORMATION
	================
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
