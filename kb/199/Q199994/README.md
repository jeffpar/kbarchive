---
layout: page
title: "Q199994: SMS: Removing a Server as a Distribution Server Leaves Reg Value"
permalink: kb/199/Q199994/
---

## Q199994: SMS: Removing a Server as a Distribution Server Leaves Reg Value

	Article: Q199994
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbServer kbsms120
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Registry values for package locations on the site server still reflect a
	distribution server that has been removed from the SMS hierarchy. As a result, a
	job that sends this package to a client may update a client's .ins file and
	contain the "removed" distribution server as a source for the package.
	
	If you review the .ins file with Pcmdump.exe, the servers section will contain
	the "removed" server.
	
	Please see the References section for similar KB articles.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	WORKAROUND
	==========
	
	To resolve this problem, cancel any active jobs for this package. Open the
	registry on the site server and go to:
	
	  Hkey_Local_Machine\Software\Microsoft\SMS\Components\ SMS_Despooler\Transfer
	  Packages.
	
	NOTE: The above registry location has been line-wrapped for readability.
	
	Go to the W_packageid subkey. Under it are keys reflecting the distribution
	servers that have an image of the package. Delete the subkey for the
	distribution server that has been removed from the hierarchy.
	
	Create a new job for this package and send it. The .ins files for the clients
	will no longer reflect the "removed" server.
	
	MORE INFORMATION
	================
	
	For additional information about this topic, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q168569 SMS: Remove Package from Server Leaves Registry Key
	  Q147616 Current History Registry Key Is Not Updated Properly
	
	Additional query words: prodsms ins server distribution removed
	
	======================================================================
	Keywords          : kbServer kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
