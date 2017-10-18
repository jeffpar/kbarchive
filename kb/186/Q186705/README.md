---
layout: page
title: "Q186705: XCLN: Explore Web Page Fails Opening FTP Address"
permalink: kb/186/Q186705/
---

## Q186705: XCLN: Explore Web Page Fails Opening FTP Address

	Article: Q186705
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In Microsoft Outlook, you can open a contact's Web page by clicking Explore Web
	Page from the Actions menu, or by clicking on the address in the Web Page
	Address box.
	
	However, if you try to do the same thing in Outlook Web Access and the specified
	address begins with "ftp," Outlook Web Access attempts to open the address with
	"http://" instead. This may cause the operation to either attempt to open a
	different Web address than the one specified, or fail if that address does not
	exist.
	
	CAUSE
	=====
	
	If Outlook Web Access does not see a protocol specifier (a colon) on the Uniform
	Resource Locator (URL) listed in the Web Page Address box, it defaults to use
	"http://".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Outlook Web Access
	version 5.5 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
