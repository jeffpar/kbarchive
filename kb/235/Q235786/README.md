---
layout: page
title: "Q235786: SMS: Software Metering Server Same for Online/Offline Clients"
permalink: kb/235/Q235786/
---

## Q235786: SMS: Software Metering Server Same for Online/Offline Clients

	Article: Q235786
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Software Metering clients, both in offline and online mode, connect to the
	Software Metering server on a regular basis to transfer data. If the primary
	Software Metering server is unavailable, the client might continually try to
	connect to it rather than try the next available server.
	
	This behavior is the same for both offline and online Software Metering clients.
	
	However, there is no need for offline clients to continually try to connect to
	their Software Metering server when there are others available to connect to.
	Offline clients only have to upload saved Software Metering data that can be
	sent to any available Software Metering server, they do not have to wait for the
	primary server to become available.
	
	CAUSE
	=====
	
	Because licenses are allocated to Software Metering servers based on demand,
	online Software Metering clients should stay with a Software Metering server
	once assigned. This logic also applies to offline Software Metering clients.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------------------------------------------+
	| Date    | Time    | Version        | Size    | File name    | Platform | 
	+------------------------------------------------------------------------+
	| 6/21/99 | 12:02pm |                | 67      | compver.ini  | Intel    | 
	+------------------------------------------------------------------------+
	| 6/17/99 | 1:10am  | 2.00.1239.0048 | 88,416  | liccli95.exe | Intel    | 
	+------------------------------------------------------------------------+
	| 6/17/99 | 1:10am  | 2.00.1239.0048 | 89,440  | licclint.exe | Intel    | 
	+------------------------------------------------------------------------+
	| 6/21/99 | 12:02pm |                | 67      | compver.ini  | Alpha    | 
	+------------------------------------------------------------------------+
	| 6/17/99 | 1:10am  | 2.00.1239.0048 | 126,224 | licclint.exe | Alpha    | 
	+------------------------------------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	To install the hotfix, do the following at the SMS Site Server:
	
	1. Stop the SMS_EXECUTIVE and the SMS_Site_Component_Manager services.
	
	2. Replace the licclint.exe in the
	  <sms_root_directory>\inboxes\clicomp.src\licmtr\<platform>\
	  directory with the version obtained from the hotfix.
	
	3. Replace the liccli95.exe in the
	  <sms_root_directory>\inboxes\clicomp.src\licmtr\i386\ directory with
	  the version obtained from the hotfix.
	
	4. Replace the compver.ini in the
	  <sms_root_directory>\inboxes\clicomp.src\licmtr\ directory with the
	  version obtained from the hotfix.
	
	5. Restart the SMS_EXECUTIVE and the SMS_Site_Component_Manager services. The
	  files are replicated to the client access points (CAPs) and the logon points.
	  Once this occurs, the clients will be updated at their next polling cycle.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the files that
	are in this hotfix to be propagated to the clients. To speed up this process,
	you can stop and then restart the SMS Client Service on each client. You can
	also create a software distribution by using the Setevnt.exe or the Cliutils.exe
	Resource Kit tools. You must include the appropriate parameters to start a CCIM
	work cycle. For information about the proper syntax for these tools, see the
	Resource Kit documentation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
