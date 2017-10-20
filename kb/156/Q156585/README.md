---
layout: page
title: "Q156585: Cannot Map Drive to SYS Volume in Login Script with MSNDS"
permalink: /kb/156/Q156585/
---

## Q156585: Cannot Map Drive to SYS Volume in Login Script with MSNDS

{% raw %}

	Article: Q156585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft NetWare Directory Service (MSNDS) client with
	login script processing enabled, one of the following error messages may appear
	when you log on to a NetWare server:
	
	  - You cannot map a network drive to an unmapped drive or a local drive.
	
	  - You cannot map a drive to a server to which you are not attached.
	
	After you log on to the server, one or more of the drives that are normally
	mapped in the login script are not available. If you then map the drives in
	Windows 95, the drives are mapped successfully.
	
	NOTE: If the login script does not contain a PAUSE command following the command
	that causes one of the error messages to appear, the error message may appear
	only briefly. If you do not see the error message, the only symptom you
	experience is that one or more of the drives that are normally mapped in your
	login script are not available.
	
	CAUSE
	=====
	
	This problem can occur when the login script contains the following command:
	
	  map n server\sys:
	
	The login script processor installed with the MSNDS client does not process this
	command properly.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Edit the login script to change the MAP N command to an external command. For
	  example:
	
	  #MAP N server\sys:
	
	- Use Novell's network client instead of the MSNDS client.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
