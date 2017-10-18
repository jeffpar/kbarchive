---
layout: page
title: "Q215057: SMS: Multiple SMS2 Sites Cannot Use Same NetWare and NDS Servers"
permalink: kb/215/Q215057/
---

## Q215057: SMS: Multiple SMS2 Sites Cannot Use Same NetWare and NDS Servers

	Article: Q215057
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbOSNovell
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Multiple SMS 2.0 sites cannot use the same NetWare Bindary Servers and NetWare
	NDS servers as logon points.
	
	If an existing SMS 2.0 NetWare logon point is selected to be used as the existing
	SMS Site server, the following error occurs:
	
	  MessageId: SRVMSG_NWLGMNGR_ERROR_LOGONPNT_IN_USE
	
	SMS NW Logon Server Manager detected that NetWare bindery server
	"<SERVERNAME>" is already being used as an SMS Logon Point by another SMS
	site.
	
	Solution: Only one SMS site should be configured to use server
	"<SERVERNAME>" as an SMS Logon Point.
	
	Using the SMS Administrator console, remove this server from the list of Logon
	Points used for the SMS NetWare Bindery Logon Discovery and Installation
	methods, either for this site or the site that is currently using this server as
	an SMS Logon Point.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Since ScriptIt is unsupported and due to its limitations, Windows Scripting Host
	may be a better alternative. WSH also has its limitations but it does allow for
	the traditional constructs. For more information please see the Microsoft
	Windows Script Technologies web site at:
	
	  http://msdn.microsoft.com
	
	Additional query words: prodsms netware nw logon point nds
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
