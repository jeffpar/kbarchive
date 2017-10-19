---
layout: page
title: "Q176001: XFOR: Accessing the Contents Table of Non-Replicated PF Fails"
permalink: /kb/176/Q176001/
---

## Q176001: XFOR: Accessing the Contents Table of Non-Replicated PF Fails

	Article: Q176001
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Any attempt, by an application, to access the contents table of a non-
	replicated Public Folder (PF) will fail and return an error code 80004005 when
	using the Microsoft Exchange Software Development Kit (SDK) sample gateway code
	(and perhaps other components as well).
	
	An example of the call might be:
	
	     MAPICALL(lpFBSiteFolder)->GetContentsTAble(lpFBSiteFolder, 
	                                                MAPI_DEFERRED_ERROR, 
	                                                &lpTableCont);
	
	CAUSE
	=====
	
	Enumerating the local folder hierarchy table will result in success because of
	the public folder heirarchy replication, however, when the application makes the
	call to lpfolder->GetcontentsTable() to retrieve a table containing the
	messages in the folder, the Microsoft Exchange Server will return a failure
	meaning that the content hasn't been replicated. In some cases, where public
	folder affinity is enabled, the local Server will attempt to return the content
	from another Server. If the account that the application (or connector) is using
	does not have permissions to access the folder, this call will fail as well.
	This is the case with the GWSample code that creates an account that will not be
	able to access the resource.
	
	The actual return code from this function in case of failure should be
	MAPI_E_NO_SUPPORT, indicating that the contents table cannot be returned.
	However, this is not seen from the GWSample code because it throws away the
	return code in the cleanup section and uses ERROR_INTERNAL_ERROR.
	
	RESOLUTION
	==========
	
	The problem can be resolved by replicating the folder on the local store. If you
	need to access a PF on a remote Server, the problem can also be resolved by
	writing a MAPI application that uses a normal user's profile and perform these
	functions as a Windows NT service.
	
	If you are not using the GWSample code and are experiencing this problem, verify
	that you are using the correct account permissions with public folder affinity.
	The mysterious error condition can also be improved by writing a MAPI
	application that uses the return value of the GetContentsTable() call to
	accurately explain the condition in the event logs so that the problem may be
	fixed.
	
	
	Additional query words: replica PF
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
