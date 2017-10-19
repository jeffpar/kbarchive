---
layout: page
title: "Q149592: PPT7: .pps Files Fail to Start in Slide Show"
permalink: /kb/149/Q149592/
---

## Q149592: PPT7: .pps Files Fail to Start in Slide Show

	Article: Q149592
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0a
	Operating System(s): 
	Keyword(s): kbusage kbdtakbbuglist
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you double-click a PowerPoint presentation file with a .pps extension, it may
	start PowerPoint in Slide view, instead of automatically starting the slide
	show.
	
	CAUSE
	=====
	
	An incorrect Registry key written by PowerPoint 95a activates the OLE verb Edit,
	rather than the OLE verb Show.
	
	RESOLUTION
	==========
	
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
	
	To correct this problem, use the following steps to modify the .pps key in the
	Windows 95 system registry:
	
	1. Click the Start button, and click Run. In the Open box, type the following
	  and click OK:
	
	  "regedit" (without the quotation marks)
	
	2. On the Registry menu, click Export Registry File. Type a file name for your
	  backup Registry file and click Save. By default, Registry Editor will save
	  all of the registry to a file on your desktop.
	
	3. Select the following key:
	
	     Key: HKEY_CLASSES_ROOT\.pps
	
	4. Clear the value for [Default].
	
	5. Select the following key:
	
	     Key: HKEY_CLASSES_ROOT\.pps\Shell\Open
	
	6. Change the value for [Default] to the following:
	
	  ""S&how"" (without the quotation marks)
	
	7. Close the System Registry.
	
	Now .pps files should successfully start in PowerPoint Slide Show.
	
	Additional query words: 7.00 7.00a ppt powerpt pp open editing slides slide showing load
	
	======================================================================
	Keywords          : kbusage kbdta kbbuglist
	Technology        : kbPowerPtSearch kbZNotKeyword2 kbPowerPt700Search kbPowerPt700a
	Version           : WINDOWS:7.0a
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
