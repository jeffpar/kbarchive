---
layout: page
title: "Q234497: HOW TO: Specify Additional Document Types for HTTP Compression"
permalink: kb/234/Q234497/
---

## Q234497: HOW TO: Specify Additional Document Types for HTTP Compression

	Article: Q234497
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Add New Document Types
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) version 5.0 now supports HTTP
	compression as defined in the HTTP specification. By default, HTTP compression
	only compresses files with a file name extension of "htm," "html," and "txt."
	This article explains how to specify additional document types for compression.
	
	Add New Document Types
	----------------------
	
	To add the document types for Microsoft Word, Microsoft PowerPoint, and Microsoft
	Excel to the default list of documents and restart the IIS services, follow
	these steps:
	
	NOTE: The commands in step 3 replace the previously defined file extensions. It
	does not append them to the existing file extensions.
	
	1. Open a command prompt session. To do this, click Start, click Run, type "CMD"
	  (without the quotation marks), and the click OK.
	
	2. Change the directory to your \InetPub\AdminScripts folder. To do this, type
	  "CD \Inetpub\AdminScripts" (without the quotation marks), and then press
	  ENTER.
	
	3. Type the following commands:
	
	  CSCRIPT.EXE ADSUTIL.VBS SET W3Svc/Filters/Compression/GZIP/HcFileExtensions "htm" "html" "txt" "doc" "ppt" "xls"
	
	  CSCRIPT.EXE ADSUTIL.VBS SET W3Svc/Filters/Compression/DEFLATE/HcFileExtensions "htm" "html" "txt" "doc" "ppt" "xls"
	
	  IISRESET.EXE  (this will reset Web services)
	
	4. Close the command prompt session.
	
	REFERENCES
	==========
	
	For more information about compression formats, visit the following Web sites:
	
	  RFC 1945 (Hypertext Transfer Protocol -- HTTP/1.0)
	  ftp://ftp.isi.edu/in-notes/rfc1945.txt
	
	  RFC 1951 (DEFLATE Compressed Data Format Specification version 1.3)
	  ftp://ftp.isi.edu/in-notes/rfc1951.txt
	
	  RFC 1952 (GZIP file format specification version 4.3)
	  ftp://ftp.isi.edu/in-notes/rfc1952.txt
	
	  RFC 2068 (Hypertext Transfer Protocol -- HTTP/1.1)
	  ftp://ftp.isi.edu/in-notes/rfc2068.txt
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
