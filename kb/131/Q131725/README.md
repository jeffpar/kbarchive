---
layout: page
title: "Q131725: PC Win: Err Msg: Some Entries Could Not Be Added to the Group"
permalink: kb/131/Q131725/
---

## Q131725: PC Win: Err Msg: Some Entries Could Not Be Added to the Group

	Article: Q131725
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0b, 3.2, and 3.2a of Microsoft Mail for Windows, if you attempt to
	add one or more external or gateway users to a Personal Group, where one or more
	of the addresses currently exist in the Personal Address Book (PAB), and
	IMPORT.EXE as well as REBUILD.EXE has been executed on the postoffice, the
	following error may occur:
	
	  Some entries could not be added to the group.
	
	CAUSE
	=====
	
	If the entries were originally added to the PAB from the Global Address List
	(GAL), and IMPORT.EXE and REBUILD.EXE were executed on the postoffice, the
	Windows client thinks that a discrepancy has occurred between the account
	information being added and the current entry in the PAB; even though no change
	has been made to the actual address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.2, and 3.2a of
	Microsoft Mail for Windows. We are researching the problem and will post new
	information here in the Knowledge Base as it becomes available.
	
	Additional query words: 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0b,3.2,3.2a
	
	=============================================================================
	
