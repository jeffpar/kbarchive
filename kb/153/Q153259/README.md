---
layout: page
title: "Q153259: International Client Displays English Error Messages"
permalink: kb/153/Q153259/
---

## Q153259: International Client Displays English Error Messages

	Article: Q153259
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The help text for "SETLSxx /?" and some error messages appears in English rather
	than in the client's native language.
	
	CAUSE
	=====
	
	The file Nlsres.ini only contains entries for German, French and English.
	Entries for other languages are missing (that is, Spanish, Italian, Dutch,
	Swedish, Norwegian, Finnish, Danish and Portuguese).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
