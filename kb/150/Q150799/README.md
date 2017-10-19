---
layout: page
title: "Q150799: Changes to Supported Platforms Options in Package Properties"
permalink: /kb/150/Q150799/
---

## Q150799: Changes to Supported Platforms Options in Package Properties

	Article: Q150799
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM kbsmsAdmin smsadmin smsgeneral smshowto smspcm kbArtTypeINF
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In Systems Management Server versions 1.0 and 1.1, the Package Definition File
	(PDF) parser detects only the following strings for Windows NT for the Supported
	Platforms entry:
	
	  Windows NT 3.1 (x86)
	  Windows NT 3.1 (MIPS)
	  Windows NT 3.1 (Alpha)
	
	In Systems Management Server version 1.2, the following strings can be specified
	in the PDF file for Windows NT:
	
	  Windows NT 3.5 (x86)
	  Windows NT 3.5 (MIPS)
	  Windows NT 3.5 (Alpha)
	  Windows NT 3.51 (x86)
	  Windows NT 3.51 (MIPS)
	  Windows NT 3.51 (Alpha)
	  Windows NT 4.0 (x86)
	  Windows NT 4.0 (MIPS)
	  Windows NT 4.0 (Alpha)
	  Windows NT (x86)
	  Windows NT (MIPS)
	  Windows NT (Alpha)
	
	The Systems Management Server Administrator UI displays only the following
	generic entries:
	
	  Windows NT (x86)
	  Windows NT (MIPS)
	  Windows NT (Alpha)
	
	CAUSE
	=====
	
	Systems Management Server does no version checking when jobs are sent. Although
	an operating system version can be specified in the PDF, when the PDF is
	imported into a package, the Supported Platform selection is mapped to the
	corresponding generic option.
	
	STATUS
	======
	
	This is by product design.
	
	Additional query words: package definition file shared applications pgc pcm sdk prodsms
	
	======================================================================
	Keywords          : kbPCM kbsmsAdmin smsadmin smsgeneral smshowto smspcm kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
