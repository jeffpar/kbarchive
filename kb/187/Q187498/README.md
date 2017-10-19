---
layout: page
title: "Q187498: Disable PCT 1.0, SSL 2.0, or SSL 3.0 on IIS"
permalink: /kb/187/Q187498/
---

## Q187498: Disable PCT 1.0, SSL 2.0, or SSL 3.0 on IIS

	Article: Q187498
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you use HTTPS to connect to Internet Information Server (IIS) versions 3.0
	or Internet Information Services (IIS) 5.0, the client and browser will
	negotiate a common protocol to secure the channel. In cases where the server and
	client have multiple protocols in common, Microsoft Internet Information Server
	will attempt to secure the channel with one of the protocols it supports using
	the following order of preference: PCT 1.0, SSL 3.0, and then SSL 2.0. In some
	instances, it may be desirable to disable one or more of these protocols. This
	can be accomplished through changes to the registry.
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT Server stores information pertaining to the different
	secure channel protocols that it supports in the following registry key:
	
	  HKey_Local_Machine\System\CurrentControlSet\Control\SecurityProviders
	  \SCHANNEL\Protocols
	
	This key normally contains three subkeys: PCT 1.0, SSL 2.0, and SSL 3.0. Each key
	holds information regarding its respective protocol. Any one of these protocols
	can be disabled at the server by creating a new REG_BINARY value in the server
	subkey of the protocol and setting it to 00 00 00 00.
	
	The following steps demonstrate how to disable the PCT 1.0 protocol so that
	Microsoft Internet Information Server will not attempt to negotiate its use.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Click the Start menu, point to Run, and type "regedt32" (without the
	  quotation marks) in the Run dialog box.
	
	2. Click OK.
	
	3. In the Registry Editor, locate the following registry key:
	
	  HKey_Local_Machine\System\CurrentControlSet\Control\SecurityProviders
	  \SCHANNEL\Protocols\PCT 1.0\Server
	
	4. In the Edit menu, click Add Value to create a new REG_BINARY value called
	  Enabled in the Server subkey.
	
	5. In the Data Type drop-down list, choose REG_BINARY.
	
	6. In the Value Name text box, type "Enabled" (without the quotation marks) and
	  click OK.
	
	  NOTE: If this value is already Present, double click on the value to edit its
	  current value and proceed with step 7.
	
	7. In the Binary Editor, set the new keys value to equal 0 by entering the
	  following string: 00000000.
	
	8. Click OK and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis510
	Version           : :3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
