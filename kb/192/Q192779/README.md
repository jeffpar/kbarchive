---
layout: page
title: "Q192779: PRB: DAO Doesn't Support ISAM Formats on Alpha"
permalink: /kb/192/Q192779/
---

## Q192779: PRB: DAO Doesn't Support ISAM Formats on Alpha

{% raw %}

	Article: Q192779
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbDriver kbIISAM kbODBC kbVC500
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DAO SDK is provided for Alpha computers. The DAO SDK allows applications
	running on an Alpha computer to access Jet Databases (.mdb files). However, the
	DAO SDK does not provide the ability to read the other Jet ISAM file formats
	such as FoxPro, Excel, Text files, and so forth.
	
	RESOLUTION
	==========
	
	This is by design. On an Alpha computer, you cannot use DAO or the Microsoft
	Access ODBC driver to access data files other than .mdb files. The RISC version
	of the Visual C++ VCRead.htm file states: The RISC version of the DAO SDK does
	not contain support for the following data formats: Paradox Excel Lotus Exchange
	Xbase text and html The above components can be selected from the installation
	menus, but they will not be installed.
	
	MORE INFORMATION
	================
	
	The DAO SDK for Alpha computers is available for download from the following
	article in the Microsoft Knowledge Base:
	
	  Q176427 PATCH: Daorisc.exe Installs DAO for Alpha (RISC)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbDriver kbIISAM kbODBC kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
