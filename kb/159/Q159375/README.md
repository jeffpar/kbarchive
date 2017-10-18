---
layout: page
title: "Q159375: CG3: Unable to Connect to Design Gallery Live Web Site"
permalink: kb/159/Q159375/
---

## Q159375: CG3: Unable to Connect to Design Gallery Live Web Site

	Article: Q159375
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0,97
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbdta kbweb kbclip
	Last Modified: 23-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery for Windows 95, version 3.0 
	- Microsoft Publisher 97 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you don't have the file called Url.dll in your C:\Windows\System folder, you
	can't connect to the Design Gallery Live Web site from Microsoft Clip Gallery
	3.0. When you click the Connect to Internet button in Clip Gallery, you see this
	expected message:
	
	  If you have access to the World Wide Web, click OK to browse additional clips
	  from a special Web page. Clips you select from there are automatically added
	  to the Clip Gallery.
	
	When you click OK, the mouse pointer changes to an hourglass for a brief time and
	then becomes a pointer again. Nothing else happens.
	
	In addition, if you open the "C:\Program Files\Common Files\Microsoft
	Shared\Artgalry" folder and double-click the WW_Clip file, you receive this
	message:
	
	  RunDll
	  Error Loading URL.DLL: The system cannot find the file specified.
	
	MORE INFORMATION
	================
	
	The following products install Url.dll:
	
	- Microsoft Plus! for Windows 95
	
	- Microsoft Internet Explorer for Windows 95,
	
	- Microsoft Internet Starter Kit for Windows 95
	
	In addition, if you have Windows NT Workstation, version 4.0, this file is
	automatically installed.
	
	If you don't have any of the above products, and use a different Web browser, you
	may not have this file. In this case, you can't use the button in Clip Gallery
	to connect to the Design Gallery Live Web page.
	
	You can, however, connect to this site using other methods. For example, if you
	have Microsoft Publisher 97, you can connect to this site using the following
	steps. These steps assume that you have a properly configured Web browser and
	Internet access.
	
	1. In Publisher 97, click Microsoft Publisher Web Site on the Help menu.
	
	2. Click one of the links to the Design Gallery Live Web site.
	
	Additional query words: 3.0 CAG clip art gallery pub4 pub97 nothing happens office powerpnt powerpt ppt97 ppt8 off97 off8 8.00 WWW World-Wide Web RunDll Error Loading URL DLL
	
	======================================================================
	Keywords          : kberrmsg kbtool kbdta kbweb kbclip 
	Technology        : kbFrontPageSearch kbPowerPtSearch kbPublisherSearch kbWord95Search kbZNotKeyword6 kbPowerPt97 kbExcel95Search kbPowerPt97Search kbPublisher97 kbClipGallerySearch kbPowerPt95Search kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch kbWorks400Search
	Version           : :3.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
