---
layout: page
title: "Q105017: X400: Description of X400ADM.EXE Program"
permalink: /kb/105/Q105017/
---

## Q105017: X400: Description of X400ADM.EXE Program

{% raw %}

	Article: Q105017
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators can use the Microsoft Mail Gateway to X.400 program X400ADM.EXE
	to set the Gateway parameters. These parameters are split into two sections:
	Outbound and Inbound. The Outbound section is used for messages bound for an
	external X.400 MTA; Inbound is used for messages incoming to Microsoft Mail.
	
	The X400ADM program replaces the command line switches used in earlier versions
	of the gateway.
	
	OUTBOUND MESSAGE PARAMETERS
	---------------------------
	
	- Enable Encapsulation
	
	- Include Special Attachment
	
	- Include Attachment Name
	
	Enable Encapsulation
	--------------------
	
	This enables backboning to another Microsoft Mail destination over X.400, and
	support for such things as OLE objects.
	
	Include Special Attachment
	--------------------------
	
	When backboning to another Microsoft Mail destination, this allows the inclusion
	of a special attachment from Microsoft Mail for Windows which includes
	information on attachment icons, display locations and time stamps.
	
	Include Attachment Name
	-----------------------
	
	This includes another attachment for X.400 location listing the names of
	attachments.
	
	INBOUND MESSAGE PARAMETERS
	--------------------------
	
	- Maximum Message Size
	
	- NetBIOS Notification
	
	Maximum Message Size
	--------------------
	
	This allows you to limit the size of inbound message bodies. Message bodies that
	exceed the limit are converted to attachments.
	
	NetBIOS Notification
	--------------------
	
	This provides for the use of NetBIOS, if it is present, to instantly notify
	recipients who are Microsoft Mail for PC Networks, MS-DOS workstation users.
	
	Additional query words: 3.20 3.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
