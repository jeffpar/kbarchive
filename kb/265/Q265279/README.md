---
layout: page
title: "Q265279: PRB: Disabling of File Caching in IIS 4.0 Fails"
permalink: /kb/265/Q265279/
---

## Q265279: PRB: Disabling of File Caching in IIS 4.0 Fails

	Article: Q265279
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbIIS kbiis400
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to delete a file that has previously been accessed through a Web
	browser and is located under the Internet Information Server (IIS) folder
	structure (for example, \\WWWServerName\Wwwroot), the following error message
	may appear:
	
	  Error Deleting File: Cannot (filename): There has been a sharing violation.
	  The source of destination file may be in use. You cannot delete filename.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q184956 Problems Deleting Files Under Internet Information Server
	
	After you turn off file caching by setting the registry key:
	
	  HKLM\System\CurrentControlSet\Services\Inetinfo\Parameters\DisableMemoryCache
	
	IIS is still caching the file.
	
	CAUSE
	=====
	
	In addition to DisableMemoryCache, there is another registry key affecting
	caching. Under the following registry key:
	
	  HKLM\System\CurrentControlSet\Services\Inetinfo\Parameters
	
	you will find that there is also a value called MemoryCacheSize. This may be
	there from a previous version of IIS on a computer that was then upgraded to IIS
	4.0.
	
	RESOLUTION
	==========
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, you can delete the MemoryCacheSize key under:
	
	  HKLM\System\CurrentControlSet\Services\Inetinfo\Parameters
	
	and reboot the computer. To do so, use Registry Editor or a different editor to
	delete the relevant key.
	
	If this does not help, install the latest service pack for Windows NT.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q184956 Problems Deleting Files Under Internet Information Server
	
	  Q191742 IIS: Access Denied when Trying to Update Files on IIS Computer
	
	Additional query words: HandleEx
	
	======================================================================
	Keywords          : kbDSupport kbIIS kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
