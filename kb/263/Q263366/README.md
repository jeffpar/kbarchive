---
layout: page
title: "Q263366: SMS: Performing a Site Reset or Modification Displays Warning"
permalink: /kb/263/Q263366/
---

## Q263366: SMS: Performing a Site Reset or Modification Displays Warning

{% raw %}

	Article: Q263366
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 05-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you run Setup for Systems Management Server and select the "Modify or
	reset the current installation" option on a Systems Management Server Service
	Pack 2 (SP2) site, the following dialog box may appear, even when you are only
	adding additional components:
	
	  Warning:
	  Do you want to reset the server connection account on this computer? The
	  server connection account is the account the remote SMS services use to
	  connect to the site server. If you have account lockout policy enabled, you
	  might not want to reset the server connection account password now because
	  doing so risks locking out the server connection account, which prevents
	  remote SMS services from accessing the site server.
	
	This dialog box was added in Systems Management Server SP2.
	
	MORE INFORMATION
	================
	
	If you have already reset the Server Connection account for Systems Management
	Server, use the Access Control List (ACL) Reset tool (Aclreset.exe) to restore
	access permissions.
	
	For information about the Systems Management Server Recovery Tools and how to
	obtain them, review the Tools section at the following Microsoft Web site:
	http://www.microsoft.com/smsmgmt/techdetails/recovery/
	
	Use the ACL Reset tool every time the server connection account is changed or
	re-created.
	
	
	About the Systems Management Server Connection Account
	------------------------------------------------------
	
	The Server Connection account is the account that Systems Management Servers run
	on remote site systems (such as logon points), to connect to the site server. It
	is used by the following:
	
	- The Systems Management Server Windows NT Logon Discovery Agent service, to
	  gain access to the site server when transferring discovery data.
	
	- The Inbox Manager Assistant component of the Systems Management Server
	  Executive service on remote Client Access Points (CAPs), to gain access to
	  the site server when transferring data.
	
	- Systems Management Server services running on remote site systems, to gain
	  access to the Systems Management Server registry keys and specific
	  directories on the site server.
	
	- The Systems Management Server Provider, to gain access to the Systems
	  Management Server directories on the site server, including the Portable
	  Document Format (PDF) store.
	
	Systems Management Server Setup creates the default Server Connection account
	SMSServer_sitecode on the site server and adds it to the Domain Users group in
	the site server's domain.
	
	Additional query words: prodsms aclreset
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
