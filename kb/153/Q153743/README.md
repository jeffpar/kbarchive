---
layout: page
title: "Q153743: Joining a Domain During Automated Setup Fails"
permalink: kb/153/Q153743/
---

## Q153743: Joining a Domain During Automated Setup Fails

	Article: Q153743
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Joining a domain during an automated Windows NT Setup may fail in some
	instances.
	
	CAUSE
	=====
	
	There are various causes for failures. The most common ones are listed below:
	
	1. Problems communicating with a Primary Domain Controller (PDC) during Windows
	  NT Setup.
	
	2. Not creating a new computer account for the system attempting to join the
	  domain.
	
	3. Specifying a Workgroup name as well as a domain name in the answer file.
	
	MORE INFORMATION
	================
	
	You must be able to contact a PDC during Setup if you want to join a domain. If
	the PDC is across a router, you will need to use a routable protocol such as
	TCP/IP. This may also involve configuring a DHCP Server to supply a valid WINS
	Server address or using an LMHOSTS file with #PRE #DOM statements to assist in
	resolving Netbios names. For more information on TCP/IP name resolution, refer
	to the "Name Resolution for Windows Networking" section in the TCP/IP manual
	included with Windows NT Server.
	
	From Cps.hlp included in the Windows NT Resource Kit:
	
	  If you specify a domain to join, there must be a computer account on the
	  server for the domain, and the account must never have been joined to.
	
	Another common problem involves the Ntlanman.inf file that is used in setting up
	the network, including joining a domain. The issue is that Ntlanman.inf first
	attempts to set the Workgroup name by comparing STF_AUTOWORKGROUP to "" (the
	empty string). If this is successful the domain information is ignored. To avoid
	this issue, modify the [DefaultValues] section of your answer file (that is,
	Unattend.txt, Profile.ini, Defaults.inf) as follows:
	
	  DefaultWorkgroup = ""
	
	Do not attempt to comment the line by placing a semicolon in front of
	DefaultWorkgroup.
	
	For more information on automating Windows NT Setup, refer to Volume 1, Chapter 3
	of the Windows NT Resource Kit 3.51.
	
	Additional query words: profile cps unattended install
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.50 3.51
	
	=============================================================================
	
