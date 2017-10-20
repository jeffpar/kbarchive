---
layout: page
title: "Q231412: INFO: Limitations of PVCS_SS.exe"
permalink: /kb/231/Q231412/
---

## Q231412: INFO: Limitations of PVCS_SS.exe

{% raw %}

	Article: Q231412
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbFAQ kbGrpDSSSafe kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two potential problems using the PVCS_SS conversion utility:
	
	- The utility does not work on PVCS databases later than version 5.2.1 that
	  have Long File Names (LFNs). LFN's are file names that are longer than the
	  8.3 convention or contain spaces
	
	- The utility does not work when converting to a Visual Source Safe (VSS) 6.0
	  database format.
	
	MORE INFORMATION
	================
	
	There is no consistent error that is returned when the conversion fails. Among
	the error messages/problems that have been reported are:
	
	- "Invalid / corrupted log file"
	
	- An unreadable series of binary characters
	
	- "PVCS Log File May be Corrupt"
	
	In this case the possible workarounds are:
	
	- Convert the PVCS database to an earlier version
	
	- Rename all LFN's in the PVCS database
	
	- Manually convert the database by recursively getting all file versions and
	  adding the versions to VSS
	
	If the utility returns the following error:
	
	  Incompatible database version
	
	To resolve this, try running DDUPD -undo on the target database. If the
	conversion still fails, you need to create a new VSS database, choosing not to
	create it in the new database format.
	
	REFERENCES
	==========
	
	For additional information about Visual SourceSafe, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q140362 PVCS_SS Does Not Work with PVCS for Windows NT
	
	  Q153285 Will VSS 5.0 Be Able to Read a VSS 6.0 Database?
	
	  Q216115 HOWTO: Set Up Multiple Databases in Visual SourceSafe 6.0
	
	Additional query words: pvcs conversion
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbFAQ kbGrpDSSSafe kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
