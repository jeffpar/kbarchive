---
layout: page
title: "Q270889: XCON: How to Manually Create Site Connectors"
permalink: /kb/270/Q270889/
---

## Q270889: XCON: How to Manually Create Site Connectors

	Article: Q270889
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to manually create a site connector. In the normal
	course of things, it should not be necessary to create a site connector in this
	manner, but for some situations, such as creating a site connector between
	member servers in untrusted domains, this method must be used.
	
	MORE INFORMATION
	================
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by running admin
	  /r.
	
	2. Click the Connections container for your site.
	
	3. On the File menu, click New Other, and then click Raw Object.
	
	4. Select the site connector from the list.
	
	5. Fill in the Directory Name field in the format of: site connector (Replace
	  with the remote site's name).
	
	6. Click the Set button.
	
	7. Change the List Attributes of Type drop-down menu to "All."
	
	8. Find the Domain-Name raw attribute. Fill out the Edit Value field as follows,
	  replacing the words Organization and Site with the organization and site
	  names of the remote site.
	
	  Organization<A7>Site<A7>X400:c=US;a= ;p=Organization;o=Site;
	
	  NOTE: To create the Section Sign character (<A7>), hold down the ALT key and
	  press 0167, then release the ALT key.
	
	9. Click Set.
	
	10. Find the Target-MTAs raw attribute. Fill out the Edit Value field as
	  follows, replacing the word <server> with the remote server name:
	
	  Server<A7>1
	
	11. Click Add.
	
	12. Click OK.
	
	13. Open the properties of the site connector object that you just created, and
	  on the General tab, fill in the Display Name and Cost fields.
	
	14. On the Address Space tab, fill in the X.400 Addressing field for the remote
	  site.
	
	15. On the Override tab, specify an account with the proper permissions in the
	  remote site.
	
	16. Repeat the process on the remote side.
	
	
	Additional query words: site connector untrusted domains member servers
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
