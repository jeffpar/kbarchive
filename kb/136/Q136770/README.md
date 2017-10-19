---
layout: page
title: "Q136770: How to Optimize Network Traffic in a Multiuser Application"
permalink: /kb/136/Q136770/
---

## Q136770: How to Optimize Network Traffic in a Multiuser Application

	Article: Q136770
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One way to optimize the amount of network traffic a multiuser application
	generates is to minimize the volume of file hits to server-based files.
	
	MORE INFORMATION
	================
	
	To build a multiuser database application that minimizes network traffic,
	consider the fact that the fewer the number of times your application has to
	process server-based files, the less network traffic is generated.
	
	Techniques for reducing network traffic incorporate local-caching strategies and
	dynamic usage systems that pull network files into use only when absolutely
	necessary. This requires overhead programming, but it can result in a much more
	stable, speedy, and reliable network connection.
	
	In a database application, users often need to see only a subset of the data. In
	this case, a query to bring what the user needs down into a local table for
	manipulation is appropriate. Once the information is local, there is no further
	need to access the network until a change is committed.
	
	Whenever you implement a scheme like this, you need to have an effective way to
	handle transaction processing. For more information about transaction
	processing, please see the "Managing Updates with Transactions" section, pages
	440-447, the "Programming for Shared Access" chapter of the "Developer's
	Guide."
	
	Optimizing network traffic requires that you reference network files as few times
	as possible, and close these files when your application is finished with them
	for a while. It is better to work with local data sets and verify
	synchronization issues.
	
	For additional information, please see Chapter 4, page 71, of the "Professional
	Features Guide."
	
	Additional query words: VFoxWin multi-user net
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
