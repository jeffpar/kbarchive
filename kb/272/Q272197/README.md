---
layout: page
title: "Q272197: XCCC: How to Restrict  OWA Address View Searches"
permalink: /kb/272/Q272197/
---

## Q272197: XCCC: How to Restrict  OWA Address View Searches

{% raw %}

	Article: Q272197
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to restrict Exchange 2000 Outlook Web Access (OWA)
	address view searches.
	
	MORE INFORMATION
	================
	
	WARNING: If you use the ADSI Edit snap-in, the LDP utility, or any other LDAP
	version 3 client, and you incorrectly modify the attributes of Active Directory
	objects, you can cause serious problems. These problems may require you to
	reinstall Microsoft Windows 2000 Server, Microsoft Exchange 2000 Server, or
	both. Microsoft cannot guarantee that problems that occur if you incorrectly
	modify Active Directory object attributes can be solved. Modify these attributes
	at your own risk.
	
	If you access e-mail using Exchange 2000 OWA, you do not have the user rights for
	Active Directory that are applied to folder queries. This setting effectively
	enables you to see all users in the Active Directory directory service
	regardless of the Access Control Lists (ACLs) that have been assigned.
	
	In an Exchange 2000 application service provider (ASP) environment, if you are an
	administrator, you can restrict users from viewing the address lists to their
	own organizational unit, but not the entire global address list. Use the
	msExchQueryBaseDN attribute on each user that uses Exchange 2000 OWA to control
	the scope of searches that OWA performs. This attribute is not exposed in
	Exchange Server Microsoft Management Console (MMC). To configure this attribute,
	use Adsiedit.exe, which is available on the Windows 2000 CD-ROM. To install
	Adsiedit.exe:
	
	1. Extract Adsiedit.dll from the Support.cab file in the Support\Tools folder on
	  the Windows 2000 Server CD-ROM.
	
	2. Copy this file to the <Winnt>\System32 folder.
	
	3. At a command prompt, type "regsvr32 adsiedit.dll" (without the quotation
	  marks).
	
	4. Add the ADSIEdit snap-in to MMC.
	
	To restrict OWA address view searches:
	
	1. Start the ADSIEdit snap-in, and then click Connect To on the Action menu.
	
	2. Click Domain NC.
	
	3. Click a computer or domain to connect to, or click OK to use the domain or
	  server that you are logged into, and then click OK to accept these settings
	
	  In this example, use ASPHosting.com.
	
	4. Click "DC=ASPHosting, dc=COM".
	
	5. Locate and click the Customer1.com organizational unit, and then right-click
	  the user to which you want to set viewing restrictions.
	
	6. Click msExchQueryBaseDN in the "Select a property to view" box.
	
	7. Copy the LDAP address that represents that user's organizational unit in the
	  "Edit attribute" box. For example, ou=customer1, DC=ASPhosting, dc=COM.
	
	8. Click Set, and then click OK.
	
	Additional query words: ad name resolution
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
