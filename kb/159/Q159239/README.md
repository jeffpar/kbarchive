---
layout: page
title: "Q159239: FP: How to Remove a Web from the List of Webs"
permalink: kb/159/Q159239/
---

## Q159239: FP: How to Remove a Web from the List of Webs

	Article: Q159239
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194090.
	
	SYMPTOMS
	========
	
	If you delete a FrontPage versions 1.x Web using a file manager other than
	FrontPage (such as Windows Explorer or File Manager), the Web name will remain
	in the list of Webs created by FrontPage Explorer.
	
	In all versions of FrontPage, if you delete a FrontPage Web using a file manager
	other than FrontPage, the Web server configuration files retain mapping
	information to any _vti* directories that were part of the deleted FrontPage
	Web.
	
	CAUSE
	=====
	
	Using a file management program other than FrontPage is not recommended on
	FrontPage Webs. FrontPage Explorer is the only recommended file management tool
	for a FrontPage Web.
	
	WORKAROUND
	==========
	
	To delete a Web in FrontPage, open the Web site using FrontPage Explorer and
	click Delete FrontPage Web on the File menu.
	
	If you used a file manager other than FrontPage to delete the web, use the
	following steps to manually remove the Web name from the list of Webs:
	
	1. In a text editor, such as Notepad, open the Services.cnf file.
	
	  The Services.cnf file is located in the _vti_pvt directory of the server's
	  root Web. Note that this file is different from the Service.cnf file (no "s")
	  which occurs in every FrontPage Web.
	
	2. Find the name of the Web that you want to delete from the list, and delete
	  it.
	
	3. If the web whose name you deleted was in the middle of the list, remove the
	  blank line.
	
	4. Save and close the file.
	
	To completely remove the FrontPage Web, you must edit the Web server
	configuration files to remove the maps to _vti* directories that were part of
	the deleted FrontPage Web. For information about removing maps to _vti*
	directories, consult your Web server documentation.
	
	MORE INFORMATION
	================
	
	FrontPage Explorer is the best file management tool for a FrontPage Web. Do not
	use a different file manager (such as Windows Explorer) to modify or delete a
	FrontPage Web.
	
	FrontPage 97 detects if a Web directory has been deleted with a file management
	tool other than FrontPage and it won't display the Web in the list of Webs.
	However, FrontPage does not delete the entry in the Services.cnf file and the
	directory maps on the Web server. For optimum performance, you should delete the
	Web using the steps in the "Workaround" section of this article.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :; WINDOWS:1.0,1.1
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
