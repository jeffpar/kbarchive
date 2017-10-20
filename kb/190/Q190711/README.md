---
layout: page
title: "Q190711: XFOR: DS_E_NO_SUCH_OBJECT Error During DirRep over IMC"
permalink: /kb/190/Q190711/
---

## Q190711: XFOR: DS_E_NO_SUCH_OBJECT Error During DirRep over IMC

{% raw %}

	Article: Q190711
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to perform directory replication between two sites over the
	Internet Mail Service (Internet Mail Connector in version 4.0), the following
	error message may appear:
	
	Event ID 2245
	Source:  MSExchangeMTA
	Category:  Directory Access
	
	Directory Operation failed with problem DS_E_NO_SUCH_OBJECT. Attribute.
	Directory Name [String];
	\o=Organization\ou=Organizational_Unit\cn=Configuration\cn=Servers
	\cn=Server_Name\cn=Microsoft DSA.  [RD server DISP; Router 11  114] [8]
	
	CAUSE
	=====
	
	There may be two possible causes for this problem:
	
	- The value of the following registry key:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \MSExchangeMTA\Parameters\X500 DN
	
	
	  does not match the corresponding Exchange directory entry. In this case, the
	  message transfer agent (MTA) service does not start. For more information,
	  please see Knowledge Base article Q155027, "XCON: Unable to Start Microsoft
	  Exchange MTA; Errors 1067 & 2140."
	
	  -OR-
	
	- If a site uses an MX wildcard record, the MX wildcard record directs all
	  messages to that site. This can mean that the Internet Mail Service tries to
	  send messages to its own IP address. For more information, please see
	  Knowledge Base article Q150969, "XFOR: All Messages Sent Over IMC Result in
	  NDRs."
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
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
	
	A.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeMTA\Parameters\X500 DN
	
	3. Check the VALUE for this key. The Organization [o=], Site [ou=], and Server
	  Directory names [cn=] must exactly match the properties of the Organization,
	  Site, and Server objects as displayed in Microsoft Exchange Administrator
	  program.
	
	  To see whether these objects match the value of the registry key, do the
	  following:
	
	  a. Click each of these objects in the left pane of the Microsoft Exchange
	     Server Administrator program.
	
	  b. On the File menu, click Properties. The Directory Name of each of these
	     objects should exactly match the corresponding attribute in the registry
	     setting described above.
	
	B.
	If you are experiencing this problem with the Internet Mail Service or IMC, you
	can add a registry value to prevent it. The registry key is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	  \Services\MSExchangeIMC\Parameters
	
	From the Registry Editor menu, click Edit, and then click the Add Value option.
	
	  Value Name: DisableResolverSearchList
	  Data Type: REG_DWORD
	  Value: 1 (or any non-zero value)
	
	This entry is case-sensitive and should be typed exactly as shown above. You must
	restart the Internet Mail Service for the registry key to take effect.
	
	If the problem cannot be addressed by the information in either Q155027 or
	Q150969, you must remove the wildcard record from the DNS server.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
