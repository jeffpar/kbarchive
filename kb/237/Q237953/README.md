---
layout: page
title: "Q237953: XADM: Erroneous -1018 Error Returned During Online Backup"
permalink: /kb/237/Q237953/
---

## Q237953: XADM: Erroneous -1018 Error Returned During Online Backup

{% raw %}

	Article: Q237953
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you perform an online backup of the Exchange Server directory or
	information store on a single-processor computer, a -1018 error
	(JET_errReadVerifyFailure) may be returned even though the corresponding
	database is not actually damaged. Note that this problem only occurs if you are
	running version 5.5.2608.0 of the Ese.dll file.
	
	CAUSE
	=====
	
	This problem occurs when the buffer for the Windows NT Backup program is set to
	a value greater than 512 KB.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Database Engine
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ese.dll   | 5.5.2635.0 | 
	+------------------------+
	
	
	WORKAROUND
	==========
	
	Set the buffer to 512 KB or less. To do so, use the following steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Max Buffer Size value under the following key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\NTBackup\Backup Engine
	
	3. On the Edit menu, click DWORD, type a value no greater than 512, and then
	  click OK.
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
