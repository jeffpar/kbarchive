---
layout: page
title: "Q200130: XCLN: How to Return X.400 Addresses with Outlook LDAP Service"
permalink: /kb/200/Q200130/
---

## Q200130: XCLN: How to Return X.400 Addresses with Outlook LDAP Service

	Article: Q200130
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the LDAP service (Ol98ldap.exe) client returns only SMTP addresses.
	
	The Mapisvc.inf file can be modified on any computer with OL98LDAP.exe installed
	to display the X.400 address instead of the SMTP address of the user.
	
	MORE INFORMATION
	================
	
	To modify the Mapisvc.inf file, do the following:
	
	1. Exit and log off the Outlook 98 or Outlook 2000 client.
	
	2. In Outlook 98, locate the Mapisvc.inf file in the <windir>\System or
	  <windir>\System32 directory.
	
	  In Outlook 2000, the default location for the Mapisvc.inf file is in the
	  Program Files\Common Files\System\Mapi\1033\Nt directory.
	
	3. Locate the EMABLT section in the Mapisvc.inf file.
	
	4. Locate and change the following two entries:
	
	  6605001e=X400
	  6606001e=textEncodedORaddress
	
	5. Start Outlook 98 or Outlook 2000 and add a new LDAP directory service in the
	  Tools/Services/Add/Microsoft LDAP directory.
	
	Note: The new Mapisvc.inf file settings do not take effect until a new LDAP
	service is added to the profile. If an LDAP directory service was added to the
	profile before the change was made in the Mapisvc.inf file, you must remove the
	LDAP service and add it again.
	
	Additional query words: VALUPACK CORPLDAP
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,98
	Issue type        : kbhowto
	
	=============================================================================
	
