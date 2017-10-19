---
layout: page
title: "Q240910: XFOR: Err Msg: Error {Invalid syntax} with Notes Connector"
permalink: /kb/240/Q240910/
---

## Q240910: XFOR: Err Msg: Error {Invalid syntax} with Notes Connector

	Article: Q240910
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An administrator may customize the Amap.tbl file located in either the Dxamex or
	Dxanotes folder. After running a directory synchronization (dirsync), the
	following error messages may be logged in the Microsoft Exchange Connectivity
	Administrator:
	
	  LME-NOTES-DXANOTES(021d) 1 60375:Error {Invalid syntax} loading mapping
	  rules
	  LME-NOTES-DXANOTES(021d) 1 60345:Error {Invalid syntax}: Failed to read next
	  partition
	  LME-NOTES-DXANOTES(021d) 1 64047:Error {Invalid syntax}: Unable to read next
	  Mif partition
	
	CAUSE
	=====
	
	The connector requires that the variable or "tag" in the left column of the
	Amap.tbl file be 10 characters or less.
	
	RESOLUTION
	==========
	
	Limit the corresponding variable or "tag" entry in the Amap.tbl file to 10
	characters or less and modify the Mapmex.tbl file or Mapnotes.tbl file to match.
	For more information on customizing the mapping rules, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q180517 Customizing Dirsync Between Exchange and Notes
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server 5.5 Service Pack 2 now logs the following error
	message informing the administrator of the 10-character limitation:
	
	  LME-NOTES-DXA(00ca) 1 67197:Field name in AMAP table can be no longer than 10
	  characters: [Variable or "tag"]
	
	Additional query words: amap
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
