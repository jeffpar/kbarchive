---
layout: page
title: "Q127073: Access 2.0 Err Msg with SMS: Can't Find Wizard, or There is..."
permalink: /kb/127/Q127073/
---

## Q127073: Access 2.0 Err Msg with SMS: Can't Find Wizard, or There is...

	Article: Q127073
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Microsoft Access 2.0 as a Shared Application package in
	Microsoft Systems Management Server version 1.0 using the supplied ACS200.PDF,
	the Access Wizards are not installed. If you choose a Wizard, the following
	error message appears:
	
	  Can't find Wizard, or there is a system error in the Declarations section of
	  an Access Basic module. Check the [libraries] section of msacc20.ini for
	  required libraries, and compile all Access Basic modules in the database.
	
	WORKAROUND
	==========
	
	To work around this problem, use a text editor such as Notepad and add the
	following entries to the [LIBRARIES] section of the MSACC20.INI file:
	
	  " wzlib.mda=rw
	  wzTable.mda=rw
	  wzQuery.mda=rw
	  wzfrmrpt.mda=rw
	  wzbldr.mda=rw " (without the quotation marks)
	
	NOTE: You must add the above entries for each client installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
