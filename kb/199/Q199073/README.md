---
layout: page
title: "Q199073: SBS 4.5 Setup Lists Incorrect Space Required for Other Drives"
permalink: /kb/199/Q199073/
---

## Q199073: SBS 4.5 Setup Lists Incorrect Space Required for Other Drives

	Article: Q199073
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbsetup kbui
	Last Modified: 01-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup of Small Business Server (SBS) 4.5 will allow certain applications to be
	installed on drives other than the system partition. The space required to
	install all applications on the system partition is displayed correctly.
	Selecting an application and choosing another partition, however, will indicate
	that the space required for all programs is 0.
	
	CAUSE
	=====
	
	The space required for all programs to install is indicated by the drive
	currently selected. If a second drive is selected, but no applications are
	selected to install on that drive yet, the correct amount of disk space would be
	0.
	
	RESOLUTION
	==========
	
	Select an application to install on the additional drive.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbsetup kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
