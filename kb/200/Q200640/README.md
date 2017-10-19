---
layout: page
title: "Q200640: SMS: If the Temp.Tcf File Is Deleted, CCIM May Fail"
permalink: /kb/200/Q200640/
---

## Q200640: SMS: If the Temp.Tcf File Is Deleted, CCIM May Fail

	Article: Q200640
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbDiscovery smsinst
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, if Manual Discovery and Installation is the
	only installation method, and the Temp.tcf is deleted or renamed, Client
	Configuration Installation Manager (CCIM) will fail to run discovery until
	Systems Management Installation Wizard (SMSMAN) is run again.
	
	You will see the following errors in the Ccim.log file:
	
	  ERROR: No discovery methods were found in the .tcf file.
	  ERROR: Unable to collect discovery data, CollectDiscoveryData returned
	  2147483656
	  CCIM16 - Retry in 10 minutes
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The startup process reads the appropriate .tcf file at the logon point, and
	creates the local version on the client. Note that the file is modified with
	client specific information. As long as a user logs on and runs the Systems
	Management Server logon script (SMSLS), or manually runs SMSMAN or SMSMAN16, the
	.tcf file will be regenerated and CCIM will discover as normal.
	
	Additional query words: prodsms cli32
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbDiscovery smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
