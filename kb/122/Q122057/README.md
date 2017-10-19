---
layout: page
title: "Q122057: How to Use Remote Control with TCP/IP"
permalink: /kb/122/Q122057/
---

## Q122057: How to Use Remote Control with TCP/IP

	Article: Q122057
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When not using Windows Internet Name Service (WINS) for NetBIOS name resolution
	in a TCP/IP network, the Windows NT system initiating the remote control session
	must have an LMHOSTS file configured with the name and IP address of the remote
	client.
	
	New to SMS 1.2 is the ability to do remote control over TCP/IP sockets. This does
	not require any name resolution to function properly, but instead uses the IP
	address for that client defined in the SMS database.
	
	MORE INFORMATION
	================
	
	In order for Remote Control to work properly on a TCP/IP network without WINS,
	you must configure the LMHOSTS file on the computer running the Systems
	Management Server Administrator (hereinafter referred to as the "server").
	Configure the server's LMHOSTS file as follows:
	
	NOTE: Letters C and E must be located on the 16th position after the opening
	quotation mark. Pad the entry with spaces if necessary. Quotation marks are not
	optional.
	
	Server LMHOSTS Entry
	--------------------
	
	<IP address><tab>"<client name> C" (Letter C activates Remote
	Control)
	
	<IP address><tab>"<client name> E" (Letter E activates Remote
	Chat options on the server side)
	
	Example:
	
	130.20.37.30 "SMS_Client C"
	
	130.20.37.30 "SMS_Client E"
	
	The reason that only the server LMHOSTS file must be configured (as opposed to
	both the server LMHOSTS file as well as the client LMHOSTS file) is that the
	NetBIOS session is always initiated by the server and never by the client.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200
	Version           : winnt:1.0,1.1,1.2,2.0
	
	=============================================================================
	
