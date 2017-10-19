---
layout: page
title: "Q274426: Windows 2000 Security Technical Reference Comments And Correctio"
permalink: /kb/274/Q274426/
---

## Q274426: Windows 2000 Security Technical Reference Comments And Correctio

	Article: Q274426
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Security Technical Reference ISBN 0-7356-0858-x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 Security Technical
	Reference, ISBN 0-7356-0858-x.
	
	The following topics are covered:
	
	- Page 11: SACL Should Be DACL
	
	- Page 21: Incorrect Registry Key
	
	- Page 25: Incorrect Arrow Direction In Figure 2-3
	
	MORE INFORMATION
	================
	
	Page 11: SACL Should Be DACL
	----------------------------
	
	On page 11, the last line should refer to the discretionary access control lists,
	or DACLs, which deal with access permissions, rather than system access control
	lists, or SACLs, which deal with auditing.
	
	Change:
	"This behavior can be modified, however, by the application of filters (system
	access control lists, or SACLs)..."
	
	To:
	"This behavior can be modified, however, by the application of
	filters(discretionary access control lists, or DACLs)..."
	
	
	Page 21: Incorrect Registry Key
	-------------------------------
	
	On page 21, in the "User profile loading" section, the incorrect registry key is
	listed for the user profile.
	
	Change:
	"...Winlogon loads the appropriate user profile into the registry under the
	HKEY_LOCAL_USER key."
	
	To:
	"...Winlogon loads the appropriate user profile into the registry under the
	HKEY_CURRENT_USER key."
	
	
	Page 25: Incorrect Arrow Direction In Figure 2-3
	------------------------------------------------
	
	On page 25, Figure 2-3 shows two parallel sets of arrows going in the same
	direction. From left to right the arrows point to:
	
	"Authentication Package" => "NetLogon Service" => "Netlogon Service" =>
	"Authentication Package" => "Domain Controller".
	
	One set of arrows should be going the opposite direction, from right to left.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ITBOOK WIN2000 0-7356-0858-x
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
