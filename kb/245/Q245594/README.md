---
layout: page
title: "Q245594: How to Reinstall BackOffice 4.5 Suite Components"
permalink: /kb/245/Q245594/
---

## Q245594: How to Reinstall BackOffice 4.5 Suite Components

	Article: Q245594
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can only reinstall BackOffice 4.5 Suite components by running BackOffice
	Setup. When you run BackOffice Setup, the SOFTWARE registry hive is queried to
	determine which components are already installed. If Setup detects the registry
	keys for the components, it marks the component as already installed and does
	not allow it to be reinstalled.
	
	MORE INFORMATION
	================
	
	To reinstall components, you must manually remove the registry key for a
	specific component.
	
	The following table shows the registry key that BackOffice Setup looks for to
	detect the component. These registry keys are all located under the
	HKEY_LOCAL_MACHINE\Software\Microsoft registry key.
	
	  
	  +-----------------------------------------------------------+
	  | Registry Key                 | BackOffice Suite Component | 
	  +-----------------------------------------------------------+
	  | Inetkit1                     | Intranet Publishing Kit    | 
	  +-----------------------------------------------------------+
	  | Inetkit2                     | Intranet Collaboration Kit | 
	  +-----------------------------------------------------------+
	  | BackOffice Web Administrator | Web Administration         | 
	  +-----------------------------------------------------------+
	  | BackOffice Administrator     | BackOffice Administration  | 
	  +-----------------------------------------------------------+
	  | BackOffice\Help              | BackOffice Help Files      | 
	  +-----------------------------------------------------------+
	
	The Intranet Collaboration Kit includes the Intranet Publishing Kit, so either
	Inetkit1 or Inetkit2 exists (but not both). For example, to reinstall the
	Intranet Publishing Kit on a computer that has the Intranet Collaboration Kit
	installed:
	
	1. Remove the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Inetkit2
	
	2. Re-run BackOffice Setup and select to install the Intranet Publishing Kit and
	  the Intranet Collaboration Kit.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	
