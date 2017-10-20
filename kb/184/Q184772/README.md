---
layout: page
title: "Q184772: XFOR: Internet Messages Received in Raw Form"
permalink: /kb/184/Q184772/
---

## Q184772: XFOR: Internet Messages Received in Raw Form

{% raw %}

	Article: Q184772
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Internet messages with charsets unknown to the server are presented to the
	recipient in raw form. When the server encounters unrecognized charsets (for
	example, x-1234), it leaves the message intact instead of applying a default
	charset such as US-ASCII.
	
	CAUSE
	=====
	
	Exchange Server cannot default to any specific charset, because such an action
	may result in the mismapping of characters.
	
	WORKAROUND
	==========
	
	If you receive a specific charset frequently and know a close equivalent, such
	as US-ASCII or ISO-8859-1, you can modify the MIME database to alias the unknown
	charset to the known charset.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The registry value that needs to be added is "AliasForCharset" as below:
	
	HKEY_CLASSES_ROOT\MIME\Database\Charset\<unknown charset>: AliasForCharset
	  "<known-charset>"
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	To add the above registry value, do the following:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	     HKEY_CLASSES_ROOT\MIME\Database\Charset\<unknown>
	
	  where <unknown> is the name of the unknown character set.
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: AliasForCharset
	     Data Type:  REG_SZ
	     Value:      <known>
	
	  where <known> is the name of the known character set.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
