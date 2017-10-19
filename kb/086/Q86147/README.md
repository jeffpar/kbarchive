---
layout: page
title: "Q86147: PROFS: Information Required to Troubleshoot Gateway Problems"
permalink: /kb/086/Q86147/
---

## Q86147: PROFS: Information Required to Troubleshoot Gateway Problems

	Article: Q86147
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Troubleshooting problems with the Microsoft Mail Host Access component is
	difficult and different than working on local area network (LAN) problems;
	however, some of the same basic concepts apply.
	
	It is important to obtain the version number of the Host Access software from the
	customer, in order to determine if their problem has already been corrected in a
	subsequent release. The release number is in the RELEASE DATA file on the 193 F
	disk.
	
	Log files can be generated on the VM side of the gateway, also. If the
	ACCOUNT_INFO option in the PWAINIT EXEC file is set to YES, the LOGDATA file
	will be created.
	
	Another useful troubleshooting tool is to trace (or debug) the execution of
	specific programs. Microsoft Development and Testing recommends using the TRAC
	option in PWAINIT EXEC to do this.
	
	REFERENCES
	==========
	
	"Microsoft Mail Host Access for IBM PROFS and OfficeVision VM Administrator's
	Guide"
	
	
	Additional query words: 3.20 pcmail profsvm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
