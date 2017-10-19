---
layout: page
title: "Q133162: PPT7: Network Installation: .cag Files Not Read-Only"
permalink: /kb/133/Q133162/
---

## Q133162: PPT7: Network Installation: .cag Files Not Read-Only

	Article: Q133162
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): kbnetwork kbole kbclip
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform a Workstation setup of PowerPoint for Windows 95, version 7.0 or
	Office for Windows 95, version 7.0 and choose to leave the shared components on
	the network server, you may receive an error similar to the following the first
	time you run ClipArt Gallery:
	
	  The ClipArt Gallery could not add the ClipArt package PowerPoint Popular Clip
	  Art
	
	  To make the package available to the ClipArt Gallery, re-run setup for the
	  application which included this ClipArt package.
	
	This error occurs after someone with administrative rights to the Pcsfiles folder
	on the server has successfully run ClipArt Gallery.
	
	CAUSE
	=====
	
	When you perform an Administrative mode setup of Microsoft PowerPoint or Office,
	the .cag files used in setting up the ClipArt Gallery are not flagged Read Only.
	This means they can be deleted or moved by anyone who has administrative rights
	to the Pcsfiles folder.
	
	The first time you run ClipArt Gallery, the individual .cag files in the PCSfiles
	folder are merged into a single Artgalry.cag file. ClipArt Gallery then tries to
	delete the .cag files in the Pcsfiles folder. If you have administrative rights
	to this folder and run ClipArt Gallery, the individual .cag files are deleted,
	and any later attempt to install ClipArt Gallery will fail.
	
	RESOLUTION
	==========
	
	Under most circumstances, this should not be a problem, because most network
	users don't have administrative rights to the shared application directories. To
	prevent this problem from happening accidentally, mark the Pcsfiles folder Read
	Only before running the first workstation installation.
	
	If Office is installed to drive X in a folder called Msoffice, the Pcsfiles
	location is:
	
	  X:\Msoffice\Clipart\Pcsfiles
	
	NOTE: Do not mark the individual .cag files Read Only, unless you are sure that
	no one will perform a local installation from the Administrative setup.
	
	STATUS
	======
	
	This problem was corrected in Microsoft PowerPoint 97 for Windows.
	
	Additional query words: install ppt95 mspub cag artgalry art gallery read only net directory
	
	======================================================================
	Keywords          : kbnetwork kbole kbclip 
	Technology        : kbOfficeSearch kbPowerPtSearch kbSQLServ700 kbZNotKeyword2 kbOffice95Search kbZNotKeyword3 kbPowerPt700Search
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
