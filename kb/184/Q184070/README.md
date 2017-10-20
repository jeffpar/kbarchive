---
layout: page
title: "Q184070: XCLN: URL Opened in Outlook Today Starts Internet Explorer"
permalink: /kb/184/Q184070/
---

## Q184070: XCLN: URL Opened in Outlook Today Starts Internet Explorer

{% raw %}

	Article: Q184070
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Outlook 98, when you open a Web link that is a Uniform Resource
	Locator (URL) added to the Outlook Today view, the link appears to open
	Microsoft Internet Explorer 4.0, even though you use another program as your
	default Web browser.
	
	CAUSE
	=====
	
	This behavior for Outlook 98 is by design. Although it appears that Internet
	Explorer 4.0 is opened, the link is actually being accessed using an embedded
	HTML rendering control that is based on Internet Explorer 4.0 technology.
	
	The use of this browser control within Outlook 98 does not change your default
	browser for accessing Web links in other situations.
	
	STATUS
	======
	
	Currently there is no procedure for using another browser within the Outlook
	Today view.
	
	WORKAROUND
	==========
	
	To open the Web link in your default browser, type it directly in to the
	browser's command window, or access it from a source other than Outlook Today.
	
	
	Additional query words: launch launches launching launched run runs running boot boots booting initiate initiates initiating initiated initialize initializes initializing initialized issue turn turns turning turned on
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
