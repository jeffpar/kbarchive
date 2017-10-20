---
layout: page
title: "Q290424: Index: Application Called an Interface That was Marshalled for a"
permalink: /kb/290/Q290424/
---

## Q290424: Index: Application Called an Interface That was Marshalled for a

{% raw %}

	Article: Q290424
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Ixsso.query object to access the catalog you may receive an
	error that the application called an interface that was marshalled for a
	different thread. The error message that occurs is:
	
	  Error Type Create Record Set 0x8001010E Application called interface that was
	  marshalled for a different thread.
	
	CAUSE
	=====
	
	This may be caused by problems with the registration of the Ixsso.dll file.
	
	RESOLUTION
	==========
	
	To resolve this issue, use these steps:
	
	1. On the taskbar, click Start, programs, administrative tools, component
	  services
	
	2. In the Component Services dialog box, double-click the Computers folder.
	  Expand My Computer, and then expand COM+ Applications. For each entry, expand
	  the Components folder. Look in the Components folder and if there is an entry
	  for Ixsso.query.2 or Ixsso.util.2, remove them.
	
	3. Close the Component Services dialog box. On the taskbar, click Start, and
	  then click Run. In the Run dialog box, type:
	
	  " cmd " (without the quotation marks)
	
	  Click OK.
	
	4. Change the directory to the System32 folder by typing:
	
	  " cd %systemroot%\win32 " (without the quotation marks)
	
	  Press ENTER.
	
	5. Type:
	
	  " regsvr32 /u ixsso.dll " (without the quotation marks)
	
	  Press ENTER.
	
	  You should receive a message that states that the DLL was unregistered
	  successfully.
	
	6. Type:
	
	  " regsvr32 ixsso.dll " (without the quotation marks)
	
	  Press ENTER.
	
	  You should receive a message that states that the DLL was registered
	  successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
