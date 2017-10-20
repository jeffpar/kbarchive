---
layout: page
title: "Q184623: XFOR: Keeping Notes Users and Groups Out of Dirsync"
permalink: /kb/184/Q184623/
---

## Q184623: XFOR: Keeping Notes Users and Groups Out of Dirsync

{% raw %}

	Article: Q184623
	Product(s): Microsoft Exchange
	Version(s): WinNT:3.2,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to prevent Notes Users and Notes Groups (distribution
	lists) from participating in directory synchronization (dirsync).
	
	This article applies to the Microsoft Exchange Notes Connector as well as the
	LinkAge Message Exchange 3.2 Notes Connector.
	
	Notes users and groups are contained in the Name and Address Book (NAB). By
	default, this database is included in the Names.nsf file. You can access a
	user's personal document by using one of the following three methods:
	
	- Open the Public NAB, highlight the desired user in the NAB, and click Edit
	  Person.
	
	  -OR-
	
	- On the toolbar the appears automatically when you bring up the person
	  document or properties document for an object, person, group, and so forth,
	  click the Actions menu, and then click Edit Person.
	
	  -OR-
	
	- On the same toolbar, you can also highlight a group and click Edit Group.
	
	To prevent the user (or group) from participating in dirsync, perform the
	following steps:
	
	1. In the person's document, expand the Administration section.
	
	2. Set the Foreign Directory Sync Allowed field to No, or delete the word Yes
	  and leave it blank. By default, this field is set to Yes.
	
	3. Save and close the document.
	
	MORE INFORMATION
	================
	
	The Notes Connector will check this field and then proceed to include the user
	(or group) in the dirsync process only if the field is set to Yes. Otherwise,
	the user or group will not be read from the Notes NAB and will not be propagated
	to Exchange Server.
	
	Additional query words: msnc notes
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WinNT:3.2,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
