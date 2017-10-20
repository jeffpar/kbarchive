---
layout: page
title: "Q187648: INFO: FrontPage and VID Local Files on a Source Controlled Web"
permalink: /kb/187/Q187648/
---

## Q187648: INFO: FrontPage and VID Local Files on a Source Controlled Web

{% raw %}

	Article: Q187648
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:1.0,5.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual InterDev, version 1.0 
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article addresses a situation where you are using both FrontPage (FP)
	and/or Visual Interdev (VID) to develop a Web that is also source controlled and
	you want to give Web authors and developers the ability to edit and save files
	locally before saving them to the Web server and checking them in to SourceSafe.
	
	MORE INFORMATION
	================
	
	Assuming that you already have the file checked out, there are two steps
	involved:
	
	1. Work on a local copy of the file, occasionally saving it locally.
	
	2. Save the file to the Web server.
	
	Work on a Local Copy of the File
	--------------------------------
	
	The major issue here is that VID has a "sandbox" (the ability to store a local
	copy of the file while you are working on the file). You can save a file locally
	until you are ready to update the test server and/or check it in to SourceSafe,
	whereas saving a file in FrontPage always saves it to the Web server.
	
	FrontPage does not support the sandbox functionality. In certain cases, you can
	use the method described here, but use it with caution. For example, if there
	are dependencies based on borders, class files, image links, and so forth,
	choosing "Save As" in the FrontPage editor to take a file from an open Web and
	save it on the hard drive generates some problematic conditions.
	
	1. Open the file from the FrontPage explorer. From the File menu, select "Save
	  As" and save the file locally.
	
	2. Work on the local version of the file. Remember to work with the local copy
	  by opening it in the FrontPage editor. Do not open the Web copy in the
	  FrontPage explorer.
	
	3. To save a local copy in Visual Interdev without updating the server, from the
	  Tools menu, choose Options. In the Options dialog box, click the "Web
	  Projects" tab and clear the "Update server when files are saved" check box.
	
	Saving the File to the Server
	-----------------------------
	
	There are two possible approaches here. Some administrators prefer to always have
	the version of all files on the server synchronized with the latest SourceSafe
	version, so that any file saved to the server must also be checked in to
	SourceSafe, while others do not want to check in a file until it has been tested
	and approved.
	
	To save a local file to the server in FrontPage, assuming you have used the
	approach described above to simulate a sandbox, import the local copy into the
	FrontPage web, answering "Yes" when prompted to replace the current copy. You
	can then choose to check the file in. Note that in FrontPage saving to the
	server and checking the file in will always be a two step process.
	
	NOTE: You must import any dependencies, such as images for example, into the Web
	along with the file.
	
	In Visual Interdev, you can "Update Server" to save the local copy to the server
	without checking it in to SourceSafe. Selecting "Release Working Copy" then
	performs the check in. If you want the SourceSafe version synchronized with the
	server version, just choose Release Working Copy, then answer "Yes" when
	prompted to update the server copy.
	
	Additional query words: kbDSupport kbdse ssfp ssidev kbInetDev
	
	======================================================================
	Keywords          :  
	Technology        : kbVisIDsearch kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search kbVisID100 kbSSafe500
	Version           : WINDOWS:1.0,5.0,97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
