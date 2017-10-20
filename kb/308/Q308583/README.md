---
layout: page
title: "Q308583: HIS End-User Client Install Fails w/Internet Explorer 6"
permalink: /kb/308/Q308583/
---

## Q308583: HIS End-User Client Install Fails w/Internet Explorer 6

{% raw %}

	Article: Q308583
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows Millennium Edition 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the Host Integration Server (HIS) 2000 End-User Client on a
	Windows NT 4.0, Windows Millennium Edition (Me), Windows 98, you may receive the
	following dialog box error
	
	  Setup cannot continue, as Internet Explorer 5.0 is not installed.
	
	followed by:
	
	  Installation ended prematurely because of an error.
	
	The following event is posted in the application log of the Event Viewer:
	
	  Event 1000 - Source: MsiInstaller
	
	  Product Microsoft Host Integration Server 2000 End-User Client -- Setup cannot
	  continue, as Internet Explorer 5.0 is not installed.
	
	This problem is not seen on Windows 2000 systems.
	
	CAUSE
	=====
	
	During installation, the End-User Client checks the Internet Explorer registry
	key for version information. In this case, it only checks for version 5.0; any
	other version information causes setup to fail.
	
	
	WORKAROUND
	==========
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Version value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer
	
	3. On the Edit menu, click String, replace the first numeric value with the
	  value 5, and then click OK.
	
	  For example, if the version says 6.0.2600.0000, change it to 5.0.2600.0000.
	
	4. Quit Registry Editor.
	
	NOTE: After installing the End-User Client, this registry value should be changed
	back to its original value.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
