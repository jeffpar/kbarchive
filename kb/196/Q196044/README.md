---
layout: page
title: "Q196044: WD97: Cannot Insert Address Book After Installing SR-2"
permalink: /kb/196/Q196044/
---

## Q196044: WD97: Cannot Insert Address Book After Installing SR-2

{% raw %}

	Article: Q196044
	Product(s): Word 97 for Windows
	Version(s): Service Release 2
	Operating System(s): 
	Keyword(s): kbdta kbemail word97
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 2 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	After installing Microsoft Word 97 Service Release 2 (SR-2), you may receive the
	following error message when you click the Insert Address icon in Word:
	
	  Logon failed. You must log on to Microsoft Exchange to access your address
	  book. Error code: "Unspecified error".
	
	
	RESOLUTION
	==========
	
	Reinstall Microsoft Outlook 98 and install Corporate or Workgroup mode.
	
	MORE INFORMATION
	================
	
	On computer systems with Netscape Communicator, Outlook 98 Internet Mail Only
	mode, Word 97, and Office 97 Service Release 2 (SR-2) installed, when you
	attempt to insert an address in either the Envelope Wizard or Letter Wizard, an
	error message appears, indicating that you must log on to Microsoft Exchange to
	access your address book, and your address book is not opened.
	
	This problem supposedly did not occur in Word with SR-1 installed and only
	started occurring after the installation of SR-2. Re-installing Microsoft
	Outlook 98 has resolved the problem.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q196042 WD97: Can't Insert Address With Netscape Communicator Installed
	
	  Q178481 WD97: Errors Accessing the Address Book Icon
	
	Additional query words: nav navigator
	
	======================================================================
	Keywords          : kbdta kbemail word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR2
	Version           : :Service Release 2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
