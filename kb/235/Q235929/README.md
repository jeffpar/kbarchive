---
layout: page
title: "Q235929: Single Sign-On Fails if the Windows NT Primary Domain Controller"
permalink: /kb/235/Q235929/
---

## Q235929: Single Sign-On Fails if the Windows NT Primary Domain Controller

	Article: Q235929
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 3.0SP4, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An APPC application configured to use SNA Server's Single Sign-On (SSO)
	Privileged Proxy feature may fail to connect to the host if the primary domain
	controller (PDC) where the primary Host Account Cache (HAC) is running becomes
	unavailable. The APPC application will receive an error message indicating an
	invalid User ID or Password was used when the problem occurs. For example, an
	ALLOCATE issued by an APPC application may fail with an error code of 080F6051
	(AP_SECURITY_NOT_VALID).
	
	NOTE: Applications using the standard SSO (not Privileged Proxy) feature may
	experience a similar problem if the fix described in the following Microsoft
	Knowledge Base article is not applied:
	
	  Q235381 SNA Server Access Violation While Determining Proxy Privilege
	
	CAUSE
	=====
	
	The SNA Server Host Security DLL (Snasii.dll) was originally designed to issue a
	GetDCName() call to locate a Windows NT Domain Controller so that it can
	determine what Windows NT groups the User ID specified by the application
	belongs to so that it can verify if the application's user context is authorized
	to make the request. The GetDCName() call always returns the name of the Windows
	NT PDC. The update discussed in article Q235381 includes a change such that the
	host security DLL calls GetAnyDCName() to do this same function. The
	GetAnyDCname() call returns the names of backup domain controllers (BDCs) as
	well as the PDC. The problem is that this call fails if the PDC is not
	available.
	
	If the PDC is not available, the GetAnyDCName() fails, so the host security DLL
	is not able to verify if the application's user context is authorized to make
	the request that was received. The result is the invalid User ID or Password
	error being returned to the application.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Make sure the PDC for the Windows NT domain is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The Host Security DLL is updated to call NetServerEnum() if the GetAnyDCName()
	fails. The NetServerEnum<A0>() call does successfully return if the PDC is not
	available.
	
	
	The Host Security DLL is also updated to allow it to reconnect to a backup HAC if
	the primary HAC it is communicating with fails for some reason. With this update
	applied, the Host Security DLL can switch from the primary HAC to a backup HAC
	if the primary goes down. It can also locate a backup HAC at startup, even if
	the primary HAC is not running. This "hot backup" feature has the following
	requirements:
	
	- The backup HAC databases must be running on BDCs. The Host Security DLL only
	  looks for DCs. It does not look for Windows NT member servers.
	- A backup HAC database is useful only if it has been able to contact the
	  primary HAC database to read its initial copy of the account database. All
	  backup HAC services delete their copy of the HAC database when they are
	  stopped.
	
	For additional information about SNA Server's Single Sign-On Privileged Proxy
	feature, please see the following article in the Microsoft Knowledge Base:
	
	  Q165385 Single Signon for APPC Applications Using Privileged Proxy
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
