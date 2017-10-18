---
layout: page
title: "Q260357: HEAD Request Returns Both Header and Body"
permalink: kb/260/Q260357/
---

## Q260357: HEAD Request Returns Both Header and Body

	Article: Q260357
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you map an extension to Ssinc.dll to use server-side include files, if you
	send a HEAD request for such a mapped file to the Web server, the request
	returns both header and body rather than just the header.
	
	CAUSE
	=====
	
	This problem occurs because Ssinc.dll does not recognize the HEAD request.
	
	WORKAROUND
	==========
	
	To work around this problem, add the HEAD request type to the "exclusion" list
	in the Application mapping properties of the Web site. The problem no longer
	occurs because the Web server (not Ssinc.dll) handles the verb checking.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version        Size    File name  Platform
	  -------------------------------------------------------------
	  5/17/2000  8:34am  5.0.2195.2096  41,232  Ssinc.dll  x86
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
