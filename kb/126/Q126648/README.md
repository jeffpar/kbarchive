---
layout: page
title: "Q126648: PC Win DOS: How the WINMAIL.DAT File Effects Attachments"
permalink: kb/126/Q126648/
---

## Q126648: PC Win DOS: How the WINMAIL.DAT File Effects Attachments

	Article: Q126648
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Mail for Windows sends a message with attachments, it dumps some
	raw data into the message body. When another Windows client receives this mail
	message, it parses and removes the raw data so the user never sees it.
	
	A problem arises when the mail message is read by different clients. For example,
	the MS-DOS client or a foreign mail system client does not have the ability to
	remove the raw data. As a result, the unreadable data is left in the message
	body.
	
	CAUSE
	=====
	
	The "invisible attachment," or WINMAIL.DAT file, should remove the raw data in
	the attachment's message body.
	
	RESOLUTION
	==========
	
	The MS-DOS client was changed in version 3.0b to provide the following
	functionality for mail sent from the Windows client:
	
	1. The MS-DOS client shows a text list of the file attachments in the header of
	  the message file. This list corresponds to what a user would see in the
	  Attachments, View or Save.
	
	2. The WINMAIL.DAT file no longer shows up as text in the MS-DOS client. Foreign
	  mail clients may, however, still see the raw text. The MS-DOS client user can
	  still see the text from the View or Save menus of the MS-DOS client.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail320a
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	
