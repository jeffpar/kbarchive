---
layout: page
title: "Q128171: PC MAPI: MAPI Messages w/ Space in Message Type Fail to Print"
permalink: /kb/128/Q128171/
---

## Q128171: PC MAPI: MAPI Messages w/ Space in Message Type Fail to Print

{% raw %}

	Article: Q128171
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a custom message using the Messaging Application Program
	Interface (MAPI), you may not be able to print or save the message to a text
	file.
	
	WORKAROUND
	==========
	
	The MapiMessage MessageType should not contain any space characters in the
	string, or keep the message type letters the same case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 and 3.2 of Microsoft
	Mail for PC Networks. We are researching the problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This happens when the developer constructs the MapiMessage structure and defines
	the MessageType string. The MessageType is in the form:
	
	  IPM.VendorName.subclass
	
	If a white space character is used in the VendorName field of the MapiMessage
	MessageType, the message may not print or save correctly. For example,
	
	  IPM.Test Message.Note
	
	Also, if you leave all the characters lowercase, the problem does not occur. It
	is only when using the space in conjunction with the leading capital letters.
	
	This problem can occur when you use one of the following versions of MAPI.DLL:
	
	  MAPI.DLL 11-1-93 53,536 (Windows for Workgroups version)
	  MAPI.DLL 3-9-93 54,384 (Update from MAPIUPD.EXE on the MSL)
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
