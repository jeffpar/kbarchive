---
layout: page
title: "Q125920: PROFS: Template Information Lost Using IMPORT -T"
permalink: /kb/125/Q125920/
---

## Q125920: PROFS: Template Information Lost Using IMPORT -T

{% raw %}

	Article: Q125920
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When importing PROFS gateway templates in to a Mail for PC Networks postoffice,
	if you include the T option within the import file (a text file containing user
	updates A=Add, M=Modify, D=Delete, or R=Replace), this will create a new
	template and remove all old template information.
	
	As a result, the template information for existing users will be lost. If the
	intent is to put in new template information for all users, this method is good
	to use.
	
	However, if the intent is to add or modify a few individual users, use the A or M
	transaction followed by the template data for the user. Do not include the
	entire T transaction that indicates creation of a new template.
	
	MORE INFORMATION
	================
	
	A T record in the text file means Create the Following Template file when import
	is executed. For example:
	
	  T PROFS:VMGate/Node
	
	  Location:~20~20~A~~ Department:~20~20~A~~ System Name:~20~20~A~~
	
	An update import file generally will contain A, M, D, or R types of records for
	external postoffices and gateways. A T record is used if a full-refresh (delete
	existing information and re-add) is needed to an existing node or when
	introducing new nodes.
	
	For PROFS users, user and template information is stored at the Node level. For
	each node, information exists in three files:
	
	1. <hexid>.usr (for users)
	
	2. <hexid>.inf (for template information)
	
	3. <hexid>.tpl (for the template)
	
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
