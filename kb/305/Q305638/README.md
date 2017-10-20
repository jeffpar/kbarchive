---
layout: page
title: "Q305638: A Windows NT 4.0 Cluster Disk May Generate Error 3"
permalink: /kb/305/Q305638/
---

## Q305638: A Windows NT 4.0 Cluster Disk May Generate Error 3

{% raw %}

	Article: Q305638
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Move Group or Failover process in a Windows NT 4.0-based cluster, the
	following error message may be recorded in the Cluster log:
	
	  Physical Disk "<Driveletter>:" DiskspCheckPath: FindFirstFile for
	  "DRIVELETTER:" failed, error 3.
	
	This error message typically occurs when the second cluster of a two-node cluster
	is brought online if the "Failback for a cluster group(s)" option is set to fail
	back to that node.
	
	Additionally, when you perform a Move Group process, the following error message
	may be recorded in the Cluster log:
	
	  Physical Disk "<Driveletter>:" SCSI, error reserving disk, error 21.
	
	CAUSE
	=====
	
	The first error message is the result of a regression fix from Windows NT 4.0
	Service Pack 6a (SP6a).
	
	Under certain conditions, the cluster disk driver (Clusdisk.sys) tries to attach
	to devices but cannot read the partition table (assuming that they are cluster
	disks that are reserved by the other node).
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
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
	
	  Date       Time   Version    Size       File name   
	  ----------------------------------------------------
	  12-Nov-01  21:17  1.0.224.6   29,360    Clusdisk.sys
	  12-Nov-01  21:17  1.0.224.6  169,744    Clusres.dll
	  12-Nov-01  21:17  1.0.224.6   29,968    Resutils.dll
	
	NOTE: Because of file dependencies, this hotfix requires Windows NT 4.0 SP6a
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	A customer must download each of the post SP6a fixes for Cluster, from the
	following Microsoft Knowledge Base articles:
	
	  Q247065 Error Message: System Process Lost Delayed-Write Data
	
	  Q251007 Some Cluster Disks Are Not Available After Installing SP6
	
	  Q256326 Cluster Server Cannot Use Disk Beyond Device Number 25
	
	  Q273614 Cannot Change Cluster Share Resource Permissions
	
	
	  Q248663 Booting Node May Prevent Running Node from Accessing Quorum Disk
	
	  Q243469 Cluster SMB Share Resource Causes Momentary Disconnection
	
	  Q272569 System Process Loses Delayed-Write Data with Windows Clustering
	
	  Q216240 Cluster Log Is Overwritten When Cluster Server Starts
	
	  Q244220 Computer Stops Responding When Creating IIS Server Instance on MSCS
	  1.0 with SP5 Installed
	
	  Q263216 Dr. Watson Error Appears in Cluster Administrator When You View
	  Internet Information Server Property Pages
	
	  Q241631 Cluster Node with Heavy Disk Stress Does Not Shut Down Properly
	
	  Q247763 Cluster Administrator May Stop Responding After Creating a New IIS
	  Server Instance
	
	  Q262705 Cluster Administrator Incorrectly Rejects Trusted Domain SIDs as
	  Local SIDs
	
	  Q266782 Access Violation Error Message in Cluster.exe When You Move Groups
	
	  Q307465 A Windows NT 4.0-Based Cluster May Delete Symbolic Link for Reserved
	  Disks
	
	NOTE: If this hotfix is installed, you may not be able to install Microsoft Data
	Access Components (MDAC). When you try to install MDAC, you may receive the
	following error message:
	
	  olemainthreadwndname:dasetup.exe unable to locate ... dynamic link library
	  mtsevents.dll
	
	This error message may occur if Microsoft Transaction Server (MTS) is not
	installed. To work around this error message, use either of the following
	methods:
	
	- Rename the Mtxex.dll file to Mtxex.bak before you install MDAC, and then name
	  the file back to Mtxex.dll after you install MDAC.
	
	- Install MTS before you install MDAC.
	
	Note that the Dtcsetup.exe program is included only in case you must reinstall
	Microsoft Transaction Coordinator. Use the Dtcsetup.exe program that is included
	with this hotfix, and follow the instructions that are listed in the following
	Microsoft Knowledge Base article:
	
	  Q191138 How to Install the Windows NT Option Pack on Microsoft Cluster Server
	
	Additional query words: mscs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
