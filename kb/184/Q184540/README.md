---
layout: page
title: "Q184540: &quot;File Not Found&quot; Error Displayed in Product Documentation"
permalink: kb/184/Q184540/
---

## Q184540: &quot;File Not Found&quot; Error Displayed in Product Documentation

	Article: Q184540
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the product documentation, under the Microsoft Internet Information Server
	topic, the Advanced Web Application Development, Programmer's Reference, and
	Developer Samples subtopics display the following error message:
	
	  File Not Found
	
	  The file you have requested may not have been installed during setup. To
	  install this file, please run Setup again and choose the appropriate
	  documentation option. This documentation may not be available on some
	  operating systems.
	
	CAUSE
	=====
	
	During installation, the Internet Information Server (IIS) Software Developer's
	Kit (SDK) documentation subcomponent was not selected.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Run the Windows NT 4.0 Option Pack Setup program, and then click the
	  Add/Remove button.
	
	2. Select the Internet Information Server (IIS) component, and then click Show
	  Subcomponents.
	
	3. Select Documentation, and then Show Subcomponents.
	
	4. Select SDK, and then finish running the Setup program.
	
	MORE INFORMATION
	================
	
	The Typical Setup option in Windows NT 4.0 Option Pack Setup does not install
	the SDK documentation.
	
	Additional query words: online on-line help files akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
