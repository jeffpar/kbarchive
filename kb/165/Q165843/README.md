---
layout: page
title: "Q165843: 3270 Wizard Memory Error If Computer Name Is 15 Characters"
permalink: kb/165/Q165843/
---

## Q165843: 3270 Wizard Memory Error If Computer Name Is 15 Characters

	Article: Q165843
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using the 3270 Wizard in SNA Server Manager to create a new mainframe
	connection and your SNA Server computer name is 15 characters long, the 3270
	Wizard will report an insufficient memory error during this process.
	
	CAUSE
	=====
	
	An error was found with the length parameter for the function GetComputerName
	that is used to obtain the SNA Server Computer Name.
	
	RESOLUTION
	==========
	
	An update to the Snawiz.dll file has been made that has corrected the problem.
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: automating
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
