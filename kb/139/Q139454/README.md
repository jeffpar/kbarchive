---
layout: page
title: "Q139454: &quot;Rundll32&quot; Error After Viewing Properties for Network Adapter"
permalink: /kb/139/Q139454/
---

## Q139454: &quot;Rundll32&quot; Error After Viewing Properties for Network Adapter

{% raw %}

	Article: Q139454
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties for a network adapter both in Device Manager and
	Network properties at the same time, you may receive the following error message
	after you close the System Properties or Network dialog box:
	
	  Rundll32
	
	  An error has occurred in your program. To keep working anyway, click Ignore
	  and save your work in a new file. To quit this program, click Close. You will
	  lose information you entered since your last Save.
	
	If you click Close, the following error message is displayed:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	RESOLUTION
	==========
	
	If you must view the properties for a network adapter both in Device Manager and
	Network properties at the same time, you may be able to work around this problem
	by closing the dialog box that you opened second before you close the dialog box
	you opened first.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you open Device Manager first, and then open Network properties, the problem
	occurs if you close Device Manager first and then close Network properties. If
	you open Network properties and then open Device Manager, the problem occurs if
	you close Network properties first and then close Device Manager.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
