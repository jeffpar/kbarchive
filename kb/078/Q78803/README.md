---
layout: page
title: "Q78803: PC Ext: Estimating Memory Requirements for EXTERNAL.EXE"
permalink: /kb/078/Q78803/
---

## Q78803: PC Ext: Estimating Memory Requirements for EXTERNAL.EXE

{% raw %}

	Article: Q78803
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the following formula to estimate how much memory the Microsoft Mail
	for PC Networks External Mail program (EXTERNAL.EXE) will require to run without
	memory problems.
	
	There are two major categories of memory usage for EXTERNAL.EXE:
	
	1. General Memory Requirements
	
	     Memory    Needed For
	     ------    ----------------------
	
	     200K      EXTERNAL.EXE
	     64K       message storage
	     16K       modem traffic
	     ------
	
	     280K      general memory required
	
	2. External Postoffice Servicing Requirements (Servicing memory is required for
	  mail dispatching, and so on.) The servicing memory requirements will vary
	  directly with the number of postoffices that External is addressing. The
	  servicing memory requirements need to be calculated for each postoffice
	  separately because the number of external networks will be different. The
	  following figures can be used to determine each postoffice's servicing
	  requirements:
	
	     Number of Local Users           Multiplied (*) by 37 bytes
	     Number of dispatch networks     Multiplied (*) by 38 bytes
	     Number of dispatch postoffices  Multiplied (*) by 90 bytes
	     Number of external networks     Multiplied (*) by 45 bytes
	     Number of external postoffices  Multiplied (*) by 115 bytes
	     Number of gateways              Multiplied (*) by 83 bytes
	     Number of gateway nodes/DGNs    Multiplied (*) by 83 bytes
	
	  For example:
	
	  The following example will show the EXTERNAL.EXE memory requirements
	  dispatching between two postoffices, each with 100 users defined. No gateways
	  are involved.
	
	  General External Memory Requirements
	
	               200K  base EXTERNAL.EXE
	                64K  for message storage
	                16K  for modem traffic
	               ----
	               280K  General Memory Requirements
	
	  Servicing Requirements for two postoffices
	
	       Postoffice 1
	       ------------
	
	               100 local users           *  37   =  3700 bytes
	       +         1 dispatch networks     *  38   =    38 bytes
	       +         1 dispatch postoffice   *  90   =    90 bytes
	       +         2 external networks     *  45   =    90 bytes
	       +        10 external postoffices  * 115   =  1150 bytes
	       +         0 gateways              *  83   =     0 bytes
	       +         0 gateway nodes/DGNs    *  83   =     0 bytes
	                                                    ----
	                                                    5068 bytes
	
	       Postoffice 2
	       ------------
	
	               100 local users           *  37   =  3700 bytes
	       +         1 dispatch networks     *  38   =    38 bytes
	       +         1 dispatch postoffice   *  90   =    90 bytes
	       +         1 external networks     *  45   =    45 bytes
	       +         1 external postoffices  * 115   =   115 bytes
	       +         0 gateways              *  83   =     0 bytes
	       +         0 gateway nodes/DGNs    *  83   =     0 bytes
	                                          ----
	                                       +  3988 bytes
	
	       Total External PO Requirements            =  9056 bytes
	
	       Total External Requirements          =    289,056 bytes
	
	Additional query words: 2.10 3.00 3.20 3.50 memory requirements
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
