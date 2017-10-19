---
layout: page
title: "Q178681: Headers on SDK Documents Print Incorrectly"
permalink: /kb/178/Q178681/
---

## Q178681: Headers on SDK Documents Print Incorrectly

	Article: Q178681
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server 3.0 Solution Developer Kit (SDK) documents that ship with
	Microsoft BackOffice version 2.5 contain headers that print incorrectly. The
	header of each page prints a near solid line.
	
	This does not occur with the document files shipped on the individual product CD.
	
	WORKAROUND
	==========
	
	To work around this problem, use InfoViewer, which is installed with the SDK.
	All of the documents print correctly from InfoViewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem:
	
	1. Use the BackOffice 2.5 CD number 2.
	
	2. In Windows Explorer, access the file \SNA\Docs\SDK\3270eis\3270C2. Any page
	  is okay.
	
	3. Print the selected page. The header prints incorrectly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
