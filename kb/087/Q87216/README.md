---
layout: page
title: "Q87216: PROFS: Why Can't the Gateway Find the File Transfer Programs?"
permalink: /kb/087/Q87216/
---

## Q87216: PROFS: Why Can't the Gateway Find the File Transfer Programs?

{% raw %}

	Article: Q87216
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If HostDisp (or VMGATE) cannot find the 3270 file transfer programs on the PROFS
	gateway PC, it will exit to MS-DOS.
	
	This problem usually occurs because the directory containing the SEND and RECEIVE
	programs is not included in the gateway PC's MS-DOS Path statement. To correct
	this problem, either append the directory to the Path statement or use the -F
	parameter on the HostDisp (or VMGATE) command line. The -F option specifies the
	directory containing the 3270 file transfer programs.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's Guide"
	
	Additional query words: 3.00 pcmail profslan 3270 file transfer
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
