---
layout: page
title: "Q184289: XCLN: Error Message when Opening PF Without Proper Permissions"
permalink: /kb/184/Q184289/
---

## Q184289: XCLN: Error Message when Opening PF Without Proper Permissions

	Article: Q184289
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing a Public Folder in Outlook Web Access you receive the following
	error message:
	
	  You don't have the necessary permissions to view this folder.
	
	This may be followed by a Java Script error referring to "line X." The client
	allows you to proceed and see the directory structure.
	
	CAUSE
	=====
	
	No public folder postings are available, or no public folders are set with
	permissions other than Folder Visible properties.
	
	WORKAROUND
	==========
	
	To ensure that public folders are not visible to users without permissions, use
	the Exchange Administrator program to clear the Folder Visible property from
	each folder for which this is wanted. You can also remove this attribute from
	the public folder if you have permission to modify the properties from a client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the above listed versions.
	
	Additional query words: Public, Folders, PF, OWA, ASC, Active Server Components, Java Script Error
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
