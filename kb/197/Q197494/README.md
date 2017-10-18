---
layout: page
title: "Q197494: XADM: Outlook Client May Error When Updating Free and Busy"
permalink: kb/197/Q197494/
---

## Q197494: XADM: Outlook Client May Error When Updating Free and Busy

	Article: Q197494
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Outlook client may fail to update its Free and Busy information and a pop-up
	error message displays the following:
	
	  Unable to update public free/busy data
	
	Also, users may not be able to view other users' Free and Busy times when
	planning meetings and inviting others.
	
	CAUSE
	=====
	
	There can be a variety of reasons for this error. Most typically, network
	problems are preventing the client's connection to the Site-Folder-Server. This
	article documents the specifics of a rare case.
	
	The Exchange Server information store is comparing the local site name passed in
	by the client with the list of Site-Folders within the organization. The local
	site name is determined to be lacking from among those in the list, even though
	the System Folders hierarchy in the Exchange Server Administrator program
	displays a Free and Busy folder for the site. For details, see the MORE
	INFORMATION section below.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2509.0
	  Mdbmsg.dll   5.5.2509.0
	  Store.exe    5.5.2509.0
	
	If you are applying the post-SP2 hotfix, please apply both the information store
	and directory hotfix.
	
	This FTP site contains both the information store and directory hotfix build
	5.5.2600 and later:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/STR-fix/Psp2stri.exe
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	MORE INFORMATION
	================
	
	An incorrect assumption was being made regarding the sort order of the list that
	the passed in site name would be checked against.
	
	This problem could only occur with similarly named site names if:
	
	- A differing "symbol" character exists in the same position of the names.
	
	- The passed in value's symbol character had an ASCII value less than some
	  element location in the list that precedes the passed in site name's element
	  position.
	
	For example:
	
	If the following site name:
	
	  EXCH-0B
	
	was compared against a list sorted in the following order:
	
	  EXCH_0A
	  EXCH-0B
	  EXCH-0C
	  EXCH-0D
	
	The string, EXCH-0B, is compared character by character with each entry in the
	list beginning with the first entry, EXCH_0A. The ASCII hex value for a dash is
	2D, and for an underscore it is 5F. Because 2D is less than 5F, and the
	assumption was made that the list is sorted in ASCII sort order (including
	symbol characters), it can be concluded that EXCH-0B is not in the list.
	
	The fix was to anticipate the proper sort order when passing in the site name for
	comparison.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
