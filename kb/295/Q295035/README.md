---
layout: page
title: "Q295035: SMS: Charting in Web Reporting Tool Requires Office Run Locally"
permalink: kb/295/Q295035/
---

## Q295035: SMS: Charting in Web Reporting Tool Requires Office Run Locally

	Article: Q295035
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbsms200
	Last Modified: 29-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Charting option in the Systems Management Server (SMS) Web
	Reporting tool, you may receive the following error message:
	
	  Charting requires Office 2000 on the client machine.
	
	You may receive this error message even if Microsoft Office 2000 components are
	installed on the local computer.
	
	CAUSE
	=====
	
	This issue can occur because the SMS Web Reporting tool is calling the Office
	2000 components by class ID. When this occurs, the "install on demand" feature
	of MSI does not start, so the feature does not become available.
	
	WORKAROUND
	==========
	
	To resolve this issue, run Office 2000 Setup by using the Add/Remove Programs
	tool in Control Panel, and set Office Web Components (under Office Shared
	Features) to run locally.
	
	MORE INFORMATION
	================
	
	The SMS Web Reporting Tool is available from the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=28039
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
