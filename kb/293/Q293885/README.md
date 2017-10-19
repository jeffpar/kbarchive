---
layout: page
title: "Q293885: How to Search a WebDAV Directory with XML"
permalink: /kb/293/Q293885/
---

## Q293885: How to Search a WebDAV Directory with XML

	Article: Q293885
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Searching a Web Distributed Authoring and Versioning (WebDAV) directory with XML
	requires the following:
	
	- The directory in which the content is located must be on a drive formatted
	  for NTFS. If you put the directory on a drive formatted for the file
	  allocation table (FAT) file system, clients can search for resource content,
	  but they cannot search for resource properties.
	
	- Indexing Service must be running.
	
	- In the Internet Information Services (IIS) snap-in, the Virtual Directory
	  properties for your WebDAV directory must have the Index this resource and
	  Read access options selected.
	
	By using the Microsoft implementation of WebDAV, you can create a tool for
	clients to search a directory for content, properties, or both. The following
	example (of a raw request) demonstrates a basic search command from which you
	can create a tool:
	
	  SEARCH / HTTP/1.1
	  Host: iis
	  Content-Type: text/xml
	  Content-Length: 157
	
	  <?xml version="1.0"?>
	  <g:searchrequest xmlns:g="DAV:">
	  <g:sql>
	  Select "DAV:displayname" FROM SCOPE()
	  </g:sql>
	  </g:searchrequest>
	
	For details on how to create a search tool, see the Microsoft Platform SDK.
	
	MORE INFORMATION
	================
	
	The example in this article is a very basic sample. Using the WebDAV search verb
	in conjunction with Indexing Service is unsupported and may return unexpected
	results.
	
	If you want to take advantage of all of the indexing and searching capabilities
	of the Windows 2000 Indexing Service, Microsoft recommends that you access the
	Indexing Service and its APIs with Microsoft Active Server Pages (ASP).
	
	If you have questions about how to search Exchange DAV folders with XML, contact
	Microsoft Exchange Server Support.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	Solution Type     : kbpending
	
	=============================================================================
	
