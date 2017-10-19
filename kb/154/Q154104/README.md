---
layout: page
title: "Q154104: Restoring a Deleted Microsoft Exchange Information Service"
permalink: /kb/154/Q154104/
---

## Q154104: Restoring a Deleted Microsoft Exchange Information Service

	Article: Q154104
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add an information service to a new or existing profile in
	Microsoft Exchange, the service may not be available. However, the service may
	be available in other profiles.
	
	CAUSE
	=====
	
	This behavior can occur if the service has been removed from the Add Service To
	Profile window.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods.
	
	Reinstall Microsoft Exchange
	----------------------------
	
	Use the following steps to remove and reinstall Microsoft Exchange:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click the Microsoft Exchange check box to clear it.
	
	4. Click the check box for the service (for example, the Microsoft Fax check
	  box) to clear it.
	
	5. Click OK. When you are prompted to restart your computer, do so.
	
	6. Reinstall Microsoft Exchange by repeating steps 1-4. In step 4, select the
	  check boxes you cleared.
	
	Extract New Copy of Mapisvc.inf File
	------------------------------------
	
	Use the following steps to extract a new copy of the Mapisvc.inf file from your
	original Windows 95 disks or CD-ROM:
	
	1. Click the Start button, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "mapisvc.inf" (without the quotation marks), and then
	  click Find Now.
	
	3. Use the right mouse button to click the Mapisvc.inf file once it is located,
	  and then click Rename on the menu that appears. Rename the file to
	  Mapisvc.old, and then close the Find window.
	
	4. Start an MS-DOS prompt.
	
	5. If you are using a Windows 95 CD-ROM, type the following line at the command
	  prompt to extract the Mapisvc.inf file
	
	  " extract /l c:\windows\system <drive>:\win95\win95_07.cab mapisvc.inf
	  " (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	  If you are using Windows 95 disks, insert disk 7 in the disk drive and then
	  type the following line at the command prompt to extract the Mapisvc.inf
	  file
	
	  " extract /l c:\windows\system <drive>:\win95\win95_07.cab mapisvc.inf
	  " (without the quotation marks)
	
	  where <drive> is the drive letter of the floppy disk drive.
	
	MORE INFORMATION
	================
	
	If you click Add when you are viewing the properties for a profile, the Add
	Service To Profile window appears. The list of services in this window is read
	from the Mapisvc.inf file. If you click a service in this window and then click
	Remove, the service is no longer available to add to profiles (but is not
	removed from profiles in which it is already installed).
	
	Additional query words: missing
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
