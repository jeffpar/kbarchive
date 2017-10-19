---
layout: page
title: "Q257226: SMS: Year 2000 Queries Return &quot;WBEM_E_INVALID_QUERY&quot;"
permalink: /kb/257/Q257226/
---

## Q257226: SMS: Year 2000 Queries Return &quot;WBEM_E_INVALID_QUERY&quot;

	Article: Q257226
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200 kbsms200bug
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The two prompted year 2000 queries ("Y2K All Compliant Software on Specified
	System" and "Y2K All Non-Compliant Software on Specified System") do not work
	when they are run on a Microsoft Windows 2000-based computer. They return
	"WBEM_E_INVALID_QUERY."
	
	CAUSE
	=====
	
	This behavior occurs because WMI is rejecting the query and not allowing it
	through to the provider. The behavior is tied to later versions of WMI (the
	query works in Microsoft Windows NT 4.0, but not in Windows 2000).
	
	WORKAROUND
	==========
	
	You can reformulate the query to avoid this issue. WMI is rejecting the OR
	operators in the ON clause of a JOIN. To make the query work, change this
	
	  FROM SMS_SoftwareProductCompliance as compl INNER JOIN
	  SMS_G_System_SoftwareProduct as prod ON compl.ResProdName = prod.ProductName
	  AND compl.ResProdVer = prod.ProductVersion AND (compl.ResProdLangID =
	  prod.ProductLanguage OR compl.ResProdLangID = 65535)
	
	to this:
	
	  FROM SMS_SoftwareProductCompliance as compl INNER JOIN
	  SMS_G_System_SoftwareProduct as prod ON compl.ResProdName = prod.ProductName
	  AND compl.ResProdVer = prod.ProductVersion ... WHERE ... AND
	  (compl.ResProdLangID = prod.ProductLanguage OR compl.ResProdLangID = 65535)
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbWBEM kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
