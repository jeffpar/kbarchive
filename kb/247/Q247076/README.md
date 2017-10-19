---
layout: page
title: "Q247076: XCLN: Cannot Delete or Hide the Default Internet Newsgroups PF"
permalink: /kb/247/Q247076/
---

## Q247076: XCLN: Cannot Delete or Hide the Default Internet Newsgroups PF

	Article: Q247076
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Exchange Server 5.5 (including Service Packs 1, 2, and 3), you can neither
	delete the Internet Newsgroups public folder nor hide it from the Address Book
	so that it is not visible from the client.
	
	MORE INFORMATION
	================
	
	When you install any of the versions of Exchange Server listed in the "Applies
	to" banner, a folder called Internet Newsgroups is created by default under the
	Public Folder hierarchy. This folder is used by the Internet News Service to
	download messages from the various news servers on the Internet. Any user who
	logs on to Exchange Server sees this folder under the Public Folders\All Public
	Folders hierarchy. When this folder is created during installation of Exchange
	Server, the Hide From Address Book attribute is set to "0," which means it is
	not hidden and, therefore, is visible. This attribute cannot be edited. However,
	you can view the attribute if you start the Exchange Server Administrator
	program in raw mode.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Double-click the Folders object.
	
	3. Double-click the Public Folders object.
	
	4. Double-click the Internet Newsgroups folder.
	
	5. On the File menu, click Raw Properties (or press SHIFT+ENTER from the
	  keyboard).
	
	NOTE: In Exchange Server 5.0, you can hide this folder from the client because
	the Hide from Address Book attribute is editable. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q174306 XADM: Cannot Delete the Internet Newsgroups Public Folder
	
	
	Additional query words: Newsgroups
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
