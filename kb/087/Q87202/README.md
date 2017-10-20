---
layout: page
title: "Q87202: PROFS: How Third-Party Hardware and Software Can Be Tested"
permalink: /kb/087/Q87202/
---

## Q87202: PROFS: How Third-Party Hardware and Software Can Be Tested

{% raw %}

	Article: Q87202
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order for a PC running the Microsoft Mail Gateway to IBM PROFS and
	OfficeVision to connect to the mail host and successfully exchange mail, the
	3270 emulation and file transfer products must be working. Test these before
	running the gateway program (HostDisp or VMGATE), as follows:
	
	1. On the Gateway PC, load the 3270 API (if required) and then the 3270
	  emulation program.
	
	2. Log on to the gateway VM ID (for example, MSGATE) and halt the VM gateway by
	  typing "hx" (without the quotation marks).
	
	3. At the CMS "Ready" prompt, hot-key back to MS-DOS.
	
	4. From here, you can manually upload and download files, in the same fashion as
	  the gateway program. See the 3270 emulation program documentation for
	  examples of how to do this.
	
	If you can upload a PC file to the MSGATE's 191 "A" disk and then download the
	same file to the LAN server, the gateway program should be able to carry out the
	same function. Once this has been tested, you can start the gateway program.
	
	
	Additional query words: 3.00 pcmail profslan
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
