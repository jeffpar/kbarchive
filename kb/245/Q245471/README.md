---
layout: page
title: "Q245471: IIS: Error Renaming Virtual Directory Using HTML Administrator"
permalink: /kb/245/Q245471/
---

## Q245471: IIS: Error Renaming Virtual Directory Using HTML Administrator

	Article: Q245471
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user is listed as an operator of a Web site and then changes the name of
	a virtual directory within the HTML administrator, an error dialog box is
	generated. Following is such an error message:
	
	  The Node could not be renamed. (Object Required)
	
	RESOLUTION
	==========
	
	Refresh the Web page by pressing F5 or Click View then Refresh. The change can
	now be seen. If you are a local administrator on the server, this error does not
	appear and you are able to view the change as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
