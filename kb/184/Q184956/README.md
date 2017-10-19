---
layout: page
title: "Q184956: Problems Deleting Files under Internet Information Server"
permalink: /kb/184/Q184956/
---

## Q184956: Problems Deleting Files under Internet Information Server

	Article: Q184956
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a file previously accessed through an Internet browser
	and located under the Internet Information Server (IIS) directory structure (for
	example, \\WWWServerName\wwwroot), the following error message may appear:
	
	  <Error Deleting File> Cannot (filename): There has been a sharing
	  violation. The source of destination file may be in use. You cannot
	  delete filename.
	
	CAUSE
	=====
	
	This is due to a hard-coded file lock timeout value for IIS.
	
	WORKAROUND
	==========
	
	You can delete the file 60 seconds after closing the Internet browser. This may
	cause some loss of performance depending on server load, and so on.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
