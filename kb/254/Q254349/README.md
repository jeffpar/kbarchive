---
layout: page
title: "Q254349: XADM: Rehoming Public Folders Adds Number to End of SMTP Address"
permalink: /kb/254/Q254349/
---

## Q254349: XADM: Rehoming Public Folders Adds Number to End of SMTP Address

	Article: Q254349
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you rehome a public folder between two sites that share the same address
	space (for example, microsoft.com), the directory object that represents that
	folder exists in two places for a brief period of time.
	
	When this duplication occurs, the Simple Mail Transfer Protocol (SMTP) address on
	the destination server has a number added to the end of the SMTP address prefix.
	For example, "PublicFolder@microsoft.com" becomes "PublicFolder2@microsoft.com."
	
	MORE INFORMATION
	================
	
	A duplication of the directory object that represents the public folder on the
	source server occurs in the Recipients container (or the default public folder
	container designated on the General tab of the Site Information Store
	Configuration object) of the destination site. The original object and the new
	object coexist in the directory for the period of time that it takes to complete
	replication. The change in the SMTP address of the public folder occurs because
	the design of the Exchange Server directory prevents duplication of addresses
	within an organization.
	
	After you rehome the public folder and inter-site replication removes the
	original SMTP address from the directory of the organization, you must manually
	change the SMTP address of the folder back to the correct address.
	
	For example, if a folder named "faxes" exists in the Dallas site with an SMTP
	address of "faxes@microsoft.com," and you rehome it to the Atlanta site, the
	SMTP address of the folder becomes "faxes2@microsoft.com."
	
	However, if the two sites had SMTP suffixes (which is the Exchange default) such
	as "atlanta.microsoft.com" and "dallas.microsoft.com," this would not be a
	consideration.
	
	For additional information about rehoming public folders, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q185043 XADM: How to Re-home Public Folders Using 5.5 Admin Program
	
	For additional information about duplicate SMTP addresses in an organization,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q168367 XADM: Error Creating New Address
	
	Additional query words: public folder rehoming; smtp address; 2@
	
	======================================================================
	Keywords          : exc55 
	Component         : SMTP
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
