---
layout: page
title: "Q104818: PC Forms: Message Class Not Preserved When Forwarding"
permalink: kb/104/Q104818/
---

## Q104818: PC Forms: Message Class Not Preserved When Forwarding

	Article: Q104818
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message created with version 1.0 of Microsoft Electronic Forms Designer
	is forwarded from a version 3.0, 3.0b, or 3.2 Microsoft Mail for Windows user
	who does not have E-Forms installed, the message arrives as a text message with
	the following error message:
	
	  Displaying this message correctly requires a custom E-Form that is not
	  available, or is incorrectly installed. Please contact your network
	  administrator for more information.
	
	CAUSE
	=====
	
	The message class is not preserved when a message is forwarded from a Windows
	client that does not have E-Forms installed and that does not understand the
	message class.
	
	To the client that forwarded the message, the E-Form is a message of unknown
	class. Mail converts the message to a standard note so the Windows client cannot
	delete class-specific information from the message. Deleting the message class
	definition causes the above error when the forwarded message is read.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.00 PC Win
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
