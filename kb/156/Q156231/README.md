---
layout: page
title: "Q156231: &quot;Error 26&quot; After Installing Windows 95 from NetWare Server"
permalink: /kb/156/Q156231/
---

## Q156231: &quot;Error 26&quot; After Installing Windows 95 from NetWare Server

{% raw %}

	Article: Q156231
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork 3rdpartynet win95 kb3rdPartyNetClientkbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95 from a Novell server and restart your computer, you
	may receive the following error message:
	
	  Error 26
	
	When this error message occurs, you have no network connectivity and you cannot
	start Windows 95.
	
	CAUSE
	=====
	
	The error message can occur when both of the following conditions exist:
	
	- The Autoexec.bat file contains the following command:
	
	  net start nwredir
	
	- The NetWare server name contains one or more dashes.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and
	Microsoft Windows 95 OEM Service Release 2 (OSR2).
	
	This issue is not resolved in Microsoft Windows 98. Microsoft does not support
	running Windows 98 from a network server. For information about the current
	version of Windows, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 3rdpartynet win95 kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
