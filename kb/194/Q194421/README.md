---
layout: page
title: "Q194421: ASP Registry Key QueueWaitTimeOutInSeconds Not Working"
permalink: /kb/194/Q194421/
---

## Q194421: ASP Registry Key QueueWaitTimeOutInSeconds Not Working

	Article: Q194421
	Product(s): Internet Information Server
	Version(s): WINNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) executes the ASP requests even if
	the requests have been in the queue longer than QueueWaitTimeOutInSeconds
	specified in the registry.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time   Size    File Name   Platform
	  ---------------------------------------------
	  09/03/98  01:47p 382,064 Asp.dll     (x86)
	  09/03/98  02:35p 557,328 Asp.dll     (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 3.0.
	
	Additional query words: IIS hotfix hot fix qfe quick fix engineering patch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WINNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
