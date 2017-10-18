---
layout: page
title: "Q231172: HTMLA &quot;Everyone&quot; Is Always Listed in Operators after Installing"
permalink: kb/231/Q231172/
---

## Q231172: HTMLA &quot;Everyone&quot; Is Always Listed in Operators after Installing

	Article: Q231172
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the IIS 4.0 HTML Admin tool (HTMLA), Everyone is always listed in Operators
	after you install Windows NT Service Pack 4. Everyone can be deleted using
	HTMLA, but it will reappear after closing and re-entering HTMLA. Other strange
	symptoms have been reported, but not verified.
	
	The MMC (Microsoft Management Console) lists the correct operators. Actual
	permissions are not effected.
	
	CAUSE
	=====
	
	A regression occurs in the Iiadmhd.asp file that causes Everyone to always
	appear in the HTMLA.
	
	WORKAROUND
	==========
	
	To work around this problem, use the MMC.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  04/22/99  07:19p                 4,687 Iiadmhd.asp   alpha
	  04/22/99  07:19p                 4,687 Iiadmhd.asp   i386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
