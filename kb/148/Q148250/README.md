---
layout: page
title: "Q148250: Streets 4.0: Cannot Delete the Area Map File Airports.gaz"
permalink: /kb/148/Q148250/
---

## Q148250: Streets 4.0: Cannot Delete the Area Map File Airports.gaz

	Article: Q148250
	Product(s): Microsoft Automap
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to remove an Area Map file from the hard drive by using the
	Streets Remove Area Map From Hard Disk option, you receive the following error
	message:
	
	  Cannot delete the file <folder path>\AIRPORTS.GAZ
	
	This occurs if the file has the read-only attribute assigned.
	
	RESOLUTION
	==========
	
	Remove the read-only attribute from all the area map files.
	
	To resolve this problem, use the instructions below for your version of Windows
	or MS-DOS:
	
	Windows 95/98
	-------------
	
	To remove the read-only attribute in Windows, do the following:
	
	1. Click Start, point to programs, and then click Windows Explorer.
	
	2. Click your Automap\MapData\<Area Map Folder Name> folder, and then
	  click the Edit menu Select All option, where <Area Map Folder Name> is
	  the folder that contains the area map you are trying to remove.
	
	3. On the file menu, click Properties.
	
	4. Clear the check mark from the Read-Only box.
	
	5. Click OK.
	
	Windows 3.x
	-----------
	
	To remove the read-only attribute in Windows 3.x, do the following:
	
	1. Open File Manager.
	
	2. Locate the your Automap\MapData\<Area Map Folder Name> folder.
	
	3. Select all the files.
	
	4. On the File menu, click Properties.
	
	5. Clear the check from the Read-Only box. Click OK.
	
	MS-DOS
	------
	
	To correct the problem from MS-DOS, do the following:
	
	1. At an MS-DOS command prompt, change to the your Automap\MapData\<Area Map
	  Folder Name> subdirectory.
	
	  NOTE: If you are using MS-DOS 5.0 or later, to check for read-only files, type
	  the following at the MS-DOS command prompt of the Automap\MapData\<Area
	  Map> subdirectory, and then press ENTER:
	
	  " DIR /AR " (without the quotation marks)
	
	  This displays all the read-only files in the directory.
	
	2. At the MS-DOS command prompt, type the following and press ENTER:
	
	  " attrib -r *.* " (without the quotation marks)
	
	For more information about how to perform this task in Windows, see your Windows
	documentation or online Help.
	
	For more information about the ATTRIB command in MS-DOS, see your MS-DOS
	documentation.
	
	MORE INFORMATION
	================
	
	This behavior is by design. All files copied directly from the compact disc are
	marked (flagged) with the read-only attribute. The read-only file attribute
	prevents Automap Streets from removing the area map from the hard disk when you
	attempt to use the File Menu, Remove Area Map From Hard Disk option.
	
	Additional query words: auto auto-map automap reference kbmm multimedia multi-media mult
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapStreets400
	Version           : 4.00
	
	=============================================================================
	
