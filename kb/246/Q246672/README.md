---
layout: page
title: "Q246672: Error Message: No Folders Found in &lt;AS400 System Name&gt;"
permalink: kb/246/Q246672/
---

## Q246672: Error Message: No Folders Found in &lt;AS400 System Name&gt;

	Article: Q246672
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user has not been added to the AS400 System Distribution Directory, the
	following error message occurs on the SNA Server computer when trying to browse
	to the folders on the AS400 system:
	
	  No Folders found in <AS400 system name>.
	
	CAUSE
	=====
	
	The AS400 User ID that is used for the SNA Server Shared Folders definition must
	be added to the AS400 System Distribution Directory when you set up the SNA
	Server Shared Folders.
	
	RESOLUTION
	==========
	
	Make sure that the AS400 is configured correctly and that the account <AS400
	User ID> has permissions to access shared folders on <AS400 system
	name>.
	
	To add the AS400 User ID to the System Distribution Directory, do the following:
	
	1. Log on to the AS400 system as a security administrator or security officer.
	
	2. On the AS400 command line, type the following, and then press the ENTER key:
	
	  WRKDIRE
	
	3. When the "Work with Directory Entries" screen appears, on the "Opt" line,
	  type "1" (Add). In the "User ID" field, type the AS400 User ID, and in the
	  "Address" field, type the address. Press the ENTER key.
	
	4. When the "Add Directory Entry" screen appears (this is the basic information
	  required to add the User ID to the System Distribution Directory), press the
	  ENTER key.
	
	NOTE: The "ADDDIRE" command can also be used on the AS400 system to accomplish
	the same task in a similar way. Additional steps may be needed for this. For
	further information on that procedure, refer to the AS400 online Help or IBM
	documentation on System Distribution Directory.
	
	MORE INFORMATION
	================
	
	Please refer to the AS400 Help or IBM documentation for a description on each
	field of entry. To view the AS400 online Help for the appropriate field, press
	the F1 (or CMD1) key while the cursor is positioned in the field where you need
	help.
	
	For more information about other useful IBM documentation, see the Publications
	Reference, SC41-4003 book.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
