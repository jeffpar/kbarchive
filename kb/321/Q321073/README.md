---
layout: page
title: "Q321073: Index Service Stops Responding When Filtering Japanese ExcelFile"
permalink: /kb/321/Q321073/
---

## Q321073: Index Service Stops Responding When Filtering Japanese ExcelFile

{% raw %}

	Article: Q321073
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,2000 SP2,3.0
	Operating System(s): 
	Keyword(s): kbWin2000preSP4Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Index Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Indexing Services may loop infinitely when it tries to index certain Microsoft
	Office documents. Currently, the only case where this is found to occur is with
	a Japanese Microsoft Excel spreadsheet on the Japanese version of Windows 2000.
	No warning or error events are logged. CPU utilization is 100% on single
	processor computers and available memory will eventually be used up.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version              Size  File name
	  ----------------------------------------------------------
	  19-Apr-2002  13:17                     21,898  Ciquery.htm
	  21-Apr-2002  17:21  5.0.2195.5617     122,128  Idq.dll
	  21-Apr-2002  17:21  2002.4.15.0       109,568  Offfilt.dll
	  21-Apr-2002  17:21  5.0.2195.5617   1,426,192  Query.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000preSP4Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIdxServSearch kbAudDeveloper kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,3.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
