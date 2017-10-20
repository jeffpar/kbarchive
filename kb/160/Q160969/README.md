---
layout: page
title: "Q160969: SMS: How the SNMP Trap ID Relates to a Windows NT Event"
permalink: /kb/160/Q160969/
---

## Q160969: SMS: How the SNMP Trap ID Relates to a Windows NT Event

{% raw %}

	Article: Q160969
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smshowto smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended to allow a Systems Management Server administrator to
	better understand how an SNMP Specific Trap ID relates to the Windows NT event
	ID that is initially generated on a client computer running Windows NT.
	
	MORE INFORMATION
	================
	
	The SNMP Specific Trap ID is a 32-bit representation of the Windows NT event ID
	(normally displayed in the Windows NT event log). The first sixteen bits of the
	specific trap ID are actually the Windows NT event ID displayed within the
	Windows NT event log. Bits 31 and 32 of the 32-bit event ID are the default
	severity of the error, normally displayed either as an icon representation in
	the Windows NT event log, or as the Type entry when viewing an event in detail.
	
	The following is an example:
	
	  SNMP Specific Trap ID displayed in the SNMP Traps Window = 1073749839
	
	  Bindery representation of the Specific Trap ID      =
	  01000000000000000001111101001111
	
	  Keep the first 16 bits (therefore mask with 0xFFFF) =
	  00000000000000001111111111111111
	
	The Windows NT Event ID is therefore: 1111101001111, which is equivalent to 8015
	in a decimal format.
	
	Therefore, this SNMP Specific Trap ID represents Windows NT event 8015. The event
	detail for this event can be displayed using the Systems Management Server
	utility Error32.exe, which can be found in the Psstools directory (in Systems
	Management Server version 1.0 or 1.1) or the Support directory (in Systems
	Management Server 1.2) of the Systems Management Server compact disc. The
	following is the Error32 command line for event 8015:
	
	  ERROR32 8015 NETEVENT.DLL
	
	  The browser has forced an election on network %1 because a Windows NT Server
	  (or domain master) browser is started.
	
	NOTE: The syntax of the Error32.exe utility can be displayed by simply running
	the application with no parameters.
	
	The top two bits of the Specific Trap ID dictate the default severity type:
	
	  00 - Success
	  01 - Informational
	  10 - Warning
	  11 - Error
	
	From the example above, you can determine that Windows NT Event 8015 is
	classified as Informational.
	
	This information can also be obtained using the Error32 utility, by adding an
	asterisk to the command line shown above.
	
	Additional query words: error32 event trap snmp
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smshowto smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
