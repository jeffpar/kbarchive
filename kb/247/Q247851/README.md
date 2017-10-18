---
layout: page
title: "Q247851: Problems with Logon Scripts if Exporting Server Is Not PDC"
permalink: kb/247/Q247851/
---

## Q247851: Problems with Logon Scripts if Exporting Server Is Not PDC

	Article: Q247851
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Windows Networking Logon Client Installation or Windows Networking Logon
	Discovery is enabled, and the "Modify user logon scripts" feature is enabled,
	Systems Management Server "assumes" the script exporting server is the primary
	domain controller (PDC). The SMS_NT_LOGON_SERVER_MANAGER writes the SMS logon
	scripts to repl$\Scripts on the PDC, and then replicates them to the NETLOGON
	shares on the PDC and BDC's. In environments that use the Windows NT Directory
	Replicator service, and the PDC is not the script exporting server, the Systems
	Management Server logon scripts may disappear or be overwritten.
	
	CAUSE
	=====
	
	This issue can occur because the Windows NT Directory Replicator service is
	copying files from a different replication source.
	
	RESOLUTION
	==========
	
	To work around this issue and avoid these conflicts, either disable the Windows
	NT Directory Replicator Service, or configure it so the script exporting server
	is the PDC.
	
	MORE INFORMATION
	================
	
	For additional information about Systems Management Server logon scripts
	replication, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q242477 SMS: Login Script Support Files Not Copied After Applying SP1
	
	Additional query words: prodsms logon script directory replicator
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
