---
layout: page
title: "Q184151: XADM: Error Message: Unable to Update Public Free/Busy Data"
permalink: /kb/184/Q184151/
---

## Q184151: XADM: Error Message: Unable to Update Public Free/Busy Data

{% raw %}

	Article: Q184151
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make changes to your Microsoft Outlook calendar, you may receive one of
	the following error messages. On a computer that is running Microsoft Windows
	NT, the error message is:
	
	  Unable to update public free/busy data.
	
	On a computer that is running Microsoft Windows 95, the error message is:
	
	  "Unable to update public free/busy data. The contents of this public
	  folder are currently unavailable. Either the Microsoft Exchange Server
	  computer servicing this public folder is down or the public folder has
	  not been replicated to this site. See your administrator."
	
	CAUSE
	=====
	
	Outlook writes directly to the Free and Busy public folder. One of the error
	messages appears if no server in the site has a replica of the Schedule+ Free
	and Busy public folder or if the server containing the replica is unavailable.
	By default, the Free and Busy folder is created on the first server in the site.
	
	WORKAROUND
	==========
	
	You can wait for that server to become available (usually this is the first
	server in the site), or you can perform the following steps to add a replica on
	your server:
	
	1. Click Start, point to Programs, point to Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. If you are opening Exchange Administrator for the first time, click Browse to
	  select the server that you want to administer, and then click OK.
	
	3. In the left pane, select the server container, and then click the plus sign
	  (+) next to the server that contains the Free/Busy information (usually the
	  first server in the site) to expand the branch for the server.
	
	4. Under the server branch, expand the Public Information Store branch, and then
	  click Public Folder Resources.
	
	5. In the right pane, double-click "Schedule+ Free Busy Information".
	
	6. Click the Replicas tab.
	
	7. In the "Replicate folders to" list, add the server that you want to contain a
	  replica of the Free/Busy information.
	
	MORE INFORMATION
	================
	
	You also see this error message if the client permissions are not set for
	Default Editor on the Schedule+ Free and Busy public folder. To change the
	client permissions:
	
	1. Start the Microsoft Exchange Server Administrator program.
	
	2. Expand the Folders container, then expand the System Folders container.
	
	3. Expand the Schedule+ Free Busy container, and click the folder for your site.
	
	4. On the File menu, click Properties.
	
	5. Click the Client Permissions button.
	
	6. Select Editor from the Roles list.
	
	7. Click OK, and then click OK again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
