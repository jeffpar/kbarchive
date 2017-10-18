---
layout: page
title: "Q117648: PC Gen: ErrMsg: Unexplained Mail Message From &#42;SPECIAL"
permalink: kb/117/Q117648/
---

## Q117648: PC Gen: ErrMsg: Unexplained Mail Message From &#42;SPECIAL

	Article: Q117648
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0; WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	- Microsoft Mail Remote for MS-DOS, version 3.0 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users of versions 3.0 and 3.2 of Microsoft Mail for PC Networks may receive an
	unexplained mail message from *SPECIAL. For example:
	
	  From:    *SPECIAL
	  To:      Username
	  Subject: *MAILBAG
	  Date:    Thursday, September 23, 1993 10:37AM
	
	  <<File Attachment:  *MAILBAG>>
	  *MAILBAG
	
	CAUSE
	=====
	
	This error occurs when a mail message is sent to a user who is logged into the
	same mail account more than once.
	
	For example, if a user leaves the Windows client running on the office computer
	then logs into Mail from home using a remote client, the double account results
	in the *SPECIAL message. Often these are caused by mail messages created by the
	remote client for remote specific tasks such as to include an update header
	request or a directory update request. Users do not often see these messages in
	their Inboxes because the mail system normally processes the request and deletes
	the message.
	
	RESOLUTION
	==========
	
	Versions 3.0 and 3.2 of Microsoft Mail for PC Networks were not designed to run
	in this configuration--with more than one client running at the same time for
	the same user on a postoffice. Always log off of mail from one client before
	logging on with another client.
	
	MORE INFORMATION
	================
	
	Files received in this message may include, but are not limited to the
	following:
	
	*SPECIAL
	RNETWORK.GLB
	
	Additional query words: 3.00 3.00b 3.20 star asterisk
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailRemote300DOS kbMailRemote320
	Version           : MS-DOS:3.0; WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
