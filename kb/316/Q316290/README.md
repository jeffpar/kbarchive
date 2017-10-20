---
layout: page
title: "Q316290: PRB: Config Err Msg When You Create Web Sites or Expand MTS"
permalink: /kb/316/Q316290/
---

## Q316290: PRB: Config Err Msg When You Create Web Sites or Expand MTS

{% raw %}

	Article: Q316290
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new Web site, create a new Web application on an existing Web
	site or directory, or browse the Microsoft Transaction Server (MTS) catalog, you
	may receive the following error message:
	
	  An error occurred creating or setting a configuration Parameter (80040154)
	
	RESOLUTION
	==========
	
	To resolve this problem, reregister 3 MTS dynamic link libraries (DLLs). To do
	this, click Start, click Run, run each of the following commands, and then click
	OK when you receive each dialog box that indicates that the operation was
	successful:
	
	- regsvr32 c:\winnt\system32\mts\mtxcatex.dll
	
	- regsvr32 c:\winnt\system32\mts\mtxclex.dll
	
	- regsvr32 c:\winnt\system32\mts\mtxextrk.dll
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
