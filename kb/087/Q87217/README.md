---
layout: page
title: "Q87217: PROFS: Necessary Command-Line Options for HostDisp (or VMGATE)"
permalink: /kb/087/Q87217/
---

## Q87217: PROFS: Necessary Command-Line Options for HostDisp (or VMGATE)

{% raw %}

	Article: Q87217
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HostDisp (or VMGATE) program is written so that it can be run without any
	command-line options. However, some options are usually necessary in most
	environments. These options are as follows:
	
	   Option   Description
	  ------   -----------
	
	  -C       Necessary if you want the program to run in color.
	
	  -E       Necessary if you want to have error messages sent to a
	           specific mailbox on the local-area network (LAN).
	
	  -F       Necessary if you do not have the directory containing the
	           3270 file transfer programs in the MS-DOS path of the
	           gateway PC.
	
	  -L       Required if you want to create a log file for the gateway
	           program's activities.
	
	  -X       Necessary if you want the gateway PC to use NetBIOS to
	           provide mail system users with instant notification of new
	           mail.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's Guide"
	
	Additional query words: 3.00 pcmail profslan command line options
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
