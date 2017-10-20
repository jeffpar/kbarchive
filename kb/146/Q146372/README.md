---
layout: page
title: "Q146372: XCLN: Cannot Delete a Network Connection After Inserting File"
permalink: /kb/146/Q146372/
---

## Q146372: XCLN: Cannot Delete a Network Connection After Inserting File

{% raw %}

	Article: Q146372
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot delete a network connection that has a reference to a file that has
	been inserted into a message in the Exchange client. When you try to delete the
	network connection from a DOS prompt you will receive this error: " There are
	open files on the connection. Close all files and quit all programs related to
	the connection before you try to delete". There is more help available by typing
	NET HELPMSG 2404." If you try to disconnect the drive from file manager, you get
	this error: "There are currently files open on <drive>: connected to
	\\server\share. If you do not close the files before disconnecting from the
	network device, data may be lost. Do you want to disconnect the device anyway?"
	and you are given an option to disconnect the drive.
	
	
	CAUSE
	=====
	
	This is caused by the Microsoft Exchange client keeping a open reference to the
	last opened drive or directory. For example, if another message is created
	referencing a file on a different share, the mapped drive letter referencing the
	share in the first message can be now be deleted.
	
	RESOLUTION
	==========
	
	Exit and Log Off from of the Exchange client. You can then remove the mapped
	drive through either the File Manager or the MS-DOS prompt using the net use
	<drive> /d.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	clients. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: file link mapped drive
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
