---
layout: page
title: "Q292548: Terminal Services-Specific Programs Stop Responding"
permalink: /kb/292/Q292548/
---

## Q292548: Terminal Services-Specific Programs Stop Responding

{% raw %}

	Article: Q292548
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbTermServ kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs such as Quser.exe, Tsadmin.exe, and other Terminal Services-specific
	programs may stop responding (hang). This may also affect the Citrix ICA browser
	that calls the same function to query session information.
	
	CAUSE
	=====
	
	There is a race condition that can cause a thread to wait forever.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version        Size    File name
	  --------------------------------------------------------
	  21-Sep-2001  17:32   5.0.2195.4004  12,768  Tdasync.sys
	  21-Sep-2001  17:32   5.0.2195.4004  20,064  Tdipx.sys
	  21-Sep-2001  17:32   5.0.2195.4004  17,632  Tdnetb.sys
	  21-Sep-2001  17:32   5.0.2195.4004  10,624  Tdpipe.sys
	  21-Sep-2001  17:32   5.0.2195.4004  17,568  Tdspx.sys
	  21-Sep-2001  17:32   5.0.2195.4004  18,304  Tdtcp.sys
	
	
	To resolve this problem, obtain and install the hotfix that is referenced in this
	section.
	
	If you use a Terminal Server that is configured to use only RDP, you may be able
	to resolve this problem by obtaining and installing Windows 2000 Security Rollup
	Package 1 (SRP1). For additional information about SRP1, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	
	Additional query words: kbTermServ
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbTermServ kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
