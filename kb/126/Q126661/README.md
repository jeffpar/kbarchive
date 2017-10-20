---
layout: page
title: "Q126661: PC MAPI: MAPILogon Does not Return an Error Code 1"
permalink: /kb/126/Q126661/
---

## Q126661: PC MAPI: MAPILogon Does not Return an Error Code 1

{% raw %}

	Article: Q126661
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Simple Messaging Application Program Interface (MAPI) function MAPILogon
	allows the developer to set the MAPI_LOGON_UI flag that will bring up the user
	interface to logon to a Microsoft Mail for PC Networks postoffice. The interface
	allows the user to select OK or Cancel. If the user selects the Cancel button,
	MAPILogon does not return an error code 1 (MAPI_USER_ABORT); instead, it returns
	an error code 3 (MAPI_LOGIN_FAILURE).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
