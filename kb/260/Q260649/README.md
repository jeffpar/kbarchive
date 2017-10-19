---
layout: page
title: "Q260649: Error Message When You Use WebDav to Copy a Large File"
permalink: /kb/260/Q260649/
---

## Q260649: Error Message When You Use WebDav to Copy a Large File

	Article: Q260649
	Product(s): Microsoft Windows NT
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbSecurity kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use WebDav to copy a file that is larger than 100 megabytes over a
	secure connection to a Web folder, the file copy process may not work, and you
	may receive the following error message:
	
	  An error occurred copying some or all of the selected files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time      Version      Size      File Name  
	  ---------------------------------------------------------------
	  2/2/2001   02:34p    5.1.2195.0    145,168   Channel.dll (56-bit)
	  2/2/2001   06:42p    5.1.2195.0    163,088   Instsch5.dll
	  2/2/2001   02:35p    5.1.2195.0    145,168   Schannel.dll
	
	
	NOTE: This is a server-side hotfix, so it only needs to be applied to the
	Microsoft Internet Information Services (IIS) server.
	
	IMPORTANT: Network problems and insufficient free disk space on the client or
	server can also generate the error message that is listed in the "Symptoms"
	section of this article. If you apply this hotfix to the IIS server and the
	problem is not resolved, you may need to create more free disk space or verify
	that network problems are not causing the problem.
	
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
	
	Additional query words: SSL DAV upload transfer
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbSecurity kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
