---
layout: page
title: "Q310091: SSO Fails If Host Security Domain Added Through SNACFG.exe"
permalink: /kb/310/Q310091/
---

## Q310091: SSO Fails If Host Security Domain Added Through SNACFG.exe

	Article: Q310091
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 18-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that are configured to use the Single Sign-On (SSO) feature may
	fail to connect to a host system if the host security domain (HSD) was created
	through the use of SNACFG.exe. The specific symptoms of the problem will depend
	upon the application, but the errors will indicate a logon failure because the
	user credentials forwarded to the host system will be incorrect.
	
	CAUSE
	=====
	
	An internal configuration record that associates a host security domain to its
	assigned host connection is not updated when you add an HSD by using SNACFG.exe.
	
	WORKAROUND
	==========
	
	Create the Host Security Domain by using the Host Security Domain Configuration
	Wizard in SNA Manager.
	
	STATUS
	======
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 Service Pack (SP)
	3, 4.0 SP4.
	
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	
	MORE INFORMATION
	================
	
	When a Host Security Domain is created it must be associated with a host
	connection for the host security features to function correctly.
	
	The ability to create host security domains by using SNACFG.exe was added in SNA
	Server 4.0 SP3. The following Microsoft Knowledge Base article explains the
	functionality that was added:
	
	  Q236847 SNACFG Should Allow Configuration of Host Security Domains
	
	When you are using SNACFG.exe to create an HSD, the /INSERTCONN: parameter is
	used to specify the names of the host connections that are to be assigned to the
	HSD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
