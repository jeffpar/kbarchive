---
layout: page
title: "Q224286: SMS: Client Accounts Used in Software Distribution"
permalink: kb/224/Q224286/
---

## Q224286: SMS: Client Accounts Used in Software Distribution

	Article: Q224286
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the client accounts that are used for software
	installation with Systems Management Server (SMS) 2.0 Software Distribution on
	32-bit clients.
	
	The information in this article is organized into the following sections:
	
	- Microsoft Windows 95/98 client overview
	- Microsoft Windows NT 4.0 client overview
	- Connection to distribution point
	- User context advertisements
	- Service context advertisements
	- Windows NT Software Installation account advertisements
	
	MORE INFORMATION
	================
	
	Windows 95/98 Client Overview
	-----------------------------
	
	Computers that are running Windows 95 or Windows 98 run all programs in the
	security context of the user that is currently logged on.
	
	Windows NT 4.0 Client Overview
	------------------------------
	
	Computers that are running Windows NT 4.0 can run programs in one of two
	different security contexts: the logged-on user context or the service context.
	By default, SMS tries to install all software in the context of the logged on
	user. If the user does not have sufficient rights, SMS installs the program in a
	service context.
	
	Connection to Distribution Point
	--------------------------------
	
	Network abstraction layer (NAL) first checks to determine if there is an existing
	connection to the server or network share, and if so, uses that connection
	regardless of what credentials are used. If no existing connection to the server
	or network share is found, it attempts to make a connection using the current
	context. In this case, Windows NT 4.0 uses the context of any other connection
	made to the server (as opposed to the server or share that was explicitly tested
	for earlier).
	
	After all of the existing or "current context" options are exhausted for
	connecting to the DP, NAL attempts the connection with each of the "client
	network connection accounts" specified by the administrator (or automatically
	during Setup). The "client network connection accounts" should never have any
	rights to anything on the client computer nor be members of any groups on the
	client.
	
	Note that knowledge of the password to any of these accounts for, or from, a
	given client does not provide access to any resources on a different client,
	except that access to the "client token account" on one domain controller can
	provide Administrator group rights on all other controllers in that domain.
	
	User Context Advertisements
	---------------------------
	
	Advertisements that are run under the context of the logged on user are
	controlled by Pea32.exe. No additional rights or group memberships are given to
	the process. For access to the DP, NAL carries out the same process as described
	above except that it may succeed when it attempts with the "current context"
	because the logged on user context probably has access to the DP and CAP.
	
	Service Context Advertisements
	------------------------------
	
	Advertisements that are run on a workstation on which the logged on user does not
	have adequate rights are controlled by Smsapm32.Exe. This program runs in the
	"pseudo-service" security context under the "client token account" (SMSCliTokn).
	The "client token account" has membership in the local Administrators group and
	the "Act as part of the operating system" computer right. If the client computer
	is a domain controller, this is a single domain account used by all domain
	controller SMS clients within the domain. If the client computer is not a domain
	controller, this account (with the same name) is created in the local SAM
	database on each client computer. This "client token account" is the account
	that Smsapm32.exe is running under, and is therefore the account which the
	program will be running under when the CreateProcess APM call is spawned.
	
	Windows NT Software Installation Account Advertisements
	-------------------------------------------------------
	
	The purpose of the Windows NT Software Installation account is to allow a program
	to run on clients but to also have access to specific non-SMS network resources
	(a Microsoft Exchange server, for example). The administrator must designate the
	Windows NT Software Installation account for a particular software distribution
	program to use when the administrator defines the program properties.
	Administrators should specify a Windows NT Software Installation account that
	has access to the necessary non-SMS network resources, access to the SMS DP
	share and folders for the package, and is in a domain trusted by the client
	computer (so that LogonUser is possible with this account).
	
	
	Note that the Windows NT Software Installation account need not be granted any
	rights on client computers either directly or through group membership. The SMS
	client components grants membership in the local Administrators group, and
	certain user rights, at the time a client computer is about to run the program.
	This membership and attendant user rights are removed when the program
	finishes.
	
	
	NOTE: The connection to the Distribution Point in Windows NT 4.0 uses the context
	of any other connection made to the server (as opposed to the server or share
	that was explicitly tested previously) or attempts the process's current
	context(the "client token account").
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
