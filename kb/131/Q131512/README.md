---
layout: page
title: "Q131512: PC Adm: Admin Gains Rights to Shared Folder After Deletion"
permalink: /kb/131/Q131512/
---

## Q131512: PC Adm: Admin Gains Rights to Shared Folder After Deletion

{% raw %}

	Article: Q131512
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a mailbox with shared folders or groups from the Mail
	Administrator's program (ADMIN.EXE) for Mail for PC Networks, the Administrator
	account that deleted the mailbox will become the owner of the shared folders or
	groups and has rights to delete the shared folders or groups with his or her
	Mail client.
	
	RESOLUTION
	==========
	
	If you are using IMPORT.EXE, and you delete the users using the -a option, or if
	there is possible folder file corruption, then this will not work.
	
	To determine the folder owner and type (public, private, or shared), run the
	ADMIN.EXE program, and select Local-Admin, Folders, Print, and either Printer or
	File.
	
	
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
