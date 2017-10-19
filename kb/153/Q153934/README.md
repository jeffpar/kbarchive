---
layout: page
title: "Q153934: IIS Converts %0D%0A to Hex 0DH and 20H When Submit to ODBC"
permalink: /kb/153/Q153934/
---

## Q153934: IIS Converts %0D%0A to Hex 0DH and 20H When Submit to ODBC

	Article: Q153934
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Try the Guestbook in the Internet Database Connector examples of the default
	home page of an Internet Information Server (IIS). If the following lines are
	typed in the Comments field of an entry:
	
	line1
	line2
	line3
	
	The following lines are replied when you query the same entry:
	
	line1
	line2
	line3
	
	NOTE: The extra spaces are inserted in front of line2 and line3.
	
	CAUSE
	=====
	
	%0D%0A is changed to hex 0DH and 20H.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server 1.0.
	
	Additional query words: textarea
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
