---
layout: page
title: "Q261112: XADM: Bulk Edit Mailbox Properties w. Directory Export &amp; Import"
permalink: /kb/261/Q261112/
---

## Q261112: XADM: Bulk Edit Mailbox Properties w. Directory Export &amp; Import

{% raw %}

	Article: Q261112
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to edit multiple mailbox properties by using
	directory export and directory import, without opening individual mailbox
	properties.
	
	MORE INFORMATION
	================
	
	To begin the bulk edit process:
	
	1. Click Start, point to Programs, click Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. In the Microsoft Exchange Server Administrator program, click Directory
	  Export on the Tools menu.
	
	3. In Directory Export, select an export file name.
	
	4. Select the container and if necessary, the subcontainers, in which the
	  mailboxes are located (the Recipients container).
	
	5. Select the export object.
	
	6. Leave the Logging Level (Low) and Character Set (ANSI) at their default
	  settings.
	
	7. If you have hidden mailboxes, click to select the Include Hidden Objects
	  check box, and then click Export.
	
	8. When the export is finished, open the <file_name>.csv file that you
	  created in an appropriate program (Microsoft Excel, for example) and edit the
	  values that you want to change. Save the modified .csv file.
	
	NOTE: Microsoft recommends that you save a copy of the <file_name>.csv file
	to a safe location before you begin to edit the file.
	
	To import your changes:
	
	1. In the Administrator program, click Directory Import on the Tools menu to
	  import the <file_name>.csv file.
	
	2. Leave the settings at the default settings.
	
	3. Click Import File, and then select the appropriate <file_name>.csv
	  file.
	
	4. When the import is finished, the changes are made.
	
	For additional information about bulk directory import or directory export in
	Microsoft Exchange Server, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
