---
layout: page
title: "Q158028: XADM: Changing the Exchange Organization Name"
permalink: /kb/158/Q158028/
---

## Q158028: XADM: Changing the Exchange Organization Name

{% raw %}

	Article: Q158028
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 20-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Changing the Microsoft Exchange Organization name is a complex task. If you
	change the Microsoft Exchange Organization name, you must reinstall Microsoft
	Exchange Server on all servers in all sites.
	
	This article explains how to change the name of a Microsoft Exchange
	Organization.
	
	NOTE: You will need to create new client profiles for all users with mailboxes
	within the site. The Outlook client profile caches the X500 directory name of
	the mailbox server.
	
	If you do not create a new profile, you may receive the following application
	event IDs on the server:
	
	Event ID: 1023
	MsExchangeIS Private
	Type: Failure Audit
	Category: Logons
	
	Description: Domain\User was validated as
	/o=ORG/ou=SITE/cn=Recipients/cn=USER
	but was unable to log on to /o=OLDORG/ou=OLDSITE/cn=Recipients/cn=USER.
	
	MORE INFORMATION
	================
	
	To change the name of a Microsoft Exchange Organization, follow the steps
	below:
	
	1. Copy all user mail to Personal Folders (PST file).
	
	2. Copy all Public Folders to Personal Folders (PST file).
	
	3. Using the Microsoft Exchange Server Administrator program, export all
	  mailboxes, custom recipients, and distribution lists to a .csv file.
	
	4. Modify the .csv file created in Step 3, replacing all instances of the old
	  Organization name with the new name.
	
	5. Remove and reinstall Microsoft Exchange with the required Organization and
	  Site names.
	
	6. Using the Microsoft Exchange Server Administrator program, import all the
	  data from the .csv file created in steps 3 and 4.
	
	7. Move the mailbox and Public Folder information from the PST file(s) created
	  in steps 1 and 2 to the server-based store.
	
	The above steps will have to performed on each server in each site of the
	Microsoft Exchange Organization. All connectors will have to reinstalled. If the
	Key Management server was installed, it will have to reinstalled and all
	mailboxes will have to security enabled again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
