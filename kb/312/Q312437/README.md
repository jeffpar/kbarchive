---
layout: page
title: "Q312437: XADM: Unable to Install Exchange 5.5; Command Lodctr Error"
permalink: /kb/312/Q312437/
---

## Q312437: XADM: Unable to Install Exchange 5.5; Command Lodctr Error

{% raw %}

	Article: Q312437
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup
	Last Modified: 03-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Hewlett-Packard (HP) server where Microsoft Windows NT Server version 4.0
	Service Pack 5 (SP5) was already installed from an HP Select CD-ROM, you may
	receive the following error message when you try to install Exchange Server
	5.5:
	
	  The command lodctr dsactrs.ini failed, returning an error code of
	  <32>.
	
	  Processing file 'server.ins', at or near line 122
	  An internal component has failed
	  Microsoft Exchange Server Setup
	  ID no: c103264c
	
	CAUSE
	=====
	
	This issue can occur if the HP server agents are using the following two files
	in the %SystemRoot%\System32 folder, or if the two files are missing, or if you
	do not have the appropriate access permissions for the two files:
	
	- Perfc009.dat
	
	- Perfh009.dat
	
	RESOLUTION
	==========
	
	To resolve this issue, temporarily stop all HP services:
	
	1. Click Start on the Windows taskbar, point to Settings, and then click Control
	  Panel.
	
	2. In Control Panel, double-click Services.
	
	3. In the Service box, click an HP service, and then click Stop. Repeat this
	  step for all HP services.
	
	4. Click Close.
	
	The installation should now complete successfully.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For information about how to contact Hewlett Packard, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
