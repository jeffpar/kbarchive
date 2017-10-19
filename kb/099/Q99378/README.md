---
layout: page
title: "Q99378: How LAN Manager System Group Limit Numbers Are Set"
permalink: /kb/099/Q99378/
---

## Q99378: How LAN Manager System Group Limit Numbers Are Set

	Article: Q99378
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	The LAN Manager system 256-group limit sometimes is mistakenly seen as a NetBIOS
	limit by people who confuse LAN Manager GROUPS OF USERS and NetBIOS GROUP
	NAMES.
	
	GROUPS OF USERS
	---------------
	
	GROUPS OF USERS are limited not by NetBIOS, but by the User Accounts System (UAS)
	architectural characteristic of tracking group membership as a 32-byte bitmap.
	
	For creating GROUPS OF USERS, the LAN Manager user accounts database system uses
	an 8-bit number as an identifier, so there can be 256 unique entries. Of these,
	about four are reserved for special system use--the remaining 252 are free for
	individual use. This limit obviously has nothing to do with NetBIOS name or
	session limitations or the redirector.
	
	NetBIOS GROUP NAMES
	-------------------
	
	Windows NT has no architectural limit to the number of entities (users or
	groups), but it is recommended that no more than 10,000 entities be defined per
	domain. NetBIOS GROUP NAMES are used by NetBIOS to allow traffic to be multicast
	to groups of workstations. In LAN Manager each workstation registers a group
	name corresponding to the name of the domain it participates in, as well as for
	each entry in the [othdomains] section of LANMAN.INI.
	
	When a workstation comes up on the net, it broadcasts an ADD_NAME_QUERY for each
	unique name it registers and an ADD_GROUP_NAME_QUERY for each groupname. If any
	other workstation has the same name registered as a unique name, an
	ADD_NAME_RESPONSE frame is issued and the workstation cannot register that name.
	If the name is successfully registered, the redirector posts a RECEIVE.DATAGRAM
	on the name in order to receive any datagrams directed to that specific domain.
	
	Note: The name registration scheme described above is the one used by NetBEUI.
	TCP/IP and other protocols may use a slightly different strategy for fulfilling
	NetBIOS ADD.NAME and ADD.GROUP.NAME requests, but the idea is the same.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2 tinyrfc
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
