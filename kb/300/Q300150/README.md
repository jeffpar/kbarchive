---
layout: page
title: "Q300150: SMS: Remote Control Console Problems with High Compression"
permalink: /kb/300/Q300150/
---

## Q300150: SMS: Remote Control Console Problems with High Compression

{% raw %}

	Article: Q300150
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server (SMS) Remote Control tool with a
	Microsoft Windows 2000-based or Microsoft Windows XP-based client computer, the
	Administrator console component of the Remote Control (Remote.exe) session may
	intermittently stop responding (hang). If Dr. Watson is configured as the
	default debugger, a crash log is generated because of an exception in
	Remote.exe. This problem occurs only on computer that use the Accelerated Screen
	Transfer feature in combination with the High (LZ) compression method.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Disable LZ compression in the Remote Tools Client Agent properties by
	  clicking Low (RLE) as the default compression method for Remote Control.
	
	- Force existing clients to re-evaluate the compression method that is used by
	  running the Hardware Munger tool. You can do this by reinstalling the Remote
	  Control client component on all computers, by repairing the component on
	  individual affected computers, or by using Rchwcfg.exe to manually run
	  Hardware Munger on individual client computers.
	
	The RLE compression algorithm requires less CPU overhead and in most cases
	improves performance over the LZ algorithm for the Remote Control tool.
	
	For more information about compression settings, Hardware Munger, or other
	configuration options for the Remote Tools client agent, see Chapter 9 of the
	SMS Resource Guide.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
