---
layout: page
title: "Q162734: OL97: Cannot Access Offline Folders When Working Offline"
permalink: /kb/162/Q162734/
---

## Q162734: OL97: Cannot Access Offline Folders When Working Offline

{% raw %}

	Article: Q162734
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Client or Microsoft Outlook 97 while
	working offline, your offline folders are not available.
	
	CAUSE
	=====
	
	You did not log on to Windows 95.
	
	RESOLUTION
	==========
	
	Log on to Windows 95. To do so, follow these steps:
	
	1. Click the Start button, and then click Shut Down.
	
	2. Click to select "Close all programs and log on as a different user?"
	
	3. Click Yes.
	
	When the Logon dialog box appears, enter your Windows password. You should now be
	able to open your offline folders.
	
	MORE INFORMATION
	================
	
	When you start Windows 95 while connected to your network, you receive the
	network password dialog box and log on as you normally do. If your network
	password and your Windows password are the same, you receive no prompt for a
	Windows password.
	
	When you start Windows 95 while not connected to the network, you can press ESC
	(Escape) at the password dialog box and continue without logging on. Although
	not connected to your network server to validate your password, you still must
	log on to Windows 95 because the Windows password secures the offline store file
	(.OST).
	
	Additional query words: WIN95 XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
