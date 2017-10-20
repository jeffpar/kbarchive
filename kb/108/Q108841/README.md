---
layout: page
title: "Q108841: PC DB: Import Does Not Send Welcome Message to New Users"
permalink: /kb/108/Q108841/
---

## Q108841: PC DB: Import Does Not Send Welcome Message to New Users

{% raw %}

	Article: Q108841
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IMPORT.EXE program in version 3.2 Microsoft Mail allows batch creation of
	users, but users created in this way do not receive a welcome message from the
	administrator.
	
	CAUSE
	=====
	
	Only users created from the ADMIN.EXE program receive a welcome message.
	
	This is by design. The Import program does not contain the Mailer code to
	generate messages and hence does not send out mail to the new users.
	
	RESOLUTION
	==========
	
	The welcome message received by users is present in the file WELCOME.GLB. You
	can edit this file to contain a custom welcome message.
	
	If you want to use the Import program to create new users and still have them
	receive a welcome message, use the Messaging Application Program Interface
	(MAPI) to write a custom application that determines new users' names by reading
	the input file used by IMPORT.EXE, then sends them a message with the
	MAPISendMail function. You can find more information on MAPI in the Microsoft
	Mail for PC Networks "Technical Reference."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
