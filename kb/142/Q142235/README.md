---
layout: page
title: "Q142235: Protected Share Can Be Accessed Without Cached Password"
permalink: /kb/142/Q142235/
---

## Q142235: Protected Share Can Be Accessed Without Cached Password

{% raw %}

	Article: Q142235
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
	
	After you connect to a password-protected network share and elect not to save
	the password in the password list, you can reconnect to the share without being
	prompted for the password after you disconnect from the share or close the UNC
	connection.
	
	CAUSE
	=====
	
	The password is stored in memory after the connection is established the first
	time.
	
	RESOLUTION
	==========
	
	Restart your computer, or log on again (by clicking Shut Down on the Start menu,
	and then clicking "Close all programs and log on as a different user"). This
	causes the password to be required before you can reconnect to the share.
	
	
	Additional query words: security pwl
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
