---
layout: page
title: "Q231461: XADM: Moving Mailboxes to a Different Recipient Subcontainer"
permalink: /kb/231/Q231461/
---

## Q231461: XADM: Moving Mailboxes to a Different Recipient Subcontainer

{% raw %}

	Article: Q231461
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to move mailboxes to a different recipient
	subcontainer and to change the name of a recipient subcontainer or container.
	
	NOTE: If you delete a mailbox in the original container, and then create a new
	mailbox with the same name in a new container, the messages in the old mailboxes
	are destroyed permanently.
	
	MORE INFORMATION
	================
	
	By design, when you use the Move Mailbox functionality in the Microsoft Exchange
	Server Administrator program, you cannot move a user to a different container on
	the same server or a different server within the same site, and you cannot move
	the user to a different site.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q160179 XADM: How to Move a User to a Different Recipient Container
	
	
	To move any number of mailboxes (for example, mailboxes from an entire department
	to a new subcontainer) and to change the name of a subcontainer:
	
	1. Start the Administrator program, and then click Directory Export on the Tools
	  menu to export the individual subcontainer using either a custom .csv file
	  created by Header.exe or using any of the following .csv files from the
	  Exchange Server 4.0 CD-ROM:
	
	   - Mailbox.csv (for mailboxes only)
	
	   - Custom.csv (for custom recipients only)
	
	   - Dl.csv (for distribution lists only)
	
	2. Perform step one of the two-step Exmerge process to export the mail for the
	  users in the subcontainer to individual .pst files.
	
	3. If you are moving all the users in the subcontainer, delete the recipient
	  subcontainer. If you are moving only part of the mailboxes out of the
	  subcontainer, delete only the mailboxes within the subcontainer.
	
	4. In the Administrator program, click the Exchange Server computer name,
	  double-click the directory service in the right pane, and then click Update
	  Now.
	
	  Make sure the deletion has replicated throughout the site.
	
	5. If the new subcontainer does not already exist, use the Administrator program
	  to create the subcontainer or new container.
	
	6. Edit the .csv file to change the name of the recipient subcontainer.
	
	7. On the Tools menu, click Directory Import, and then use the .csv file to
	  import the mailboxes into the proper subcontainer.
	
	8. Perform step two of the two-step Exmerge process to import the mail from the
	  .pst files back into the individual mailboxes.
	
	NOTE: Test the directory import and export procedure on a recovery server first
	before you perform it on a production server.
	
	Exmerge.exe is available in Microsoft BackOffice Resource Kit version 3.0. The
	latest version is available from Microsoft Product Support Services that is
	located at the following Microsoft Web site:
	
	  http://support.microsoft.com/directory/question.asp?sd=gn&fr=0
	
	NOTE: Messages that are imported with Exmerge no longer have single instance
	storage.
	
	For additional information about directory import and export, the use of the
	Exchange Server 4.0 .csv files, the use of the Header.exe tool, and ExMerge.exe,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	  Q169761 XADM: Sample CSVs Not Included on Exchange Server 5.0 or 5.5 CD
	
	  Q265441 XADM: Some Questions and Answers About the Exmerge Utility
	
	For additional information about how to move distribution lists between different
	recipient containers, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q258738 XADM: Moving Distribution List to Different Recipients Container
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
