---
layout: page
title: "Q286347: PRB: Can't Connect to VCM Database from Client with Older VCM"
permalink: /kb/286/Q286347/
---

## Q286347: PRB: Can't Connect to VCM Database from Client with Older VCM

{% raw %}

	Article: Q286347
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbGrpDSVBDB kbDSupport kbSQLServ2000 kbMDACNoSweep kbVS600sp5fix
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Studio, Enterprise Edition 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repositories created in SQL Server 2000 by Visual Component Manager (VCM) on a
	computer that has the SQL Server 2000 server or client components installed
	cannot be accessed from a Visual Component Manager client on a computer without
	these components. The following error message will appear:
	
	  Error: Installing Model File Error: Creating Repository Failed Incompatible
	  repository database version.
	
	CAUSE
	=====
	
	SQL Server 2000 installs Repository 3.0. Clients with Visual Basic or Visual
	Studio 6.0 have Repository 2.0, which uses a different repository schema.
	
	RESOLUTION
	==========
	
	Install at least the SQL Server 2000 client components on the Visual Component
	Manager client computer. Or, install only the SQL Server 2000 Repository
	redistributable components using the instructions found in Redist.txt on the SQL
	Server 2000 installation CD.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	SQL Server 2000 installs Repository 3.0 and, if you use the installation of
	Visual Component Manager on a computer that has the SQL Server 2000 server or
	client components installed to create the repository, it uses Repository 3.0.
	
	If you create a VCM repository using Repository 3.0, you must upgrade all VCM
	clients accessing that repository to Repository 3.0.
	
	Repositories created with Repository 2.0/2.1 are accessible from a VCM client
	with Repository 3.0; in other words, Repository 3.0 is backward-compatible.
	
	Installing SQL Server 2000 server or client components installs MDAC 2.6, and
	clients accessing SQL Server 2000 should normally install MDAC 2.6. However, the
	problem discussed in this article is not related to MDAC version.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClient kbDatabase kbGrpDSVBDB kbDSupport kbSQLServ2000 kbMDACNoSweep kbVS600sp5fix 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVS600 kbVS600Search
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
