---
layout: page
title: "Q112906: PC Adm: Err Msg: Notice 10 No External Postoffices... Defined..."
permalink: /kb/112/Q112906/
---

## Q112906: PC Adm: Err Msg: Notice 10 No External Postoffices... Defined...

{% raw %}

	Article: Q112906
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify external postoffices from the Mail Administrator program
	(ADMIN.EXE), the following error message appears:
	
	  Notice 10
	  No external postoffices have been defined yet
	
	CAUSE
	=====
	
	This error can be caused by incorrect network rights or a missing .XTN file for
	the associated network.
	
	For each network that is defined in the NETWORK.GLB file, there is an associated
	.XTN file. This file contains a series of records, each one defining a different
	postoffice on the network. The purpose of this file is to provide routing,
	naming, and sign-on information for external services and postoffices. When you
	add a new postoffice to a network, the associated .XTN file needs to be opened
	and amended.
	
	RESOLUTION
	==========
	
	Restore the .XTN file from a valid backup copy or create a new, zero-byte .XTN
	file. By examining the NETWORK.GLB file, you can obtain the relevant .XTN file
	for each defined network. The NETWORK.GLB file contains the names of all defined
	external networks. Immediately following the external network name is a
	hexadecimal number; this number is the filename of the associated .XTN file
	(found in the XTN subdirectory).
	
	
	Additional query words: 2.10x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
