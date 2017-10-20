---
layout: page
title: "Q286201: Directory Name Returned from Server.MapPath() Truncated"
permalink: /kb/286/Q286201/
---

## Q286201: Directory Name Returned from Server.MapPath() Truncated

{% raw %}

	Article: Q286201
	Product(s): Internet Information Server
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the codepage is set to 65001 (UTF-8) in an Active Server Pages (ASP) page,
	the physical directory name that is returned from the Server.MapPath method may
	be truncated if the name contains extended characters.
	
	CAUSE
	=====
	
	Server.MapPath internally uses UTF-8 encoding, which is specified in the ASP
	page, to convert the physical directory name that it obtains from the metabase
	to a Unicode string. Because the physical directory name is in a system codepage
	instead of the UTF-8 codepage, the string is not properly converted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time      Version         Size       File name
	  --------------------------------------------------------
	  2/15/2001   07:33p   5.0.2195.3265   332,560   Asp.dll
	  2/15/2001   07:33p   5.0.2195.3243    13,584   Infoadmn.dll
	  2/15/2001   07:33p   5.0.2195.3243   245,520   Infocomm.dll
	  2/15/2001   07:33p   5.0.2195.3243    62,736   Isatq.dll
	  2/15/2001   07:33p   5.0.2195.2714     7,440   W3ctrs.dll 
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows 2000. This
	problem was first corrected in Windows 2000 Service Pack 3.
	
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
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
