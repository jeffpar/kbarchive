---
layout: page
title: "Q167979: XFOR: How To Add MS Mail Fax Gateway Service To Exchange"
permalink: /kb/167/Q167979/
---

## Q167979: XFOR: How To Add MS Mail Fax Gateway Service To Exchange

{% raw %}

	Article: Q167979
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	------
	
	SUMMARY
	=======
	
	This article explains how to install support for the Microsoft Mail (MS Mail)
	3.x Fax Gateway on computers running Microsoft Exchange Server 4.0 or 5.x.
	
	MORE INFORMATION
	================
	
	To install support for the MS Mail 3.x Fax Gateway, follow the following steps:
	
	1. Using the Exchange Administration Import function, import the Fax.csv file
	  located on the Exchange Client CD in the TPL folder or on the Exchange Server
	  CD in \Setup\<platform>\Tpl\Usa\Fax.csv.
	
	2. Open the Microsoft Mail Connector's Properties page and click the Address
	  Space tab.
	
	3. Click the New General button, and add following address space to the
	  Microsoft Mail Connector:
	
	     Type: FAX
	     Address: <blank>
	     Cost: 1
	
	4. Install the Fax Gateway access component on the Exchange Server shadow
	  postoffice pointing toward the MS Mail Fax Gateway of choice.
	
	5. Stop and restart the MS Mail Connector Interchange service.
	
	6. Recalculate routing.
	
	7. Exit and restart the Microsoft Exchange Client.
	
	8. Go to Compose and click To.
	
	9. Click New. There should now be a Fax template available to the Exchange
	  Client(s). The mail that uses the Fax template should be forwarded through
	  the MS Mail Connector to the MS Mail postoffice where the Fax Gateway
	  software is installed and configured.
	
	For more information on importing address templates, please read "Importing
	Address Templates for Third-Party Mail Systems" in Section 7.2.7 of the Exchange
	Server 4.0 Readme.wri or Section 3.1.5 of the Exchange Server 5.0 Readme.wri.
	
	Additional query words: Fax Gateway TPL
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
