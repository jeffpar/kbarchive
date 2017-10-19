---
layout: page
title: "Q249308: Inside ATL Comments and Corrections"
permalink: /kb/249/Q249308/
---

## Q249308: Inside ATL Comments and Corrections

	Article: Q249308
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 30-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside ATL ISBN 1-57231-858-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside ATL, ISBN 1-57231-858-9.
	
	The following topics are covered:
	
	- Page 42: Error In Code Sample
	
	MORE INFORMATION
	================
	
	Page 42: Error In Code Sample
	-----------------------------
	
	On page 42, CSpellCheckerClassObject's QueryInterface incorrectly casts to
	ISpellChecker. It should cast to IClassFactory.
	
	Change:
	
	  } else if (riid == IID_IUnknown) {
	  	*ppv = static_cast<ISpellChecker*>(this);
	  } else {
	
	To:
	
	  } else if (riid == IID_IUnknown) {
	  	*ppv = static_cast<IClassFactory*>(this);
	  } else {
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DevBook ATL 1-57231-858-9
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Issue type        : kbinfo
	
	=============================================================================
	
