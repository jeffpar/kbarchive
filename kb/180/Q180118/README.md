---
layout: page
title: "Q180118: XADM: Information Available in the Offline Address Book"
permalink: /kb/180/Q180118/
---

## Q180118: XADM: Information Available in the Offline Address Book

{% raw %}

	Article: Q180118
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Enhancements to the details file for the Microsoft Exchange Server Offline
	Address Book (OAB) now allow much more information to be available to the
	offline user. In previous versions of Exchange Server (4.0 and 5.0), the details
	downloaded with the Offline Address Book were limited to the following: display
	name, department, office, and phone number. These details are available on the
	General tab. The business phone number is available on the Phone/Notes tab.
	
	MORE INFORMATION
	================
	
	With Exchange Server version 5.5, more details are available. The details
	available are:
	
	On the General Tab
	------------------
	
	First name, Middle Initials, Last Name, Display name, Alias, Address, City,
	State, Zip code, Country, Title, Company, Department, Office, Assistant, and
	Phone.
	
	Phone/Notes Tab
	---------------
	
	Business phone, Business phone 2, Fax, Assistant, Home phone, Home phone 2,
	Mobile, Pager, Notes
	
	E-mail Addresses Tab
	--------------------
	
	Email Addresses
	
	When you download the OAB (on the Tools menu, Click Synchronize, and then click
	Download Address Book), a couple of options are available. If this is not the
	first time you are synchronizing the OAB, you can select the Download Changes
	Since Last Synchronization checkbox. The other options are Information to
	Download, Full details, and No Details. Full Details will allow you to see the
	details of the addressee. No Details will allow you to resolve an address in the
	OAB, but you will not be able to see the details file.
	
	The OAB with details does not download the members of a Distribution List. Due to
	the large number of users that can be added to a single Exchange Server
	Distribution List, the members of a Distribution List are not downloaded to the
	OAB.
	
	Additional query words: attribute attributes
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
