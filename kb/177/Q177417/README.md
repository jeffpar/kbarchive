---
layout: page
title: "Q177417: XFOR: Could Not Delete an MS Mail Postoffice Connection"
permalink: kb/177/Q177417/
---

## Q177417: XFOR: Could Not Delete an MS Mail Postoffice Connection

	Article: Q177417
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 15-JUL-2000
	
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
	
	When attempting to delete an MS Mail postoffice connection in the Connections
	tab of the MS Mail Connector property page, you may receive the following error
	message:
	
	  The postoffice <Network>/<Postoffice> could not be deleted
	  because
	  either the MS Mail Connector server is unavailable or there is
	  insufficient memory available to perform this operation.
	
	CAUSE
	=====
	
	The above error can occur if the registry value
	<Network>/<Postoffice> is missing under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMSMI\ 
	  Parameters\Admin
	
	(<Network>/<Postoffice> is the network and postoffice name for the MS
	Mail postoffice to be deleted.)
	
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
	
	Manually add the following registry value under the above registry key and then
	delete the postoffice connection.
	
	The value is:
	
	  Value Name: <Network>/<Postoffice>
	  Data Type: REG_SZ
	  String: <the UNC path to the postoffice to be deleted> /Z
	
	For example:
	
	  Value name: Microsoft/Redmond
	  Data Type: REG_SZ
	  String: \\mailserver\maildata /Z
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
