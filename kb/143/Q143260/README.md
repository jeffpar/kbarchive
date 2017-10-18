---
layout: page
title: "Q143260: Default System Security Policy"
permalink: kb/143/Q143260/
---

## Q143260: Default System Security Policy

	Article: Q143260
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When performing Remote Automation, clients send object creation requests to a
	remote server. The remote server's System Security Policy is the main
	determinant as to whether such requests are accepted or denied. The default
	setting is "Allow Remote Creates by Key." Thus, if the OLE server you are trying
	to use has a specific key value in its Registry entry, then the server will be
	started, otherwise you will receive an error message "Permission Denied."
	
	MORE INFORMATION
	================
	
	The Remote Automation Connection Manager, RACMGR32.EXE, is the most convenient
	way to set the System Security Policy on a remote server. When the Security
	Policy is set to the default, "Allow Remote Creates by Key," the Automation
	Manager checks the Registry for a particular sub-key and setting that allows OLE
	clients on other computers to create the object.
	
	The sub-key name is AllowRemoteActivation, and is found in the Windows Registry
	under the CLSID of the OLE server. If the sub-key's value is Y then remote
	creation is allowed, otherwise it is denied.
	
	To create and set this value for your OLE server, run the Remote Automation
	Connection Manager on the server machine and select your server from the
	Connection Manager's OLE Classes list box. Click the Client Access tab and
	select Allow Remote Creates by Key. Now, click the Server Connection tab and
	then click the Apply button to write the information to the registry.
	
	After an OLE server is installed, the necessary classes will appear in the
	Connection Manager's OLE Classes list. For more information on the different
	Security Policy settings, please refer to Chapter 7 "Implementing OLE Servers"
	in the "Building Client/Server Applications" book of the Enterprise
	documentation.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	
	=============================================================================
	
