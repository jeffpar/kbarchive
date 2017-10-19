---
layout: page
title: "Q111860: Gen: Message Gets Carriage Return Entered After 78 Characters"
permalink: /kb/111/Q111860/
---

## Q111860: Gen: Message Gets Carriage Return Entered After 78 Characters

	Article: Q111860
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.x,3.x; MS-DOS:2.x,3.0,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, versions 2.x, 3.x 
	- Microsoft Mail Gateway to SNADS, versions 2.x, 3.x 
	- Microsoft Mail Gateway to SMTP, versions 2.x, 3.x 
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A hard carriage return character is entered automatically after column 78 in a
	message sent from version 3.x of Microsoft Mail for Windows or a version 3.x of
	Microsoft Mail for PC Networks, MS-DOS workstation.
	
	MORE INFORMATION
	================
	
	MS-DOS architecture requires that text have a hard carriage return (Carriage
	Return and Line Feed) every 78 characters in the message. FFAPI- based gateway,
	such as Mail Gateway to SMTP or Mail Gateway to PROFS, are MS-DOS based and
	follow the 78 character per line architecture.
	
	If you are sending messages to another Microsoft Mail user, you can eliminate
	this 78 character wrapping by sending mail indirect via the gateway. This method
	is called Backboning, and it will turn encapsulation on and prevent the 78
	character wrapping.
	
	If you are sending to a non-Microsoft Mail user, send any text that requires more
	than 78 character columns per line as an attachment.
	
	Additional query words: 3.00 ffapi 78
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS3xSearch kbMailGateIBMPROFS2xSearch kbMailGateSMTP3xSearch kbMailGateSMTP2xSearch kbMailGateSNADS3xSearch kbMailGateSNADS2xSearch
	Version           : :2.x,3.x; MS-DOS:2.x,3.0,3.x
	
	=============================================================================
	
