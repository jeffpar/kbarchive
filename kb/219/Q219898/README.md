---
layout: page
title: "Q219898: How the Bad Password Count Is Incremented in Windows NT"
permalink: /kb/219/Q219898/
---

## Q219898: How the Bad Password Count Is Incremented in Windows NT

	Article: Q219898
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 25-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The bad password count for users is maintained independently on each domain
	controller in a Windows NT 4.0 domain. This count is increased each time a user
	tries to authenticate with an incorrect password. Depending on the method that
	is used to authenticate, the net effect of the password count may vary.
	
	MORE INFORMATION
	================
	
	The Usr_Info_3 structure maintains the bad password count information for each
	user. The member usri3_bad_pw_count specifies the number of times the user tried
	to log on to the account using an incorrect password. A value of 0xFFFFFFFF
	indicates that the value is unknown. This value is maintained separately on each
	backup domain controller (BDC) in the domain. To obtain an accurate value, each
	BDC in the domain must be queried, and the largest value is then used.
	
	The member's value is incremented by a value of 1 for each attempt to
	authenticate a user. Depending on the method that is used to request the
	authentication, the net effect may vary. The following three examples list
	different mechanisms that require authentication:
	
	User Logging on to a Workstation
	--------------------------------
	
	A Windows NT Server-based or Workstation-based computer maintains a secure
	channel to the domain controller in their domain. This secure channel is used
	for pass-through authentication. Pass-through authentication occurs when a user
	logs on to the computer with a user account from that domain or a trusted
	domain. Pass-through authentication does not occur when a user logs on to a
	computer with an account local to that computer.
	
	The user's credentials are passed to the domain controller through the secure
	channel. RPC calls are the mechanism by which this occurs. The client issues a
	NetrSamLogon request to the domain controller to validate the user's
	credentials. The domain controller then responds with a success or failure
	response. If a failure response occurs, the usri3_bad_pw_count member is
	incremented by a value of 1. The domain controller then returns an error code to
	the client workstation. In the case of a bad password attempt, the return code
	0xC000006A is sent to the client, STATUS_WRONG_PASSWORD. The net effect of a
	logon attempt with incorrect credentials is that the bad password count is
	incremented by a value of 1.
	
	Net Use to a Resource
	---------------------
	
	When a user uses the "net use" command to connect to a remote network resource,
	the user's credentials must be validated. The "net use" command works by using
	Server Messaging Blocks (SMB). An SMB named SESSION SETUP and X is used for the
	connection, and at that time the user's credentials are passed to the network
	resource. If the resource is a domain controller that maintains the user
	account, then the validation occurs locally on that computer. However, if the
	resource must use pass-through authentication to validate the user, the secure
	channel mechanism listed earlier in this article is used. The network resource
	will request a validation of the user from its domain controller. If the user's
	credentials are not valid, the domain controller generates an error to the
	network resource. Also, the domain controller will increment its
	usri3_bad_pw_count for that user. This occurs transparently to the client
	workstation that originated the request. The network resource returns a message
	to the client workstation with the Windows NT status code 0xC000006D,
	STATUS_LOGON_FAILURE. The net effect of using the "net use" command with
	incorrect credentials is that the bad password count will be incremented by a
	value of 1.
	
	Connect to a Resource by Using a Universal Naming Convention (UNC)
	------------------------------------------------------------------
	
	When a remote network resource is connected to by using a UNC name, the user's
	credentials must be validated. A UNC connection works through Multiple UNC
	Provider (MUP) by using Server Messaging Blocks (SMBs). An SMB called SESSION
	SETUP and X is used for the connection, and at that time the user's credentials
	are passed to the network resource. If the resource is a domain controller that
	maintains the user account, then the validation will occur locally on that
	computer. However, if the resource must use pass-through authentication to
	validate the user, the secure channel mechanism listed earlier in this article
	is used. The network resource will request a validation of the user from its
	domain controller, and if the user's credentials are not valid, the domain
	controller will return an error to the network resource. Also, the domain
	controller will increment its usri3_bad_pw_count for that user. This will all
	take place transparently to the client workstation that originated the request.
	The network resource will return a message to the client workstation. That
	message will have the NT status code 0xC000006D, STATUS_LOGON_FAILURE.
	MUP has an slightly different behavior. It will repeat this process at least 3
	times for every attempt that the user makes. The additional attempts are
	transparent to the user and are only observed by taking a trace of the network
	wire. Therefore, programs that take advantage of the MUP provider will exhibit
	this behavior. The net effect of using the "net use" command with incorrect
	credentials is that the bad password count will be incremented by a value of 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351xsearch kbWinNT400xsearch kbWinNTW351xsearch kbWinNTW351 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbWinNTS351xsearch
	Version           : winnt:3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
