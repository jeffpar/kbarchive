---
layout: page
title: "Q259251: Host Security Unattended Install Sets Wrong Domain"
permalink: /kb/259/Q259251/
---

## Q259251: Host Security Unattended Install Sets Wrong Domain

{% raw %}

	Article: Q259251
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade the Host Security feature to SNA Server 4.0 SP2 or SP3 using
	the unattended installation method, the services start, but single sign on fails
	to work.
	
	In addition, the Setup program adds the following to the PATH statement:
	
	  C:\Program Files\SNA\HSsystem
	
	instead of the actual path where the files are installed, for example:
	
	  E:\APPS\SNA\HSSystem
	
	CAUSE
	=====
	
	During unattended installation, the user context that the Host Security services
	use is determined by the LoginDomain and UserId parameters in the Snasetup.ini
	file provided to the Host Security Setup program. However, the LoginDomain
	parameter is ignored and the local domain is used instead, causing the services
	to fail to work properly. Also, the PATH is updated incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	This problem does not occur with the interactive installation of Host Security.
	When this problem occurs after an unattended installation, you can resolve the
	problem by manually changing the user context for the Host Security services to
	the correct Windows NT domain. To do this, perform the following steps:
	
	1. On the Windows NT or Windows 2000 computer where SNA 4.0 Host Security is
	  installed, do one of the following:
	
	   - For Windows NT, click Start, point to Settings, click Control Panel, and
	     then double-click Services.
	
	  -or-
	
	   - For Windows 2000, click Start, point to Settings, click Administrative
	     Tools, and then double-click Services.
	
	2. Select the following services (one at a time):
	
	   - SNA Host Account Cache
	   - SNA WinNT Account Synchronization
	
	3. If you are running Windows NT, select Startup, and then set This Account to
	  use the correct Windows NT domain context.
	
	  If you are running Windows 2000, select the Log On folder, and then set This
	  account to use the correct Windows NT domain context.
	
	Also, manually set the PATH to the correct directory in the Environment folder in
	Control Panel System.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
