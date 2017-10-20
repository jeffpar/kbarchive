---
layout: page
title: "Q194878: Error: &quot;No Transport Provider&quot; Trying to Send Mail"
permalink: /kb/194/Q194878/
---

## Q194878: Error: &quot;No Transport Provider&quot; Trying to Send Mail

{% raw %}

	Article: Q194878
	Product(s): Microsoft Windows NT
	Version(s): 4.0,8.0,8.01,8.02,8.03,8.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook 98 and Outlook 97
	-------------------------
	
	When Outlook is configured for Internet mail, sending mail with this service you
	will receive a non-delivery report (NDR) stating, "No transport provider was
	available for delivery to this recipient. The service is installed but doesn't
	show up in Tools/Check for new mail on..."
	
	CAUSE
	=====
	
	Outlook clients need to create an RHC file in the %systemroot%\system32
	directory. The complete filename for the RHC file is:
	
	  MSIN****RHC
	
	where **** is going to be a different number for each user.
	
	The default permission on the System32 directory is:
	
	  Everyone Read (RX)
	
	Change this to:
	
	  Everyone Change
	
	and uncheck:
	
	  Replace permissions on Subdirectories and Replace permissions on
	  existing files.
	
	RESOLUTION
	==========
	
	Changing the permissions on the System32 directory to Everyone Change (RWX)(RWX)
	will allow users when running Outlook to create these files.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: Windows NT Terminal Server kbDSupport terminalsrv
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :4.0,8.0,8.01,8.02,8.03,8.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
