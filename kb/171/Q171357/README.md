---
layout: page
title: "Q171357: HOWTO: Get FoxISAPI Running Without Logging on to Server"
permalink: /kb/171/Q171357/
---

## Q171357: HOWTO: Get FoxISAPI Running Without Logging on to Server

	Article: Q171357
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbole kbvfp500 kbvfp600 kbInetDev
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to keep a FoxISAPI application available over your intranet or the
	Internet when no one is logged on to the NT server, you must make a change to
	the DCOMCNFG utility for the registered application.
	
	MORE INFORMATION
	================
	
	If clients can access your FoxISAPI Web pages only when someone is logged into
	the NT server, you need to make the following change to the DCOMCNFG utility:
	
	1. Run the DCOMCNFG utility by clicking Run on the Start menu.
	
	2. Highlight your FoxISAPI object in the list of registered objects.
	
	3. Click Properties.
	
	4. Click the Identity tab.
	
	5. Click "The launching user."
	
	6. Click OK on the Properties sheet.
	
	7. Click OK on the DCOMCNFG dialog box.
	
	You should now be able to logoff of Windows NT and the clients should be able to
	access the FoxISAPI page.
	
	NOTE: An alternative to using "The launching user" is to specify a specific user
	in the "This user:" area of the Identity tab.
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by David Botzenhart, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro 5.0 Online Documentation: Samples and Utilities, Sample
	Applications Overview, OLE Server Samples, FoxISAPI OLE Server Sample.
	
	Additional query words: FoxISAPI DCOMCNFG OLE ISAPI
	
	======================================================================
	Keywords          : kbnetwork kbole kbvfp500 kbvfp600 kbInetDev 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
