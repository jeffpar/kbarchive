---
layout: page
title: "Q273497: Designing Secure Web-Based Applications for Windows 2000 Comment"
permalink: /kb/273/Q273497/
---

## Q273497: Designing Secure Web-Based Applications for Windows 2000 Comment

{% raw %}

	Article: Q273497
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Designing Secure Web-Based Applications for Microsoft Windows 2000 ISBN 0-7356-0995-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Designing Secure Web-Based Applications for
	Microsoft Windows 2000, ISBN 0-7356-0995-0.
	
	The following topics are covered:
	
	- Page 69: Error In Figure 3-11
	
	- Page 122: Error In Code Sample
	
	- Page 219: Diagram Correction For Figure 8-2
	
	- Page 245: Code Sample Correction
	
	- Page 302: Incorrect Figure Reference
	
	- Page 395: Error In Sample Code
	
	- Page 397: Error In Sample Code
	
	- Page 411: Typo In The Caption Of Figure 14-2
	
	MORE INFORMATION
	================
	
	Page 69: Error In Figure 3-11
	-----------------------------
	
	Figure 3-11 on page 69 contains an error. The arrow pointing downward to the
	token is labeled "Primary token". This arrow should be labeled "Impersonation
	token"
	
	
	Page 122: Error In Code Sample
	------------------------------
	
	In the code sample on page 122, the fourth line of code contains an error.
	
	Change:
	
	  strEmail = Request.ClientCertificate("SubjectE")
	
	To:
	
	  strEmail = Request.ClientCertificate("SubjectEmail")
	
	
	Page 219: Diagram Correction For Figure 8-2
	-------------------------------------------
	
	On page 219, in Figure 8-2, the diagram is incorrect. The 'deny/stop' symbol on
	the attacker -> database server connection should be removed.
	
	
	Page 245: Code Sample Correction
	--------------------------------
	
	On page 245, the code sample uses an incorrect variable name.
	
	Change the sixth line of code from:
	if strHash == strSaltedPassword then
	
	To:
	if SaltedPassword == strSaltedPassword then
	
	
	Page 302: Incorrect Figure Reference
	------------------------------------
	
	On page 302, in the third sentence of the last paragraph, you should be directed
	to Figure 10-3 (on page 289).
	
	Change:
	"If all goes well, you should see something like what's shown in Figure 10-5 (on
	page 290)."
	
	To:
	"If all goes well, you should see something like what's shown in Figure 10-3 (on
	page 289)."
	
	
	Page 395: Error In Sample Code
	------------------------------
	
	On page 395 there is an error in the Querying the Windows 2000 Security Event Log
	sample code.
	
	Change:
	
	  Set oLog = & _
	
	To:
	
	  Set oLog = _
	
	
	Page 397: Error In Sample Code
	------------------------------
	
	On page 397, there is an error in Setting a logon type for Basic authentication
	users sample code.
	
	Change:
	
	  Const LOGON_LOCAL = 0x0 
	   Const LOGON_BATCH = 0x1 
	   Const LOGON_NETWORK = 0x2 
	   Const LOGON_NETWORK_CLEARTEXT = 0x3
	
	To:
	
	  Const LOGON_LOCAL = 0 
	   Const LOGON_BATCH = 1 
	   Const LOGON_NETWORK = 2
	   Const LOGON_NETWORK_CLEARTEXT = 3
	
	
	Page 411: Typo In The Caption Of Figure 14-2
	--------------------------------------------
	
	On page 411, in the caption for Figure 14-2, "TGD" should be "TGS".
	
	Change:
	"The architecture of the KDC, and the flow of data in and out of the AS and TGD
	in Windows 2000."
	
	To:
	"The architecture of the KDC, and the flow of data in and out of the AS and TGS
	in Windows 2000."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DevBook Win2000 0-7356-0995-0
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
