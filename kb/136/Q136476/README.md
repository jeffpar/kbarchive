---
layout: page
title: "Q136476: Third-Party PPP Clients Cannot Connect to Windows NT RAS Server"
permalink: /kb/136/Q136476/
---

## Q136476: Third-Party PPP Clients Cannot Connect to Windows NT RAS Server

	Article: Q136476
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From your computer running third-party PPP remote access software, you are
	unable to connect to a Windows NT Remote Access Service (RAS) server even though
	your user account is in the user accounts security (UAS) database of the Windows
	NT domain on the remote network.
	
	This symptom does not occur when you connect to a Windows NT RAS server using a
	Microsoft Windows NT RAS or Windows for Workgroups RAS client.
	
	CAUSE
	=====
	
	The Windows NT RAS server cannot find your user account because it is not a
	member of the Windows NT domain and, therefore, does not have a local copy of
	the domain UAS database that contains your user account.
	
	Also, your third-party PPP client software does not provide a domain field
	equivalent to the Microsoft Windows NT RAS or Windows for Workgroups RAS
	software Domain field to tell the RAS server to look for your user account in
	the UAS database of the domain you specify in that field. Therefore, the RAS
	server searches only its own local UAS database.
	
	WORKAROUND
	==========
	
	To work around this problem, contact your administrator to:
	
	- Configure your RAS server as a backup domain controller (BDC) for the domain.
	  A BDC keeps a replicant copy of the domain UAS database locally.
	
	  -or-
	
	- Create a user account for you with RAS dial-in permissions in the RAS
	  server's local (non-domain) UAS database.
	
	  -or-
	
	- Type your user name in using the following syntax:
	
	  <domain>\<username>
	
	  where <domain> is the WIndows NT domain to which the <username>
	  account belongs.
	
	Additional query words: prodnt wfw wfwg Trumpet Chameleon NetManage FTP OnNet
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
