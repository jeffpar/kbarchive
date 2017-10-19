---
layout: page
title: "Q226358: Using the AspEnableApplicationRestart Metabase"
permalink: /kb/226/Q226358/
---

## Q226358: Using the AspEnableApplicationRestart Metabase

	Article: Q226358
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) 5.0 for Windows 2000 introduces a
	new metabase property named "AspEnableApplicationRestart." This is used to
	enable or disable the automatic restart of applications when the Global.asa file
	is updated.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about editing the metabase. Before
	you edit the metabase, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Configuration
	Backup/Restore" Help topic in the Internet Services Manager Snap-In for the
	Microsoft Management Console (MMC).
	
	WARNING: Editing the metabase incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from incorrect editing of the metabase can be solved. Edit
	the metabase at your own risk.
	
	NOTE: You should always back up the metabase before you edit it.
	
	In IIS version 4.0 and earlier, an application is restarted each time a change is
	made to the Global.asa file. In IIS 5.0 this is still the default behavior;
	however, it can be disabled by setting the "AspEnableApplicationRestart" value
	to FALSE for an application.
	
	To disable or enable the automatic application restart for your default Web site,
	use the following steps:
	
	1. Open a Command Prompt session on your server.
	
	2. Change to your X:\InetPub\AdminScripts folder, where X is the drive that you
	  specified for your IIS documents.
	
	3. Enter one of the following commands:
	
	  To disable application restart:
	
	  CSCRIPT.EXE ADSUTIL.VBS SET W3SVC/1/ROOT/AspEnableApplicationRestart FALSE
	
	  Any changes that are saved to the Global.asa file will not take effect until
	  the application is restarted.
	
	  To enable application restart:
	
	  CSCRIPT.EXE ADSUTIL.VBS SET W3SVC/1/ROOT/AspEnableApplicationRestart TRUE
	
	  Changes saved to the Global.asa file will restart the application.
	
	  NOTE: Toggling the "AspEnableApplicationRestart" property to TRUE will restart
	  the application.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
