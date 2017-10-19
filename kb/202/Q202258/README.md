---
layout: page
title: "Q202258: XADM: The System Cannot Find the Path Specified - ID No: 0cx0020"
permalink: /kb/202/Q202258/
---

## Q202258: XADM: The System Cannot Find the Path Specified - ID No: 0cx0020

	Article: Q202258
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Server, version 5.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During an update from Exchange Server 5.0 to Exchange Server 5.0 Service Pack 1
	or Service Pack 2, you may get the following Warning dialog box:
	
	  The system cannot find the path specified[ASCII 133]
	  Microsoft Windows NT ID no: 0cx002003
	  [OK]
	
	Install fails, and exits.
	
	The last lines of the Exchange Server Setup.log shows:
	
	  Interpreting line <AddShare:.;Resources;%s\res;READ;"Event logging
	  files">
	  Bound to local DSA
	  Bound to appropriate DSA
	
	CAUSE
	=====
	
	Update.exe is searching for an address generator defined in the organization;
	the corresponding directory/file on that server for the address generator is
	missing or has been deleted.
	
	WORKAROUND
	==========
	
	Ntfilemon is a widely-used third-party utility for Windows NT.
	
	1. Run Ntfilemon, and filter on Update.exe.
	
	  NOTE: After you start Ntfilemon, clear and restart its logging just before
	  running Update.exe to reduce clutter.
	
	2. Start the Update.exe process to install the service pack.
	
	3. Wait for the error to recur, OK the error, and exit the service pack Setup
	  program before you stop Ntfilemon logging.
	
	4. Save the Ntfilemon log and look for an entry in it similar to the following:
	
	  42029   11:39:07 PM   UPDATE.EXE   IRP_MJ_CREATE   C:\Exchsrvr\Address\CCMAIL\Alpha\Ccmproxy.dll   PATH NOT FOUND   Attributes:0080 Options:01000060
	
	  In this case the alpha directory is missing.
	
	  NOTE: Search upward from the bottom of the file for the text PATH NOT FOUND to
	  most quickly locate the missing directory.
	
	5. Recreate the missing folder and place the appropriate files into the
	  directory.
	
	  NOTE: Copy the missing files from another server in the site which has the
	  correct folder and files.
	
	6. Rerun the Service Pack.
	
	MORE INFORMATION
	================
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: Exchange, sp1, sp2
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
