---
layout: page
title: "Q158914: PRB: Web Root Busy Opening Source-Controlled Web"
permalink: /kb/158/Q158914/
---

## Q158914: PRB: Web Root Busy Opening Source-Controlled Web

	Article: Q158914
	Product(s): Microsoft SourceSafe
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a FrontPage web that is under the control of Visual
	SourceSafe, you may receive the following error message:
	
	  Server Error: "Web Root is busy. Please try again."
	
	CAUSE
	=====
	
	The most likely cause of this error message is that you have used SourceSafe
	itself to set up and populate the files in the Web project.
	
	WORKAROUND
	==========
	
	In order to achieve the most thorough integration, use FrontPage to check out,
	check in, and create files for the SourceSafe project.
	
	To do this, use the appropriate method for your situation:
	
	Method 1
	--------
	
	If you have already placed the Web under source control and populated the project
	with files using SourceSafe Explorer, use the following steps:
	
	a. Check out every file in your Web project to a local directory. This provides
	  you with a backup copy.
	
	b. Delete the SourceSafe project.
	
	  NOTE: This does not delete the files in place on the Web server. You also have
	  the checked out local copies as a backup.
	
	c. Recursively remove the read-only bit on all the Web files. To do this, at the
	  MS-DOS command prompt, type "cd" (without the quotation marks) to position
	  the working directory at the Web content area, and the type the following:
	
	  attrib *.* -R /s
	
	d. In FrontPage Explorer, open the Web.
	
	e. On the Tools menu, click Web Settings. In the Source Control Project box,
	  type "$/" (without the quotation marks) and the name of the project you want
	  the files managed under.
	
	  For example, if the project you want to create is named "web," type "$/web"
	  (without the quotation marks) in the Source Control Project box. (It is not
	  necessary for the Source Control Project name to have any relationship to the
	  name of the Web.)
	
	f. In the Web Settings dialog box, click OK or Apply. FrontPage will populate
	  your Web project with the necessary files.
	
	g. Use FrontPage to check out, edit, and check in the files.
	
	Method 2
	--------
	
	If you have not already placed the Web files under source control, use the
	following steps:
	
	a. On the Tools menu, click Web Settings. In the Source Control Project box,
	  type "$/" (without the quotation marks) and the name of the project you want
	  the files managed under.
	
	  For example, if the project you want to create is named "web," type "$/web"
	  (without the quotation marks) in the Source Control Project box. (It is not
	  necessary for the Source Control Project name to have any relationship to the
	  name of the Web.)
	
	b. In the Web Settings dialog box, click OK or Apply.
	
	  FrontPage will populate your Web project with the necessary files.
	
	c. Use FrontPage to check out, edit, and check in the files.
	
	MORE INFORMATION
	================
	
	FrontPage is designed to act as the front-end for your SourceSafe project. Use
	FrontPage itself to place the Web files under source control.
	
	Additional query words: 97 vss
	
	======================================================================
	Keywords          : kbusage 
	Version           : 97
	Issue type        : kbprb
	
	=============================================================================
	
