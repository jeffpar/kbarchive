---
layout: page
title: "Q214680: Cluster Setup Does Not Recognize Disk with over 3 Logical Drives"
permalink: /kb/214/Q214680/
---

## Q214680: Cluster Setup Does Not Recognize Disk with over 3 Logical Drives

{% raw %}

	Article: Q214680
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Cluster Server installation does not include an option that allows the hard
	disk that has an extended partition and contains more than three logical drives
	on the shared SCSI bus to be added to the cluster.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	To use the hotfix, you need to copy the Cluster installation files from the
	Mscs\Cluster\i386 folder to your hard disk, and then copy the hotfix into your
	flat folder and run Setup.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server, Enterprise
	Edition version 4.0. This problem was first corrected in Windows NT version 4.0
	Service Pack 5.
	
	Additional query words: 4.00 ntee ee
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
