---
layout: page
title: "Q255801: How to Determine if HTTP Compression Is in Use"
permalink: /kb/255/Q255801/
---

## Q255801: How to Determine if HTTP Compression Is in Use

{% raw %}

	Article: Q255801
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
	
	In order for a file to be transmitted using HTTP compression, the following two
	conditions must be true:
	
	- The client must support a compression scheme used by IIS.
	- IIS must have already compressed the file, which will be stored in a
	  temporary folder.
	
	MORE INFORMATION
	================
	
	How to Determine if the Client Supports Compression:
	
	View the client's HTTP GET Request to see if it specifies a compression value in
	the Accept-Encoding header that IIS supports. For example, Internet Explorer 5.0
	sends the following header:
	
	  Accept-Encoding: gzip, deflate
	
	Note: Both the Gzip and Deflate compression schemes are supported by IIS.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q252876 How to View HTTP Data Frames Using Network Monitor
	
	How to Determine if the File Is Compressed:
	
	Open the temporary folder that stores the compressed version of files
	(C:\WINNT\IIS Temporary Compressed Files by default). In order to avoid
	duplicate file names, each file that is compressed, is renamed by appending
	characters to the beginning of the file name.
	
	If a compressed, renamed version of the file in question exists, then it is sent
	to clients that support the compression scheme.
	
	Note: The temporary folder is specified on the Service tab in the "WWW Service
	Master Properties for <ComputerName>" dialog box in the IIS snap-in.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 method temporary directory algorithm akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
