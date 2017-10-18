---
layout: page
title: "Q87189: PROFS: Using -P0xx and -V20 Options on Command Line"
permalink: kb/087/Q87189/
---

## Q87189: PROFS: Using -P0xx and -V20 Options on Command Line

	Article: Q87189
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The -P0xx and -V20 options are critical to the correct operation of the
	Microsoft Mail gateway program and the mail system. They should be used in
	accordance with the specifications described below.
	
	When you run the gateway program (HostDisp or VMGATE) without specifying a -P0xx
	option on the command line, process number 097 is used by default. If you are
	also running the External program against the same postoffice database, you must
	use a unique -P0xx value on the External command line. Generally, values from
	001 to 070 are not reserved by any other Microsoft Mail programs, and can be
	used by External.
	
	If you are using a variety of external processes on a postoffice (some version
	2.0 and some version 2.1), you need to use the -V20 command-line option. This
	option is used on the command line of the version 2.1 processes, to have them
	use the version 2.0 file-locking method. If all processes are version 2.1, you
	do not need to use the -V20 option.
	
	Incorrect or missing -P0xx or -V20 options usually cause missing mail and
	duplicate headers in users' mailboxes. For more information, please refer to the
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide."
	
	
	Additional query words: 3.00 pcmail profslan -P0xx -V20 command line options
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
