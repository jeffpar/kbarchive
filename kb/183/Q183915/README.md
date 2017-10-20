---
layout: page
title: "Q183915: CG: Clip Gallery Cannot Find Clip Art on a CD-ROM Drive"
permalink: /kb/183/Q183915/
---

## Q183915: CG: Clip Gallery Cannot Find Clip Art on a CD-ROM Drive

{% raw %}

	Article: Q183915
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): kbdta kbclip
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery, versions 3.0, 4.0 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	When using Clip Gallery, you may receive one of the following error messages:
	
	  Clip Gallery cannot open the previews file
	  <drive>:\CLIPART\<file>.CAG.
	
	  That file is on a network. The file may have been moved or the network server
	  may not be available. Attempting to open that file may cause Clip Gallery to
	  open slowly.
	
	-or-
	
	  Clip Gallery cannot open the previews file
	  <drive>:\CLIPART\<file>.CAG.
	
	  The file may have been deleted or moved. If you moved that file choose Import
	  Clips, then select the file at its new location. This will re-import the
	  clips in that previews file.
	
	In either case, <drive> represents a drive other than the actual CD-ROM
	drive and <file> represents the ClipArt Gallery (CAG) file that Clip
	Gallery cannot find.
	
	CAUSE
	=====
	
	This behavior occurs after you add or remove a hardware device (for example,
	install an additional hard disk drive). When you add or remove a disk drive, the
	CD-ROM drive changes because it is always assigned the last available drive
	letter on your computer. However, the new drive letter does not get updated in
	the ConcurrentDatabases key in the Windows registry.
	
	
	RESOLUTION
	==========
	
	You can have Windows 95 or Windows NT reserve the specific drive letter that is
	referenced in the ConcurrentDatabases key in the Windows registry.
	
	NOTE: Use Method 1 if you installed a removable drive, such as an Iomega ZIP
	drive or some tape drives. Use Method 2 if you installed an additional hard disk
	driver in your computer.
	
	Before you perform one of the following methods, determine the current drive
	letter for your CD-ROM drive and the drive that Clip Gallery is searching for
	the clip art.
	
	Method 1 (Windows 95 Only)
	--------------------------
	
	1. On the Windows Start Menu, point to Settings, and click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab. Double-click the CD-ROM icon.
	
	4. Select the CD-ROM device and click Properties.
	
	5. In the CD-ROM Properties dialog box, click the Settings tab.
	
	6. In the Start Drive Letter box in the Reserved Drive Letter section, enter the
	  original letter for the CD-ROM drive letter.
	
	7. Click OK. The CD-ROM will be reset to the original drive letter when you
	  restart your computer.
	
	Method 2 (Windows NT 4.0 Only)
	------------------------------
	
	For other versions of Windows NT see documentation under "Disk Administrator."
	
	1. On the Windows Start menu, point to Programs, point to Administrative Tools,
	  and then click Disk Administrator.
	
	2. On the Tools menu, click Assign Drive Letter.
	
	3. Enter the drive letter of the drive that Clip Gallery is searching.
	
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
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks) and click OK.
	
	3. In Registry Editor, do the following:
	
	  a. Find the following registry key:
	
	         My Computer\HKEY_LOCAL_MACHINE\Software\Microsoft\ClipArt Gallery
	         \3.0\ConcurrentDatabases
	
	  b. Expand the ConcurrentDatabases subkey by clicking the plus sign to the
	     left of the subkey). All of the catalogs used by Clip Gallery will be
	     listed.
	
	  c. Select the first entry under ConcurrentDatabases. In the right pane, note
	     the value data (in the Data column) of the CAG entry.
	
	  d. Repeat steps a through c for each entry under ConcurrentDatabases.
	
	  e. On the Registry menu, click Exit.
	
	4. On the Windows Start menu, point to Programs, and then click Windows
	  Explorer. Check to see that each CAG file (from step 3) exists in the
	  location specified in the Registry. If you do not find a file in the location
	  specified in the Registry, search your hard disk for the file and note its
	  location. If the CAG file is stored on a compact disc, insert the appropriate
	  compact disc in your CD-ROM drive.
	
	5. On the Windows Start menu, click Run.
	
	6. In the Open box, type "regedit" (without the quotation marks) and click OK.
	
	7. In Registry Editor, do the following:
	
	  a. Find the following registry key:
	
	         My Computer\HKEY_LOCAL_MACHINE\Software\Microsoft\ClipArt Gallery
	         \3.0\ConcurrentDatabases
	
	  b. For each CAG file that you did not find in the location stored in the
	     registry, select the subkey. In the right pane, double-click CAG in the
	     Name column. In the Value Data box in the Edit String dialog box, change
	     the value to reflect the correct path of the CAG file.
	
	     NOTE: If you did not find the CAG file on your hard disk or on the compact
	     disc, you can delete the subkey from the registry.
	
	  c. Repeat step b for each CAG file you did not find, or that you found in a
	     different location.
	
	  d. On the Registry menu, click Exit.
	
	8. Rename the appropriate file:
	   - Artgalry.cag (if you are using Clip Gallery 3.0)
	
	   - Artgal40.cag (if you are using Clip Gallery 4.0)
	
	9. Restart Clip Gallery. When it does not find the primary CAG file, it will use
	  the new information in the Registry and create a new file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: publisher pub5 pub98 pub97 97 98 powerpoint ppt ppt97 8.0 ppt8 ms_ppt ms_pub mspub clip missing lost gone error pictures clipart unable cannot cant insert images image
	
	======================================================================
	Keywords          : kbdta kbclip 
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWorksSearch kbPublisherSearch kbClipGallerySearch kbClipGallery300 kbClipGallery400 kbHomePubSearch kbPhotoDrawSearch
	Version           : WINDOWS:3.0,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
