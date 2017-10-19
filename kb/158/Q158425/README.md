---
layout: page
title: "Q158425: CG3: Errors and Unable to View Clipart in Clip Gallery"
permalink: /kb/158/Q158425/
---

## Q158425: CG3: Errors and Unable to View Clipart in Clip Gallery

	Article: Q158425
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbole kbtool kbdta
	Last Modified: 23-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery for Windows 95, version 3.0 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Publisher 97 
	- Microsoft Publisher 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95 and Windows NT, you can have multiple user profiles. If you import
	some Clip Gallery Packages (.cag files) into your Clip Gallery from a network
	drive, and you then log off your computer and log on as a different user, you
	may receive an error similar to the following when you start Clip Gallery:
	
	  Clip Gallery cannot open the previews file \\Server\Share\Folder\File
	  Name.cag.
	
	  That file is on a network. The file may have been removed or the network
	  server may not be available. Attempting to open that file causes Clip Gallery
	  to launch slowly.
	
	If you select the "Don't Attempt To Open That File in the Future" check box and
	then click OK, the clipart stored in that preview file is removed from your Clip
	Gallery. If you then log off your computer and then log back on as yourself, the
	clipart is still gone.
	
	CAUSE
	=====
	
	If one user profile does not have access to a network drive that contains a .cag
	file, you get the error when you log in as that user. If you select the "Don't
	Attempt To Open That File in the Future" check box, the key in the Windows
	Registry that tells Clip Gallery about that file is deleted. This particular key
	is shared by all user profiles on your computer. If this key is deleted, it is
	deleted for all user profiles.
	
	
	RESOLUTION
	==========
	
	If you receive the error, and you don't have the only user profile for your
	computer, don't select the "Don't Attempt To Open That File in the Future" check
	box.
	
	If you have already deleted the clips, use the following steps to add them back
	in:
	
	1. Start Publisher or PowerPoint (or some other OLE destination program).
	
	2. On the Insert menu, click Object. Select Microsoft Clip Gallery from the
	  Object Types list.
	
	3. In Clip Gallery, click Import Clips.
	
	4. From the Files of Type list, select Clip Gallery Packages.
	
	5. Navigate to the folder that contains a .cag file.
	
	6. Click the file that corresponds to the collection you want to import and
	  click OK.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.0 pub97 ppt97 office97 8.0 4.0 pub4 ppt8 office8 thumbnails gone missing user accounts different long rights permissions net
	
	======================================================================
	Keywords          : kbenv kberrmsg kbole kbtool kbdta 
	Technology        : kbFrontPageSearch kbPowerPtSearch kbPublisherSearch kbWord95Search kbZNotKeyword6 kbPowerPt97 kbPublisher98 kbExcel95Search kbPowerPt97Search kbPublisher97 kbClipGallerySearch kbPowerPt95Search kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch kbWorks400Search
	Version           : :3.0; WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
