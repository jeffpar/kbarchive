---
layout: page
title: "Q96227: MS-DOS wrkheuristic 14 (Raw Data) Documented Incorrectly"
permalink: /kb/096/Q96227/
---

## Q96227: MS-DOS wrkheuristic 14 (Raw Data) Documented Incorrectly

{% raw %}

	Article: Q96227
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	Workheuristic 14 is documented incorrectly on page 250 of the LAN
	Manager 2.2 "Administrator's Reference." Using the values listed will
	affect your system in a way opposite to what you intend.
	
	The documentation reads:
	
	  14 Controls use of raw data transfer SMB protocols.
	
	  0 = don't use
	  1 = use
	
	This is incorrect. The documentation should read:
	
	  14 Controls use of raw data transfer SMB protocols.
	
	  0 = use
	  1 = don't use
	
	REFERENCES
	==========
	
	Microsoft LAN Manager version 2.2 "Administrator's Reference," page 250.
	
	Additional query words: raw smb wrkheuristic
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
