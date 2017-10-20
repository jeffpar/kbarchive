---
layout: page
title: "Q272327: Cluster Admin Stops Responding When Renaming File Share Name"
permalink: /kb/272/Q272327/
---

## Q272327: Cluster Admin Stops Responding When Renaming File Share Name

{% raw %}

	Article: Q272327
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): w2000mscs kbClustering
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you rename multiple-clustered resource share names using the Cluster.exe
	tool from the command console, the following error message may be displayed:
	
	  System error 87 has occurred.
	  The parameter is incorrect.
	
	Also, the Cluster Administrator may stop responding while it attempts to
	enumerate the clustered resources.
	
	CAUSE
	=====
	
	This behavior can occur if the rename commands occur too rapidly; for example,
	if they are executed in a script.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one of the following methods:
	
	- Rewrite the script to include an adequate pause between each rename command.
	
	- Rewrite the script to create new file share resources instead of renaming
	  existing resource share names; then use another script to remove the unwanted
	  share resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: MSCS hang cluster administrator
	
	======================================================================
	Keywords          : w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
