---
layout: page
title: "Q286785: PRB: DblClick() Doesn't Fire With Citrix MetaFrame ICA Client"
permalink: /kb/286/Q286785/
---

## Q286785: PRB: DblClick() Doesn't Fire With Citrix MetaFrame ICA Client

{% raw %}

	Article: Q286785
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Neither the DblClick() event of all Visual FoxPro (VFP) base controls, nor
	controls within the VFP integrated development environment (IDE) itself, respond
	when all of the following are true:
	
	- VFP, or an application that was created with VFP, is running on a Microsoft
	  Windows 2000 server with Terminal Services installed.
	
	- The application is being used through a Terminal Services client session.
	
	- The Terminal Services client session is using Citrix MetaFrame ICA client
	  software.
	
	Users may need to triple-click in order to perform actions that normally require
	only a double-click.
	
	RESOLUTION
	==========
	
	The Microsoft Terminal Server client does not have this problem. If using the
	Microsoft client is not an option, however, Citrix has posted a hotfix that
	resolves this issue.
	
	To locate this hotfix, browse to the following Web site
	
	  Citrix Solution Knowledge Base
	  http://knowledgebase.citrix.com
	
	and search for the Document ID CTX805270. According to Citrix, applying this
	hotfix resolves a problem in which "... using Visual FoxPro and browsing a
	table, users had to triple-click on a Memo field to view it."
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	These steps assume the availability of a Windows Terminal Server computer that is
	running Citrix MetaFrame version 1.8 Service Pack 1 and the Citrix ICA client
	software. VFP should be installed on the server.
	
	1. Connect to a Windows Terminal Server that is running Citrix MetaFrame 1.8 SP1
	  using the Citrix ICA client.
	
	2. Open VFP, and then open a new form in the form designer.
	
	3. Double-click the form.
	
	At this point, a code window usually opens and allows you to edit the FORM.Load
	event. However, in this case you do not see this window, because the designer
	does not respond properly to the double-click.
	
	REFERENCES
	==========
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
