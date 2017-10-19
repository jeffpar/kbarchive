---
layout: page
title: "Q153085: SMS: MIFs Not Collected on OS/2 Clients with Multiple Drives"
permalink: /kb/153/Q153085/
---

## Q153085: SMS: MIFs Not Collected on OS/2 Clients with Multiple Drives

	Article: Q153085
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Client MIF files stored in the Noidmifs directory are not collected on computers
	running OS/2, if the Systems Management Server client software has been
	installed on a drive other than drive C. Forms that are filled out with the MIF
	Entry program are stored as MIF files in the Ms\Sms\Noidmifs directory.
	
	CAUSE
	=====
	
	The Systems Management Server client setup for OS/2 (Cli_os2.exe) determines the
	drive on which to install the Ms\Sms directory structure. For example, if drive
	D has more free space, Systems Management Server will install on drive D, and
	that fact will be reflected in the Sms.ini file.
	
	When the OS/2 inventory program (Invos2.exe) runs, it looks exclusively for MIF
	files in the C:\Ms\Sms\Noidmifs directory. If it does not find this directory
	structure, it creates the directory structure.
	
	The result is a complete Ms\Sms directory structure on both drive D and drive C
	that contains the following subdirectories and file:
	
	  \Noidmifs
	  \Idmifs
	  Cmndhist.os2
	
	WORKAROUND
	==========
	
	To work around this problem, force the Systems Management Server client to be
	installed on drive C of each OS/2 client. For more information on this
	procedure, see the following article in the Microsoft Knowledge Base:
	
	  Q127072 Installing SMS Client to Drive Other Than Most Free Disk Space
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
