---
layout: page
title: "Q152083: Replicator Service Failed Due to Improper Login Account"
permalink: kb/152/Q152083/
---

## Q152083: Replicator Service Failed Due to Improper Login Account

	Article: Q152083
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Directory Replication is set up but not working properly, the following
	errors may occur in the Event Viewer\Application log.
	
	  Event ID: 3222
	  Source: Replicator
	  Type: Error
	  Description: Replicator could not access
	               \\MACHINE_NAME\SHARE_NAME\DIR_NAME on MACHINE_NAME
	               due to system error 5.
	
	  Event ID: 3216
	  Source: Replicator
	  Type: Error
	  Description: System Error 2 occurred.
	
	  Event ID: 3208
	  Source: Replicator
	  Type: Error
	  Description: The replication service could not update Directory
	               Scripts from the source on Computer_name due to error 2.
	
	CAUSE
	=====
	
	The above errors can be caused by one of the following:
	
	- The replication account and its password have not been set up in the
	  Directory Replicator Service configuration under Control Panel/Services.
	
	  or
	
	- The password for the replication account has changed and this has not been
	  reflected in the Directory Replicator Service configuration.
	
	RESOLUTION
	==========
	
	1. In Control Panel, open the Services tool.
	
	2. Double click on Directory Replicator.
	
	3. In the Service dialog box, go to the Log On As: section. Select the This
	  Account radio button and fill in the replicator account user name. Be sure
	  the password is correct, fill it in, and confirm.
	
	4. Close the Service dialog box.
	
	5. In Services tool in Control Panel, stop and restart the Directory Replicator
	  service
	
	For more information about configuring directory replication see the following
	article in the Microsoft Knowledge Base:
	
	Q101602:Configuring Windows NT for Replication
	
	Additional query words: prodnt access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
