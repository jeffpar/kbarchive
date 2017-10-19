---
layout: page
title: "Q116559: PPT7: Can't Open PowerPoint 4.0 Presentation on Windows NT 3.51"
permalink: /kb/116/Q116559/
---

## Q116559: PPT7: Can't Open PowerPoint 4.0 Presentation on Windows NT 3.51

	Article: Q116559
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a Microsoft PowerPoint, version 4.0, presentation in
	Microsoft PowerPoint for Windows 95, version 7.0, running on a Microsoft Windows
	NT Workstation 3.51, you receive one of the following error messages:
	
	  Sorry, this is not a PowerPoint presentation.
	
	  -or-
	
	  Sorry this file cannot be opened by PowerPoint.
	
	CAUSE
	=====
	
	This error message appears when you are not logged on to the Windows NT
	Workstation as the same user who installed PowerPoint for Windows 95.
	
	When you install PowerPoint for Windows 95, all the keys in the registry are
	updated correctly for the account you are logged on to when you run Setup.
	However, the registry keys for other user accounts on the same workstation are
	not updated. Therefore, the other accounts will not be able to open PowerPoint
	4.0 presentations or use some PowerPoint for Windows 95 features.
	
	RESOLUTION
	==========
	
	
	Method 1
	--------
	
	Re-register Microsoft PowerPoint 95 by running Setup /y:
	
	1. Insert the PowerPoint or Office Disk 1 or the PowerPoint or the Office
	  compact disc in the appropriate disk drive.
	
	2. On the Windows Start menu, click Run. In the Open box, type the following
	  command:
	
	  "<drive>:\setup /y /r" (without the quotation marks)
	
	  where <drive> is the drive that contains the Setup program.
	
	  NOTE: The /r switch instructs Setup to reinstall the software. If you do not
	  include the /r switch, you must click the Reinstall button.
	
	3. Click OK.
	
	  This procedure starts PowerPoint or Office Setup. It appears as though you are
	  running a new installation. However, this Setup does not install any files or
	  prompt you for any disks. What it does do is reregister all PowerPoint or
	  Office components (provided no problems exist within the Windows registry or
	  the Setup.stf file).
	
	4. Repeat steps 1 through 3 for every account on the workstation.
	
	Method 2
	--------
	
	Delete the registry entries for PowerPoint and then re-create them.
	
	To correctly register PowerPoint for Windows 95 on an account other than the one
	used to install PowerPoint, follow these steps.
	
	NOTE: Before you manually edit your Windows NT registry, you should make a backup
	copy of the registry by running the Rdisk.exe program in the Windows\System32
	folder. For more information about using the Rdisk.exe program, please consult
	your Windows NT user's guide or online documentation.
	
	
	1. Run the Regedt32.exe program located in the Windows\System32 folder. The
	  program opens a screen that has four windows with the following names:
	  HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_USERS, and HKEY_LOCAL_MACHINE.
	
	2. Click the window named HKEY_CLASSES_ROOT.
	
	3. Delete the following keys that appear as file folders under the
	  HKEY_CLASSES_ROOT:
	
	  .ppt
	  .pot
	  .pps
	  .ppw
	
	4. On the Registry menu, click Exit.
	
	5. Run PowerPoint. Because PowerPoint is self-registering, it updates the
	  registry for the current account.
	
	6. Repeat steps 1 through 6 for every account on the workstation.
	
	MORE INFORMATION
	================
	
	The above steps also correct the registration of any translator installed by
	PowerPoint including:
	
	- Lotus Freelance for Windows, versions 2.0-2.1
	
	- Lotus Freelance for MS-DOS, version 4.0
	
	- Harvard Graphics for MS-DOS, versions 2.3 and 3.0
	
	Additional query words: 7.00 Winnt registry regedt32 PowerPoint translators winppt ppt95
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbPowerPtSearch kbOSWinNT351 kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbOSWinNTSearch
	Version           : WINDOWS:7.0; winnt:3.51
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
