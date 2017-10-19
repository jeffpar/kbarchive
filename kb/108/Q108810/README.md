---
layout: page
title: "Q108810: PC MAPI: MAPISaveMail Allows Creation of Invalid Date Message"
permalink: /kb/108/Q108810/
---

## Q108810: PC MAPI: MAPISaveMail Allows Creation of Invalid Date Message

	Article: Q108810
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.2 of Messaging Application Program Interface (MAPI), the
	MAPISaveMail operation allows you to create a message with an invalid date in
	the format: YYYY/MM/DD HH:MM.
	
	Example of invalid date: 9999/99/99 99:99
	
	Copying a message with an invalid date to another folder delays opening the
	folder because the invalid date causes a rebuild of the folder.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
