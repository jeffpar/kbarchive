---
layout: page
title: "Q131635: Error Message: Your EFAXPUMP.INI File Has Become Too Large"
permalink: /kb/131/Q131635/
---

## Q131635: Error Message: Your EFAXPUMP.INI File Has Become Too Large

	Article: Q131635
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax using Microsoft At Work PC Fax you may receive the
	following error message:
	
	  Your EFAXPUMP.INI file has become too large. Please delete capabilities for
	  unused recipients from the [capabilities] section to allow new capabilities
	  to be written.
	
	CAUSE
	=====
	
	Microsoft At Work PC Fax generates this error message when the size of the
	EFAXPUMP.INI file exceeds 50K.
	
	When you first send a fax using Microsoft At Work PC Fax, a [Capabilities]
	section is created in the EFAXPUMP.INI file. This section contains information
	about each phone number dialed. Each time you send a fax to a phone number that
	you have not dialed before, a new entry is added to the [Capabilities] section.
	These entries remain in the EFAXPUMP.INI file.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to open the EFAXPUMP.INI file and remove
	some or all of the entries from the [Capabilities] section. You should start by
	deleting numbers that are not likely to be used again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows For Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Only new phone numbers are added to the [Capabilities] section. Repeated faxing
	to the same phone number does not add duplicate entries.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
