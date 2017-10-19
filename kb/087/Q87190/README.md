---
layout: page
title: "Q87190: PROFS: Notice 16, Error Reading Mail"
permalink: /kb/087/Q87190/
---

## Q87190: PROFS: Notice 16, Error Reading Mail

	Article: Q87190
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Users on your Microsoft Mail system may encounter the error "Notice 16, Error
	reading mail" when attempting to read a piece of mail, or if they are seeing
	duplicate headers in their mailbox for a single message. Verify that the source
	of the mail was outside of your postoffice (for example, from a host-based
	user).
	
	This error is almost certainly caused by a missing or duplicate -P0xx option, or
	a missing -V20 option. Check both of these options as follows:
	
	- Verify that each external process running against your postoffice is using a
	  unique -P0xx value: the gateway programs all have unique values by default;
	  however, each External program must have a distinct value specified on the
	  command line.
	
	- Check that you do not have a mix of version 2.0 and 2.1 external processes
	  running against your postoffice. If so, use the -V20 backward-compatibility
	  option on the command line of the version 2.1 programs.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan Notice 16
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
