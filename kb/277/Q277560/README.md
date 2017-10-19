---
layout: page
title: "Q277560: Queries on the Contents Property Do Not return Hits for MSG File"
permalink: /kb/277/Q277560/
---

## Q277560: Queries on the Contents Property Do Not return Hits for MSG File

	Article: Q277560
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Indexing Service 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you index .msg files by using Indexing Service and query the files by using
	the contents property, you may not receive any hits in the result.
	
	CAUSE
	=====
	
	MSG files are binary files, which are associated with the binary Null IFilter in
	Indexing Service. The Null IFilter is not able to extract the textual
	information out of the .msg file. As a result, you do not get any results if you
	query the contents property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Windows NT Server 4.0, .msg files are processed by default with the Default
	IFilter if the Filter Files with unknown extensions option is configured in
	Index Server 2.0.
	
	The Default IFilter extracts textual contents out of the .msg files. In this
	case, you get .msg files in your query results.
	
	For Indexing Service, Microsoft recommends that you write a custom IFilter for
	.msg files. To do this, refer to the following section in the MSDN Library:
	
	  Platform SDK\Base Services\Indexing Service\Using Custom Filters with
	  Indexing Service
	
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbiisSearch kbIdxServSearch kbAudDeveloper kbiis500 kbIdxServ100
	Version           : :2000,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
