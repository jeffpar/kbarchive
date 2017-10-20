---
layout: page
title: "Q166865: WD97: &quot;Invalid Document ID&quot; Opening/Saving Document"
permalink: /kb/166/Q166865/
---

## Q166865: WD97: &quot;Invalid Document ID&quot; Opening/Saving Document

{% raw %}

	Article: Q166865
	Product(s): Word 97 for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbusage word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you open or save a Document Management System (DMS) file in Word, you may
	receive one of the following error messages:
	
	  Invalid Document ID
	
	  -or-
	
	  The document name or path is not valid. It may contain characters which are
	  not part of the current language of the operating system. Try renaming the
	  file or opening it with the language of the system set to the language used
	  when it was created.
	
	NOTE: The text of this error message may vary.
	
	CAUSE
	=====
	
	Your DMS software may not understand Unicode.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Add the following key to the Windows NT Registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\ODMA32\ANSIonNT
	
	For additional information about editing the Windows Registry, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q136393 How to Modify the Windows Registry
	
	
	NOTE: You only need to add the ANSIonNT key to the Windows registry. There are no
	values that need to be added to this registry key.
	
	STATUS
	======
	
	This problem may occur when you use the Microsoft products listed at the
	beginning of this article and DMS software.
	
	MORE INFORMATION
	================
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q159963 Word 97 Supports ODMA
	
	
	  Q99884 Unicode and Microsoft Windows NT
	
	
	Additional query words: pcdocs pc docs saros documentum novell groupwise group wise
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbusage word97 
	Technology        : kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbOSWinNT400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
