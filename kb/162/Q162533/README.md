---
layout: page
title: "Q162533: FIX: &quot;File or Project Not Found&quot; Errors Between Mac &amp; PC Clients"
permalink: /kb/162/Q162533/
---

## Q162533: FIX: &quot;File or Project Not Found&quot; Errors Between Mac &amp; PC Clients

	Article: Q162533
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Macintosh, version 4.0a 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use both the Windows version and the Macintosh version of Visual
	SourceSafe to aid in cross-platform development, "File or Project Not Found"
	errors might occur if you use operations on specific files that are added from
	the other platform.
	
	For example, you may get a "File or project not found" error when you try to
	check out a Test1.cpp file on the Macintosh when the file was originally added
	from the Windows version of Visual SourceSafe and vice versa.
	
	CAUSE
	=====
	
	Non-alphanumeric file names are sorted incorrectly in the project file when they
	are added from the Macintosh. You only see this problem if there are 2 files in
	the project that have the same character sequence before a non- alphanumeric
	character in one of the filenames. For example, given Filename.cpp and
	File_name.cpp, the error usually occurs when you perform an operation on the
	Filename.cpp file. However, wildcard operations are successful.
	
	RESOLUTION
	==========
	
	Customers experiencing this problem should contact Metrowerks, Inc. for the
	latest version 1.0.8 of Code Manager. After installing the new Code Manager
	version use the command "mwcm_admin resequence" from Macintosh Programmer's
	Workbench (MPW) to resequence the database. Depending on the size of the
	database and the connection speed of the Macintosh to the Visual SourceSafe
	database location, this could take some time. After you run the resequence, run
	the analyze program from the Windows platform with the -f option. It may be
	necessary to do this twice. The above information comes from the Upgrade FAQ
	included in the Metrowerks 1.0.8 package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. Metrowerks corrected the sort method used in its
	version 1.0.8 of Code Manager (Macintosh Visual SourceSafe equivalent).
	Microsoft does not provide Visual SourceSafe client software for the Macintosh
	at this time. Customers using the 4.0 build 1322 Macintosh client provided by
	Microsoft should contact Metrowerks for pricing and upgrade information.
	
	Additional query words: Macintosh mac
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
