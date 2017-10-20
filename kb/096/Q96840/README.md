---
layout: page
title: "Q96840: Mac Wkst: Sent Mail Folder Not Available"
permalink: /kb/096/Q96840/
---

## Q96840: Mac Wkst: Sent Mail Folder Not Available

{% raw %}

	Article: Q96840
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.1 of Microsoft Mail for AppleTalk Networks, the Sent Mail folder
	options may be unavailable (grayed).
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Sign in as the Network Manager for the 3.1 server.
	
	2. From the Mail menu, choose Server Settings and set User Folders to Both.
	
	3. Choose Update. Allow the Mail server to restart.
	
	4. Sign in on the Mail user account.
	
	5. Enable the preference to retain sent mail.
	
	6. Send a test message so the Sent Mail folder will be created.
	
	7. Sign in as the Network Manager and reset the server settings to Local
	  Storage.
	
	
	Additional query words: 3.10 3.1a gray grey greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.1,3.1a
	
	=============================================================================
	

{% endraw %}
