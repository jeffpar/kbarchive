---
layout: page
title: "Q241061: Cannot Gain Access to Certificate Server Log and Queue"
permalink: /kb/241/Q241061/
---

## Q241061: Cannot Gain Access to Certificate Server Log and Queue

{% raw %}

	Article: Q241061
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Certificate Server 1.0, you may be unable to gain
	access to the Certificate Server log and queue from the administration Web
	pages. You may receive "database access" error messages that are identified by
	an E78 access failure code.
	
	CAUSE
	=====
	
	This behavior occurs because of any of the following reasons:
	
	- An Internet Information Server (IIS) virtual directory settings problem. You
	  cannot gain access to the Certificate Server log and queue from the
	  administration Web pages unless the application attribute for the Certificate
	  Administration (CertAdm) folder is applied.
	- The CertSrv DSN exists in both the User DSN and System DSN sections of the
	  control panel applet.
	
	RESOLUTION
	==========
	
	To apply the application attribute for the CertAdm folder, use the appropriate
	method:
	
	- Apply Microsoft Windows NT 4.0 Service Pack 6 over Certificate Server and IIS
	  4.0.
	
	- Apply the application attribute for the CertAdm folder:
	
	  1. Click Start, point to Programs, point to Windows NT 4.0 Option Pack, point
	     to Microsoft Internet Information Server, and then click Internet Service
	     Manager.
	
	  2. In Microsoft Management Console (MMC), expand the left pane entries until
	     the default Web site is visible.
	
	  3. Double-click the default Web site. The right pane contains the first level
	     of virtual directories for the Web server.
	
	  4. Right-click the CertAdm virtual directory, and then click Properties.
	
	  5. In the Application Settings section on the Virtual Directory tab, click
	     Create.
	
	  6. Click Apply, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
