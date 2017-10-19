---
layout: page
title: "Q150645: INFO: Minor Inconsistencies in the Header Log for &lt;filename&gt;"
permalink: /kb/150/Q150645/
---

## Q150645: INFO: Minor Inconsistencies in the Header Log for &lt;filename&gt;

	Article: Q150645
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The error message: "There are Minor inconsistencies in the Header Log for
	<Filename>" occurs when running Analyze Build 1309 or greater on the
	database for the first time, where <Filename> is the eight-character
	SourceSafe database file name. This message is the result of eight extra bytes
	added to the file during the conversion process, such as after running DDCONV.
	
	Installations of Visual SourceSafe 5.0 will experience this error message when
	using the -v4 directive as part of the Analyze command when run for the first
	time on the database, such as Analyze -v4 C:\VSS\Data.
	
	The -v4 provides the greatest level of information from the Analyze pass and
	includes messages of an informational nature as well as errors.
	
	MORE INFORMATION
	================
	
	The error does not represent a significant danger to the integrity of the
	SourceSafe Database, and is corrected when Analyze is run with the -F
	parameter.
	
	Please note that Analyze -F does make changes to the data files in SourceSafe.
	All users must log off SourceSafe while Analyze is running with the -F switch.
	
	NOTE: It is strongly recommended that you back up the database before beginning
	this procedure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
