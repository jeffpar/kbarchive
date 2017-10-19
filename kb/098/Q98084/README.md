---
layout: page
title: "Q98084: LAN Manager MS-DOS NET LOGON: LANAs and Validation"
permalink: /kb/098/Q98084/
---

## Q98084: LAN Manager MS-DOS NET LOGON: LANAs and Validation

	Article: Q98084
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	This article explains how the Net Logon command on MS-DOS LAN Manager
	workstations functions in relation to LANA numbers. It describes how to
	determine which LANA to use for a logon validation request, and explains the
	relative importance of validation. For more information on LANA numbers, LANA
	bases, and send/receive order, query on the following words in the Microsoft
	Knowledge Base:
	
	  LANAs and MS-DOS
	
	
	MORE INFORMATION
	----------------
	
	The Rule
	--------
	
	On MS-DOS LAN Manager workstations (not OS/2), logon requests are sent out ONLY
	on the first valid network--defined as a loaded and bound protocol driver with
	the lowest LANA number, which is not necessarily LANA 0. Therefore, in order to
	be validated during logon, a domain controller must be running the same protocol
	that you have loaded for your workstation's first valid network.
	
	NET LOGON Flow
	--------------
	
	Two fundamental functions occur when you logon: validation and local name
	registration. The next two sections list and explain possible events that can
	take place within each function.
	
	A. Validation
	-------------
	
	1. The domain controller receives your logon request.
	
	  a. Your account name is recognized and your password is authenticated. You
	     will receive the message "The server SERVERNAME successfully logged you on
	     as USERID." Go to B.
	
	  b. Your account name is recognized but your password fails authentication.
	     The message "NET3779: Your logon attempt has failed due to an incorrect
	     username or password" is displayed. Go to End.
	
	  c. Your account name and password were recognized but your password has
	     expired. You will be prompted to enter a new password. Go to B.
	
	  d. The domain controller receives your request but it does not know your user
	     ID. See step 2 below. Same symptoms; go to 2.
	
	2. No domain controller receives your logon request. You receive the message
	  "You were logged on, but have not been validated by a server. Net 3778: ..."
	  Ignore the 3778 error. The important information here is that you were logged
	  on, which really means that Step B below was completed. You were not
	  confirmed or denied by a domain controller.
	
	B. Name resgistration
	---------------------
	
	Register your account name and password in your local tables. This information is
	used whenever you try to access a network resource. For example: When you do a
	NET USE you pass your user ID and password to the server, which checks the
	privilege level you have for that resource. This is the key security mechanism,
	not validation.
	
	The only logon possibility that truly fails is 1b: account recognized but
	password not validated. All the others allow you to register your account and
	password locally on your system. This is much more important in the overall
	security scheme than validation.
	
	NET LOGON Network Frames
	------------------------
	
	The NET LOGON command issues frames on the LAN destined for the NETLOGON service
	running on a domain controller. A maximum of four mail slots addressed to
	\\MAILSLOT\NET\NETLOGON will be sent out to the domain. The mail slot transact
	Server Message Block (SMB) is sent on NetBIOS Send_Datagram frames addressed to
	the domain name. Which transport these travel on can vary according to protocol.
	For NetBEUI, the datagram is sent to the multicast address [0300000000001] that
	all other NetBEUI systems register as a group address. TCP/IP sends the datagram
	as a broadcast to the broadcast station address [FFFF FFFF FFFF hex].
	
	There is no way to limit the number of frames sent out during validation. NET
	LOGON always sends a maximum of four \\MAILSLOT\NET\NETLOGON frames. When a
	controller responds to a request, no more attempts are submitted.
	
	NET LOGON Miscellaneous Notes
	-----------------------------
	
	There is no way to override the LANA used during validation. The WRKNETS
	parameter does not affect the NET LOGON command.
	
	The LAN Manager server processes a validation request on all protocols it has
	loaded regardless of load order, LANA number, etc. SRVNETS is the only way to
	disable a server protocol from participating in validation.
	
	On LAN Manager workstations, use the /DOMAIN: option to specify which domain you
	want to be validated in. For example:
	
	NET LOGON USERID PASSWORD /DOMAIN:domain_name
	
	Additional query words: 2.20 2.2 2.1 2.10 2.10a 2.1a 2.0
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
