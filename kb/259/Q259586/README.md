---
layout: page
title: "Q259586: SMS: SNMP Trap Filter Also Reports SQL Server Traps"
permalink: kb/259/Q259586/
---

## Q259586: SMS: SNMP Trap Filter Also Reports SQL Server Traps

	Article: Q259586
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 30-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2, 1.2 SP1, 1.2 SP2, 1.2 SP3, 1.2 SP4, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) version 1.2, the Microsoft Simple Network
	Management Protocol (SNMP) implementation is assigned a base object identifier
	(OID) of 1.3.6.1.4.1.311.1.4.1, where:
	
	  311=Microsoft
	  1=Software
	  4=Apps
	  1=SMS
	
	Because Microsoft SQL Server registered the same base OID (311.1.4.1) value
	before SMS was released, there is a conflict between the registered OID for the
	Event to Trap Translator and SQL. Therefore, it is impossible to filter for all
	traps coming from one of these sources without also picking up the others.
	
	In SMS version 2.0, the SNMP implementation has been corrected to use a base OID
	of 1.3.6.1.4.1.311.1.13.1.
	
	MORE INFORMATION
	================
	
	The registry location for the OID is:
	
	  HKEY_LOCAL_MACHINE/software/microsoft/snmp_events/Parameters/BaseEnterpriseOID
	
	  HKEY_LOCAL_MACHINE/software/microsoft/snmp_events/Parameters/SupportedView
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS120SP2 kbSMS120SP3 kbSMS120SP4 kbSMS200SP1 kbSMS200SP2 kbSMS120SP1
	Version           : :1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
