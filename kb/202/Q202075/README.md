---
layout: page
title: "Q202075: Multiple Script Map Entries Created in IIS 4.0"
permalink: kb/202/Q202075/
---

## Q202075: Multiple Script Map Entries Created in IIS 4.0

	Article: Q202075
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbInternet
	Last Modified: 16-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Each time an Internet Information Server (IIS) computer is restarted, duplicate
	mapping for some applications are added repeatedly under the Application
	Mappings in IIS 4.0.
	
	To view these mappings, open the Microsoft Management Console (MMC) and click the
	Computer icon under the Internet Information Server category. Open the Property
	sheet for this item and choose to Edit the Master Properties of the WWW Service.
	Click the Home Directory tab and click the Configuration button beneath the
	Application Settings. You will then see the Application Mappings displayed. Each
	extension only needs to be listed one time.
	
	CAUSE
	=====
	
	This problem is caused by Script Mappings that exist in the registry. IIS
	version 3.0 uses the registry to control any application mappings. IIS 4.0
	stores this information in the MetaBase. When a server running IIS 4.0 is
	started, it converts the ScriptMap registry key into an Application Mapping, but
	this registry entry is not removed.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the Script Map entries from the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Open the Default Property Sheet for your computer running Internet
	  Information Server and view the Application Mappings. Remove all extra
	  (duplicate) entries for any extensions until there is only one mapping listed
	  for each extension.
	
	2. Start Registry Editor.
	
	3. Locate the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\Parameters\Script
	  Map.
	
	4. Highlight any values that are listed for this key EXCEPT for Default and
	  choose Edit and Delete.
	
	5. Restart the computer.
	
	These steps will remove any mappings from the registry and prevent the mappings
	from being added repeatedly to the MetaBase.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
