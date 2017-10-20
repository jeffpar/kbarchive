---
layout: page
title: "Q126886: PC MAPI: IPC Messages Not Supported w/ Common Mail Calls (CMC)"
permalink: /kb/126/Q126886/
---

## Q126886: PC MAPI: IPC Messages Not Supported w/ Common Mail Calls (CMC)

{% raw %}

	Article: Q126886
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two message classes that are supported under Microsoft Mail for PC
	Networks: Interpersonal Messages (IPM) and Interprocess Communications (IPC).
	
	MORE INFORMATION
	================
	
	IPC messages are a special type of message that do not appear in the Microsoft
	Mail for Windows Inbox. The Common Mail Calls (CMC) API, which uses the X.400
	standard for electronic messaging, does not support this message class.
	Therefore, a read function using the appropriate CMC call will not be able to
	access a message of IPC message class.
	
	CMC does support the following message types: CMC:IPM, CMC:IP RN, CMC:IP NRN,
	CMC:DR, and CMC:NDR.
	
	More information on the supported message classes for CMC can be obtained from
	the "CMC API Specification," version 1.0, dated June 1, 1993.
	
	Additional query words: 3.00 3.20 CMC API Specifications
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
