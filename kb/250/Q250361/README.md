---
layout: page
title: "Q250361: XFOR: Blank Outlook Contacts from Migrated cc:Mail DB8 PAB"
permalink: kb/250/Q250361/
---

## Q250361: XFOR: Blank Outlook Contacts from Migrated cc:Mail DB8 PAB

	Article: Q250361
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 30-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Migrated Lotus cc:Mail database version 8 (DB8) users who have personal address
	book (PAB) entries may receive a message that has "Migrated Message File Address
	Book (PAB)" as the subject, which contains instructions to import the .pab file
	attached to the message as a Microsoft Mail File (.mmf) for the Microsoft
	Outlook client for Windows 95 and Windows NT.
	
	If the migrated user follows the instructions in the message to import the
	attached .pab file, blank Outlook contacts are created for each cc:Mail PAB
	entry, and empty personal distribution list (PDL) entries are created for each
	cc:Mail personal mailing list entry.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove the blank Outlook contacts and empty Outlook personal DLs.
	
	2. Perform the following steps to import the attached .pab file as a personal
	  address book:
	
	  a. Open the message that has "Migrated Message File Address Book (PAB)" as
	     the subject, and on the File menu, click Save Attachments.
	
	  b. Type the location where you want to save the .pab file and type a file
	     name that you want to save the .pab file as, and then click Save.
	
	  c. From the main menu in Outlook, on the File menu, click Import and Export,
	     click Import from another program or file, and then click Next.
	
	  d. In the "Select file type to import from" list, click Personal Address
	     Book, and then click Next.
	
	  e. Type the location of the .pab file that you saved in step b, click Open,
	     and then click OK.
	
	  f. After the .pab file has been imported, click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	To change the PAB import instructions that appear in the migrated user's Inbox,
	add a Pabmsg.txt file to the computer running the Microsoft Exchange Migration
	Wizard. For additional information about how to add a Pabmsg.txt file, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q175967 XADM: Cannot Edit the PAB Migration Message in Exchange 5.0
	
	
	Additional query words: mlmig32.dll migration migrate ccmail 2000 97 98
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
