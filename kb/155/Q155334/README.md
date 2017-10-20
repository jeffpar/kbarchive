---
layout: page
title: "Q155334: Windows 95 RPL Clients will Only Allow One Logon to Domain"
permalink: /kb/155/Q155334/
---

## Q155334: Windows 95 RPL Clients will Only Allow One Logon to Domain

{% raw %}

	Article: Q155334
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows 95 RPL (remote program load) boot client can only log on to a Windows
	NT domain as the current user. Windows 95 prompts you twice for your user name
	and password: once from a command prompt and again from a dialog box. You must
	supply the same user name and password at the command prompt and at the dialog
	box. If you attempt to change the user name and/or password you will receive the
	following error message:
	
	  The domain password you supplied is not correct, or access to your logon
	  server has been denied.
	
	NOTE: However, you can log on as a different user and password to a different
	domain.
	
	RESOLUTION
	==========
	
	There is no workaround to the problem. A user logging on from a Windows 95 RPL
	client will need to log on as the same user name and password specified at the
	command prompt and the dialog box.
	
	STATUS
	======
	
	This is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
