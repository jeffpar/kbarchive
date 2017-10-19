---
layout: page
title: "Q244542: Doc Err: Host Account Manager Cannot Change Windows NT Password"
permalink: /kb/244/Q244542/
---

## Q244542: Doc Err: Host Account Manager Cannot Change Windows NT Password

	Article: Q244542
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The online documentation for UDConfig (Udconfig.hlp) indicates that it is
	possible to change a Windows NT Password when you using Host Account Manager
	(UDConfig.exe). This is a documentation error.
	
	Host Account Manager is a configuration tool that allows an administrator the
	ability to add or update user account information into a Host Security Domain.
	When configured, this information gets stored into the Host Account Cache
	(HAC).
	
	Host Account Manager may also be install on Windows 95/98 or Windows NT
	Workstation clients, allowing an end-user to manipulate their own cached
	entries.
	
	Though this tool can add or update cached entries and determine whether a user ID
	and password is mapped or replicated, it cannot change a password in the Windows
	NT User database as indicated by the online documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	When you open Host Account Manager, you are presented with the Windows NT Domain
	and Host Security Domain dialog boxes. The Windows NT Domain dialog box includes
	Password and Confirm Password fields. When a "new" password is entered into
	these fields, one of the following scenarios occurs, depending on which action
	is taken.
	
	If you click the Apply button is selected:
	
	- The new password is sent to the AS/400 User database (or host User database
	  if third-party software is being used). If the host or AS/400 User database
	  accepts the password syntax, it changes the password on that system. The
	  password does not get updated in the Windows NT database.
	- The Host Account Cache for this user is updated reflecting the new password
	  change.
	
	If you click the Update Cache button:
	
	- Only the Host Account Cache is updated for this user.
	
	Becuase Host Account Manager does not have the ability to change a password in
	the Windows NT database, this must done through a supported method. The
	following is a list of the methods that are supported:
	
	- Windows NT Server by using User Manager for Domains.
	- Windows NT Workstation by using the CTRL-ALT-DELETE key combination, and then
	  selecting Change Password.
	- Windows 95/98 by clicking the Passwords icon in Control Panel.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
