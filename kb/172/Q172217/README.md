---
layout: page
title: "Q172217: ASP Returns Invalid Application Name Error Message"
permalink: /kb/172/Q172217/
---

## Q172217: ASP Returns Invalid Application Name Error Message

{% raw %}

	Article: Q172217
	Product(s): Internet Information Server
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have more than 1000 WWW virtual directories, you may get the following
	error message when an Active Server Page (ASP) is accessed:
	
	  Invalid Application Name
	
	CAUSE
	=====
	
	You may have supplied a wrong path.
	
	ASP can only support up to 1000 WWW virtual directories.
	
	NOTE: This is hard coded in the ASP code.
	
	
	RESOLUTION
	==========
	
	Microsoft has produced a fix which allows the 1000 virtual directory upper limit
	to be changed via a registry entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	The hotfix for ASP now has a new registry entry to ASP that allows you to change
	the upper limit that how many WWW virtual directories ASP can support.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Microsoft Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of Registry
	Editor can be solved. Use this tool at your own risk.
	
	To change the upper limit, do the following steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\ASP\Parameters
	
	3. Click Add Value on the Edit menu. Use the following entry:
	
	  Value Name: MaxVroots
	  Data Type:  REG_DWORD
	  Value:      a number which is larger than the number of WWW
	  virtual directories (default 1000).
	
	4. Exit the Registry Editor and restart the IIS for the change to take effect.
	
	Additional query words: frontpage
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbiisSearch kbiis300
	Version           : 3.00
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
