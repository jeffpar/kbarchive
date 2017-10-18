---
layout: page
title: "Q155052: IIS Server Handling of URLs Using &quot;&#92;&quot;, &quot;&lt;&quot;, and &quot;&gt;&quot;"
permalink: kb/155/Q155052/
---

## Q155052: IIS Server Handling of URLs Using &quot;&#92;&quot;, &quot;&lt;&quot;, and &quot;&gt;&quot;

	Article: Q155052
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Web clients that send Universal Resource Locator (URL) map requests using the
	backward slash (\) as a relational specifier can point to any file on the disk.
	Web clients that send Common Gateway Interface (CGI) requests using either of
	the angle brackets (< or >) as a redirection specifier can overwrite a
	file on the disk.
	
	CAUSE
	=====
	
	Internet Information Server 1.0 (IIS) did not handle the backward slash (\) in
	the same way as the forward slash (/); consequently, URL map requests using '\'
	could be used to specify any file in the hierarchical file system structure on
	the server.
	
	IIS CGI processing did not disable the use of either of the angle brackets (<
	or >) as redirection operators; consequently, CGI requests can overwrite
	existing files by redirecting console output to a filename on the server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in IIS version 1.0. This problem
	was corrected in the latest Windows NT 3.51 U.S. Service Pack. For information
	on obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
