---
layout: page
title: "Q197050: FIX: &quot;Version Not Found&quot; Error With Command Line GET"
permalink: kb/197/Q197050/
---

## Q197050: FIX: &quot;Version Not Found&quot; Error With Command Line GET

	Article: Q197050
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbservicepack _IK kbSSafe600bug kbSSExplorer kbVS600sp2 kbVS600SP1 kbVS600sp3f
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual SourceSafe (VSS), when doing a GET at the command line using the -r
	(recursive) and -vl (label) switches, you receive the following error and not
	all files are retrieved:
	
	  "version not found"
	
	RESOLUTION
	==========
	
	If all clients accessing the database are Visual SourceSafe version 6.0 or
	later, run DDUPD against the data directory to convert the database to the new
	format. If some clients are earlier versions of VSS, use the following
	workaround.
	
	To work around this problem, select Options from the Tools menu. In the General
	tab, select the "Act on Projects Recursively" option (note that after changing
	this setting you must exit the VSS explorer for it to work on the command line).
	On the command line, use wildcards instead of the -r switch.
	
	For example, if the command that is failing is:
	
	  ss get $/myproj -r -vlbeta1
	
	then use:
	
	  ss get $/myproj/*.* -vlbeta1
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This problem occurs when using a Visual SourceSafe 6.0 client against a database
	that has not been upgraded to the Visual SourceSafe 6.0 format.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the VSS 6.0 client, open a VSS 5.0-formatted database.
	
	2. Create a project ($/Project1/test).
	
	3. Apply label ("LABEL")to $/Project1.
	
	4. Run the following command:
	
	  SS GET -R -VLLABEL  $/Project1
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153925 FAQ: How Can I Find Out if My VSS Database Has Been Upgraded?
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbservicepack _IK kbSSafe600bug kbSSExplorer kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
