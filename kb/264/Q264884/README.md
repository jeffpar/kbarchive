---
layout: page
title: "Q264884: SMS: Windows 2000 Client Video Cannot Be Accelerated"
permalink: /kb/264/Q264884/
---

## Q264884: SMS: Windows 2000 Client Video Cannot Be Accelerated

	Article: Q264884
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbRemote kbsms200 kbsms200bug kbHelpDesk kbsmsAdmin kbsmsUtil kbsms200SP3fix k
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Video Acceleration feature for Microsoft Windows 2000-based clients is not
	supported in versions of Systems Management Server (SMS) 2.0 prior to Service
	Pack 3 (SP3). Therefore, remotely controlling a Windows 2000-based client may be
	two to six times slower than a similar Remote Control session on a Microsoft
	Windows NT 4.0-based clients.
	
	CAUSE
	=====
	
	The slow performance occurs because there is no video acceleration capability
	for Windows 2000-based clients in the SMS Remote Control video drivers, which
	are used to transfer the video during a Remote Control session.
	
	The slow video performance during a Remote Control session is not an indication
	of poor performance of Windows 2000.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbRemote kbsms200 kbsms200bug kbHelpDesk kbsmsAdmin kbsmsUtil kbsms200SP3fix kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
