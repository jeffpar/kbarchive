---
layout: page
title: "Q173411: CG3: Error Trying to Delete Image, Category in ClipArt Gallery"
permalink: kb/173/Q173411/
---

## Q173411: CG3: Error Trying to Delete Image, Category in ClipArt Gallery

	Article: Q173411
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbclip
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery for Windows 95, version 3.0 
	- Microsoft Excel 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Publisher 97 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	
	When you attempt to delete a category or a thumbnail from Clip Gallery, you
	receive one of the following error messages:
	
	  Cannot delete this clip because it resides in a read-only preview file.
	
	  -or-
	
	  Unable to fully delete category because some of the previews reside in a
	  read-only preview file.
	
	  -or-
	
	  This category cannot be deleted.
	
	CAUSE
	=====
	
	This error occurs because the clip image or category that you are attempting to
	delete is stored in a ClipArt Gallery Package (.cag) file on a read-only volume.
	For example, the .cag file is stored on a read-only network location or a
	compact disc.
	
	WORKAROUND
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
	
	To work around this behavior, move the .cag file to your hard disk, remove the
	read-only attribute and then delete the desired category or clip image,
	following these steps:
	
	1. Determine the path for the .cag file that contains the clip image or category
	  you want to delete. To do this, follow these steps:
	
	  a. On the Insert menu, point to Picture, and then click Clip Art.
	
	  b. Select the image you want to delete (or select any image in the category
	     you want to delete) and then click Clip Properties.
	
	     The Clip Properties dialog box appears. It contains the path to the .cag
	     file and it also indicates whether the image is read-only.
	
	  c. Note the path and then click Cancel.
	
	2. On the Windows Start menu, point to Programs, and then click Windows
	  Explorer.
	
	3. Open the folder that contains the .cag file you want to delete.
	
	4. Copy the .cag file to your hard disk and note the path for this file.
	
	5. Remove the read-only attribute from the file, following these steps:
	
	  a. Right-click the .cag file and then click Properties on the menu that
	     appears.
	
	  b. In the Attributes section, click to clear the Read-only check box.
	
	  c. Click OK.
	
	6. Modify the registry so that Clip Gallery can locate the .cag file, using
	  these steps:
	
	  a. Exit all programs.
	
	  b. On the Start menu, click Run.
	
	  c. In the Open box, type "Regedit" (without the quotation marks) and then
	     click OK.
	
	  d. On the Edit menu, click Find.
	
	  e. In the Find dialog box, click to select Data and click to clear the
	     remaining check boxes.
	
	  f. In the Find What box, enter the name of the .cag file you identified in
	     step 1. Click Find Next.
	
	     When the search is completed, the registry key that is used to store the
	     location of the .cag file is displayed in the status bar. For example, the
	     registry key, which appears in the Status bar, may look similar to this:
	
	        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ClipArtGallery\3.0\ 
	        ConcurrentDatabases\Publisher 4.0 ClipArt4
	
	  g. In the right-hand pane of Registry Editor, in the Name column, double-
	     click CAG.
	
	  h. In the Edit String dialog box, in the Value Data box, select the path and
	     delete it. Type the new path you noted in step 4.
	
	  i. Click OK.
	
	You can now delete categories and clips that reside in the local .cag file.
	
	STATUS
	======
	
	This behavior is by design. Microsoft welcomes suggestions or comments about
	changes in functionality and product design. You are invited to submit
	suggestions by filling out the form at the following Microsoft Web site:
	
	  http://www.microsoft.com/regwiz/regwiz.asp
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161718 CG: How to Create Clip Gallery Packages
	
	Additional query words: pub97 clip-art gallery galrey galry cag wmf graphic remove unable to get rid of 3.00 4.00 thumbnail thumb
	
	======================================================================
	Keywords          : kberrmsg kbdta kbclip 
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbPublisherSearch kbWord95Search kbZNotKeyword6 kbPowerPt97 kbZNotKeyword2 kbExcel95Search kbExcel97Search kbPowerPt97Search kbPublisher97 kbClipGallerySearch kbZNotKeyword3 kbPowerPt95Search kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch kbWorks400Search kbExcelWinSearch
	Version           : :3.0; WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
