---
layout: page
title: "Q107090: PROFS: Verifying the CSIEXITs for Host Access Component"
permalink: /kb/107/Q107090/
---

## Q107090: PROFS: Verifying the CSIEXITs for Host Access Component

{% raw %}

	Article: Q107090
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.1,3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.0, 3.1, 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The host access component of Microsoft Mail Gateway to PROFS and OfficeVision
	uses two custom Gateway EXIT executables to set To and From addresses on
	messages between the host and the MS mail systems.
	
	Use this query to verify that the EXITs are properly installed and enabled:
	
	  SM MSRSCS Q SYS EXIT
	
	If all is well, the system responds:
	
	  EXIT 2 enabled
	  EXIT 15 enabled
	
	If you have problems with the EXITs, do this:
	
	1. Make sure the EXITs are being turned on in the MSRSCS machine's RSCS CONFIG
	  file. Look for these two lines:
	
	  EXIT 2 ON CSIEXIT2
	  EXIT 15 ON CSIEXITF
	
	2. Make sure your RSCS system has the correct EXITs installed. Use COMPARE to
	  match the CSIEXIT LOADLIB installed on the MSRSCS's 191 disk against the
	  CSIEXIT2 and CSIEXIT3 LOADLIBs on the 193 disk. If you find discrepancies,
	  copy the EXITs from the VMID's 193 disk. If you think an EXIT is corrupt,
	  upload an original version from the installation diskettes.
	
	REFERENCES
	==========
	
	Host Access and Distribution Manager for IBM PROFS and OfficeVision: VM
	Administrator's Guide.
	
	
	Additional query words: 3.00 3.0 3.10 3.1 3.20 3.2 3.30 3.3
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330
	Version           : :3.0,3.1,3.2,3.3
	
	=============================================================================
	

{% endraw %}
