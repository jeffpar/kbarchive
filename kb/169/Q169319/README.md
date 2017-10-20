---
layout: page
title: "Q169319: XFOR: Performance Tuning the PCMTA"
permalink: /kb/169/Q169319/
---

## Q169319: XFOR: Performance Tuning the PCMTA

{% raw %}

	Article: Q169319
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Administrators of Microsoft Exchange Server versions 4.0 and 5.0 have the
	ability to tune the Microsoft Mail Connector (AppleTalk) MTA (PCMTA); the
	component that facilitates communication between Exchange and Microsoft Mail for
	PC Networks.
	
	MORE INFORMATION
	================
	
	Tuning takes the form of three registry settings associated with the PCMTA
	service created by the installer of the Microsoft Mail Connector. That name will
	be declared on the connector's MTA tab. In this article, the service will be
	called Legacy Mail Connector.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To tune the connector, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet
	     \Services\Legacy Mail Connector\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. From the Edit menu, click Add Value and add the following information:
	
	  QueueInqueueLimit REG_SZ (value not to exceed 200)
	  QueueLanMailbagLimit REG_SZ (value not to exceed 200)
	  QueueLanPoLimit REG_SZ (value not to exceed 200)
	
	  NOTE: Microsoft has not seen significant improvement when any of these values
	  exceeds 200. Microsoft recommends a maximum setting of 200.
	
	3. Quit Registry Editor and restart your computer.
	
	By default, these values are coded into the service and set to 50. Adding these
	values overrides the defaults. Administrators running the PCMTA in a large
	legacy mail environment can take advantage of these settings and increase
	throughput.
	
	Additional query words: XFOR, performance, tune, PCMTA, MSMI
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	

{% endraw %}
