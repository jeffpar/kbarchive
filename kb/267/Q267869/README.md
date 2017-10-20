---
layout: page
title: "Q267869: Windows NT 4.0 SP 6 May Make Empty Folder Structure C:&#92;Inetpub"
permalink: /kb/267/Q267869/
---

## Q267869: Windows NT 4.0 SP 6 May Make Empty Folder Structure C:&#92;Inetpub

{% raw %}

	Article: Q267869
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 6 or Service Pack 6a, an empty
	folder structure may be created in the C:\Inetpub folder. Note that this only
	occurs if you install the Microsoft Windows NT 4.0 Option Pack (including the
	"ExAir" sample), and your Inetpub folder is different from C:\Inetpub.
	
	WORKAROUND
	==========
	
	To work around this problem, note that you can safely delete the empty folders
	in the C:\Inetpub folder because the files in your actual Inetpub folder have
	been updated correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
