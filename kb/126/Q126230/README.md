---
layout: page
title: "Q126230: PC Adm: Sort Order Incorrect in Address List w/ Extended Chars"
permalink: kb/126/Q126230/
---

## Q126230: PC Adm: Sort Order Incorrect in Address List w/ Extended Chars

	Article: Q126230
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create users within the Mail Administrator program, and those users
	have full names that begin with an extended character (for example, a character
	in the Swedish alphabet), the sort order in the address list will be incorrect
	when you view the list from Local Admin, Modify or from the mail client. After
	you run the RESORT -S -L (Scandinavian sort order) command, the client will then
	display the correct sort order; however, but the Mail Administrator program
	continues to display the users in the wrong order. This problem occurs on a
	version 3.2 English-language Mail for PC Networks server or on a Mail for PC
	Networks server that has been updated from English to Swedish.
	
	RESOLUTION
	==========
	
	Copy the C850SORT.GLB file from a version 3.2 Swedish-language Mail for PC
	Networks server.
	
	
	Additional query words: 3.20 diacritical mark diaeresis dieresis
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
