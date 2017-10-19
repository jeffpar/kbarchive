---
layout: page
title: "Q199472: SMS: How to Determine Logon Server Used During Network Logon"
permalink: /kb/199/Q199472/
---

## Q199472: SMS: How to Determine Logon Server Used During Network Logon

	Article: Q199472
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbRemote kbSecurity kbServer kbsms200 kbsms120 kbAudit kbNetMon kbNe
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the methods which are available in Windows NT to identify
	which workstation was used by a user to log on to the network. You can use one
	or more of the following methods:
	
	- Method 1: Using Windows NT Auditing.
	
	-or-
	
	- Method 2: Using Microsoft Network Monitor (or other network tracing utility)
	
	-or-
	
	- Method 3: Using Windows NT Diagnostics (NT 4.0)
	
	MORE INFORMATION
	================
	
	Method 1: Using Windows NT Auditing
	-----------------------------------
	
	To use Windows NT auditing to determine which workstation a user accessed to
	logon to the domain, follow these steps:
	
	1. Start "User Manager for Domains".
	
	2. Click Audit from the Policies menu.
	
	3. Click to enable Success for the "Logon and Logoff" category. Optionally, you
	  may also check the Failure box.
	
	After the above procedure has been implemented, Windows NT will create an event
	log for each successful logon attempt. The log will appear like the following
	example:
	
	  Event Detail
	  Date:     06/04/98  Event ID:  528
	  Time:     10:06:43 AM  Source:  Security
	  User:     msolanki  Type:  Success Audit
	  Computer: SMSCENT  Category: Logon/Logoff
	
	  Description:
	  Logon/Logoff: Successful
	  Logon User Name: msolanki
	  Domain: SATHYA
	  Logon ID: (0x0, 0x2D0D0)
	  Logon Type: 3
	  Logon Process: User32 Authentication Pkg:
	  MICROSOFT_AUTHENTICATION_PACKAGE_V1_0
	  Workstation Name: \\JAMES
	
	Method 2: Using Network Monitor
	-------------------------------
	
	To use Network Monitor to determine which workstation a user accessed to log on
	to the domain, follow these steps:
	
	1. Capture all incoming traffic to the domain controller(s). In order to reduce
	  the size of the captured data, follow these steps:
	
	  a. If possible, include only the primary domain controller or backup domain
	     controller that is most likely to validate the user.
	
	  b. Set a capture filter, including only the server message block (SMB)
	     protocol.
	
	  c. Configure a large enough memory buffer through the Buffer Settings option
	     on the Capture menu.
	
	2. After the data has been captured, set a display filter to only include:
	
	  Protocol: SMB
	  Property: Account Name
	  Relation: Exists
	
	This will display all the initial SMB session setup containing the user name and
	the source media access control address.
	
	For example:
	
	Src Mac Addr: Dst Mac Addr: Description
	WKS1          SUNKING       C session setup & X, Username = MariaH, and C
	tree connect & X, Share = \\SUNKING\IPC$
	WKS2          SUNKING       C session setup & X, Username = JoeSmith, and C
	tree connect & X, Share = \\SUNKING\IPC$
	WKS3          SUNKING       C session setup & X, Username = Administrator,
	and C tree connect & X, Share = \\SUNKING\IPC$
	
	In the example above, WKS1 is the computer where the user is logging on from,
	SUNKING is the domain controller authenticating the request, and the Description
	contains the Windows NT domain account being used.
	
	NOTE: The Src Mac Addr may also been shown as a media access control or IP
	address if the NetBIOS name could not be resolved or the entry is not in the
	Network Monitor address database.
	
	Method 3: Using Windows NT Diagnostics
	--------------------------------------
	
	To use Windows NT diagnostics to determine which workstation a user accessed to
	log on to the domain, follow these steps:
	
	1. At the client workstation, click Start, type "Winmsd" (without the quotation
	  marks) in the Open box, and then click OK.
	
	2. On the Network tab, click the General button.
	
	  You will see information similar to the following:
	
	Identifier            Value
	
	Your Access level     Admin; Local
	Workgroup or Domain   SATHYA
	Network version       4.0
	Lan Root              SATHYA
	Logged On Users         1
	Current User (1)      MSolanki
	Logged Domain         SATHYA
	Logon Server          SMSCENT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbClient kbRemote kbSecurity kbServer kbsms200 kbsms120 kbAudit kbNetMon kbNetTrace kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
