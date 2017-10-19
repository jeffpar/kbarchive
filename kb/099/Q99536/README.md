---
layout: page
title: "Q99536: Cross-Domain and Guest Access Between Windows NT and OS/2"
permalink: /kb/099/Q99536/
---

## Q99536: Cross-Domain and Guest Access Between Windows NT and OS/2

	Article: Q99536
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	Cross-domain and guest access issues can be confusing. This article discusses
	some basic characteristics of these aliases.
	
	Consider this example: your Windows NT Advanced server is the domain controller
	for Domain\A, and you have problems seeing or using printers from LAN Manager
	Domain\B. This could be a very simple problem: you are connecting to a printer
	on a non-NT machine, so you must have the correct printer driver set up on your
	own workstation. Often, however, it is a permissions/account problem. Here are
	two possibilities:
	
	Possibility 1: There may already be an account with the same name but a a
	different password on the other domain or workstation.
	
	Possibility 2: You are logged on as DomainA\john, and have no account on
	Domain\B. Unless Domain\A is a trusted domain for DomainB you have to rely on
	guest rights or secure an account DomainB\john with the same password you have
	on your DomainA account. This is the same the way you must do things now with
	LAN Manager.
	
	Use the Administrator account to get access that is denied on other machines,
	even if you could have secured guest access.
	
	POSSIBILITY 1--PASSWORD PROBLEMS
	--------------------------------
	
	Why would the same account with different passwords cause access to be denied?
	The Domain\B server receives a request "Hi, I'm john from Domain\A, my password
	is q," and responds "You can't be john, that's not his password here--Access
	Denied." If the request comes from an account that does not exist on the
	Domain\B server, it responds "Well, I don't know you Biff, but I'll give you
	guest access" (if the server has a guest account enabled).
	
	In this regard, Windows NT and OS/2 LAN Manager are the same. There are some
	differences, however, when trusted domains are involved.
	
	POSSIBILITY 2--TRUSTED DOMAINS
	------------------------------
	
	The Domain\B controller may not recognize the request "I'm john from Domain\A, my
	password is q." If Domain\A is a trusted domain, however, the Domain\B server
	checks the password with the Domain\A controller, rather than simply deny
	access. If the Domain\A controller says the password is correct for the account,
	the Windows NT server checks the account's access privileges to the resource in
	question and grants the same privileges allowed in Domain\A.
	
	MS-DOS or OS/2 clients send the Windows NT server only their user name and
	password because they do not support the extended Server Message Block (SMB)
	protocol; Windows NT clients identify their domain as well, which the server
	checks against the list of trusted domains. If it matches, the server grants the
	requester the same privileges allowed in its own domain. If the account or
	domain is unknown to the server, it compares the requester's password against
	the guest account password (if that account is enabled) and grants guest
	privileges if it checks out.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
