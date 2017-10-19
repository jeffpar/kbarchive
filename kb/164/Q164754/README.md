---
layout: page
title: "Q164754: Program Groups Not Created on Windows 95 or Windows NT 4.0"
permalink: /kb/164/Q164754/
---

## Q164754: Program Groups Not Created on Windows 95 or Windows NT 4.0

	Article: Q164754
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smsappman smspgc kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Program Group Control (PGC) application does not
	correctly create certain program groups for shared network applications on
	client computers running Windows 95 or Windows NT Workstation 4.0. These same
	program groups are created properly on client computers running Windows 3.1,
	Windows for Workgroups 3.1x, or Windows NT Workstation 3.51.
	
	The Pgc.log log file in the client's Ms/Sms/Logs directory contains one or more
	of the following entries:
	
	  [date time] Program Group Control ==> Failed to write shortcut
	
	CAUSE
	=====
	
	Program Group Control is unable to create shortcut entries that contain invalid
	characters for file names. Windows 95 and Windows NT Workstation 4.0 use the
	file system to create Start menu program groups and shortcuts. Program groups
	are actually folders (directories) and program items are actually link (.lnk)
	files.
	
	Windows 3.1, Windows for Workgroups 3.1x, and Windows NT 3.5x do not create
	directories or files to represent program groups or items, and are therefore
	unaffected.
	
	WORKAROUND
	==========
	
	Do not use invalid characters for file names in the program group name when
	creating a shared network application program group through the Systems
	Management Server Administrator program. The following characters are invalid
	for directory and file names:
	
	  backslash        \ 
	  slash            / 
	  colon            :
	  asterisk         *
	  question mark    ?
	  quotation mark   "
	  less than        <
	  greater than     >
	  pipe             |
	
	You can confirm that no invalid characters are present by viewing the Program
	Group Properties window of the Systems Management Server Administrator program
	and noting the entry for the 'Name:' field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms appctl appstart tshoot
	
	======================================================================
	Keywords          : kbnetwork kbPGC smsappman smspgc kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
