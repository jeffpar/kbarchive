---
layout: page
title: "Q137756: PPT: Errors in PowerPoint Due to Multiple User Profiles"
permalink: kb/137/Q137756/
---

## Q137756: PPT: Errors in PowerPoint Due to Multiple User Profiles

	Article: Q137756
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbsetup kbdta
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Case 1. When you run the AutoContent Wizard, you receive the following error
	message:
	
	  Sorry, PowerPoint could not start or locate 'PPT Tools.'
	  You should run Setup and reinstall.
	
	Case 2. When you attempt to open a PowerPoint 4.0 file into PowerPoint 7.0, you
	receive the following error message:
	
	  Sorry, this type of file cannot be opened by PowerPoint.
	
	Case 3. When you attempt to run Quick Preview, nothing happens.
	
	Case 4. The Interactive Settings command is not on the Tools menu.
	
	Case 5. When you attempt to run Help, nothing happens.
	
	CAUSE
	=====
	
	Cases 1-4. This problem occurs in the following situations:
	
	- You are using a computer with multiple Windows 95 user profiles and the user
	  profile that you are logged on to is different from the user profile that you
	  used when you installed PowerPoint. The user profile that was active when you
	  installed PowerPoint contains the correct Registry information for the
	  converters for the previous versions of PowerPoint.
	
	- The Registry information for PowerPoint is incorrect or is corrupted. If you
	  are on a computer that has multiple Windows 95 user profiles, all users who
	  log on will experience one or more of these symptoms.
	
	Case 5.
	
	- You are logged on as another user on a computer using the Windows NT 3.51
	  operating system. For example, this problem occurs if you were logged on as
	  Administrator when you installed PowerPoint, but you are logged on as a user
	  when you run PowerPoint. When you are logged on as Administrator, the
	  Pptools.ppa file is correctly registered in the Windows NT Registry; while
	  you are logged on as a user, the Pptools.ppa file is not registered.
	
	WORKAROUND
	==========
	
	
	For all cases, choose the appropriate method to work around this problem:
	
	Method 1
	--------
	
	Close all programs and log on to Windows using the profile that you used when you
	installed PowerPoint 7.0.
	
	Method 2
	--------
	
	Reinstall PowerPoint 7.0 using the /y switch for every user profile that
	experiences the problem. To do this,
	
	a. Log on using a profile that is unable to open earlier versions of PowerPoint.
	
	b. In Windows Explorer, open the MSOffice or Powerpnt folder.
	
	c. Copy the Office Setup or PowerPoint Setup shortcut to the desktop.
	
	d. Right-click the Setup shortcut, and click Properties.
	
	e. Click the Shortcut tab.
	
	f. Modify the contents of the Target box.
	
	  The Target box contains the following (or similar) instruction:
	
	     C:\Msoffice\Office\Setup\Acme.exe /W Off95std.stf
	
	  Add a "/y" (without the quotation marks) to the end of this line so that it
	  looks like this:
	
	     C:\Msoffice\Office\Setup\Acme.exe /W Off95std.stf /y
	
	g. Click OK.
	
	h. Double-click the shortcut.
	
	i. In the Maintenance Mode Setup dialog box, click Reinstall.
	
	  While the Setup program runs, it does not copy any files. Instead, it updates
	  the Windows 95 registry so that the current user profile can use all the
	  Office features.
	
	j. Repeat steps a-i for each user profile.
	
	Method 3
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	If Method 1 and 2 are unsuccessful, export the Registry keys related to
	PowerPoint and re-register the program, using these steps:
	
	a. Click the Windows Start button, and then click Run.
	
	b. In the Open box, type "Regedit" (without the quotation marks), and then click
	  OK.
	
	c. Open the HKEY_CLASSES_ROOT key.
	
	d. Locate and select the .ppt key.
	
	e. On the Registry menu, click Export Registry File.
	
	f. In the Save In box, select the Desktop. Type a file name for the exported
	  file, and click Save.
	
	g. Select the .ppt key if it is not already selected, and click Delete on the
	  Edit menu. Click Yes in the message box asking you to delete the registry
	  key.
	
	h. Repeat steps d through g for the .pot, .pwz, and .pps keys.
	
	i. Start PowerPoint to re-register it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft
	PowerPoint 97 for Windows.
	
	REFERENCES
	==========
	
	For additional information, please see the following article here in the
	Microsoft Knowledge Base:
	
	  Q126556 MS Query Button Doesn't Appear in Open Data Source Dialog Box
	
	
	Additional query words: 4.00a 4.00c 95 w_office w_powerpt office legacy autocontent wizard translate ppttools Sorry PowerPoint could not start or locate PPT Tools
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbsetup kbdta 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt95Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : :4.0,4.0a,4.0c,7.0
	Hardware          : MAC
	Issue type        : kbprb
	
	=============================================================================
	
