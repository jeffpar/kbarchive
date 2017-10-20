---
layout: page
title: "Q268835: FIX: ClusterResourceControl May Leak Memory"
permalink: /kb/268/Q268835/
---

## Q268835: FIX: ClusterResourceControl May Leak Memory

{% raw %}

	Article: Q268835
	Product(s): Microsoft Windows NT
	Version(s): 1.0,1.1,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbClustServ100 kbOSWinNT400 kbOSWin2000fix
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server, versions 1.0, 1.1, used with:
	   - Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	   - Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ClusterResourceControl function may leak a multiple of 4K of memory when
	called. This only occurs when the CLUSCTL_RESOURCE_STORAGE_GET_DISK_INFO control
	code is used to query a disk on one node if at least one disk is present on the
	other node. The leak occurs in System nonpaged pool memory. The amount of memory
	that is leaked is dependent on the number of shared disks that are not currently
	owned by the target node.
	
	CAUSE
	=====
	
	The ClusterResourceControl API calls the DeviceIOControl function and then
	enumerates a list of shared disks attached to the system. If a shared disk is
	encountered that is not owned by that node, then an error code is returned but
	the memory that is allocated from DeviceIOControl is not freed.
	
	See the "References" section of this article for information about a similar bug.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of the Windows NT Server and Windows NT Workstation fix
	should have the following file attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/28/1999  07:10p           1,405,248 Ntkrnlmp.exe  Alpha
	  10/28/1999  07:10p           1,376,896 Ntoskrnl.exe  Alpha
	
	  10/28/1999  07:13p             952,192 Ntkrnlmp.exe  i386
	  10/28/1999  07:12p             932,032 Ntoskrnl.exe  i386
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	This problem was corrected in Windows 2000.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q244509 Nonpaged Pool Memory Leak May Occur Reading Partition Table
	
	Additional query words: winnt
	
	======================================================================
	Keywords          : kbClustServ100 kbOSWinNT400 kbOSWin2000fix 
	Technology        : kbAudDeveloper kbClustServSearch
	Version           : :1.0,1.1,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
