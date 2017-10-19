---
layout: page
title: "Q289495: XADM: Pfadmin Version 1.30 Error Messages"
permalink: /kb/289/Q289495/
---

## Q289495: XADM: Pfadmin Version 1.30 Error Messages

	Article: Q289495
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Pfadmin program from the Microsoft BackOffice Resource Kit, you
	may receive one of the following error messages:
	
	- Error message if users are not found:
	
	  -SETACL TopLevelFolder\SubfolderA\SubfolderB\SubfolderC Default Reviewer
	  Anonymous None Smith, Bill Author All No
	  >Error, user(s) not found: "Smith, Bill"
	
	- Error message if folders are not found:
	
	  -SETACL TopLevelFolder\SubfolderA\SubfolderB\SubfolderC Default Reviewer
	  Anonymous Reviewer All No
	  >Could not find folder "TopLevelFolder\SubfolderA\SubfolderB"
	
	CAUSE
	=====
	
	This issue can occur if Pfadmin does not process the Access Control List (ACL)
	for a folder when one of the error conditions in the "Symptoms" section of this
	article is met. The Pfadmin tool is a Resource Kit utility and, at the time of
	this article's publication, cannot be modified.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following methods:
	
	- If the error message occurs because users are not found, usually some objects
	  are no longer in the Exchange Server directory. To work around this issue,
	  open the Pfadmdat.txt file (the file from which Pfinfo.exe imports ALCs) in
	  Microsoft Notepad or Microsoft Word, and then parse through the file manually
	  to remove the objects (mailboxes, Distribution lists, and so on) that are
	  listed immediately following the "Error, user(s) not found:" line.
	
	- If the error message occurs because folders are not found, usually the
	  specified folders do not have an instance on the local server or site on
	  which Pfadmin is run. To work around this issue, make sure that a replica or
	  instance of the specified folders exists on the local public folder Exchange
	  Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
