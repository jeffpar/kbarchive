---
layout: page
title: "Q298686: SMS: Resource Explorer Displays IP Addresses Not Subnet Masks"
permalink: /kb/298/Q298686/
---

## Q298686: SMS: Resource Explorer Displays IP Addresses Not Subnet Masks

	Article: Q298686
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view a Systems Management Server (SMS) client's subnet masks (IP
	Subnet) in Resource Explorer, you may see its IP addresses instead of the subnet
	masks. The IP addresses appear both in the IP Address and the IP Subnet columns
	in Resource Explorer under Hardware\Network Adapter Configuration.
	
	This is most commonly seen with subnet masks, but can also occur with other
	properties in Resource Explorer, especially if you have enabled additional
	classes and properties to be inventoried through the MOFMAN tool or by directly
	modifying the Sms_def.mof file. The general symptom is that the data that is
	displayed for one property actually belongs to a different property.
	
	CAUSE
	=====
	
	This problem can occur if you inventory both IP addresses and subnets masks and
	the client has a large number of IP addresses that are bound to one network
	adapter. The SMS Hardware Inventory Agent can only report strings of up to 256
	bytes in length, and this problem appears when you get close to (or exceed) this
	limit, normally around 20 IP addresses. Most likely, you may see the following
	two entries in the Hinv32.log file during a hardware scan if you experience this
	problem:
	
	  WARNING - Unable to return all values of property IPAddress of
	  Win32_NetworkAdapterConfiguration, max length reached !!
	
	  WARNING - Unable to return all values of property IPSubnet of
	  Win32_NetworkAdapterConfiguration, max length reached !!
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the number of IP addresses that are bound to
	the network adapter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
