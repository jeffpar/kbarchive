---
layout: page
title: "Q145910: Runtime Heap Error Running CLI_NT"
permalink: /kb/145/Q145910/
---

## Q145910: Runtime Heap Error Running CLI_NT

{% raw %}

	Article: Q145910
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Systems Management Server (SMS) CLI_NT for the first time on a
	Windows NT workstation or Server that has the C drive formatted with NTFS, the
	following error message appears:
	
	  Runtime error: R6018 unexpected heap error
	
	This is configuration specific and occurs only with SMS 1.1 and Windows NT 3.5.
	SMS version 1.0 does not exhibit this error.
	
	CAUSE
	=====
	
	This error occurs if your computer has not had SMS client software installed yet
	and there is no "load" value in the registry in the HKEY_CURRENT_USER subtree,
	in the following key:
	
	Software\MicrosoftWindowsNT\CurrentVersionWindows\load
	
	If the "load" value exists but is blank, the problem does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: prodsms 1.10
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
