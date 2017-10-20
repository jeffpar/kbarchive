---
layout: page
title: "Q161689: CG3: Error Messages Appear When You Install Extra Clip Art"
permalink: /kb/161/Q161689/
---

## Q161689: CG3: Error Messages Appear When You Install Extra Clip Art

{% raw %}

	Article: Q161689
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtool kbdta kbclip
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery 3.0 for Windows 
	- Microsoft PowerPoint for Windows 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Clipart Extra Setup program, you may receive the following
	error messages:
	
	  Setup could not find Microsoft Clip Gallery 3.1 installed on your system.
	  Please install Microsoft Clip Gallery 3.1 before installing this application.
	
	  -and-
	
	  Microsoft Clipart Extra Setup was not completed successfully.
	
	Then, the set up program quits without installing any clip art.
	
	CAUSE
	=====
	
	This problem occur when the following conditions are true:
	
	- You install Microsoft Office 97 on your computer from an administrative
	  installation (Setup /a) point on a network server. -and-
	
	- When you are prompted by the Microsoft Office 97 Setup program to specify
	  where to store shared files, you choose to store shared files on the network
	  server.
	
	  -or one of the following:
	
	- You have installed Publisher 98.
	
	- You have installed PhotoDraw 2000 or Home Publishing 99.
	
	- You have installed one of the following stand-alone Microsoft Office 2000
	  programs: PowerPoint 2000, Publisher 2000, Excel 2000, or Word 2000
	
	These programs install Clip Gallery version 5.0 on your computer, which also does
	not allow the Clipart Extra Setup program to function properly.
	
	RESOLUTION
	==========
	
	Network Installation resolution
	-------------------------------
	
	To install the extra clipart, you must install the Microsoft Clip Gallery,
	version 3.1, on the hard disk on your computer.
	
	If you already ran the Microsoft Office 97 Setup program and chose to store
	shared files on the server, use the following steps to install Microsoft Clip
	Gallery on your computer:
	
	1. Run the Microsoft Office 97 Setup program. When you are prompted, click
	  Remove All and remove Microsoft Office 97 from your computer.
	
	  Note that you do not have to remove all shared components.
	
	2. After you remove Microsoft Office 97 from your computer, run the Microsoft
	  Office 97 Setup program again from the network server. When you are prompted
	  whether to store shared files on the server or on the local hard disk, click
	  Local Hard Drive.
	
	3. After setup is finished, run the Microsoft Clipart Extra Setup program.
	
	WORKAROUND
	==========
	
	Copy Clip Art to Hard Disk
	--------------------------
	
	To copy the clip art to your hard disk, follow these steps:
	
	1. Insert the Microsoft Office CD into your CD-ROM drive.
	
	2. On the Windows Start menu, point to Programs, then click Windows Explorer.
	
	  On the Windows Start menu in Windows 2000, point to Programs, point to
	  Accessories, and click Windows Explorer.
	
	3. Navigate to the Clipart folder and, open it.
	
	4. Starting with the Mmedia folder, copy the following folders to you hard disk,
	  to the location of your choice:
	   - Mmedia
	
	   - Office
	
	   - Photos
	
	   - Powerpnt
	
	   - Scrbeans
	
	  The other folders in the Clipart folder were already installed on your
	  computer and do not need to be copied to your hard disk.
	
	5. Start Word 97.
	
	6. On the Insert menu, click Picture, and then click ClipArt.
	
	7. Click Import Clips.
	
	8. Navigate to the folder where you copied the clip art, open the Mmedia folder,
	  and then set Files of type to "Clip Gallery Catalogs".
	
	9. Select the *.cag file listed, and press Import.
	
	10. After the catalog file has been imported, you will be prompted with the
	  following message:
	
	  The clip catalog has been added to Clip Gallery. You must quit and restart
	  Clip Gallery to view the new catalog.
	
	  Click OK.
	
	11. Repeat steps seven through ten for each of the clip art folders copied over
	  from the CD: Office, Photos, Powerpnt, Scrbeans.
	
	12. After you import the last Catalog file, quit Clip Gallery, then restart it.
	
	When Clip Gallery restarts, it will immediately begin to convert and index the
	old catalog, *.cag, files, creating a *.sbd file for each cag file. This process
	is lengthy and may take from one to two hours.
	
	STATUS
	======
	
	This behavior is by design of the Microsoft Office 97 Setup program, Microsoft
	Clip Gallery 3.1, and the Microsoft Clipart Extra Setup program.
	
	MORE INFORMATION
	================
	
	Microsoft Office 97 includes extra clip art that you can install and use with
	Microsoft Office 97. To install the extra clip art, run the Setup.exe program in
	the Clipart folder on the network server that contains the administrative
	installation of Microsoft Office 97. You can also install the extra clip art by
	running the Setup.exe program in the Clipart folder on your Microsoft Office 97
	compact disc.
	
	When you run the Microsoft Office 97 Setup program from a network share that
	contains an administrative installation of Microsoft Office 97, you can specify
	a storage location for shared files (files that are used by more than one
	program) that is on the server or on the local hard disk. Microsoft Clip Gallery
	uses shared files. If you choose to store shared files on the server, the setup
	program does not copy Microsoft Clip Gallery to the hard disk on your computer.
	
	
	
	Additional query words: OFF97 clip art CAG setup error 3.1
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtool kbdta kbclip 
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWorksSearch kbWord97 kbWord97Search kbPublisherSearch kbZNotKeyword2 kbClipGallerySearch kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch
	Version           : :3.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
