---
layout: page
title: "Q248354: Changing Password on Host Security Service Causes SSO to Fail"
permalink: /kb/248/Q248354/
---

## Q248354: Changing Password on Host Security Service Causes SSO to Fail

	Article: Q248354
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies only to Host Security Users who are configured for the Password is Replicated option in Host Account Manager (UDConfig.exe).
	
	SYMPTOMS
	========
	
	Although it's possible to change the service account password that the Host
	Security Services run under, a future problem may eventually occur for end-users
	who are configured to replicate their Windows NT password to an AS/400 user
	database (or a mainframe user database if third-party software is being used).
	This is described in the "More Information" section of this article.
	
	When the Host Security service account password is changed, anytime an end-user
	changes their Windows NT password, the Event Viewer application log records the
	following two events:
	
	  Event 630 - Type:Warning
	
	  RPC Layer returned error 0x5 (Access is denied.) This may happen if host
	  security is not installed or the user account the service is running under,
	  is not privileged to send messages to the remote end.
	
	  Event 670 - Type:Error
	
	  Password Change DLL was unable to open the RPC connection.
	
	If an SNA WinNT Account Synchronization trace (PMPINTx.ATF) was taken during the
	time of a failure, an error similar to the following occurs:
	
	  stisupp.cpp(2795) SendGenericMessage About to invoke RPC on binding
	  dc76dcd0-c084-11cf-a65e-0020afc28c52@ncacn_np:\\\\<Server_Name>
	  0030:0182 10:07:49.0580
	
	  stisupp.cpp(2827) SendGenericMessage RPC on binding
	  dc76dcd0-c084-11cf-a65e-0020afc28c52@ncacn_np:\\\\<Server_Name>
	  returned error: 0x5 (Access is denied. )0030:0182 10:07:49.0580
	
	  stisupp.cpp(2842) SendGenericMessage RPC Layer returned error 0x5 (Access is
	  denied.) This may happen if host security is not installed or the user
	  account the service is running under, is not privileged to send messages to
	  the remote end.0030:0182 10:07:49.0580
	
	  hsevents.cpp(78) HsLogEvent ERROR CODE 0xA1500276, strings:""
	
	CAUSE
	=====
	
	During the Host Security installation, the Setup program stores the Host
	Security service account name and password in the Local Security Authority
	(LSA). In addition to this, another service account copy is managed by the
	Service Configuration Manager (SCM). When the service account password is
	changed, the "new" service account password information is updated to the SCM;
	however, the one stored by the Setup program in the LSA is never updated.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	Lsainput.exe. Lsainput.exe synchronizes the LSA with the new service account
	password being used.
	
	Because all Host Security Services store and retrieve the service account
	password from its own "local" LSA, Lsainput.exe needs to be run on any computer
	where a Host Security component (service) is installed so that every
	local/private LSA copy is updated.
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	WORKAROUND
	==========
	
	A temporary workaround is to change the service account password back to what it
	was before.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	When Windows NT receives a password change, the request is intercepted by the
	SNA Password Change DLL (Snapwchg.dll). This DLL is responsible for coordinating
	the password change between Windows NT and host systems (AS/400 or mainframe).
	Because this DLL communicates with other Host Security components (services)
	through Remote Procedure Calls (RPC), an RPC request is issued to the SNA
	Password Management Process (SNAPMP). Because the LSA was never updated to
	reflect the "new" service account password change, the RPC request fails, and
	the Host Account Cache (HAC) does not get updated. If the HAC is never updated,
	the end-users' "new" Windows NT password change never gets to the AS/400 or host
	system user database.
	
	It is important to understand that even though the HAC is not updated, the
	Windows NT user database is. From this point forward, the Windows NT user
	database is out of sync with the HAC and the host system database.
	
	Although the Windows NT database is now out of sync with the HAC, applications
	written to take advantage of Single Sign-On (SSO) will continue to work as long
	as the host system allows the existing password access. It is here where the
	possibility for future failures might occur.
	
	For example, if an AS/400 or host system enforces rules on user accounts (similar
	to account policies in Windows NT), at some point, the host password will
	expire. When this occurs, if an end-user attempts to synchronize their Windows
	NT Password with the host system, the HAC is never updated, and SSO then fails
	because the password on the host side has expired.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
