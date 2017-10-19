---
layout: page
title: "Q203042: SMS: Non-Intel Processors Report Null Manufacturer Values"
permalink: /kb/203/Q203042/
---

## Q203042: SMS: Non-Intel Processors Report Null Manufacturer Values

	Article: Q203042
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SMS Resource Explorer does not show some non-Intel processors correctly.
	
	MORE INFORMATION
	================
	
	The Manufacturer0 column in the Processor_DATA table in the SMS database shows a
	NULL value for some non-Intel processors. The NULL value is displayed because
	the X86 processor does not support the CPUID instruction and Systems Management
	Server cannot determine the name of the manufacturer.
	
	Also, all Alpha processors report Compaq as the manufacturer since Compaq
	purchased DEC and the Alpha processor.
	
	Additional query words: prodsms hwinv16 hwinv32
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
