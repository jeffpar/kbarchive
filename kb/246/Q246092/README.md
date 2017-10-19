---
layout: page
title: "Q246092: XADM: How to Modify Outlook LDAP for Foreign Systems"
permalink: /kb/246/Q246092/
---

## Q246092: XADM: How to Modify Outlook LDAP for Foreign Systems

	Article: Q246092
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server allows you to set up a Lightweight Directory Access Protocol
	(LDAP) referral to foreign systems. Microsoft Outlook LDAP referral returns the
	Simple Mail Transfer Protocol (SMTP) address for the foreign system by default.
	In some cases, you may need to have Outlook return a different value from the
	foreign system.
	
	By default, the LDAP service (Ol98ldap.exe) client returns only SMTP addresses.
	You can modify the Mapisvc.inf file on any computer with the LDAP service
	installed to return an LDAP-enabled value from an LDAP server.
	
	MORE INFORMATION
	================
	
	To modify the Mapisvc.inf file:
	
	1. Quit and log off from Outlook 98 or Outlook 2000.
	
	2. Locate the Mapisvc.inf file.
	
	For Outlook 98
	
	On a computer running Microsoft Windows NT, it is located in the Winnt\System32
	folder.
	
	On a computer running Microsoft Windows 95 or Microsoft Windows 98, it is located
	in the Windows\System folder.
	
	For Outlook 2000
	
	On a computer running Windows NT, it is located in the Program Files\Common
	Files\System\Mapi\1033\Nt folder.
	
	On a computer running Windows 95 or Windows 98, it is located in the Program
	Files\Common Files\System\Mapi\1033\95 folder or the Program Files\Common
	Files\System\Mapi\1033\98 folder.
	
	3. Locate the EMABLT section in the Mapisvc.inf file.
	
	4. Locate and change the following two entries:
	
	  6605001e=[Title]
	  6606001e=[Value]
	
	The Title will be the column header that LDAP displays in the results window.
	
	The Value is the value name that is being pulled from the LDAP server on the
	foreign system.
	
	  Example:
	
	  6605001e=Unix X400
	  6606001e=mhsORAddress
	
	Would return the X400 address from a Unix MHS Server.
	
	5. Start Outlook 98 or Outlook 2000 and add a new LDAP directory service in the
	  Tools\Services\Add\Microsoft LDAP folder.
	
	NOTE: The new Mapisvc.inf file settings do not take effect until a new LDAP
	service is added to the profile. If an LDAP directory service was added to the
	profile before the change was made in the Mapisvc.inf file, you must remove the
	LDAP service and add it again.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
