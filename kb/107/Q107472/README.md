---
layout: page
title: "Q107472: Fax Monitor Is Idle on CAS Modems While Receiving Faxes"
permalink: /kb/107/Q107472/
---

## Q107472: Fax Monitor Is Idle on CAS Modems While Receiving Faxes

{% raw %}

	Article: Q107472
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With CAS fax modems, the fax monitor feature of Microsoft At Work PC Fax stays
	in an idle state while receiving faxes.
	
	MORE INFORMATION
	================
	
	CAS-compatible fax modems have their own processors and memory and are designed
	to work independently in the background. Commands to CAS fax modems are issued
	to CASMGR.EXE or CASMODEM.EXE, depending on the modem and revision of the CAS
	modems. This program then issues the appropriate commands to the CAS modem.
	
	When a CAS modem receives a fax, it does so in the background, independently of
	At Work PC Fax. CASMGR does not notify At Work PC Fax that a fax is arriving.
	After the fax arrives, CASMGR places the fax in a queue. At Work PC Fax checks
	the queue periodically for new faxes. Because this occurs in the background, At
	Work PC Fax cannot monitor the progress of an incoming fax.
	
	At Work PC Fax does monitor sent message rendering status. During a fax send, fax
	monitor reports the progress of the fax-rendering process.
	
	Additional query words: 3.11 CAS MONITOR facsimile class
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
