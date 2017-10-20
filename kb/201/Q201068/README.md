---
layout: page
title: "Q201068: How to Set Up Disaster Recovery for a Critical WINS Server"
permalink: /kb/201/Q201068/
---

## Q201068: How to Set Up Disaster Recovery for a Critical WINS Server

{% raw %}

	Article: Q201068
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If you require a fast process for disaster recovery when a critical WINS server
	stops working, Microsoft recommends the following procedure. You must follow
	this procedure before the WINS server stops working.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Make sure there is a valid backup of your critical WINS server database.
	  Also, save the WINS Partners registry key from the critical WINS server. This
	  registry key contains the Push/Pull partner configuration. Save the Partners
	  key from this registry location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Partners
	
	2. Install a backup WINS server that is running parallel with the critical WINS
	  server.
	
	3. Set up WINS replication between the critical WINS server and the backup WINS
	  server.
	
	If the critical WINS server stops working, use these steps:
	
	1. Rename and change the IP address from the backup WINS server to match the
	  critical WINS server.
	
	2. Reboot the backup WINS server and stop the WINS service.
	
	3. Restore the WINS Partners registry key from the critical WINS server to the
	  backup WINS server's registry. Locate this key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Partners
	
	4. Click the Partners key, click Registry, and then click Restore.
	
	5. Type the path where the file is located.
	
	6. Start the WINS service on the Backup WINS server. At this point the backup
	  WINS server will have the same replication partner configuration as the
	  critical WINS server.
	
	7. Force replication of the backup Wins server with all of its partners. At this
	  point WINS will be fully functional.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
