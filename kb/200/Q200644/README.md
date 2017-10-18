---
layout: page
title: "Q200644: SMS: SMS 2.0 NDS Support Requires Recent IntranetWare Client"
permalink: kb/200/Q200644/
---

## Q200644: SMS: SMS 2.0 NDS Support Requires Recent IntranetWare Client

	Article: Q200644
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server 2.0 now has native support for Novell NetWare
	Directory Services (NDS) servers and clients. For the Systems Management Server
	2.0 NDS components to work correctly, the most recent version of the Novell
	IntranetWare network redirector must be installed on the site server.
	
	Without the IntranetWare Client installed on your site server, SMS_EXECUTIVE
	generates an error message indicating NDS Logon Manager stopped:
	
	  Severity: Warning
	  Component: SMS_NDS_LOGON_SERVER_MANAGER
	  Message ID: 2303
	  Description: SMS NDS Logon Server Manager detected that there is no NetWare
	  NDS redirector installed on the site server. SMS NDS Logon Server Manager
	  cannot configure NetWare NDS containers and volumes for the NetWare NDS Logon
	  Discovery and Client Installation methods until an appropriate redirector is
	  installed on the site server.
	
	  Solution: Install an appropriate NetWare NDS redirector on the site server.
	  Please refer to your SMS documentation or the Microsoft Knowledge Base for
	  further information.
	
	STATUS
	======
	
	Microsoft recommends the use of Novell IntranetWare Client version 4.5 or later
	for Windows NT when configuring Bindery Emulation site systems or when
	configuring NDS site systems from a Systems Management Server 2.0 site server.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms nwroles novel net ware
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
