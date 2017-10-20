---
layout: page
title: "Q174248: Index Server 1.1 Does Not Index German Compound Words"
permalink: /kb/174/Q174248/
---

## Q174248: Index Server 1.1 Does Not Index German Compound Words

{% raw %}

	Article: Q174248
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you index German documents containing compound words with "[ASCII 228]",
	"[ASCII 246]", "[ASCII 252]", these compound words will not be indexed by Index
	Server version 1.1. When you search for those documents, you will get the
	following error message:
	
	  No documents found.
	
	CAUSE
	=====
	
	The wordbreaker DLL that splits compound words into single words only indexes
	these compound words.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows 2000 Indexing Service.
	
	WORKAROUND
	==========
	
	Use the following files from Index Server version 2.0:
	
	- Sccfa.dll
	
	- Sccfi.dll
	
	- Sccifilt.dll
	
	- Sscut.dll
	
	Copy them in the \Winnt\System32 directory and then re-index everything.
	
	STATUS
	======
	
	This problem is corrected in Windows 2000 Indexing Service.
	
	Additional query words: indx
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINNT: 1.1
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
