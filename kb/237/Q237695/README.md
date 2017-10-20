---
layout: page
title: "Q237695: XFOR: Cannot Send Message Through Microsoft Mail Connector"
permalink: /kb/237/Q237695/
---

## Q237695: XFOR: Cannot Send Message Through Microsoft Mail Connector

{% raw %}

	Article: Q237695
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message to a Microsoft Mail recipient through the Microsoft Mail
	Connector, you may receive a non-delivery report (NDR) that contains the
	following text:
	
	  [008] Failure delivering user mail due to mailbag contention.
	
	Even though you receive an NDR, the message may be delivered successfully.
	
	CAUSE
	=====
	
	This problem most commonly occurs if more than one instance of the External
	program attempts to access the same mailbag file.
	
	WORKAROUND
	==========
	
	Verify that only one instance of the External program connects to the Microsoft
	Mail postoffice at a time. If the problem continues to occur, you may be able to
	work around the problem by following these steps:
	
	1. If the Microsoft Mail postoffice is located on a Novell NetWare server,
	  verify that the files in the ATT, GLB, KEY, MAI, and MBG folders have owners
	  and are not locked.
	
	2. If any files in the P1 folder are more than two days old, delete the files.
	  The P1 folder is used by the External program to store temporary files.
	
	3. Verify that your computer is running version 3.2.18 or later of the External
	  program.
	
	4. Verify that the Access*.glb files are not damaged. Run the Listuser.exe
	  utility against the Microsoft Mail postoffice. If the results contain
	  unrecognizable characters or other unusual information, the access files may
	  be damaged.
	
	  For additional information about determining if the Access*.glb files are
	  damaged and for information about restoring the files if they are damaged,
	  please click the article number below to view the article in the Microsoft
	  Knowledge Base:
	
	  Q135932 PC DB: LISTUSER Version 2.1 Displays Unrecognizable Characters
	
	5. Rename the Admin.nme file to 00000000.nme, log on to the postoffice
	  administrator's mailbox, and then view the administrator's personal address
	  list (PAL). If any of the entries in the PAL appear to be damaged, rebuild
	  the postoffice address list (POL).
	
	6. Verify that the mailbag files are not over the 4096 record limit. For
	  additional information, please click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q163020 XFOR: MSMail Connector NDR Message with Event ID 2117
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
