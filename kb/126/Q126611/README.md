---
layout: page
title: "Q126611: PC Adm: PROFS Templates Lost Using IMPORT -T"
permalink: kb/126/Q126611/
---

## Q126611: PC Adm: PROFS Templates Lost Using IMPORT -T

	Article: Q126611
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you import the PROFS templates to a Mail for PC Networks postoffice, and
	you include the T option within the import file (a text file containing user
	updates A=Add, M=Modify, D=Delete, or R=Replace), this will create a new
	template and remove all old template information. As a result, the template
	information for existing users will be lost. This is okay if the intent is to
	put in new template information for all users.
	
	If the intent is to add or modify a few individual users, use the A or M
	transaction followed by the template data for the user. Do not include the T
	transaction that indicates creation of a new template.
	
	MORE INFORMATION
	================
	
	A T record in the text file means Create the Following Template file when import
	is executed. For example:
	
	  T PROFS:VMGate/Node
	
	  Location:~20~20~A~~ Department:~20~20~A~~ System Name:~20~20~A~~
	
	An update import file generally will contain A, M, D, or R type of records for
	external postoffices and gateways. A T record is used if a full-refresh (delete
	existing information and re-add) is needed on an existing node or when
	introducing new node(s).
	
	For PROFS users, the user and template information is stored at the node level.
	For each node, information exists in three files:
	
	1. <hexid>.usr (for users)
	
	2. <hexid>.inf (for template information)
	
	3. <hexid>.tpl (for the template)
	
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
