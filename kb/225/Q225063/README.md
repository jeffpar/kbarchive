---
layout: page
title: "Q225063: SMS: INVMAC Reports Incorrect Processor Name"
permalink: kb/225/Q225063/
---

## Q225063: SMS: INVMAC Reports Incorrect Processor Name

	Article: Q225063
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Macintosh Inventory Agent (INVMAC) may fail to correctly report the
	processor name. For example, a PowerPC 750 may be reported as a PowerPC (8).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time        Size      File name      Platform
	  -------------------------------------------------------
	
	  4/1/99   3:16pm      162,314   Invmac.hcomp   Macintosh
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, you must use Hdecomp.exe (found in the Support directory
	of the Systems Management Server 1.2 CD). Expand the file to a user
	authentication module (UAM) volume, and place it in the
	Site.srv\Maincfg.box\Client.src\Mac.bin directory on each site server. Macintosh
	clients must run the Systems Management Server Installer script to get the
	updated INVMAC file.
	
	The following syntax shows how to use Hdecomp:
	
	  Hdecomp <source> <destination>
	
	The uncompressed INVMAC has a the following file attributes when viewed from the
	Macintosh:
	
	  Date      Time      Version      Size    File name    
	  --------------------------------------------------
	
	  2/25/99   12:22pm   1.2.8      161,588   Invmac   
	
	Additional query words: prodsms power pc ppc
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
