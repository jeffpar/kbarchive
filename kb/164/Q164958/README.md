---
layout: page
title: "Q164958: FIX: Error Occurs When Running PTK Setup"
permalink: /kb/164/Q164958/
---

## Q164958: FIX: Error Occurs When Running PTK Setup

{% raw %}

	Article: Q164958
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbsetup kbEEdition kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ 4.2 Enterprise Edition includes a copy of the SQL Server
	Developer Edition CD. When you run the setup for SQL Programmer's ToolKit (PTK)
	off of the CD, the following message appears:
	
	  Please insert the Media labeled: PTK Diskette #1 into <your CD drive>
	
	The error only occurs when you run the setup on Windows NT 4.0.
	
	CAUSE
	=====
	
	This is a problem with the setup program.
	
	RESOLUTION
	==========
	
	To work around this problem, copy the PTK directory off of the CD to your hard
	drive and then run the setup from there.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem does not exist with the SQL Server
	Developer Edition included with the Visual C++ 5.0 Enterprise Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbEEdition kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
