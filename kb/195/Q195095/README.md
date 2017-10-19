---
layout: page
title: "Q195095: CG3: Previews on Network Drive Error with Clip Gallery 3.0"
permalink: /kb/195/Q195095/
---

## Q195095: CG3: Previews on Network Drive Error with Clip Gallery 3.0

	Article: Q195095
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery 3.0 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Clip Gallery 3.0 across a network, you may receive an
	error message similar to the following:
	
	  Clip Gallery cannot open the previews file
	  \\<filepath>\<filename.CAG> That file is on a network. The file
	  may have been removed or the network server may not be available. Attempting
	  to open that file causes Clip Gallery to open slowly.
	
	This error message may repeat a number of times. After clicking OK, Clip Gallery
	will open, but there will be very few clips in the Clip Gallery.
	
	
	CAUSE
	=====
	
	This error is caused when all of the following conditions are true:
	
	- Two or more workstations, in a networking environment, attempt to access Clip
	  Gallery simultaneously.
	
	- The Clip Gallery Package (CAG) files are stored on a shared network server.
	
	- At least one user is logged in as administrator, or has full permission to
	  the shared folder when the Artgalry.cag file is located.
	
	This error may also be caused by other conditions.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, you must set the share permissions for the Office 97
	Administrative install folder to read-only for all users and groups that have
	access. Typically there is never going to be a reason for an administrator, or
	anyone else to have full permissions to this folder.
	
	WORKAROUND
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Clip Gallery (CAG) files store indexes and preview images for pictures in
	the Microsoft Clip Gallery. Because this file can be modified (add, and delete
	clips), Clip Gallery will attempt to open the CAG files for Read/Write
	permissions. When Clip Gallery is successful at opening these files for
	Read/Write permissions, it Locks the files, and does not allow any other access
	until Clip Gallery is closed. In a shared networking environment, if User1, who
	is a network administrator, or someone in a group or policy that is allowed full
	or read/write/change permissions, runs Clip Gallery, the CAG files will be
	accessed with Read/Write access and Locked from use by all other users
	attempting to run Clip Gallery. If User2 or any other user attempts to run Clip
	Gallery while User1 is still running Clip Gallery, User2 and all other users who
	attempt to run Clip Gallery will receive the error. This will continue to be the
	case until User1 closes Clip Gallery.
	
	REFERENCES
	==========
	
	For additional information, about Clip Gallery network related issues. Please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q158425 CG3: Errors and Unable to View Clipart in Clip Gallery
	
	  Q158425 CG3: Clip Gallery Takes a Long Time to Start
	
	  Q158425 CG3: Error Trying to Delete Image, Category in ClipArt Gallery
	
	For general information, about troubleshooting Clip Gallery issues. Please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q162124 CG3: Clip Gallery General Troubleshooting Tips Part 1 of 2
	
	  Q162128 CG3: Clip Gallery General Troubleshooting Tips Part 2 of 2
	
	Additional query words: novel tcpip permissions access clips artgalry art gallery pictures network novell nt server networking
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWorksSearch kbPublisherSearch kbClipGallerySearch kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch
	Version           : WINDOWS:3.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
