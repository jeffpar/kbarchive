---
layout: page
title: "Q156184: SMS: &quot;Please Insert Diskette&quot; Message on Clients Running Win95"
permalink: /kb/156/Q156184/
---

## Q156184: SMS: &quot;Please Insert Diskette&quot; Message on Clients Running Win95

	Article: Q156184
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows 95 Systems Management Server client is being inventoried, you may
	see a blue screen with the following message:
	
	  Please insert diskette in drive B
	
	In some cases, the message will refer to drive A.
	
	CAUSE
	=====
	
	This problem is caused by having EliaShim's ViruSafe 95 installed on the client.
	When this product is installed, it loads a device driver called Vs.386 that
	conflicts with the Pathworks check made by Invdos.exe.
	
	WORKAROUND
	==========
	
	To work around this problem, either remove ViruSafe 95 or create a text file
	named Smssafe.tmp that contains the following line:
	
	  pathworks=crashed
	
	Place this file in the Ms\Sms\Data directory of the computer running Windows 95
	that is experiencing this problem. This file will cause the client's Sms.ini
	file to be updated so that Systems Management Server inventory will skip the
	Pathworks check on that client.
	
	Additional query words: prodsms error
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
