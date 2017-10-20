---
layout: page
title: "Q255803: Naming Convention of Compressed Files Stored in the Temp Folder"
permalink: /kb/255/Q255803/
---

## Q255803: Naming Convention of Compressed Files Stored in the Temp Folder

{% raw %}

	Article: Q255803
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This "More Information" section of this article explains the naming convention
	used when a compressed copy of a file is placed in the temporary folder (also
	known as the cache directory) of an Internet Information Services computer that
	has HTTP compression enabled.
	
	MORE INFORMATION
	================
	
	Static HTML content is compressed and saved in the temporary directory by using
	the following naming convention in order to avoid duplicate file names:
	
	- The file name begins with the following character string: $^~_
	- The compression algorithm ("gzip" or "deflate") followed by an underscore (_)
	  is added next to the file name.
	- Finally, the absolute file path of the file on the local computer is added
	  using an underscore (_) instead of a backslash (\).
	
	For example, if the GZip compression algorithm is used on the Test.htm file,
	located on the default Web site, the file name of the compressed copy would be
	the following:
	
	  $^~_gzip_c__inetpub_wwwroot_test.htm
	
	General Information about the Temporary Folder and Compressed Files:
	
	When a file has been requested, the compressed copy is stored in a temporary
	folder and the compressed file is sent when further requests are received. Files
	are not compressed prior to receiving a request for them.
	
	Note: By default, the temporary folder is C:\WINNT\IIS Temporary Compressed
	Files. This is specified on the Service tab in the "WWW Service Master
	Properties for <ComputerName>" dialog box in the IIS snap-in.
	
	Additional query words: iis 5 compression scheme method filename akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
