---
layout: page
title: "Q228456: Unnecessary Dialog Appears When Configuring TCP/IP to Use DHCP"
permalink: /kb/228/Q228456/
---

## Q228456: Unnecessary Dialog Appears When Configuring TCP/IP to Use DHCP

{% raw %}

	Article: Q228456
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to configure TCP/IP to use both Dynamic Host Configuration
	Protocol (DHCP) and Routing Information Protocol (RIP) for Internet Protocol
	(IP), the following message may be displayed:
	
	  RIP Routing requires static IP addresses. Do you want to reconfigure your IP
	  address?
	
	This message incorrectly states that RIP for IP will only function with a static
	IP address. In fact, Silent RIP functions correctly when using a DHCP-assigned
	IP address.
	
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
	
	
	WORKAROUND
	==========
	
	To work around this problem, click NO when the dialog box appears.
	Alternatively, you can configure TCP/IP to use DHCP before installing RIP for
	IP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	If you click NO when installing RIP for IP, the installation will still complete
	successfully. Some unattended installation methods are unable to work around
	this dialog box. In these cases, installing the hotfix could be necessary.
	
	For more information on Silent RIP features included with SP4, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q172514 Silent RIP for IP Available for Windows NT Workstation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
