---
layout: page
title: "Q136920: HOWTO: Use Universal Naming Conventions (UNC) w/ Visual FoxPro"
permalink: /kb/136/Q136920/
---

## Q136920: HOWTO: Use Universal Naming Conventions (UNC) w/ Visual FoxPro

{% raw %}

	Article: Q136920
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp300 kbvfp500 kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the use of Universal Naming Convention (UNC) type path
	referencing with Visual FoxPro.
	
	MORE INFORMATION
	================
	
	When Visual FoxPro needs to resolve a path (for example with Use C:\Test.dbf),
	it passes the path to the operating system by using the appropriate API. The
	same procedure is used with UNC path referencing. Whether it works or not
	depends on the operating system. If you are running under a 32-bit Microsoft
	operating system like Windows 95 or Windows NT, direct UNC references will work.
	With a 16-bit operating environment, such as Windows 3.x, the operating system
	cannot resolve the UNC path by itself.
	
	In general, with the exception of the SET DEFAULT and CD commands, any command
	that can take a fully qualified path in Visual FoxPro can support UNC.
	
	There is no delay internal to Visual FoxPro caused by the use of UNC to reference
	files. There is no proven speed or reliability increase given by connecting a
	network drive to the server and using conventional reference methods.
	
	Additional query words: Network Multiuser
	
	======================================================================
	Keywords          : kbnetwork kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
