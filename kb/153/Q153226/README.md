---
layout: page
title: "Q153226: PGC Requires File Extensions in the Configuration Command Line"
permalink: kb/153/Q153226/
---

## Q153226: PGC Requires File Extensions in the Configuration Command Line

	Article: Q153226
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Configuration Command Line in a Shared Package, the Program Group
	Control (PGC) fails with the following error:
	
	  Could not configure <Your Program>. Cannot obtain the configuration
	  program name.
	
	The PGC.LOG file in the MS\SMS directory on the client computer reports that the
	application is not set up correctly.
	
	CAUSE
	=====
	
	When you specify a filename in the Configuration Command Line while setting up a
	PGC package, you must include the complete file name (including the file
	extensions).
	
	Example
	-------
	
	The following fails:
	
	  Desc.                               write
	  Command line:                       WRITE.EXE
	  Registry Name:                      write3
	  Config cmd line:                    dosetup write3 first
	
	This following works successfully:
	
	  Desc.                               write
	  Command line:                       WRITE.EXE
	  Registry Name:                      write3
	  Config cmd line:                    dosetup.EXE write3 first.BAT
	
	WORKAROUND
	==========
	
	When you specify a Configuration Command Line, you can use DOSETUP.EXE to run
	the installation program. DOSETUP provides a mechanism for running an
	installation program and for setting certain Systems Management Server registry
	status flags required by PGC. For more information, refer to the Systems
	Management Server 1.1 Release Notes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
