---
layout: page
title: "Q87180: PROFS: Errors on Gateway PC"
permalink: kb/087/Q87180/
---

## Q87180: PROFS: Errors on Gateway PC

	Article: Q87180
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With version 3.0 of the Microsoft Mail Gateway to IBM PROFS, any time the
	gateway program exits to MS-DOS, it displays an MS-DOS Errorlevel return code in
	the range 60 to 255. These return codes are documented in the "Microsoft Mail
	Gateway to IBM PROFS and OfficeVision LAN Administrator's Guide," and their
	numbers do not conflict with older versions of the gateway program.
	
	For older versions of HostDisp, the DOS Errorlevel return codes are defined
	between 1 and 59. Contact Microsoft Product Support Services if you receive one
	of these errors and would like a more detailed description.
	
	Other noncritical errors that do not cause the gateway program to exit to MS-DOS
	are noted on the screen and in the log file. In these cases, a message is
	normally sent to the LAN administrator, describing the error condition.
	Generally, these types of errors result in files being copied to the VMGATE\ERR
	directory.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan errors
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
