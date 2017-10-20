---
layout: page
title: "Q198586: How to Preload the Property Cache"
permalink: /kb/198/Q198586/
---

## Q198586: How to Preload the Property Cache

{% raw %}

	Article: Q198586
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Windows NT Service Pack 4 (SP4) allows you to set user-defined properties as
	cached through registry keys. Prior to SP4, a document containing the property
	had to be indexed, and then cached through the property interface for Index
	Server. This information was then stored in the catalog. If the catalog became
	corrupted, the property cache information was lost and had to be recreated
	manually.
	
	MORE INFORMATION
	================
	
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
	
	To cache a property through the registry, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\Currentcontrolset\Control\Contentindex
	  \Catalogs\<catalog name>
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	3. Under the catalog name, create a new key named Properties.
	
	4. Under the Properties key, add string values for the properties that you want
	  to cache. The format is GUID [PropID | Propertyname] = "type, size."
	
	  Example:
	
	     d1b5d3f0-c0b3-11cf-9a92-00a0c908dbf myprop = "31,20"
	
	  This creates a new property named "myprop" that is cached as a datatype of
	  VT_LPWSTR with a length of 20.
	
	  Example:
	
	     f29f85e0-4ff9-1068-ab91-08002b27b3d9 5 = "31,20"
	
	  This caches a property with a property ID of 5 as a datatype of VT_LPWSTR with
	  a length of 20.
	
	5. After you add the registry entries, you must rebuild the catalog. The easiest
	  way to do this is to look in the properties of the catalog in the Microsoft
	  Management Console (MMC) and find the location of the catalog. That location
	  on the drive contains a Catalog.wci folder. Stop Index Server and delete all
	  the files in the Catalog.wci folder, and then restart Index Server. This
	  forces a rebuild of the catalog using the new registry settings.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
