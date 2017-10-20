---
layout: page
title: "Q274480: XADM: Duplicate Object Created When Replicating Objects from Exc"
permalink: /kb/274/Q274480/
---

## Q274480: XADM: Duplicate Object Created When Replicating Objects from Exc

{% raw %}

	Article: Q274480
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When changes are replicated from Exchange Server 5.5 directory objects to
	Windows 2000 Active Directory across the Active Directory Connector (ADC), the
	replication may create new objects instead of modifying the existing Active
	Directory account that is associated with the mailbox.
	
	You may find the following information in the Ex55-2failed.ldf file:
	
	  ADC could not replicate the msExchMasterAccountSid to CN=Winks\,
	  Hank,CN=Users,DC=ACP-INC,DC=LOCAL because this sid is already on the object
	  CN=Hank Winks,OU=ACP,DC=ACP-INC,DC=LOCAL. (Connection Agreement
	  'Exchange/Windows CA MLC 9-11-00' #2200) For more information, click
	  http://www.microsoft.com/contentredirect.asp.
	
	CAUSE
	=====
	
	This issue can occur if the msExchADCGlobalNames value of the existing Active
	Directory object is either missing or corrupted.
	
	RESOLUTION
	==========
	
	WARNING: If you use the ADSI Edit snap-in, the LDP utility, or any other LDAP
	version 3 client and incorrectly modify the attributes of Active Directory
	objects, you can cause serious problems that may require you to reinstall
	Microsoft Windows 2000 Server and/or Microsoft Exchange 2000 Server. Microsoft
	cannot guarantee that problems resulting from the incorrect modification of
	Active Directory object attributes can be solved. Modify these attributes at
	your own risk.
	
	To resolve this issue:
	
	1. Use the Active Directory Administration tool or the Active Directory Service
	  Interface (ADSI) Edit snap-in to copy the msExchADCGlobalNames value from the
	  newly created object to the msExchADCGlobalNames value of the existing
	  object.
	
	2. Verify that the values are identical.
	
	3. Delete the new object.
	
	MORE INFORMATION
	================
	
	For additional information about how to use the Active Directory Administration
	tool or the ADSI Edit snap-in to to copy the msExchADCGlobalNames value from the
	newly created object to the msExchADCGlobalNames value of the existing object,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q274229 XADM: How to Copy Exchange Attributes from One Active Directory
	  Object to Another
	
	
	Additional query words: AD
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
