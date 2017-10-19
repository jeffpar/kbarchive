---
layout: page
title: "Q316864: Problems with Adobe Acrobat 5.0 After You Install URLScan"
permalink: /kb/316/Q316864/
---

## Q316864: Problems with Adobe Acrobat 5.0 After You Install URLScan

	Article: Q316864
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error messages in Microsoft Internet Explorer
	after you install URLScan:
	
	  File does not begin with '%PDF-'.
	
	-or-
	
	  The file is damaged and cannot be repaired
	
	CAUSE
	=====
	
	In the Urlscan.ini file, RemoveServerHeader is set to 1.
	
	RESOLUTION
	==========
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	WORKAROUND
	==========
	
	To work around this problem, set RemoveServerHeader to 0.
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Microsoft Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	Permitted values for RemoveServerHeader are 0 and 1. If the value is 1, URLScan
	removes the server header on all responses. If the value is 0, URLScan does not
	remove the server header on all responses. The default value for
	RemoveServerHeader is 0. Note that this feature is only available if URLScan is
	installed on IIS 4.0 or later.
	
	REFERENCES
	
	For additional information about the URLScan security tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q307608 INFO: Availability of URLScan Security Tool
	
	For more information, see the following Knowledge Base article:
	
	  Q313489 You Can Place Content Headers in the Body of a Response If an ISAPI
	  Filter Is Installed
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch security_patch kbIIS400500510April2002Rollup
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
