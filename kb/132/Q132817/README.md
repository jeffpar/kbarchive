---
layout: page
title: "Q132817: E-mail Connection Beta Fails with Windows 95 MAPI.DLL."
permalink: /kb/132/Q132817/
---

## Q132817: E-mail Connection Beta Fails with Windows 95 MAPI.DLL.

{% raw %}

	Article: Q132817
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur with E-Mail Connection:
	
	  Not an identifiable MAPI.DLL
	
	CAUSE
	=====
	
	E-Mail Connection ships with its own MAPI server and is able to run only with
	its version of the Mapi.dll file. The new version of the Mapi.dll file shipped
	with Windows 95 is newer and does not work correctly with this program.
	
	WORKAROUND
	==========
	
	To work around this behavior, rename the Windows 95 Mapi.dll file and use the
	one that ships with E-Mail Connection.
	
	MORE INFORMATION
	================
	
	This workaround may cause Windows 95 MAPI applets to function improperly.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
