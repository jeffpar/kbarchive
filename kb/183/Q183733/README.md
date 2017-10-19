---
layout: page
title: "Q183733: Active Log Format Drop-down List Is Not Populated"
permalink: /kb/183/Q183733/
---

## Q183733: Active Log Format Drop-down List Is Not Populated

	Article: Q183733
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you upgrade from Internet Information Server (IIS) 3.0 to IIS 4.0 or
	install the Windows NT Option Pack, the Active Log Format drop-down list box in
	Internet Service Manager (ISM) is empty or not populated.
	
	CAUSE
	=====
	
	IIS 4.0 uses a new logging format that is extensible. You may have to re-
	register some of the logging DLL files, if the Setup program does not register
	them.
	
	NOTE: The logging modules are implemented as COM objects.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To restore the list of log formats, run the following three commands from a
	command prompt in the <%SystemRoot%>\System32\Inetsrv directory:
	
	  regsvr32 iislog.dll
	  regsvr32 iscomlog.dll
	  regsvr32 logui.ocx
	  regsvr32 cnfgprts.ocx
	
	
	MORE INFORMATION
	================
	
	To locate the Active log format drop-down list box in the ISM, view the
	properties of a web site, and then click the Web Site tab.
	
	Additional query words: blank clear missing dropdown listbox logging Exchange 2000
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
