---
layout: page
title: "Q173966: How to Filter Certain Folders from Query Results"
permalink: /kb/173/Q173966/
---

## Q173966: How to Filter Certain Folders from Query Results

{% raw %}

	Article: Q173966
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Queries issued against Index Server may return pointers to information that you
	do not wish users to see, such as scripts or cgi-bin folders.
	
	MORE INFORMATION
	================
	
	To keep Index Server from returning queries to documents in certain folder, you
	can do one of the following:
	
	- If the folder is a virtual root you can tell Index Server not to index it. To
	  do this, go the Index Server administration page, and select the View/Update
	  Indexing of Virtual Roots button. Then clear the virtual root you do not wish
	  to index.
	
	- If the folder is not a virtual root, you must add an entry to the
	  CiRestriction in the .idq file. If you know the path to the folder you want
	  to exclude from the result set, add the following CiRestriction to the .idq
	  file:
	
	     cirestriction=(%cirestriction%) and not #vpath
	     \virtualroot\foldername.
	
	  This will pass the cirestriction from the query form; however, it will not
	  return any documents in the /virtualroot/subfolder directory.
	
	  If copies of the folder exist in multiple locations, you can modify the query
	  to the following:
	
	     cirestriction=(%cirestriction%) and not #vpath *\foldername
	
	  The leading * tells Index Server to look for this folder through out the web,
	  not just in a specific location.
	
	NOTE: On Windows 2000 NTFS volumes, the attribute
	FILE_ATTRIBUTE_NOT_CONTENT_INDEXED can be set for directories and files, so that
	the direcotries and files are not indexed by the Windows 2000 Indexing Service.
	
	Additional query words: uncheck FPIIS _vti restrict exclude Results
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINNT: 1.1
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
