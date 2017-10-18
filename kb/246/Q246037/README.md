---
layout: page
title: "Q246037: XADM: Public Folders &amp; Deleted Item Recovery in Exchange Server"
permalink: kb/246/Q246037/
---

## Q246037: XADM: Public Folders &amp; Deleted Item Recovery in Exchange Server

	Article: Q246037
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The item recovery process in Exchange Server 5.5 has made it much easier to
	recover the contents of public folders. The recovery process does not recover
	all properties of the original public folder. The "More Information" section
	discusses some of the major implications of recovering a public folder through
	item recovery.
	
	MORE INFORMATION
	================
	
	You can recover most properties of a public folder such as content, permissions,
	forms associated with the folder, and folder rules. However, the following items
	will be recovered but altered:
	
	- The Display Name and Obj-Dist-Name attribute of that folder will be appended
	  by the word "recovered", for example:
	
	  /o=XADM/ou=SITE1/cn=Recipients/cn=NPF
	  2947606749476067494760674584AC1000007DD
	
	  /o=XADM/ou=SITE1/cn=Recipients/cn=NPF2(RECOVERED)
	  947606749476067494760674584AC1000007DE
	
	  The directory object is recreated and causes a replication of both the folder
	  content and directory object to other servers in the site as well as other
	  sites if replicas have been created. Attributes that are linked to the public
	  folder are also altered by this re-creation, including USN created, USN
	  changed, and object Version Number. The folder will have a new creation date.
	
	- The word "recovered" is appended to the e-mail addresses of that folder such
	  as SMTP, X.400, cc:Mail, plus others depending on the connectors installed.
	
	  This could also be an issue if a user is sending mail to the old address by
	  replying to a message or if the e-mail address is being stored in either an
	  offline address book or personal address book.
	
	  Changing the Display Name of the folder has no effect on the addresses.
	
	- It resets the public folder replica lists, and they must be re-created.
	
	Additional Information
	----------------------
	
	In a public folder, the views are not stored with the folder but are kept in a
	separate system folder. These views are referenced by the public folders as a
	back link. Therefore, if you recover the folder or move or copy it to a .pst
	file, the link back to the view is broken, and views are lost.
	
	This is different from the Views in mailboxes, which are stored as hidden folders
	within individual mailboxes. For additional information, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q228934 XCLN: Understanding Deleted Item Recovery
	
	
	  Q180117 XADM: Recovering Deleted Items from a Public Folder
	
	  Q189300 Unable to Recover Nested Public Folder
	
	Additional query words: dumpster
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
