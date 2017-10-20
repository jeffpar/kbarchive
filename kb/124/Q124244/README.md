---
layout: page
title: "Q124244: Using Quotes with DEL may Delete Wrong Directory Files"
permalink: /kb/124/Q124244/
---

## Q124244: Using Quotes with DEL may Delete Wrong Directory Files

{% raw %}

	Article: Q124244
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you surround the path with quotes when using the DEL command, DEL attempts to
	delete the files in the directory above the path you specify. For example, if
	you type
	
	  del "c:\directory1\directory2"
	
	DEL responds with:
	
	  c:\directory1\*, Are you sure (y/n)?
	
	If you type Y, all the files will be deleted in the directory displayed in the
	warning prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	If you use the wildcard character or asterisk (*), this problem will not occur.
	For example, if you type
	
	  del "c:\directory1\directory2\*"
	
	DEL responds with:
	
	  c:\directory1\directory2\*, Are you sure (y/n)?
	
	Additional query words: prodnt lfn long file name filename
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
