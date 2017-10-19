---
layout: page
title: "Q123473: HOWTO: Increase Performance in SourceSafe"
permalink: /kb/123/Q123473/
---

## Q123473: HOWTO: Increase Performance in SourceSafe

	Article: Q123473
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSsafe600FAQ
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Use the following steps to improve Visual SourceSafe's (VSS) speed
	(performance):
	
	1. Make the correct platform version of the VSS executable local, as opposed to
	  located on the network. Set the environment variable SSDIR to the network
	  location of the SourceSafe database.
	
	2. Change the Comparison methods from the default of "Full" to "Checksum" by:
	
	  1. Choosing Command Settings... from the Setup menu and selecting the pull
	     down labeled "Compare files by."
	
	  2. Adding Compare = Checksum to the top section of the SS.ini file.
	
	3. Set the TEMP_PATH variable to a local directory.
	
	MORE INFORMATION
	================
	
	This could be caused by having too many "Dir=" or "Shadow=" entries in one of
	the INI files. Try to create a directory structure on disk, which matches the
	VSS project tree. Then clean up the extra Dir= and Shadow= entries in the .ini
	files. That way you only need an entry in your INI file for each "tip" project.
	
	Additional query words: ss3 3.0x 4.00 5.00
	
	======================================================================
	Keywords          : kbsetup kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
