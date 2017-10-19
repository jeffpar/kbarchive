---
layout: page
title: "Q244653: SMS: License Metering Messages w/Windows 98/95 Client Computers"
permalink: /kb/244/Q244653/
---

## Q244653: SMS: License Metering Messages w/Windows 98/95 Client Computers

	Article: Q244653
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbClient kbsms200 kbsms200bug kbNetMon kbsmsMeter
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you shut down your -Microsoft Windows 95-based or Microsoft Windows
	98-based computer that has the Systems Management Server (SMS) version 2.0
	License Metering client agent installed, you may receive the following 9202
	status message for the LICENSE_METERING component in the SMS Administrator
	console:
	
	  The software metering client on the computer "computer name" (user "user
	  name") encountered an error and is performing an abnormal shut down.
	
	CAUSE
	=====
	
	This problem can occur on a saturated LAN or WAN, or when the NetBEUI protocol
	is being used. SMS only supports license metering over TCP/IP and IPX/SPX.
	
	WORKAROUND
	==========
	
	To work around this problem, improve network utilization to eliminate saturation
	and verify that the license metering clients have TCP/IP or IPX/SPX installed as
	their default protocol.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbClient kbsms200 kbsms200bug kbNetMon kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
