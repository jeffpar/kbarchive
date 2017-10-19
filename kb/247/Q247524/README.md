---
layout: page
title: "Q247524: XFOR: Determining Which Files to Modify for Dirsync with Notes"
permalink: /kb/247/Q247524/
---

## Q247524: XFOR: Determining Which Files to Modify for Dirsync with Notes

	Article: Q247524
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you modify directory synchronization (dirsync) between Microsoft Exchange
	Server and Lotus Notes to add mapping rules or filter rules, it may be difficult
	to determine which files need to be modified. This article provides a guideline
	for the files that are generally modified when you configure dirsync to add
	mapping rules or filter rules. It is not intended to explain how to modify
	attributes in the mapping rules or filter rules.
	
	MORE INFORMATION
	================
	
	The following table lists files associated with mapping rules.
	
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Mapping Rules                                 |                                                                                       | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          |                                               |                                                                                       | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Dirsync Direction        | Files to Modify                               | What to Do                                                                            | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Exchange Server to Notes | Exchsrvr\Connect\Exchconn\Dxanotes\Mapmex.tbl | Add mapping rule                                                                      | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxanotes\Amap.tbl   | Add Notes attributes referenced in the mapping rule, if not already present           | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxamex\Amap.tbl     | Add Exchange Server attributes referenced in the mapping rule, if not already present | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Notes to Exchange Server | Exchsrvr\Connect\Exchconn\Dxamex\Mapnotes.tbl | Add mapping rule                                                                      | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxanotes\Amap.tbl   | Add Notes attributes referenced in the mapping rule, if not already present           | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxamex\Amap.tbl     | Add Exchange Server attributes referenced in the mapping rule, if not already present | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	The following table lists files associated with filter rules.
	
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Filter Rules                                |                                                                                      | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Dirsync Direction        | Files Modified                              | What to Do                                                                           | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Exchange Server to Notes | Exchsrvr\Connect\Exchconn\Exchconn.ini      | Add filter rule to LME-NOTES-DXAMEX section                                          | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxanotes\Amap.tbl | Add Notes attributes referenced in the filter rule, if not already present           | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxamex\Amap.tbl   | Add Exchange Server attributes referenced in the filter rule, if not already present | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Notes to Exchange Server | Exchsrvr\Connect\Exchconn\Exchconn.ini      | Add filter rule to LME-NOTES-DXANOTES section                                        | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxanotes\Amap.tbl | Add Notes attributes referenced in the filter rule, if not already present           | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	|                          | Exchsrvr\Connect\Exchconn\Dxamex\Amap.tbl   | Add Exchange Server attributes referenced in the filter rule, if not already present | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	For additional information about how to create mapping rules or filter rules,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q180517 XFOR: Customizing Directory Synchronization Between Exchange and
	  Notes
	
	  Q245223 XFOR: Filter Rules for Notes and Exchange Directory
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
