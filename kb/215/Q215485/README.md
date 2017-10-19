---
layout: page
title: "Q215485: Discussion Web in FrontPage May Cause IIS to Stop Responding"
permalink: /kb/215/Q215485/
---

## Q215485: Discussion Web in FrontPage May Cause IIS to Stop Responding

	Article: Q215485
	Product(s): Internet Information Server
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) may stop responding when you use the
	discussion Web in the FrontPage Server Extensions.
	
	CAUSE
	=====
	
	This behavior occurs because of a problem in the discussion Web where the
	vti_discussionlinks directive in the Tocproto.htm file is altered. This causes
	the Inetinfo process to go into a recursive loop and eventually the IIS computer
	stops responding.
	
	
	RESOLUTION
	==========
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File Name     Platform
	  -----------------------------------------------------
	  01/06/99   06:05p   709,392   Fp30wel.dll   x86
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	This problem has been fixed in the Microsoft FrontPage 2000 Server Extensions.
	
	MORE INFORMATION
	================
	
	The fix is to properly handle the Tocproto.htm file even when the Tocproto is
	missing.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch fpse
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbFrontPageSearch kbiis400 _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
