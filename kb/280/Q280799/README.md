---
layout: page
title: "Q280799: Documents Indexed on Remote Shares Are Returned to All Users"
permalink: /kb/280/Q280799/
---

## Q280799: Documents Indexed on Remote Shares Are Returned to All Users

	Article: Q280799
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Indexing Service 
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Indexing Service to index documents that are stored on remote
	shares, the check for the current users' permissions against the Access Control
	Lists (ACLs) on the documents is not enforced when searches are performed.
	Therefore, a search may return documents that the user who performs the search
	does not have read access to.
	
	In addition, a search results page often displays a small section (called an
	"abstract") of the document in the result set. In this case, document
	information is displayed that the user who performs the search does not have
	permission to read.
	
	CAUSE
	=====
	
	When you add a remote path to an Index Server catalog, either by adding a remote
	virtual root to an indexed Web site or by adding a remote path directly to the
	Index Server catalog, you must supply a valid user name and password to map to
	the remote share. The user name and password are used to access the remote
	resource to index the documents that are stored there.
	
	When a search is performed against an Index Server catalog for documents that are
	indexed at a remote location, the context of the account that is used to map to
	the remote location is used to build the results of the search. Therefore, the
	search results for a remote location include all documents that the mapping
	account has access to at that location, regardless of the access permissions of
	the current user who performs the search.
	
	WORKAROUND
	==========
	
	To obtain search results that include only documents that the user who performs
	the search has read access to, perform one of the following workarounds:
	
	- Store all documents on the same computer as the Indexing Service.
	
	- Use the Search service that comes with Microsoft Site Server 3.0. This
	  indexes the ACLs on NTFS files that are stored remotely and locally.
	
	MORE INFORMATION
	================
	
	The current user context is used for security checks against documents that are
	indexed locally. The search result set returns only local documents that the
	user who performs the search has read access to.
	
	Additional query words: UNC security crawl
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
