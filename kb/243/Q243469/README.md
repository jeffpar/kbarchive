---
layout: page
title: "Q243469: Cluster SMB Share Resource Causes Momentary Disconnection"
permalink: /kb/243/Q243469/
---

## Q243469: Cluster SMB Share Resource Causes Momentary Disconnection

{% raw %}

	Article: Q243469
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share folders on a shared cluster drive with the Share Subdirectories
	feature introduced in Service Pack 4, some or all of your folder names may end
	with a dollar sign (for example, <Foldername>$). Because these shares are
	automatically hidden, you are not using the Hidden option for the file share
	resource itself. In this situation, users connected to these shares may be
	intermittently disconnected.
	
	CAUSE
	=====
	
	When a change in the folder structure is detected, Cluster Server scans for
	folders that have been deleted to remove the appropriate share. When a dollar
	sign is used as the last character in a folder name, Cluster Server assumes that
	it created the share as a hidden share. Therefore, it scans for the folder name
	without the dollar sign and removes the share when it cannot find the folder
	name without the dollar sign. Then, the folder is shared again when Cluster
	Server scans for new non-shared folders.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  File Name     Platform
	  ----------------------
	  Clusres.dll   Alpha
	  Clusres.dll   Intel
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, rename the folders so that they do not end with a
	dollar sign. To create the shares as hidden, use the Hidden option in the file
	share resource instead.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q185212 Cluster Server Does Not Support More than 900 Shares
	
	  Q194831 Cluster Shares Must Be Reset to Recognize Added Subdirectories
	
	If you enable cluster logging, you see the following entries:
	
	  0bc.034::28-12:54:40.138 File Share <user1$>:
	  SmbpCheckForSubDirDeletion: Dir 'u:\test$\user1' not found ...
	  0bc.034::28-12:54:40.138 File Share <user1$>:
	  SmbpCheckForSubDirDeletion: Removing share 'user1$'...
	  ...
	  0bc.034::28-12:54:46.826 File Share <user1$>:
	  SmbpCheckAndBringSubSharesOnline: Adding share 'user1$'...
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
