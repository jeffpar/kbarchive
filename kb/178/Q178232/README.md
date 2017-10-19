---
layout: page
title: "Q178232: How to Set IIS 3.0 Authentication from the Registry"
permalink: /kb/178/Q178232/
---

## Q178232: How to Set IIS 3.0 Authentication from the Registry

	Article: Q178232
	Product(s): Internet Information Server
	Version(s): WINNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article tells you how to set the Authentication mode in Internet
	Information Server (IIS) 3.0 by modifying the registry.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	In order to programmatically (that is, not through Internet Service Manager)
	change the Authentication mode that IIS uses, you must update the registry
	setting to one of the given values below.
	
	  Registry setting:
	  HKLM\System\CurrentControlSet\Services\W3Svc\Parameters\Authorization
	
	The values for Authorization are as follows:
	
	  Value         Description
	-------------------------------------------------------------------------
	  0             sets authorization to None (no authorization is checked)
	  1             sets authorization to Allow Anonymous
	  2             sets authorization to Basic
	  3             sets authorization to Allow Anonymous and Basic
	  4             sets authorization to NT Challenge/Response
	  5             sets authorization to Allow Anonymous and NT
	                Challenge/Response
	  6             sets authorization to Basic & NT Challenge/Response
	  7             sets authorization to Allow Anonymous and Basic and NT
	                Challenge/Response
	
	NOTE: IIS must be stopped and restarted in order for changes to take effect.
	
	Additional query words: IIS registry authentication security
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WINNT:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
