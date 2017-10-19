---
layout: page
title: "Q264030: ASP Returns &quot;Include File Not Found&quot; for Included Files on UNC"
permalink: /kb/264/Q264030/
---

## Q264030: ASP Returns &quot;Include File Not Found&quot; for Included Files on UNC

	Article: Q264030
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ASP page containing an include file that is located in a virtual
	directory is accessed though a UNC connection that is mapped to another virtual
	directory, Internet Information Services (IIS) returns the following error
	message:
	
	  Include file not found
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version          Size    File name     Platform
	  -----------------------------------------------------------------
	  06/28/00  05:22a  5.0.2195.2097    331,536 Asp.dll       x86
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	This problem was first corrected in Windows 2000 Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
