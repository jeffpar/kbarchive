---
layout: page
title: "Q98043: PC MAPI WRmt: Problems w/ Simple MAPI and Extended Characters"
permalink: kb/098/Q98043/
---

## Q98043: PC MAPI WRmt: Problems w/ Simple MAPI and Extended Characters

	Article: Q98043
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail Remote for Windows, extended characters (for
	example, greater than 127) are remapped if a message containing them is placed
	in the Outbox using calls to simple MAPI, then examined in the MSRMT store using
	FFAPI.
	
	
	CAUSE
	=====
	
	- This affects only extended characters.
	
	- Every extended character is translated to another extended character. The
	  translation is systematic but has no obvious pattern.
	
	- The translation is not related to code pages.
	
	- FFAPI is not to blame.
	
	
	- The Mail Remote for Windows Remote Driver is not at fault--the contents of
	  the Sent Mail folder are the same as what FFAPI reports.
	
	- There is no problem composing a message with extended characters from the
	  Mail Remote for Windows User Interface (UI) (using the ALT+<any three
	  keypad numerals> method), sending the message and pulling it back again.
	  The expected characters are displayed both as they are entered and when the
	  message is delivered.
	
	- If you run the same experiment using Mail for Windows, the message appears to
	  be corrupt as soon as it goes to the Outbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Simple MAPI from
	version 3.0, 3.0a, or 3.2 of Mail for PC Networks. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailRemote320
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
