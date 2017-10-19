---
layout: page
title: "Q263430: SMS: Nt Discovery Tab Won't Accept Comp Names Beginning w/ Nmbrs"
permalink: /kb/263/Q263430/
---

## Q263430: SMS: Nt Discovery Tab Won't Accept Comp Names Beginning w/ Nmbrs

	Article: Q263430
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Systems Management Server (SMS) Administrator enters a computer
	name that begins with a number in the Dynamic Host Configuration Protocol (DHCP)
	or Simple Network Management Protocol (SNMP) device tabs for Network Discovery,
	the dialog attempts to convert the name to an IP address and assigns the number
	to the first octet of the IP address. For example, if you specify a computer
	name of "1abcdx" in the DHCP or SNMP device tabs of the Network Discovery
	properties, SMS assigns the number "1" to the first octet and ignores the
	alphabetic characters. The result would be an entry of 1.0.0.0 for the IP
	address.
	
	CAUSE
	=====
	
	When a computer name is specified in the DHCP or SNMP device tabs, SMS attempts
	to resolve the name to an IP address. If SMS sees a number at the beginning of
	the computer name, it assumes that an IP address is being entered and populates
	the first octet with the number at the beginning of the computer name. SMS then
	disregards the alphabetic characters, as IP addresses are numeric only.
	
	WORKAROUND
	==========
	
	For computer names that begin with a number, enter the IP address in the DHCP or
	SNMP device tabs of Network Discovery.
	
	Additional query words: prodsms network discovery dhcp snmp
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
