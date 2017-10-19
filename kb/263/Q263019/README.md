---
layout: page
title: "Q263019: SMS Remote Control Hangs Windows 95 OEM Service Release 2"
permalink: /kb/263/Q263019/
---

## Q263019: SMS Remote Control Hangs Windows 95 OEM Service Release 2

	Article: Q263019
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Gdi.exe and Gdi32.dll updates that are documented in the
	following Microsoft Knowledge Base article, the SMS Remote Control agent
	generates a "Fatal Exception 0E in Gdi.exe" error message when you start a
	computer that is running Windows 95 OEM Service Release 2 (OSR2):
	
	  Q229670 Calling EnumObjects() Leaks a Selector
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version    Size     File name   Platform
	  -----------------------------------------------------------------
	  3/2/2000  12:20pm 4.00.952   131,072  Gdi32.dll   Windows 95 OSR2
	  3/2/2000  12:20pm 4.00.952   312,512  Gdi.exe     Windows 95 OSR2
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : WINDOWS:95; winnt:2.0,2.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
