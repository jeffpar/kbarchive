---
layout: page
title: "Q248432: Inventory Based on String Occurrence in File Does Not Find Match"
permalink: kb/248/Q248432/
---

## Q248432: Inventory Based on String Occurrence in File Does Not Find Match

	Article: Q248432
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2 SP4
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms120bug
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the hotfix that is listed in the following Microsoft Knowledge
	Base article, packages that are being inventoried based on a string occurrence
	in a file are no longer visible under PackagesPersonal Computer Properties in
	SMS Administrator:
	
	  Q236913 Couldn't Open ISV MIF (ISV MIF FileName)
	
	CAUSE
	=====
	
	This problem can occur because the updated inventory agent files (Inv32cli.exe
	and Invwin32.exe) from Q236913 causes this part of the inventory process to stop
	functioning.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Systems Management Server (SMS) 1.2 Service
	Pack 4 version (or earlier) of the Inv32cli.exe and Invwin32.exe files. To
	prevent the problem that is documented in Q236913, prevent Inv32cli.exe and
	Invwin32.exe from running at the same time by removing the calls to Invwin32.exe
	in the Smsls.bat and Runsms.bat files.
	
	NOTE: After you edit either the Smsls.bat or Runsms.bat file, the next time a
	service pack upgrade is performed on the site, the changes may be overwritten.
	Because of this, it is a good practice to keep a record of such changes. After
	the service pack upgrade is completed, re-evaluate if the change is necessary,
	and if it is, add them back.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 4.
	
	Additional query words: prodsms IDMIF inventory ISVMIF
	
	======================================================================
	Keywords          : kbenv kbtool kbsms120bug 
	Technology        : kbSMSSearch kbSMS120SP4
	Version           : winnt:1.2 SP4
	Issue type        : kbbug
	
	=============================================================================
	
