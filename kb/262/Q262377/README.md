---
layout: page
title: "Q262377: SNA Services Fail to Start Due to Logon Failure"
permalink: /kb/262/Q262377/
---

## Q262377: SNA Services Fail to Start Due to Logon Failure

	Article: Q262377
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1 and above,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a computer running SNA Server, the SNABase service or SNAServer
	service may fail to start with the following Event ID:
	
	  
	
	  Event Type:	Error
	  Event Source:	Service Control Manager
	  Event Category:	None
	  Event ID:	7000
	  Date:		5/8/2000
	  Time:		2:15:54 AM
	  User:		N/A
	  Computer:       <servername>
	  Description:
	  The SNABase service failed to start due to the following error: The service did not start due to a logon failure.
	
	  Event Type:	Error
	  Event Source:	Service Control Manager
	  Event Category:	None
	  Event ID:	7013
	  Date:		5/8/2000
	  Time:		2:15:54 AM
	  User:		N/A
	  Computer:       <servername>
	  Description:
	  Logon attempt with current password failed with the following error: 
	  Logon failure: unknown user name or bad password.  
	
	  Event Type:	Error
	  Event Source:	Service Control Manager
	  Event Category:	None
	  Event ID:	7000
	  Date:		5/8/2000
	  Time:		3:07:21 AM
	  User:		N/A
	  Computer:       <servername>
	  Description:
	  The SnaServer service failed to start due to the following error: 
	  The service did not start due to a logon failure.  
	
	When you attempt to start the services manually in Control Panel Services, one of
	the following error messages may occur:
	
	  Could not start the SNABase service on this local computer.
	  Error 2140: An Internal Windows NT error occurred.
	
	  Could not start the SNABase service on this local computer.
	  Error 1069: The service did not start due to logon failure.
	
	  Could not start the SNAServer service on this local computer.
	  Error 1069: The service did not start due to logon failure.
	
	CAUSE
	=====
	
	When you install SNA Server, a domain system account is created that is used by
	the SNA Server services to gain authority to start. Since the time when the
	account was created, the following scenarios may have occurred to cause this
	problem:
	
	- The domain system account no longer exists in the domain specified in the SNA
	  Server service startup properties.
	
	- The password has been changed for the SNA Server service domain system
	  account.
	
	- The SNA Server service domain account resides in a separate domain that is a
	  trusted domain of the current domain where the SNA Server system resides. The
	  trust relationship between these two domains is currently broken.
	
	- The user rights for the SNA Server service domain system account have been
	  altered.
	
	RESOLUTION
	==========
	
	The causes described in the previous section are Windows NT domain account
	issues and need to be resolved by the Windows NT Domain administrator. Please
	see the "More Information" section for specifics on the SNA Server domain system
	account requirements.
	
	WORKAROUND
	==========
	
	In Control Panel Services, configure the SNA Server services that are using a
	domain system account to use the local System Account. This allows the services
	to be stopped and started with authentication by the Local System Account (LSA)
	authority.
	
	NOTE: Remote management from the SNA Server Manager or the SNA Server Microsoft
	Management Console (MMC) snap-in is hindered by using this workaround. SNA
	Server remote management requires a domain system account that uses the Windows
	NTLM Security Support Provider (NTLMSSP) authority. Also, the SNA Server Print
	service may require NTLMSP to print to remote printer queues.
	
	MORE INFORMATION
	================
	
	During the installation of SNA Server is when the SNA domain system account can
	be created. This account has Domain Admin rights and Advanced User rights both.
	For full functionality of the SNA Server services and resources, the following
	Advanced User rights must be granted to the SNA Server domain system account to
	allow the SNA Server services to log on outside of the Domain Admin group:
	
	   - Act as part of the Operating System
	
	- Logon as a Service
	
	- Generate Security Audits
	
	- Load and Unload Device Drivers
	
	- Manage Audit and Security Log
	
	Also, it is recommended that the SNA Server domain system account is a member of
	the Domain Admin group. The password is set to never expire, and is available
	during all hours.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP1 and above,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
