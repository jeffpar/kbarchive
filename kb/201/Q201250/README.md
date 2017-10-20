---
layout: page
title: "Q201250: BUG: Explorer May Incorrectly Display Auditing Settings"
permalink: /kb/201/Q201250/
---

## Q201250: BUG: Explorer May Incorrectly Display Auditing Settings

{% raw %}

	Article: Q201250
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you programmatically set auditing on a file for some events, the
	corresponding check boxes do not appear in Explorer's auditing dialog box.
	
	CAUSE
	=====
	
	Auditing is set correctly on the file and the appropriate audits are being
	generated. The audit properties dialog box in Explorer is not displaying the
	audit settings accurately, and can be ignored.
	
	RESOLUTION
	==========
	
	To work around the problem, use the same tool to view the SACL as you used to
	manipulate the System Access Control List (SACL).
	
	To resolve this problem, use the new security user interface in Explorer that is
	installed when you add the Security Configuration Editor component of Service
	Pack 4, which does not exhibit this problem.
	
	For additional information about obtaining the latest service pack for Windows NT
	version 4.0, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	This problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	Additional query words: SCM SCE
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
