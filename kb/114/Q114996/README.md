---
layout: page
title: "Q114996: NET.ACC Timestamp Not Accurate Indicator of PDC Backups"
permalink: /kb/114/Q114996/
---

## Q114996: NET.ACC Timestamp Not Accurate Indicator of PDC Backups

	Article: Q114996
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The timestamp on a backup domain controller's NET.ACC file doesn't accurately
	reflect updates sent from the primary domain controller.
	
	MORE INFORMATION
	================
	
	The user accounts database (UAS) is contained in the NET.ACC file, located in
	the \LANMAN\ACCOUNTS subdirectory. Changes to the domain's master UAS database
	are made only at the primary domain controller (PDC), then copied to the backup
	domain controllers (BDCs) and member servers by the Netlogon service.
	
	Changes to user passwords are sent immediately to the BDCs and member servers.
	Other updates are made at intervals based on the pulse parameter in the
	[netlogon] section of the LANMAN.INI file. The default value for pulse is 300
	(seconds).
	
	The NET.ACC file timestamp does not accurately indicate synchronization between
	the PDC and BDC: it merely indicates the last time Netlogon closed the file. For
	instance, if NET ADMIN is running on the BDC, the timestamp on the NET.ACC file
	does not change until you exit NET ADMIN, although updates have occurred in the
	interim.
	
	One quick test is to enable auditing at the BDC:
	
	1. In LAN Manager Setup, select Configuration/Server.
	
	2. Select Settings/Auditing/All Events.
	
	This logs updates in the audit log.
	
	Another option is to use the DOMAINVU utility, which shows differences, if any,
	between update versions of the NET.ACC files on the servers in the domain.
	
	DOMAINVU is available from Microsoft Product Support Services or on the Internet
	on Microsoft's FTP server, FTP.MICROSOFT.COM. Logon as anonymous and use your
	e-mail name as the password. The utility is in the
	\bussys\lanman\unsup-ed\utils\os2 subdirectory.
	
	Additional query words: bdc domainvu syncstat 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
