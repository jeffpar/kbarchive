---
layout: page
title: "Q246873: INFO: Visual SourceSafe 6.0 Installation From Visual Studio 6.0"
permalink: /kb/246/Q246873/
---

## Q246873: INFO: Visual SourceSafe 6.0 Installation From Visual Studio 6.0

{% raw %}

	Article: Q246873
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
	
	This article delineates the differences between an individual Visual SourceSafe
	version 6.0 installation from a Visual SourceSafe installation from Visual
	Studio 6.0 Enterprise edition.
	
	Visual SourceSafe version 6.0 is included with the Visual Studio 6.0 Enterprise
	Edition product. When you install Visual SourceSafe using the Visual Studio
	setup procedure, you are presented with the following three setup options:
	
	- Custom
	
	- Product
	
	- Server Applications
	
	MORE INFORMATION
	================
	
	You can use the Custom or Products installation options to install the client
	components of Visual SourceSafe. Use the Server Applications option to install
	the Server and Administrative components of Visual SourceSafe.
	
	Custom
	
	This option creates a private database on the customer's local computer; it does
	not create a Netsetup image. Choosing this option installs the same components
	as the Stand Alone setup option in the individual boxed version of the product.
	
	- Create Database
	
	- Admin Tools
	
	- Client Tools
	
	- Integration components and Registry Settings
	
	- Help Files
	
	Products
	
	This option creates a private database on the customer's local computer; it does
	not create a Netsetup image. Choosing this option installs the same components
	as the Stand Alone setup option in the individual boxed version of the product.
	
	- Create Database
	
	- Admin Tools
	
	- Client Tools
	
	- Integration components and Registry Settings
	
	- Help Files
	
	Choosing Product instead of Custom has no effect on which Visual SourceSafe
	components are installed. You see slightly different Setup Wizard screens, but
	both options install the client-side components to the your computer.
	
	Server Applications
	
	This option creates a Shared database and installs the Admin Software and the
	Netsetup program so users can install the client software from the server.
	Choosing this option installs the same components as the Shared Database Server
	setup option in the individual boxed version of the product.
	
	- Create Database
	
	- Admin Tools
	
	- Client Tools
	
	- Integration components and Registry Settings
	
	- Help Files
	
	- Netsetup Image
	
	- IE4 Setup Image
	
	Use the Server Applications option when you are creating a database that will be
	used by many clients. This option can be used to install a database to a local
	or remote drive. You should use the Product or Custom option when you want to
	set up a local, private database on your computer.
	
	Although the look of the Enterprise Edition setup procedures and the individual
	boxed version setup procedures are very different, they all install the same
	components. It makes no difference which product you purchase (Visual Studio
	version 6.0 Enterprise, Visual C++ 6.0 Enterprise, Visual Basic 6.0 Enterprise,
	or Visual SourceSafe in its own box). The same product and the same components
	get installed to the your computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
