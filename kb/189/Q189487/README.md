---
layout: page
title: "Q189487: XWEB: Dr. Watson Opening Welcome to Microsoft Outlook 98! Msg."
permalink: kb/189/Q189487/
---

## Q189487: XWEB: Dr. Watson Opening Welcome to Microsoft Outlook 98! Msg.

	Article: Q189487
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Netscape Navigator version 3.0 or later and the Outlook Web Access
	client, to try to open the Outlook 98 welcome messages that have the subjects
	"Welcome to Microsoft Outlook 98!" or "Special Offers for Outlook Users", a Dr.
	Watson error may appear in Windows NT with the following text:
	
	  netscape.exe
	  Exception: access violation (0xc0000005), Address: 0x00450521f
	
	The memory address location may vary.
	
	Opening either message in Outlook Web Access under Windows 95 or Windows 98 may
	produce an illegal operation error. Getting details on the error shows the
	following text:
	
	  NETSCAPE caused an invalid page fault in module NETSCAPE.EXE at
	  015f:00407376.
	
	The memory address location may vary.
	
	WORKAROUND
	==========
	
	This error can be avoided by not opening the Welcome message in the Outlook Web
	Access client when using the Netscape browser. This is the only message that
	seems to cause the error. You can open the Welcome message correctly in the
	Outlook client or the Outlook Web Access client if you use a different browser.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Outlook Web Access, version 5.5, or
	version 5.5 Service Pack 1, with Netscape Navigator version 3.0 or later.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
