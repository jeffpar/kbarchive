---
layout: page
title: "Q282901: Drive Letters Are Not Assigned for SCSI Devices"
permalink: /kb/282/Q282901/
---

## Q282901: Drive Letters Are Not Assigned for SCSI Devices

	Article: Q282901
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1,2.5
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an ATA PC Card before turning on a computer that already has a
	SCSI PC Card present, the following problems may occur:
	
	- No drive letter is assigned to some of the SCSI devices (such as a CD-ROM
	  drive).
	
	- A "ghost" drive appears (there are no folders or files, and you cannot write
	  to the drive).
	
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
	
	  Date        Time    Version    Size     File name
	  ---------------------------------------------------
	  02/06/2001  01:48p  4.00.1114  107,033  Configmg.vxd
	  02/06/2001  01:39p  4.00.1115   68,962  Ios.vxd
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, insert the ATA PC Card after Windows has started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: pcmcia
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
