---
layout: page
title: "Q155081: HOWTO: Send Files to the Recycle Bin"
permalink: /kb/155/Q155081/
---

## Q155081: HOWTO: Send Files to the Recycle Bin

{% raw %}

	Article: Q155081
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ERASE and DELETE FILE commands can be used to programmatically delete a file
	or files. In previous versions of FoxPro, the ERASE and DELETE FILE commands
	would always permanently delete the files from disk. However, in Visual FoxPro
	version 5.0, the ERASE and DELETE FILE commands have an optional RECYCLE clause
	that will place the files in the Windows 95 or Windows NT 4.0 Recycle Bin.
	
	MORE INFORMATION
	================
	
	The following example uses the ERASE command to place a file in the Recycle
	Bin:
	
	     ERASE Test.txt RECYCLE
	
	The following example uses the DELETE FILE command to place a file in the Recycle
	Bin:
	
	     DELETE FILE Test.txt RECYCLE
	
	NOTE: The RECYCLE clause is ignored under Windows NT 3.51. Files are always
	permanently deleted under Windows NT 3.51.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
