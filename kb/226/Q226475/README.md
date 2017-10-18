---
layout: page
title: "Q226475: Setup Choices Vary Depending on Previous Installation of IIS/NTO"
permalink: kb/226/Q226475/
---

## Q226475: Setup Choices Vary Depending on Previous Installation of IIS/NTO

	Article: Q226475
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The choices displayed during the setup of the Windows NT 4.0 Option Pack (NTOP),
	which includes Internet Information Server (IIS) 4.0, vary depending upon
	whether IIS is already installed on the computer, and if so, which version is
	installed.
	
	MORE INFORMATION
	================
	
	IIS is not installed
	--------------------
	
	If IIS is not installed, the choices presented by the Setup program are as
	follows:
	
	- Minimum: Requires the least amount of disk space. Provides the basic
	  functionality to deploy Web site.
	
	- Typical: The recommended configuration. Includes all of the Minimum
	  components, along with the basic documentation and additional components to
	  allow you to build and deploy Web applications.
	
	- Custom: For advanced Web site developers. Provides the option to choose and
	  customize all components. All options included in the Typical installation
	  are pre-selected.
	
	Existing IIS version is 3.0 or earlier
	--------------------------------------
	
	If IIS version 3.0 or earlier is already installed, the choices presented by the
	Setup program are as follows:
	
	- Upgrade Only: Choose "Upgrade Only" to upgrade existing components only.
	
	- Upgrade Plus: Choose "Upgrade Plus" to upgrade existing components and to add
	  new components.
	  Note: the previously installed components will remain unchecked, you are not
	  allowed to uncheck them.
	
	IIS version 4.0 is already installed
	------------------------------------
	
	If IIS 4.0 is already installed, the choices presented by the Setup program are
	as follows:
	
	- Add/Remove: Add new components or remove installed components from the
	  current installation.
	
	- Remove All: Remove all previously installed components.
	
	Additional query words: nt4op ntop setup set up install installation buttons akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
