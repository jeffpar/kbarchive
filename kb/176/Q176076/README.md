---
layout: page
title: "Q176076: XCON: Low MDB USERS Registry Entry Causes Slow Connector"
permalink: kb/176/Q176076/
---

## Q176076: XCON: Low MDB USERS Registry Entry Causes Slow Connector

	Article: Q176076
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedit32.exe.
	
	
	SYMPTOMS
	========
	
	Abnormally slow performance on an Exchange Server computer that has multiple
	connectors. You may see this problem in an organization with a large directory.
	To verify this, check the value for the Performance Monitor on Object =
	MSExchangeDS, Counter = ExDS Reads/sec. You should not see a result much greater
	than 10.
	
	CAUSE
	=====
	
	When a server's function is designated to be a Multiserver or a
	Connector/Directory Import server, it should be configured take into account the
	number of users in the organization, though it does not, itself, host these
	users. Currently, the Exchange Server Optimization Wizard, which is used to
	designate the function of the server in the Type of Server option, does not do
	this and assigns a default value of 25 for the number of users. This value is
	registered in the Windows NT registry at the location
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA \Parameters
	as MDB Users.
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0 for Windows
	NT.
	
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	If you have verified that the server's ExDS Reads/sec is greater than 10,
	increase the registry setting
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA
	\Parameters\MDB USERS to 25 percent of the total number of users in the
	organization (not to exceed five thousand).
	
	Additional query words: MDB USERS, ExDS Reads/Sec
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
