---
layout: page
title: "Q87408: PC DB: Symptoms of Not Having a KEY File"
permalink: kb/087/Q87408/
---

## Q87408: PC DB: Symptoms of Not Having a KEY File

	Article: Q87408
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two main consequences of not having a KEY file: the user will not be
	able to read existing mail in the file and the file will not accept mail from
	other programs.
	
	When a Microsoft Mail client attempts to load the KEY file and it is not
	available, the following error message is displayed:
	
	  Error in mail header retrieval
	
	The program will still function; however, the user will not be able to read his
	or her mail messages.
	
	Similarly, when another user attempts to send mail to that user ID, the following
	message will appear:
	
	  ERROR MAILING TO MAILBAG:
	
	  Mailbag: 00000000
	  Address: NETWORK/POSTOFFICE/Admin
	
	  Press any key to continue...
	
	MORE INFORMATION
	================
	
	The error messages will continue to be displayed until a valid KEY file is made
	available. This usually involves restoring the file from a backup or freeing it
	for use if it was locked open by another application or workstation.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
