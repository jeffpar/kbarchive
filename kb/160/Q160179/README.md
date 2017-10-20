---
layout: page
title: "Q160179: XADM: How to Move a User to a Different Recipient Container"
permalink: /kb/160/Q160179/
---

## Q160179: XADM: How to Move a User to a Different Recipient Container

{% raw %}

	Article: Q160179
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no built-in utility to move a user from one recipient container to
	another. To move a user from one recipient container to another:
	
	1. Make sure the user has all his or her mail in a local .pst file. Also make
	  sure that if the user uses Schedule+ he or she also has a local Schedule+
	  file.
	
	2. Delete the user and then re-create the user in the recipient container that
	  you want the user to be in.
	
	MORE INFORMATION
	================
	
	An alternative way to move a user from one recipient container to another:
	
	1. Export the user into a .csv file and then delete the user.
	
	2. Import the user into the proper container.
	
	This method saves you the step of having to re-create all the user's information.
	A complete CSV file with all possible headers can be found on the Exchange
	Server CD under Support\Samples\Csvs\Mailbox\Mailbox.csv. Exporting to this file
	will ensure that all attributes are preserved. You still have to manually move
	mail to local .pst and Schedule+ files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
