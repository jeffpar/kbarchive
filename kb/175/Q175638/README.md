---
layout: page
title: "Q175638: FTP Login Using Domain and Trusted Domain Accounts"
permalink: kb/175/Q175638/
---

## Q175638: FTP Login Using Domain and Trusted Domain Accounts

	Article: Q175638
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FTP server on a member server computer running Windows NT 4.0 (non- domain
	controller) can validate users using a domain accounts database or the local
	machine accounts database. The FTP server on a Windows NT 4.0 Domain Controller
	can validate users using the local domain accounts database or a trusted domain
	accounts database. However, the guest account setting on the FTP server's local
	machine accounts database and its domain accounts database must be disabled.
	
	MORE INFORMATION
	================
	
	Local accounts database validation is the default validation method for FTP
	servers. The FTP client is validated against the FTP server's local machine
	accounts database.
	
	Local domain accounts database validation occurs if the FTP server is a domain
	controller, the local domain users do not supply their domain-name in
	conjunction with their user name. This is because the local domain accounts
	database is also the local machine accounts database for a domain controller.
	
	Local domain accounts database validation can be enabled on an FTP server which
	is a Windows NT Member Server by adding the registry entries:
	"DefaultLogonDomain: REG_SZ:"MyDomainName" as described in the following
	Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q139341
	TITLE : FTP Server Interaction with Guest Account
	
	However, this setting limits accessibility to local domain users only.
	
	Trusted domain and local domain accounts databases can be used for validation
	when users log on to an FTP server. Users log on to the FTP server using their
	local domain account or trusted domain account. This is accomplished by having
	them log on with their user name in the format
	<domain-name>\<username> and then providing their password. The FTP
	server will either check the local domain accounts database or will use pass-
	through validation to the trusted domain. If the FTP server is a domain
	controller, then local domain users do not supply their domain name, only their
	user name. If the FTP server is a member server, then the domain name must be
	used to validate against a local domain accounts database, as well as a trusted
	domain accounts database.
	
	For a proper log on attempt using a user account in all of the above scenarios,
	the guest account settings in the FTP server's local machines account database
	and its own domain account database must be disabled. The disabled setting is
	needed to require users to use their log on account and password.
	
	WARNING:
	
	Ftp passwords are sent on the net in "clear text" and are easily stolen,
	especially on the Internet. For this reason, many people set up ftp for
	"anonymous only" access, and use file sharing if write access is needed.
	
	Additional query words: winnt file transfer protocol trusting
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis300 kbiis200
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
