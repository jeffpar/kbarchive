---
layout: page
title: "Q246875: HOWTO: Visual SourceSafe 6.0 Installation From Visual Basic 6.0"
permalink: kb/246/Q246875/
---

## Q246875: HOWTO: Visual SourceSafe 6.0 Installation From Visual Basic 6.0

	Article: Q246875
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe version 6.0 is included with the Visual Basic 6.0 Enterprise
	Edition product. When you install Visual SourceSafe using the Visual Basic setup
	procedure, you are presented with the following two setup options:
	
	- Install Visual Basic Enterprise Edition
	
	- Server Applications
	
	MORE INFORMATION
	================
	
	Install Visual Basic Enterprise Edition
	
	This creates a private database on your local machine, however it does not create
	a Netsetup image. Choosing this option installs the same options as the
	stand-alone setup option in the individual boxed version of the product.
	
	- Create Database
	
	- Admin Tools
	
	- Client Tools
	
	- Integration components and Registry Settings
	
	- Help Files
	
	Server Applications
	
	This creates a shared database and installs the admin software and the Netsetup
	program so that you can install the client software from the server. Choosing
	this option installs the same components as the Shared Database Server setup
	option in the individual boxed version of the product.
	
	- Create Database
	
	- Admin Tools
	
	- Client Tools
	
	- Integration components and Registry Settings
	
	- Help Files
	
	- Netsetup Image
	
	- IE4 Setup Image
	
	You should use the Server Applications option when you are creating a database
	that is used by many clients. This option can be used to install a database to a
	local or remote drive. You should use the Install Visual Basic Enterprise
	Edition option when you want to set up a local, private database on your
	machine.
	
	Although the look of the Enterprise Edition setup procedures and the individual
	boxed version setup procedures are very different, they all install the same
	components. It makes no difference which product you purchase; Visual Studio
	version 6.0 Enterprise, Visual C++ 6.0 Enterprise, Visual Basic 6.0 Enterprise,
	or Visual SourceSafe in its own box. The same product and the same components
	are installed to your computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
