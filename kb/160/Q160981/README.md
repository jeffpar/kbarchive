---
layout: page
title: "Q160981: XADM: How to Export a Mailbox's Attributes to a Text File"
permalink: /kb/160/Q160981/
---

## Q160981: XADM: How to Export a Mailbox's Attributes to a Text File

{% raw %}

	Article: Q160981
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to export an individual mailbox's most common
	directory attributes to a text file. You cannot use Microsoft Exchange Server to
	export the contents of an individual mailbox in a container.
	
	MORE INFORMATION
	================
	
	To export an individual mailbox's most common directory attributes to a text
	file, follow these steps:
	
	1. Copy the Mailbox.csv file from the Support\Samples\Csvs\Mailbox folder on the
	  Microsoft Exchange Server CD-ROM to the root folder of drive C.
	
	2. Create a new text file called Mailbox.txt in the root folder of drive C that
	  contains the following lines:
	
	     [Export]
	     DirectoryService=<server1>
	     HomeServer=<server2>
	     Basepoint=/o=ORG/ou=SITE/cn=container/cn=<name>
	     ExportObject=Mailbox
	     InformationLevel=Full
	     RawMode=Yes
	     HiddenObjects=Yes
	     Subcontainers=Yes
	
	     [Import]
	     DirectoryService=<server1>
	     Basepoint=/o=ORG/ou=SITE/cn=container
	     Container=
	     InformationLevel=Full
	     OverwriteProperties=Yes
	     RawMode=Yes
	
	  where <server1> is the name of the computer on which the directory
	  service is running, <server2> is the name of the Microsoft Exchange
	  Server computer, and <name> is the mailbox's distinguished name (DN).
	
	3. Type the following command at a command prompt, and then press ENTER:
	
	  c:\exchsrvr\bin\admin.exe /e c:\mailbox.csv /o c:\mailbox.txt
	
	NOTE: After you export an individual mailbox's most common directory attributes
	to a text file, you can use the following command to import the attributes:
	
	  c:\exchsrvr\bin\admin.exe /i c:\mailbox.csv /o c:\mailbox.txt
	
	Additional query words: move
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
