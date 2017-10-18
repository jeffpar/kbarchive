---
layout: page
title: "Q165462: XCLN: Unable to Access Exchange Forms in the ORG Forms Library"
permalink: kb/165/Q165462/
---

## Q165462: XCLN: Unable to Access Exchange Forms in the ORG Forms Library

	Article: Q165462
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Forms installed in the Organization (ORG) Forms Library are not viewable except
	by the user who created and installed them. The form library is viewable, but
	the forms themselves are not. Forms that have been installed in public folders,
	the personal forms library, or PST files are still available.
	
	CAUSE
	=====
	
	The correct permissions are not set on the ORG Forms Library system folder in
	the Microsoft Exchange organization.
	
	RESOLUTION
	==========
	
	Set the default permissions on the ORG forms library to (at least) reviewer.
	
	1. In the Microsoft Exchange Server Administrator program, open the following
	  system folder:
	
	  Folders/System Folders/EFORMS Registry/Organization forms folder.
	
	2. Press ALT+ENTER to see the properties of that folder.
	
	3. Click the Client Permissions button.
	
	4. In the Permissions dialog box, change the default rights to at least reviewer
	  (which will give users the ability to read items).
	
	5. Click OK and close the ORG Forms Library properties.
	
	6. Quit the Microsoft Exchange Client and restart the client.
	
	The users should now be able to see the forms in the ORG forms library and also
	be able to install and run them.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q146253 XCLN: How to Install a Form Created with EFD
	
	Additional query words: forms compose unavailable
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	
