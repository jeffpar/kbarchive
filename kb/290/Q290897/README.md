---
layout: page
title: "Q290897: XADM: Error Message: The Folder Could Not Be Opened"
permalink: /kb/290/Q290897/
---

## Q290897: XADM: Error Message: The Folder Could Not Be Opened

{% raw %}

	Article: Q290897
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to access a
	folder, you may receive the following error message:
	
	  The folder could not be opened. The contents of this public folder are
	  currently unavailable. Either the Microsoft Exchange Server computer
	  servicing this public folder is down or the public folder has not been
	  replicated to this site. See your administrator.
	
	If you use a Microsoft Outlook client to access the same folder, you may receive
	the following error message:
	
	  Unable to display the folder. The contents of this public folder are
	  currently unavailable. Either the Microsoft Exchange Server computer
	  servicing this public folder is down or the public folder has not been
	  replicated to this site. See your administrator.
	
	NOTE: Not all servers in the site may exhibit this behavior when you try to
	access folders in other sites; some clients may be able to connect to some
	remote sites, but not all.
	
	CAUSE
	=====
	
	This issue can occur if the Public Folder Affinity list that contains the site
	has been deleted. When you view the sites in the Affinities list, you may see
	sites that have been removed some time in the past; when you delete a site, the
	site may not be removed from the Affinities list.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start the Administrator program.
	
	2. Click to expand the Configuration container, and then open the Information
	  Store Site Configuration object properties.
	
	3. Click the Public Folder Affinity tab, and then make a note of the sites and
	  their associated costs that are listed in the right pane.
	
	4. Remove all of the entries from the right pane. It is important that you
	  remove all entries.
	
	5. Apply the settings.
	
	  The invalid sites are removed from the available options.
	
	6. Add all of the valid sites that you previously noted to the right pane, and
	  then set the appropriate cost values.
	
	7. Apply the changes.
	
	When you follow this procedure, you are not required to restart the MSExchangeIS
	service; clients and administrators are able to access the folders immediately.
	
	Additional query words: referrals PF
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :4.0,5.0,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
