---
layout: page
title: "Q300849: XADM: Error Messages Occur When You Run the ExMerge Utility"
permalink: /kb/300/Q300849/
---

## Q300849: XADM: Error Messages Occur When You Run the ExMerge Utility

{% raw %}

	Article: Q300849
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows NT Server, Enterprise Edition version 4.0 
	   - Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the ExMerge utility on an Exchange Server computer, you may receive
	any of the following error messages:
	
	  ExMerge.exe - Ordinal Not Found
	
	  The ordinal 6601 could not be located in the dynamic link library MFC42.DLL.
	
	  -or-
	
	  ExMerge.exe - Unable To Locate DLL
	
	  The dynamic link library ACTIVEDS.dll could not be found in the specified
	  path.
	
	  -or-
	
	  ExMerge
	
	  EXMERGE.EXE cannot run on this version of your operating system. The program
	  requires Windows 2000 or higher to run.
	
	  -or-
	
	  ExMerge.exe - Ordinal Not Found
	
	  The ordinal 6883 could not be located in the dynamic link library MFC42.DLL.
	
	CAUSE
	=====
	
	This issue can occur if you try to run ExMerge version 6.0.x on a computer that
	is running Windows NT 4.0. This version of ExMerge requires that you use
	Microsoft Windows 2000.
	
	NOTE: The last error message listed in the "Symptoms" section has a different
	cause. You may receive that error message if the version of the Mfc42.dll file
	on the local computer is out of date. Versions 2.60 and later of ExMerge uses an
	updated version of the Mfc42.dll file. The version of the updated .dll must be
	6.00 or later.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain a previous version of the ExMerge utility that you
	can use with Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The ExMerge utility 6.0.x requires that you use Windows 2000 as your operating
	system; however, you can run this utility against either Exchange Server 5.5 or
	Exchange 2000 databases.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
