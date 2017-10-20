---
layout: page
title: "Q234344: INFO: Template Cache Added in WebClasses for Visual Studio SP3"
permalink: /kb/234/Q234344/
---

## Q234344: INFO: Template Cache Added in WebClasses for Visual Studio SP3

{% raw %}

	Article: Q234344
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbWebClasses kbGrpDSASP kbVS600sp3 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	A new template cache feature has been added to WebClasses for Visual Studio 6.0
	Service Pack 3 (SP3). The new feature is in the new version of the WebClass
	runtime (Mswcrun.dll version 6.00.8450).
	
	MORE INFORMATION
	================
	
	This cache improves the performance of common WebClass applications that use
	HTML templates and tag processing. The cache is useful only for those WebClass
	applications that run on servers with enough virtual memory to cache all the
	commonly used templates. If the cache is constantly exceeded, locks will occur
	and templates will be re-processed. You should either set the cache to a larger
	value or disable it. Also, if the administrator can guarantee there will always
	be enough virtual memory for all the templates used by the WebClass, he or she
	can disable the cache's LRU (least recently used) algorithm, which will slightly
	increase performance and scalability.
	
	The template cache also implements a file watch, so templates can be updated on
	the server without rebooting. Also, changing the TagPrefix causes the template's
	cache to be dumped and reprocessed; therefore, you should avoid changing
	TagPrefixes at runtime (this is not very common) or you should disable the
	cache. Extensive rescanning of tag replacements may take away performance
	gains.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Registry Interface:
	
	Key: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Visual Basic\6.0\WebClass
	ValueName: MaxTemplateCache
	Default: 65 (hex) or 101 (decimal)
	
	If the value is set to 0, the cache is disabled. If value is set to 0xFFFFFFFF,
	LRU is disabled for the cache.
	
	REFERENCES
	==========
	
	For more information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q234317 BUG: Visual Studio SP3 Breaks the WebClass Runtime when Running in
	  the VB IDE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbWebClasses kbGrpDSASP kbVS600sp3 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
