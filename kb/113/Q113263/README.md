---
layout: page
title: "Q113263: Printing Multiple Topics from Viewer"
permalink: kb/113/Q113263/
---

## Q113263: Printing Multiple Topics from Viewer

	Article: Q113263
	Product(s): Miscellaneous Software Development Kits
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PRMANY sample contains code for a dynamic-link library (DLL) that can be
	used to print multiple topics from a Viewer title. The sample uses the
	TopicListLoad() API (application programming interface) from Viewer to load the
	topic list for a group and then prints all the topics in that group. The code
	could easily be modified to print any topic list--for example, it could print
	the matches from a search query submitted with the TopicListFromQuery() API.
	
	The sample also includes an .MVP file that registers the PrintGroups() function
	from the DLL and creates a menu item to call it. A sample .RTF file is also
	included.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Prmany.exe
	  (http://download.microsoft.com/download/platformsdk/viewer/1/WIN98/EN-US/prmany.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 2.00 2.00a softlib PRMANY.EXE
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbHomeProdSearch kbHomeMMsearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
