---
layout: page
title: "Q190623: INFO: Accessing Data in an Active Document Application"
permalink: /kb/190/Q190623/
---

## Q190623: INFO: Accessing Data in an Active Document Application

{% raw %}

	Article: Q190623
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual FoxPro Active Document application is a Visual FoxPro application that
	can be hosted in an Active Document container such as Microsoft Internet
	Explorer.
	
	When you develop an Active Document application, special considerations must be
	made when determining how the application will access any required data.
	
	MORE INFORMATION
	================
	
	When an Active Document is hosted in Internet Explorer, the application is
	downloaded to the local disk before it is executed. At this point, the Active
	Document application behaves the same as any other local Visual FoxPro
	applications with respect to data access.
	
	The most common implementation of a Visual FoxPro Active Document application is
	over a corporate Intranet. The Active Document application offers many benefits
	over a traditional application with respect to application deployment and
	maintenance, and the underlying local area network (LAN) in the corporate
	environment offers a mechanism for easy access to remote data. In the corporate
	Intranet scenario, the Active Document application accesses data on a remote
	computer through the use of a mapped network drive or a universal naming
	convention (UNC) path that points to the remote data.
	
	When deploying an Active Document application over the Internet, some other
	mechanism for accessing the data must be provided. Visual FoxPro provides no
	native capability of directly accessing data over the Internet. One possible
	solution is the use of ActiveX Data Objects (ADO) to access data over the
	Internet from within a Visual FoxPro Active Document application. For more
	information regarding ADO, refer to the Microsoft ADO Web Page at the following
	URL:
	
	  http://www.microsoft.com/data/ado/
	
	Additional query words: kbActiveDocs kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
