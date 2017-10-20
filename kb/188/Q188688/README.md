---
layout: page
title: "Q188688: XCLN: Inbox Assistant Missing After Uninstalling Netscape"
permalink: /kb/188/Q188688/
---

## Q188688: XCLN: Inbox Assistant Missing After Uninstalling Netscape

{% raw %}

	Article: Q188688
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you go to the Tools menu in the Exchange client, the Inbox Assistant and
	Out of Office Assistant menu items are missing.
	
	CAUSE
	=====
	
	The Inbox Assistant and Out Of Office Assistant are removed from the Tools menu
	after uninstalling Netscape Navigator, version 2.01. This is caused by a
	registry key that is removed during the uninstall of Netscape. The missing
	registry key is:
	
	 HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client\Extensions
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following procedures:
	
	Before Uninstalling Netscape
	----------------------------
	
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
	
	1. Run the Registry Editor and export the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client\Extensions
	
	2. Uninstall Netscape.
	
	3. Import the registry key that was exported in step 1.
	
	After Uninstalling Netscape
	---------------------------
	
	NOTE: This procedure can only be used on computers where the files are installed
	in the same locations.
	
	1. Find a computer that is not experiencing this problem.
	
	2. Run the Registry Editor and export the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client\Extensions
	
	3. Import the registry key on the problem computer.
	
	If it is not possible to export and import the registry key, you must remove and
	re-install the Exchange client.
	
	STATUS
	======
	
	The third-party product discussed here is manufactured by Netscape, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
