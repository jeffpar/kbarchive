---
layout: page
title: "Q135488: PC NTMMTA: DrivesWAN Fails to Work"
permalink: /kb/135/Q135488/
---

## Q135488: PC NTMMTA: DrivesWAN Fails to Work

	Article: Q135488
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even after you correctly set up an instance of the Windows NT Multitasking MTA
	(NT MMTA) with the Use WAN Drives option in the Microsoft Mail Service Manager,
	you may notice that the instance of the External Mail program is sending mail
	both ways when it should to be sending it just one way.
	
	The Use WAN Drives option does not work correctly when you run the NT MMTA as a
	service. The DrivesWAN drive letters are assigned according to the next
	contiguous mappable drives regardless of whether or not they are actually
	available drive letters.
	
	For example, if you work on a machine that has A:, C:, and D:, and you use the
	DrivesWAN as a service, the following entries will appear in the SESSION.LOG:
	
	  HomePO = B
	  DrivesDynamic = EF
	  DrivesWAN = CD
	
	CAUSE
	=====
	
	The XTSRV32.EXE component calculates DrivesWAN letters by selecting the next two
	sequential drive letters starting from the home postoffice (PO) drive
	assignment.
	
	This will result in DrivesWAN using invalid drive letters under the following
	conditions:
	
	1. The NT MMTA has only one floppy drive, and it selects drive B: as the home PO
	  drive assignment
	
	2. The first available drive letter that is selected for the home PO does not
	  have the next two sequential letters available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	Multitasking MTA for Windows NT. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The updated NTMMTA (version 3.5.27) when applied it improves this problem. If
	the computer does not have a B:\ drive, the NTMMTA well still select B:\ as the
	first drive; however, the mail transfer will be done properly.
	
	The version 3.5.27 NTMMTA is available to you on the BBS at either (972) 518-0393
	or (972) 550-0226 with the proper password that you get from a Microsoft Mail
	Support Professional.
	
	
	Additional query words: DriveDynamic DriveWAN MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
