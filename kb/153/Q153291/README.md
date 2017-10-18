---
layout: page
title: "Q153291: BUG: Wizards Fail on Secure Microsoft Access Database"
permalink: kb/153/Q153291/
---

## Q153291: BUG: Wizards Fail on Secure Microsoft Access Database

	Article: Q153291
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the message "Not a valid password" displayed when AppWizard or
	ClassWizard are used to create a CDaoRecordset-derived class.
	
	CAUSE
	=====
	
	The Microsoft Access database file being used to generate the class is secure
	and AppWizard and ClassWizard fail to prompt for a user name and password before
	trying to open the database.
	
	RESOLUTION
	==========
	
	Relax the security on the database so the Wizards won't fail.
	
	-or-
	
	Create another database that has a duplicate schema to be used for generating
	classes
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbVC400bug kbVC500bug kbVC600bug KbVC410bug kbVC420bug kbmfc kbdao kbdatabase kbwizard
	
	======================================================================
	Keywords          : kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
