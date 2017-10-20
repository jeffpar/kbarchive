---
layout: page
title: "Q192663: SMSINST: ODBC Data Source May Fail to Be Installed"
permalink: /kb/192/Q192663/
---

## Q192663: SMSINST: ODBC Data Source May Fail to Be Installed

{% raw %}

	Article: Q192663
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Systems Management Server Installer executable file does not correctly install
	an ODBC Data Source when using the Configure ODBC Data Source script item in the
	Systems Management Server Installer script editor. No warnings or errors are
	displayed or logged.
	
	CAUSE
	=====
	
	This problem can occur if invalid or blank entries are included in the Data
	Source Attributes section of the Configure ODBC Data Source script item. During
	runtime, Systems Management Server Installer recognizes invalid information
	included in this section, and does not configure the Data Source. However, the
	Systems Management Server Installer also fails to display or log an error that
	it encountered the problem.
	
	WORKAROUND
	==========
	
	To work around this problem, verify that the Data Source Attributes section of
	the Configure ODBC Data Source script item does not contain any invalid
	entries.
	
	For example, note that you should not include "Driver=" or "User=" entries,
	because these are considered invalid (because the script item adds these for you
	automatically).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	Additional query words: prodsms open database connectivity
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
