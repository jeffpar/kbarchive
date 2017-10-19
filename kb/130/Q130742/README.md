---
layout: page
title: "Q130742: Event ID 5721 When Upgrading LAN Manager BDC to Windows NT BDC"
permalink: /kb/130/Q130742/
---

## Q130742: Event ID 5721 When Upgrading LAN Manager BDC to Windows NT BDC

	Article: Q130742
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager to Windows NT Advanced Server Upgrade, version 1.0 
	- Microsoft LAN Manager 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a LAN Manager backup domain controller (BDC) to a Windows NT
	BDC, the NetLogon service terminates and the following is written to the system
	log:
	
	  Event ID: 5721
	  Source: NetLogon
	  Type: Error
	  Description: The session setup to the Windows NT Domain Controller <domain
	  controller name> for domain <domain name> failed because the Windows
	  NT domain controller does not have an account for the computer <computer
	  name>.
	
	CAUSE
	=====
	
	This problem occurs if the computer name is the same as an existing user name.
	For example, if you upgrade a LAN Manager BDC to a Windows NT BDC with a unique
	computer name and then change the computer name to the replaced LAN Manager BDC,
	the above symptom occurs.
	
	When you create a Windows NT primary domain controller (PDC), the PORTUAS utility
	is run to convert the LAN Manager user account database (UAS) to a Windows NT
	security accounts manager (SAM) database. LAN Manager servers have a users group
	called SERVER, which contains the computer names of the servers as users. This
	group and its users were ported to the Windows NT PDC.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Shutdown the new Windows NT BDC.
	
	2. On the Windows NT PDC, remove the BDC computer name from the SERVER group in
	  User Manager for Domains.
	
	3. In Server Manager, remove the BDC computer name and synchronize with the
	  domain.
	
	4. After the synchronization is complete, add the BDC computer name and
	  synchronize with the domain again.
	
	5. Restart the Windows NT BDC.
	
	NOTE: If the domain becomes a Windows NT-only domain, you may want to remove the
	SERVER group and the individual user names in the group.
	
	Additional query words: prodnt lanman 3.10 2.20 event viewer
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS350search kbAudDeveloper _IKkbbogus kbLanManSearch kbLanManNTAdvServUpg
	Version           : :1.0,3.5
	
	=============================================================================
	
