---
layout: page
title: "Q316743: A NetRAID 2 Controller May Cause Disk Error 21 in Windows NT 4.0"
permalink: /kb/316/Q316743/
---

## Q316743: A NetRAID 2 Controller May Cause Disk Error 21 in Windows NT 4.0

	Article: Q316743
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbhw
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Move Group or Failover process, the following error message may be
	logged in the Cluster log:
	
	  Physical Disk "<Driveletter>:" SCSI, error reserving disk, error 21.
	
	This error message is the result of a regression fix from Windows NT 4.0 Service
	Pack 6a (SP6a). This error message does not occur if you use the Clusdisk.sys
	file from Windows NT 4.0 Service Pack 5 (SP5).
	
	CAUSE
	=====
	
	Under certain conditions, the cluster disk driver (Clusdisk.sys) tries to attach
	to physical disk devices but cannot read the partition table (assuming that the
	disks are physical disk resources that are reserved by the other node). This
	error message occurs because the Cluster service prevents the disk class driver
	from correctly creating the volume objects.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Time    Version     Size     File name     
	  -------------------------------------------------------
	  18-Jan-2002   14:38   1.0.224.6   29,392   Clusdisk.sys
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the Clusdisk.sys file from SP5.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem may occur after you apply the Q305638 hotfix with the
	Hewlett-Packard NetRAID 2M controller. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q305638 A Windows NT 4.0 Cluster Disk May Generate Error 3 During a Move
	  Group or Failover Process
	
	Additional query words: mscs hpnetraid
	
	======================================================================
	Keywords          : kberrmsg kbhw 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
