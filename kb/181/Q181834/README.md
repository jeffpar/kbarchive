---
layout: page
title: "Q181834: Message ID Tab Missing in Properties of a Message"
permalink: /kb/181/Q181834/
---

## Q181834: Message ID Tab Missing in Properties of a Message

{% raw %}

	Article: Q181834
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.00,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook Client and view properties for a message in
	the Properties dialog box, the Message ID tab may be missing.
	
	CAUSE
	=====
	
	The Message ID tab functionality comes from an installable add-in named Exchange
	Extensions. The Exchange Extensions are stored in the extension configuration
	file (Emsuix.ecf), which you can install using the Add-In Manager. You can have
	the Exchange Server service installed and not have the Exchange Extensions
	add-in installed; however, the Exchange Extensions add-in is installed by
	default.
	
	WORKAROUND
	==========
	
	To install the Exchange Extensions add-in, follow these steps:
	
	1. On the Tools menu, click Options and then click the General tab.
	
	2. Click the Add-In Manager button and then click the Install button to open the
	  \Office\Addins folder.
	
	3. Select Emsuix.ecf and click Open.
	
	4. Exchange Extensions should be listed in the Add-Ins dialog box. Click OK and
	  then click OK again to close all dialog boxes.
	
	MORE INFORMATION
	================
	
	For more information about installing add-ins, do the following:
	
	1. Type "add-in" in the Office Assistant, and click Search.
	
	2. Click "Load, install, or remove an add-in."
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:8.00,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
