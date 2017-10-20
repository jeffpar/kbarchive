---
layout: page
title: "Q228942: SP4 May Cause Loss of TCP/IP Connectivity in WLBS Host"
permalink: /kb/228/Q228942/
---

## Q228942: SP4 May Cause Loss of TCP/IP Connectivity in WLBS Host

{% raw %}

	Article: Q228942
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply Windows NT 4.0 Service Pack 4 (SP4) to your computer running
	Windows NT Load Balancing Service (WLBS), the following problems may occur:
	
	- On a WLBS host that consistently experiences heavy loads of traffic, WLBS may
	  stop servicing client requests. Although the cluster can converge, IP
	  connectivity is disrupted.
	
	- The WLBS cluster does not converge. The 'wlbs query' command returns:
	
	  "converging with the following hosts:".
	
	  NOTE: The command should at least display the WLBS cluster converging with
	  itself, even if it was the only host in the cluster.
	
	CAUSE
	=====
	
	This problem occurs because Network Driver Interface Specification (NDIS)
	incorrectly thinks WLBS is out of resources and stops sending WLBS packets to
	the Media Access Control driver. This behavior occurs because of a WLBS
	incompatibility with NDIS performance enhancements made in SP4.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For more information on the NDIS changes in SP4, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q217305 Full Duplex Support with Windows NT and Q214455 Ndis Intermediate
	  Driver Model
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTLBS100 kbWinNTLBSSearch kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:1.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
