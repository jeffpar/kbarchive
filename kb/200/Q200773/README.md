---
layout: page
title: "Q200773: SMS: No MIB File for SMS Event to Trap Translator"
permalink: /kb/200/Q200773/
---

## Q200773: SMS: No MIB File for SMS Event to Trap Translator

{% raw %}

	Article: Q200773
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 01-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Management Information Base (MIB) file for the Event to Trap translator has
	not been created.
	
	MORE INFORMATION
	================
	
	To permit your management program to be able to display received traps
	correctly, you may have to create, or append to, a trap definition file. This is
	a common reason for requesting an MIB file.
	
	You can export events that are to be converted to traps, to a comma-delimited
	text file. The purpose of the trap text file is to permit you to import the
	configuration of traps to your SNMP console. To do so:
	
	1. Open the Event to Trap translator on a client computer.
	
	2. Click all events that are to be trapped on.
	
	3. Click Export.
	
	4. Click Trap Text in the "Save as Type" box.
	
	The file is saved to the location you specified previously. Note that if you open
	this file, you see records similar to the following:
	
	1.3.6.1.4.1.311.1.4.1.18.83.77.83.32.82.101.109.111.116.101.32.67.111.110.116.114.111.108,
	"SMS Remote Control", 6, 10, 7, "Remote user %1 from %2 is not permitted to
	access this machine."
	
	This can be interpreted as:
	
	Enterprise Object Identifier (OID)
	Event Source
	Generic Trap No
	Specific Trap No
	No. of Varbinds (n)
	VarBind 1 (Format String from DLL)
	VarBind2...n
	
	For information about how to create the trap definition file, please see your
	respective SNMP Console vendor.
	
	Additional query words: prodsms smssnmp
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
