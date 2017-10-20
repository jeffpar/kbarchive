---
layout: page
title: "Q104519: PC OS2: Err Msg: The Server Path in the MSMAIL.INI Is Missing"
permalink: /kb/104/Q104519/
---

## Q104519: PC OS2: Err Msg: The Server Path in the MSMAIL.INI Is Missing

{% raw %}

	Article: Q104519
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a version 3.2 Microsoft Mail for PC Networks
	postoffice with a version 3.2 Microsoft Mail for PC Networks OS/2 workstation,
	and you do not have FileScan rights, you receive the following error:
	
	  Mail could not connect to your Mail server. The server path in the MSMAIL.INI
	  file is missing or invalid.
	
	If the ServerPath= line is corrected, you may get the following message:
	
	  Could not find mail system database.
	
	CAUSE
	=====
	
	With the OS/2 client for PC Networks, you cannot log on to a postoffice on a
	Novell server without FileScan rights.
	
	RESOLUTION
	==========
	
	Assign FileScan rights to anyone who uses the OS/2 client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Novell OS/2 redirector
	when it is used with version 3.2 of Microsoft Mail for PC Networks, OS/2
	workstation. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
