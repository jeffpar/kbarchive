---
layout: page
title: "Q268803: SMS: Problems Upgrading SMS 2.0 to SP2 with the Web Patch"
permalink: /kb/268/Q268803/
---

## Q268803: SMS: Problems Upgrading SMS 2.0 to SP2 with the Web Patch

	Article: Q268803
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 10-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can upgrade Systems Management Server (SMS) 2.0 to Service Pack 2 (SP2) by
	ordering a CD-ROM or by downloading the Web patch.
	
	The Web patch was designed to allow users with either an SMS 2.0 Service Pack 1
	(SP1) "slipstream" CD-ROM or an SP1 CD-ROM to upgrade. ("Slipstreaming" refers
	to including an updated version of a product on the retail CD-ROM. In this case,
	it refers to including SP1 on the retail SMS 2.0 CD-ROM.)
	
	Microsoft does not recommend starting with an SMS 2.0 (no service packs) CD-ROM,
	patching it with the SP1 Web patch, and then patching it with the SP2 Web patch.
	Doing so may lead to a corrupted image, which could cause upgrade and operation
	issues with your site.
	
	RESOLUTION
	==========
	
	If you do not have an SMS 2.0 SP1 slipstream CD-ROM, or an SP1 CD-ROM, Microsoft
	recommends that you order an SP2 CD-ROM from our Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/default.asp
	
	
	MORE INFORMATION
	================
	
	To determine the CD-ROM version that you have, use Windows Explorer to browse
	the root folder of the CD-ROM and locate the Autorun.exe file. The product
	version number in the properties for this file identifies the CD-ROM version as
	follows:
	
	  SMS 2.0 noSP (2.0.1239.0000)
	  SMS 2.0 SP1 (2.0.1380.1000)
	  SMS 2.0 SP2 (2.0.1493.2000)
	
	The following information is included as a reference to help you determine how
	your SP2 image was created.
	
	An SMS 2.0 to SP1 upgrade has extra files left on the SP1 image after the SP1 Web
	patch:
	
	  .\nmext\alpha\readme.txt
	  .\nmext\i386\readme.txt
	  .\smssetup\bin\alpha\system32\nmsupp.dll
	  .\smssetup\bin\i386\00000409\regnec98.exe
	  .\smssetup\bin\i386\system32\nmsupp.dll
	  .\smssetup\netmon\alpha\psnppagn.dll
	  .\smssetup\netmon\alpha\readme.txt
	  .\smssetup\netmon\alpha\parsers\hmmp.dll
	  .\smssetup\netmon\alpha\parsers\smb.cnt
	  .\smssetup\netmon\alpha\parsers\smb.hlp
	  .\smssetup\netmon\i386\psnppagn.dll
	  .\smssetup\netmon\i386\readme.txt
	  .\smssetup\netmon\i386\parsers\hmmp.dll
	  .\smssetup\netmon\i386\parsers\smb.cnt
	  .\smssetup\netmon\i386\parsers\smb.hlp
	  .\smssetup\scripts\00000409\nt4\i386\_osw16rc.dll
	  .\smssetup\scripts\00000409\nt4\i386\unatnd31.txt
	  .\smssetup\scripts\00000409\nt4\i386\w16ntupg.exe
	  -- 20 files listed
	
	An SP1 to SP2 upgrade has only one extra file left on the SP2 image after the SP2
	Web patch:
	
	  \SMSSETUP\BIN\ALPHA\CINFO\vssver.scc
	  \SMSSETUP\BIN\i386\CINFO\vssver.scc
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
