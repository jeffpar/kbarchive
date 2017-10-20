---
layout: page
title: "Q112909: PC Gen: Err Msg: Password Invalid"
permalink: /kb/112/Q112909/
---

## Q112909: PC Gen: Err Msg: Password Invalid

{% raw %}

	Article: Q112909
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under versions 2.1, 3.0, 3.0a and 3.2 of Microsoft Mail for PC Networks, when
	you log into a mailbox from the MS-DOS client, the following error message
	appears:
	
	  Password Invalid
	
	CAUSE
	=====
	
	The password may be invalid. However, if the password is valid, confirm that you
	are using the correct version of the Mail client for your postoffice. If you are
	using a version 2.1 Mail client and connecting to a later version of postoffice,
	for example, the postoffice may display the above error message because of its
	more enhanced security system.
	
	RESOLUTION
	==========
	
	To ensure the password is correct you can reset it from within Mail
	Administrator. This will reset the password to the defined global password,
	Local Admin, Options, Password.
	
	Make sure you are using the correct version of client software for the postoffice
	you are trying to log into. Remove enhanced security from the postoffice if the
	client software can't be upgraded.
	
	Additional query words: 2.1x 3.00 3.0a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
