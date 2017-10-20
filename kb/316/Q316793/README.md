---
layout: page
title: "Q316793: IIS5: Greenland Not Displayed As Option in Certificate Wizard"
permalink: /kb/316/Q316793/
---

## Q316793: IIS5: Greenland Not Displayed As Option in Certificate Wizard

{% raw %}

	Article: Q316793
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,2000 SP2,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you request a certificate in Internet Information Services (IIS), the
	entries for Greenland (GL) is missing under Country/Region.
	
	NOTE: This option is available in IIS 4.0.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods:
	
	Method 1
	--------
	
	Install Microsoft Windows NT 4.0 and Microsoft IIS 4.0, request the certificate,
	and then upgrade to Windows 2000.
	
	Method 2
	--------
	
	Request a certificate on a Windows NT 4.0-based computer that is running IIS 4.0,
	and then import it into the Windows 2000-based computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q300399 Countries Missing from List in the IIS Certificate Wizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
