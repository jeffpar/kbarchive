---
layout: page
title: "Q250844: XADM: &quot;Run-Time Error 5&quot; Err Msg When You Run the Exmap Utility"
permalink: kb/250/Q250844/
---

## Q250844: XADM: &quot;Run-Time Error 5&quot; Err Msg When You Run the Exmap Utility

	Article: Q250844
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exmap utility (Exmap.exe) reads the Exchange Server directory
	through ActiveX Data Objects and automates Microsoft Visio to draw a diagram of
	the Exchange Server site topology. When you run the Exmap utility against an
	Exchange Server environment where the site and server names are the same, you
	may receive the following error message:
	
	  Run-time error '5'
	
	CAUSE
	=====
	
	The server and site name are the same.
	
	RESOLUTION
	==========
	
	To resolve this problem, verify that the server and site names are unique, or
	verify that you are using the latest version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exmap version 1.5.0.10. This
	behavior is corrected in Exmap version 1.5.0.11.
	
	MORE INFORMATION
	================
	
	To obtain the latest version of the Exmap utility, view the following Microsoft
	Web site:
	
	  http://www.microsoft.com/exchange/downloads/2000/ExMap.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
