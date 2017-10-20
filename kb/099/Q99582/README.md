---
layout: page
title: "Q99582: Mac Srv: Server Crashes on Upgrading to Mail 3.1"
permalink: /kb/099/Q99582/
---

## Q99582: Mac Srv: Server Crashes on Upgrading to Mail 3.1

{% raw %}

	Article: Q99582
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading version 3.0 of Microsoft Mail for AppleTalk Networks data file to
	version 3.1 of Microsoft Mail for AppleTalk Networks, the server crashes
	repeatedly and never completes the upgrade.
	
	NOTE: This does not occur when upgrading from 3.1 to 3.1a.
	
	CAUSE
	=====
	
	The Network Manager may have a user(s) defined with a period in front of a user
	account name.
	
	RESOLUTION
	==========
	
	Remove the period(s) before the user(s) mail account name.
	
	Additional query words: 3.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
