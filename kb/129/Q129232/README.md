---
layout: page
title: "Q129232: Program Group Control Requires Logon Validation"
permalink: /kb/129/Q129232/
---

## Q129232: Program Group Control Requires Logon Validation

{% raw %}

	Article: Q129232
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbPGC smsdatabase smspgc
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Systems Management Server version 1.0 client (such as Windows 3.1 or
	Windows for Workgroups 3.11), runs SMSRUN16.EXE and the Program Group Control
	(PGC), APPCTL16.EXE is called. One or all of the following error messages may
	appear if the client user is not logon-validated by the Windows NT domain
	controller:
	
	- PGC-Could not enemurate applications in applications database.
	
	- PGC-Application database gave error 20
	
	- PGC-Could not find object application list in application database.
	
	- PGC-Could not complete the updating of the program configuration, contact
	  admin.
	
	CAUSE
	=====
	
	This problem occurs because the API call used to determine the global group
	membership fails when the user has not been validated by a domain controller.
	This most commonly occurs on clients that are located on the other side of a
	router from a domain controller and therefore cannot locate a domain controller
	to be validated. Real mode TCP/IP stacks that cannot use the #DOM: entry in the
	LMHOSTS file encounter this error when they are located across a router.
	
	WORKAROUND
	==========
	
	To workaround this problem, ensure users are validated by a domain controller
	when logging into the network.
	
	MORE INFORMATION
	================
	
	For the Program Group Controller to determine the user groups the logged-on user
	belongs to, it must contact a domain controller to obtain the list of groups.
	This will likely be the same server in the domain that validated the logon
	request, so if the logon is not validated, the group list will likely not be
	obtained either. To ensure the users group memberships can be obtained by PGC,
	please ensure the user's logon request is validated by a domain controller.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbPGC smsdatabase smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
