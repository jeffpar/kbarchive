---
layout: page
title: "Q129821: Poor Color Mapping in Quick Windows Viewer During Remote Control"
permalink: /kb/129/Q129821/
---

## Q129821: Poor Color Mapping in Quick Windows Viewer During Remote Control

	Article: Q129821
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbsmsUtil smsremtshoot smsutil kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Remote Control from a server that has a Tseng ET-4000 SVGA video
	card to a client computer that has an ATI Mach 32 video card, the Quick Windows
	Viewer color mappings are displayed poorly -- gray-whites appear as yellow.
	
	This problem occurs when the Tseng ET-4000 SVGA video card is running at 1024x768
	with 256 colors, and the ATI MACH 32 video card is running at 1024x768 with 16
	colors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem was corrected in the latest US Service Pack for
	Systems Management Server. For information on obtaining this update, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: help desk sms prodsms video
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbsmsUtil smsremtshoot smsutil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
