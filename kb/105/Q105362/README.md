---
layout: page
title: "Q105362: PROFS: Setup For Cross Calendaring in XA Systems and RSCS"
permalink: kb/105/Q105362/
---

## Q105362: PROFS: Setup For Cross Calendaring in XA Systems and RSCS

	Article: Q105362
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you implement free and busy times for Microsoft Mail Gateway to IBM PROFS
	and OfficeVision, you must set up the VM operating system to support cross
	calendaring so that your PROFS calendar can communicate with the calendar of a
	virtually or physically remote PROFS system. There are several ways to set it
	up:
	
	  RSCS
	  TSAF
	  SPPC
	  VTAM service machine (AVSVM)
	
	This article gives some rules for using RSCS. Please contact IBM for information
	on the other methods.
	
	TO SET UP CROSS CALENDARING
	---------------------------
	
	- Set up the REMCAL file with an "R" following the "Y" or "T" used to
	  distinguish between PROFS and OfficeVision.
	
	  Example:
	
	      PO_NODE  MSCAL    MSCYR
	
	- Add this reroute statement to the MS-RSCS CONFIG file on the MSRSCS machine:
	
	     REROUTE ALL <po_node_name>  MS-CAL TO  <MS-RSCS node name>    MS-CAL
	
	- Add this spool statement to the PROFILE EXEC of the MSCAL ID:
	
	      CP SPOOL PUNCH FORM MS-CAL DIST <po_node name>
	
	These steps allow you use cross calendaring to view users' free and busy times.
	
	Additional query words: 3.40 3.4
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	
	=============================================================================
	
