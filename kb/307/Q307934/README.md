---
layout: page
title: "Q307934: Locking Down WebDAV via ACL Still Allows PUT &amp; DELETE Requests"
permalink: /kb/307/Q307934/
---

## Q307934: Locking Down WebDAV via ACL Still Allows PUT &amp; DELETE Requests

	Article: Q307934
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbCOMIS kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTTP PUT and DELETE requests are handled by Web Distributed Authoring and
	Versioning (WebDAV) in Internet Information Services (IIS) 5.0 and 5.1. Because
	WebDAV may expose unnecessary functionality, Microsoft recommends that you
	disable WebDAV by setting a deny EXECUTE access control list (ACL) on
	Httpext.dll. PUT and DELETE requests can still succeed even after you lock down
	Httpext.dll.
	
	CAUSE
	=====
	
	When IIS fails to load Httpext.dll, the core Web service has internal routines
	to handle PUT requests; however, these internal routines have not been tested
	because disabling DAV is not a configuration that is by design in IIS. You do
	not have to set a deny EXECUTE ACL on Httpext.dll because a new registry value
	is exposed to disable WebDAV.
	
	RESOLUTION
	==========
	
	- Internet Information Services 5.1
	- Internet Information Services 5.0
	
	Internet Information Services 5.1
	---------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	Internet Information Services 5.0
	---------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	For additional information on a registry value introduced in the Windows 2000
	Security Rollup Package 1 (SRP1), click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q241520 How to Disable WebDAV for IIS 5.0
	
	For additional information about SRP1, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Internet Information Services 5.1
	---------------------------------
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services 5.1.
	
	Internet Information Services 5.0
	---------------------------------
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services 5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom security_patch kbwin2000srp1 iislockd srp kbIIS400500510April2002Rollup
	
	======================================================================
	Keywords          : kbSecurity kbCOMIS kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
