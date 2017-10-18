---
layout: page
title: "Q143259: INFO: Remote Callback Works Only with 32-Bit Clients"
permalink: kb/143/Q143259/
---

## Q143259: INFO: Remote Callback Works Only with 32-Bit Clients

	Article: Q143259
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote Callback is a Remote Automation process in which a server uses an object
	reference to a client class to asynchronously trigger its methods or change its
	properties. Callback, or Asynchronous Notification, is especially useful for
	monitoring real time data. For a Callback process to be successful, the client
	need to be running on a 32-bit system.
	
	MORE INFORMATION
	================
	
	When a Remote Automation server attempts to Callback a client object, it makes a
	certain request. For instance, the server could request to trigger a client's
	method. The automation proxy (AUTPRX32.DLL) on the server side carries this
	request across the network. A method request by the automation proxy expects to
	be met by the Automation Manager, and then served by the client. In other words,
	the client needs to act as a server for the Callback to be successful. Because
	16-bit systems cannot run the Automation Manager, they cannot run a Remote
	Automation server. Therefore, a 16-bit client cannot be called back remotely.
	
	REFERENCES
	==========
	
	- Enterprise Edition Documentation, Building Client/Server Applications,
	  Chapter 7, Implementing OLE Servers
	
	- Professional Edition Documentation, Creating OLE Servers, Chapter 3,
	  Standards and Guidelines, Performance Issues
	
	- CALLBACK Sample Application in ..\Samples\RemAuto\Callback
	
	Additional query words: RemAuto kbRemote
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbinfo
	
	=============================================================================
	
