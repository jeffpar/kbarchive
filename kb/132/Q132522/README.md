---
layout: page
title: "Q132522: Quick Directory Replication Troubleshooting Tip"
permalink: /kb/132/Q132522/
---

## Q132522: Quick Directory Replication Troubleshooting Tip

{% raw %}

	Article: Q132522
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If one or more of your Windows NT servers are configured to use the Directory
	Replicator service and they are not importing or exporting correctly, then the
	following common tip for correcting Directory Replication problems.
	
	MORE INFORMATION
	================
	
	The quickest and easiest troubleshooting step to take when trying to solve
	Directory Replicator problems is to assign a new user name to the Directory
	Replicator service. To do this:
	
	1. Run User Manager for Domains and choose New User from the User menu.
	
	2. In the Username field type a user name, such as ReplAcct.
	
	3. Run Control Panel and choose Services.
	
	4. Select the Directory Replicator service and choose Stop if the service is
	  running.
	
	5. With the Directory Replicator service selected, choose Startup.
	
	6. In the Log On As: section, choose the browse button with the three dots to
	  the right of the This Account field.
	
	7. Choose the user name you created in step 1 and choose Add. The Add Name field
	  below should display:
	
	  <domain_name>\ReplAcct
	
	  where <domain_name> is your domain's name.
	
	8. Choose OK twice. A message box displays the following:
	
	  The account <domain_name>\ReplAcct has been granted the Log On As A
	  Service right and added to the Replicator local group.
	
	9. Now choose Start to start the Directory Replicator service.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q101602 Configuring Windows NT for Replication
	
	  Q104204 Troubleshooting Directory Replicator Problems
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	
	=============================================================================
	

{% endraw %}
