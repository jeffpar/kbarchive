---
layout: page
title: "Q101681: MHS: Err Msg: Inpost: General File I/O Error with MHS Swap"
permalink: /kb/101/Q101681/
---

## Q101681: MHS: Err Msg: Inpost: General File I/O Error with MHS Swap

{% raw %}

	Article: Q101681
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when Microsoft Mail Gateway to MHS is run
	in conjunction with Infinite Technologies MHS Swap software:
	
	  Inpost: General file I/O error
	
	CAUSE
	=====
	
	This software and the MHS gateway are incompatible because the gateway cannot
	have its temporary files redirected.
	
	MORE INFORMATION
	================
	
	MHS Swap is an MHS utility from Infinite Technologies that swaps the temporary
	files from the network MHS database to the local computer where the MHS Host
	software is being run. MHS would usually use the MHS\SW\SWAP.FLG file to direct
	temporary file creation to its directory.
	
	
	Additional query words: 3.20 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
