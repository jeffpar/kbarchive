---
layout: page
title: "Q243220: COM Internet Services Do Not Work Without ProxyOverride Entry"
permalink: /kb/243/Q243220/
---

## Q243220: COM Internet Services Do Not Work Without ProxyOverride Entry

	Article: Q243220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv osr2 win95 win98 win98se
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Internet Explorer version 5 on a computer running
	Windows 95 or Windows 98, or if you are running Windows 98 Second Edition, you
	may receive the following error message from COM Internet Services:
	
	  The remote server machine does not exist or is unavailable (Error 462)
	
	CAUSE
	=====
	
	This behavior can occur if you clear the "Bypass proxy server for local intranet
	access" check box in Internet Explorer options.
	
	In Internet Explorer 4.x, clearing the "Bypass proxy server for local internet
	access" check box sets the following registry value to null:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet
	  Settings\ProxyOverride
	
	In Internet Explorer 5, the ProxyOverride value is deleted. The Remote Procedure
	Call (RPC) protocol flags an error condition when it cannot find the
	ProxyOverride key in the registry.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Version      Size    File name     Platform
	  ---------------------------------------------------------------
	  09/08/1999  07:00p  4.71.3328.0  26,112  Rpcltccm.dll  Windows 95 
	                                                         (retail)
	  09/08/1999  07:00p  4.71.3328.0  26,112  Rpcltccm.dll  Windows 95 
	                                                         OSR 2-2.5
	  09/08/1999  07:00p  4.71.3328.0  26,112  Rpcltccm.dll  Windows 98 
	                                                         (retail)
	  09/08/1999  07:00p  4.71.3328.0  26,112  Rpcltccm.dll  Windows 98
	                                                         Second Edition
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about Windows 98 and Windows 98 Second Edition
	hotfixes, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q206071 General Information About Windows 98 and Windows 98 Second Edition
	  Hotfixes
	
	For additional information about Windows 95 hotfixes, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words: w95qfe
	
	======================================================================
	Keywords          : kbenv osr2 win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
