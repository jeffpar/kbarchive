---
layout: page
title: "Q150394: No Domain Validation with EtherExpres Pro and Docking Station II"
permalink: /kb/150/Q150394/
---

## Q150394: No Domain Validation with EtherExpres Pro and Docking Station II

{% raw %}

	Article: Q150394
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an IBM Docking Station II and an Intel EtherExpress Pro Ethernet
	network card, computers running Microsoft Windows 95 cannot log on to the
	network and be validated by a domain controller. Running SoftSet, its diagnostic
	and setup program, the Loopback test will fail.
	
	CAUSE
	=====
	
	The problem is with the amount of electromagnetic interference (EMI) inside the
	Docking Station II. Under these conditions, the EtherExpress Pro will fail to
	operate correctly.
	
	RESOLUTION
	==========
	
	To work around this problem, change the setting, Force 8 Bit Operation, to True.
	This slows the card down by making it use 8-bit data transfers instead of
	16-bit. This slower transmission rate is sustainable even with the high amounts
	of EMI. In addition, IBM has released a driver which alters the bus timing and
	is reported to help ISA cards work in these docking stations.
	
	Microsoft has not tested this driver and makes no claims about its
	effectiveness.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
