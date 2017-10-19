---
layout: page
title: "Q150688: Differences Between a Workgroup Post Office and Microsoft Mail"
permalink: /kb/150/Q150688/
---

## Q150688: Differences Between a Workgroup Post Office and Microsoft Mail

	Article: Q150688
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain cases, you may need to delete and re-create a post office. If you do
	so, you must make sure not to delete a retail Microsoft Mail post office instead
	of the Workgroup post office installed with Windows for Workgroups or Windows
	95. This article describes how to determine the difference between post
	offices.
	
	For additional information about deleting and re-creating a Workgroup post
	office, please see the following article in the Microsoft Knowledge Base:
	
	  Q120817 How to Delete and Re-create a WFWG Post Office
	
	MORE INFORMATION
	================
	
	The primary method of determining the difference between a Workgroup post office
	and a retail Microsoft Mail post office is the root folder. The default root
	folder names for post offices are as follows:
	
	  Product                               Root folder
	  -----------------------------------------------------------
	  Windows for Workgroups 3.1 and 3.11   <x>:\Windows\WGPO
	  Windows 95                            <x>:\Windows\WGPO0000
	  Retail Microsoft Mail                 <net drive>:\MAILDATA
	
	Note that Windows 95 increments the numerical value of the post office name as
	additional post offices are created. This behavior is by design.
	
	Additional Differences
	----------------------
	
	The root folder of a post office can be created with any valid name. However,
	even if a custom name is used for the root folder, the internal folder structure
	must remain named as it was during creation and all folder structures must be
	maintained.
	
	In these cases, use the following differences to determine the version of the
	post office.
	
	- A Windows 95 or Windows for Workgroups post office has 32 files in the GLB
	  folder. A retail Microsoft Mail post office has at least 72 files.
	
	- If the GLB folder contains files with .mdm or .scr extensions, it is a retail
	  Microsoft Mail post office. These files are modem script files for use with
	  the administrator tools included with retail Microsoft Mail.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          : win95 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
