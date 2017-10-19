---
layout: page
title: "Q113537: Workgroup Add-On Displays Network Connections as Disconnected"
permalink: /kb/113/Q113537/
---

## Q113537: Workgroup Add-On Displays Network Connections as Disconnected

	Article: Q113537
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET USE command to view your current network connections,
	Microsoft Workgroup Add-On for MS-DOS displays the status of a network
	connection as "Disconnected." However, switching to the drive letter assigned to
	that connection shows that a connection does exist. For example:
	
	  Status          Local name      Remote name
	  ---------------------------------------------
	  Disconnected    D:              \\TEST1\TEST1
	
	  The command completed successfully.
	
	In this example, switching to drive D allows you to perform a directory search
	and other functions, proving that a connection with \\TEST1\TEST1 does exist
	despite the displayed status.
	
	CAUSE
	=====
	
	Ghosted connections are enabled by default when you use the NET START FULL
	command and load the full redirector. This means instead of automatically
	restoring your previous network connections, Microsoft Workgroup Add-On for
	MS-DOS assigns a drive letter to that connection but does not establish the
	network connection until you actually try to use it. This helps reduce network
	traffic and logon time.
	
	Loading the basic redirector does not enable ghosted connections--actual
	connections are made when you log on. The basic redirector is loaded by default.
	To change the redirector, type "setup" (without the quotation marks) in the
	Microsoft Workgroup Add-On for MS-DOS subdirectory (C:\NET by default), choose
	Change Setup Options and then enable the basic or full redirector.
	
	Additional query words: 3.11 wfwg dos wgao not connected
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
