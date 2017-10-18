---
layout: page
title: "Q249242: The Active Log Format Drop-Down List Box in ISM Is Empty"
permalink: kb/249/Q249242/
---

## Q249242: The Active Log Format Drop-Down List Box in ISM Is Empty

	Article: Q249242
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the metabase. Before you edit the metabase, verify that you have a backup copy that can be restored if a problem occurs. For information about how to do this, view the "Configuration Backup/Restore" Help topic in Microsoft Management Console (MMC).
	
	SYMPTOMS
	========
	
	After you upgrade from Internet Information Server 3.0 to 4.0 or install the
	Windows NT Option Pack, the Active Log Format drop-down list box in Internet
	Service Manager appears empty. The problem persists even if you have
	reregistered the DLL files as specified in the following Microsoft Knowledge
	Base article:
	
	  Q183733 Active Log Format Drop-down List Is Not Populated After Upgrading to
	  IIS 4.0
	
	CAUSE
	=====
	
	The LM/service name/Info/LogModuleList key in the metabase for the service does
	not match the string found in the key with the subkey names of the
	LM/Logging/log format. These strings are case-sensitive.
	
	RESOLUTION
	==========
	
	The process displays information in the Active Log Format drop-down list,
	whether or not the correct registration of the DLL and OCX files has occurred as
	specified in Q183733.
	
	WARNING: Editing the metabase incorrectly can cause serious problems that may
	require you to reinstall any product that uses the metabase. Microsoft cannot
	guarantee that problems resulting from incorrectly editing the metabase can be
	solved. Edit the metabase at your own risk.
	
	NOTE: You should always back up the metabase before you edit it.
	
	The subkeys of LM/Logging/log format should contain the Clsid (such as
	A9E69610-B80D-11D0-B9B9-00A0C922E750) for the LogModuleId and the LogModuleUiID
	options in order to load the right key in the registry. You must also register
	Iislog.dll, Logui.ocx, and Iscomlog.dll. In this case, the Properties button
	displays each log format.
	
	MORE INFORMATION
	================
	
	For additional information on modifying the metabase, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q240941 An Introduction to the IIS Metabase
	
	  Q240225 Description of Adsutil and MetaEdit Utilities Used to Modify the
	  Metabase
	
	You can search for the Clsid values for each logging format in the following
	registry key:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/CLASSES/CLSID
	
	Additional query words: Log IIS4 logging
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
