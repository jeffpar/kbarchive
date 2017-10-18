---
layout: page
title: "Q161274: HOWTO: Port a Remote OLE Application to DCOM"
permalink: kb/161/Q161274/
---

## Q161274: HOWTO: Port a Remote OLE Application to DCOM

	Article: Q161274
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbDCOM kbRegistry kbGrpDSVB kbVB500
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	WARNING: ANY USE OF THE INFORMATION PROVIDED IN THIS ARTICLE IS AT YOUR
	OWN RISK. Microsoft provides this information "as is" without warranty of
	any kind, either express or implied, including but not limited to the
	implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	IMPORTANT: For more information on DCOM, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q158508 : COM Security Frequently-Asked Questions
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	If you do not have backup copies of the registry files, before you proceed please see the following article in the Microsoft Knowledge Base:
	
	  Q101229 : How To Restore Windows NT Over an Existing Installation
	
	
	SUMMARY
	=======
	
	
	To port a Remote OLE application to DCOM, several modifications to the client
	registry are required. This article describes the necessary changes.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Follow these steps to change the registration of an out-of-process OLE server
	manually from remote automation to DCOM:
	
	1. Remove the LocalServer32 and InprocServer32 subkeys of the component's CLSID
	  key.
	
	2. Change the client registry as follows:
	
	  [HKEY_CLASSES_ROOT\CLSID\{ Put Component CSLID Here }]
	  "AppID"="{ Put Component CSLID Here }"
	
	  [HKEY_CLASSES_ROOT\APPID\{ Put Component CSLID Here }]
	  ="Put Component App Name Here"
	
	  [HKEY_CLASSES_ROOT\APPID\{ Put Component CSLID Here }]
	  "RemoteServerName"="Put Remote Server name Here"
	
	  [HKEY_CLASSES_ROOT\APPID\Put Component File Name Here]
	  "APPID"="{ Put Component CSLID Here }"
	
	3. Use the DCOMCNFG.EXE tool in the server's Windows NT 4.0 or Windows 2000
	  system32 directory to specify access and launch permissions for the server.
	
	NOTE: You won't need to run the Remote Automation Manager with DCOM.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbRegistry kbGrpDSVB kbVB500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
