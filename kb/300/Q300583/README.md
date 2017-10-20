---
layout: page
title: "Q300583: XADM: Merge Separate Exchange Servers into a Single Server"
permalink: /kb/300/Q300583/
---

## Q300583: XADM: Merge Separate Exchange Servers into a Single Server

{% raw %}

	Article: Q300583
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbenv kbExchange
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to merge separate servers that are running Exchange
	Server version 5.5 into a single server.
	
	MORE INFORMATION
	================
	
	You can merge separate servers into one server by performing an export to a
	file, editing the files, and then importing the files to the new server:
	
	1. On each of the servers from which you want to export files:
	
	  a. On the Tools menu, click Directory Export.
	
	  b. Complete the appropriate information in the Directory Export dialog box to
	     specify the Exchange Server recipients' containers and servers that you
	     want to export from.
	
	  c. Under "Export objects", click to select the "Mailbox" and the "Custom
	     recipients" check boxes, and then click Export.
	
	  d. Follow the on-screen instructions to export the file to a specific drive
	     and folder.
	
	2. Open the exported files in Microsoft Excel to edit data under the
	  "Home-Server", "OBJ Container", and "Addressing field (X400 addressing)"
	  columns as needed.
	
	3. For each of the exported files, in Exchange Server, on the Tools menu, click
	  Directory Import to import the file into the new Exchange server.
	
	4. Use Exmerge against the Exchange server and export mail messages to a .pst
	  file.
	
	5. Send a message to all Exchange Server users, asking each user to create a
	  mailbox, and then use Exmerge against the new server to import the newly
	  created .pst files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbExchange 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
