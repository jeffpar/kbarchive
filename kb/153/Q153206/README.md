---
layout: page
title: "Q153206: PGC Err Msg: Could Not Open the Application Database"
permalink: /kb/153/Q153206/
---

## Q153206: PGC Err Msg: Could Not Open the Application Database

{% raw %}

	Article: Q153206
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error can occur when running Program Group Control(PGC) on a
	Windows NT Workstation that has Client Services for NetWare (CSNW) installed:
	
	  Could not open the application database. Your configuration will not be
	  updated this time.
	
	Choosing OK causes the following error:
	
	  Could not complete the updating of the program configuration. Please contact
	  your administrator.
	
	MORE INFORMATION
	================
	
	The PGC.LOG shows the following errors:
	
	  Program Group Control ==> Could not find object : Application List in
	  Application Database
	
	  Program Group Control ==> Could not enumerate applications in application
	  database.
	
	  Program Group Control ==> Could not complete the updating of the program
	  configuration. Please contact your administrator.
	
	CAUSE
	=====
	
	The above errors can occur when a Windows NT domain has FPNW Servers that use
	the same computer name as the SMS Logon Servers(Windows NT domain controllers).
	
	RESOLUTION
	==========
	
	Make the FPNW Server Names unique names within the network.
	
	NOTE: The FPNW Help file contains the following statement:
	
	  FPNW Server Name
	
	The FPNW Server Name is the name that NetWare client computers use to refer to
	the server. This name must be different than the server's regular server name.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are currently researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodsms fpnw pgc
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
