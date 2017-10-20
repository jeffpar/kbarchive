---
layout: page
title: "Q93565: PC Adm: Err Msg: Error Creating Mailbox"
permalink: /kb/093/Q93565/
---

## Q93565: PC Adm: Err Msg: Error Creating Mailbox

{% raw %}

	Article: Q93565
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a user by using the Admin utility (ADMIN.EXE) in
	Microsoft Mail for PC Networks, version 3.0, you may see the following error
	message:
	
	  Error creating mailbox
	
	CAUSE
	=====
	
	Microsoft Mail may not be able to create the mailbox because there are not
	enough available directory entries in the Novell NetWare operating system.
	NetWare reserves a specific number of directory entries on the volume based on
	the volume size. NetWare defines directory entries as files, subdirectories, and
	trustee assignments. If there are not enough available entries, Mail cannot add
	the new user.
	
	RESOLUTION
	==========
	
	You can check to see how many directory entries are available on a NetWare
	volume by running the VOLINFO NetWare utility. To do this, type VOLINFO at any
	NetWare drive prompt.
	
	If there are not enough free directory entries, add more disk space to the
	NetWare volume or delete files, subdirectories, and trustee assignments.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
