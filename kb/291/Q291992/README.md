---
layout: page
title: "Q291992: 100% CPU Occurs When Refreshing Deleted Vdir in MetaEdit 2.0/2.1"
permalink: kb/291/Q291992/
---

## Q291992: 100% CPU Occurs When Refreshing Deleted Vdir in MetaEdit 2.0/2.1

	Article: Q291992
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MetaEdit 2.0 or MetaEdit 2.1 to view the properties of a virtual
	directory that has been deleted in the Microsoft Management Console (MMC), the
	following error message occurs twice:
	
	  An unknown error was encountered in a calling function, the error message
	  passed was:
	
	  "The following error occurred:"
	
	After the error messages are cleared, MetaEdit consumes 100% of CPU processing
	and does not respond to user input; however, you can close it from the Task
	Manager.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the IIS MetaEdit 2.2 Utility. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q232068 How to Download, Install, and Uninstall the IIS MetaEdit 2.2 Utility
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MetaEdit version 2.0 and 2.1 for
	IIS.
	
	
	Additional query words: iis 4 5 bug RK meta edit meta-edit
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
