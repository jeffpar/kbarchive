---
layout: page
title: "Q158219: HOWTO: Use SourceSafe Over a RAS or ISDN Connection"
permalink: kb/158/Q158219/
---

## Q158219: HOWTO: Use SourceSafe Over a RAS or ISDN Connection

	Article: Q158219
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:3.04,3.1,4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSSafe310 kbSSafe304 kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists a series of recommendations that will help you optimize using
	SourceSafe over RAS, ISDN, or other modem connections.
	
	MORE INFORMATION
	================
	
	In general, you want to minimize the amount of network communication that will
	take place during typical SourceSafe operations. In addition, if you are not
	using Visual SourceSafe 5.0, you should consider upgrading because version 5.0
	contains a tremendous amount of optimization that may substantially improve your
	RAS performance.
	
	Tips for RAS Optimization
	-------------------------
	
	To optimize SourceSafe for use over a RAS, ISDN or other modem connection, you
	should consider implementing some or all of the following recommendations:
	
	NOTE: These are not listed in any particular order.
	
	1. Do not use a Shadow Directory. The Shadow Directory would typically be
	  located on a network server. Use of this option will increase the amount of
	  data being sent over the network.
	
	2. Do not use a Journal File. The directory that contains the Journal File would
	  typically be located on a network server. Use of this option will increase
	  the amount of data being sent over the network.
	
	3. Do not use Project Security. If Project Security is enabled, every time a
	  user selects a file or project, SourceSafe must query the RIGHTS.DAT file for
	  information on the user's rights to that file or project. This increases the
	  amount of data being sent over the network.
	
	4. Use the Command Line rather than the SourceSafe Explorer. The SourceSafe
	  Explorer will impede performance as it queries the Server for information
	  such as glyphs to display, and so forth.
	
	5. Configure SourceSafe to use a local SS.ini file. This will reduce the amount
	  of information needed to be transferred over the network. Edit the USERS.txt
	  file to change this line:
	
	     USER_NAME=\USERS\USER_NAME\SS.INI
	
	  to this line:
	
	     USER_NAME=<local drive>\SS\USER\SS.INI
	
	6. Configure SourceSafe to use a local Temp directory. This will reduce the
	  amount of information needed to be transferred over the network.
	
	7. Configure SourceSafe to compare files by CheckSum rather than Contents. This
	  will reduce the amount of information needed to be transferred over the
	  network.
	
	  NOTE: There is no appreciable difference in the data transfer required to
	  compare files by CheckSum or Time. The recommended method here would by
	  Checksum because it is less prone to error.
	
	8. Do not expand keywords locally. When this option is set, SourceSafe modifies
	  the keywords of the file as it is checked-in to the Database. It then does a
	  Get to update the local file with the keywords. Disabling this option
	  eliminates the Get, thereby reducing the amount of information needed to be
	  transferred over the network.
	
	Additional query words: vss
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSSafe310 kbSSafe304 kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304 kbSSafe310 kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:3.04,3.1,4.0,4.0a,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
