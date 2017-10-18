---
layout: page
title: "Q86094: PC Win: MSMAIL.INI Entries in [Address Book]"
permalink: kb/086/Q86094/
---

## Q86094: PC Win: MSMAIL.INI Entries in [Address Book]

	Article: Q86094
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Address Book]
	section.
	
	[Address Book]
	
	Default ID Data=<byte count>
	----------------------------
	
	This entry holds the length of the default directory Name Service Identifier
	(NSID) entry. It is written automatically by the address book whenever the user
	changes preference as to default directory. You should not change it under any
	circumstances.
	
	Directory ID=<string of hex bytes>
	----------------------------------
	
	This is the value of name service identifier for the directory the user chooses
	as the default, that is, the directory that's displayed when the address book
	dialog is opened. It is written automatically by the address book whenever the
	user changes preference as to default directory. You should not change it under
	any circumstances.
	
	Directory Name=<default directory name>
	---------------------------------------
	
	This is the name of the directory the user chooses as the default, that is, the
	one that's displayed when the address book dialog is opened. It is written
	automatically by the address book whenever the user changes preference as to
	default directory. You should not change it.
	
	Additional query words: 3.00 3.00b 3.20 Address Book
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
