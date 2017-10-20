---
layout: page
title: "Q102556: PC Ext: -Q4 Parameter Output Meanings"
permalink: /kb/102/Q102556/
---

## Q102556: PC Ext: -Q4 Parameter Output Meanings

{% raw %}

	Article: Q102556
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the version 3.0, 3.0b, or 3.2 Microsoft Mail for PC Networks
	External Mail program (EXTERNAL.EXE) to transfer mail messages from one
	postoffice to another, you can use the -Q4 switch for debugging problem areas.
	The -Q4 switch is an undocumented switch and should be used for troubleshooting
	only.
	
	If you invoke version 3.0 or later of the External Mail program with the -Q4
	command-line option, numbers will appear in yellow. The letters represent the
	following:
	
	  Letter   Description
	  ------------------------------------------------------------------
	
	  F        Amount of free memory.
	
	  N        Outstanding number of allocations (that is, this number of
	           "memory free" calls is required to release all the memory
	           External is currently using).
	
	  A        Bytes allocated in the most recent allocation.
	
	  M        Maximum number of bytes allocated in any memory
	           allocation.
	
	  T        Running total on the number of memory allocations so far.
	           This value will be increasing.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
