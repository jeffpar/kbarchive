---
layout: page
title: "Q256930: XCLN: Save as Web Page Feature Requires Web Publishing Wizard"
permalink: /kb/256/Q256930/
---

## Q256930: XCLN: Save as Web Page Feature Requires Web Publishing Wizard

{% raw %}

	Article: Q256930
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- the operating system: Microsoft Windows 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Save As Web Page feature of Microsoft Outlook 2000 running on a
	Microsoft Windows 2000-based computer, you may receive the following error
	message:
	
	  To save your calendar as a Web page, you must first install the Internet
	  Explorer Web Publishing Wizard. To install this component, go to Control
	  Panel and choose Add/Remove Programs, select Microsoft Internet explorer,
	  click the Add/Remove button, and add the Web Publishing Wizard.
	  Alternatively, you can download the Web Publishing Wizard from the Microsoft
	  Windows Update Web site.
	
	CAUSE
	=====
	
	The Web Publishing Wizard (WPW) is not installed by default on Windows 2000.
	
	RESOLUTION
	==========
	
	Download and install the WPW from the following link:
	
	  http://download.microsoft.com/msdownload/webpubwiz/1.52/x86/en/wpie415-x86.exe
	
	
	NOTE: When you install the WPW from this link, you will receive a warning that it
	is not designed for your current operating system. This message is benign and
	can be ignored.
	
	MORE INFORMATION
	================
	
	The information in the error message is a documentation error. The steps do not
	work because WPW does not appear in the Add/Remove Programs of the Control
	Panel.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOutlookSearch kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
