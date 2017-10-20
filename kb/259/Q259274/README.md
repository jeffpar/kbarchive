---
layout: page
title: "Q259274: PRB: INSERT - SQL Does Not Support Use of SELECT Statement"
permalink: /kb/259/Q259274/
---

## Q259274: PRB: INSERT - SQL Does Not Support Use of SELECT Statement

{% raw %}

	Article: Q259274
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbD
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL-92 syntax supports the use of a SELECT statement in an INSERT statement, and
	this functionality is implemented in Microsoft SQL Server. However, this syntax
	is not supported in Visual FoxPro.
	
	RESOLUTION
	==========
	
	The functionality of this syntax can be simulated with a SCAN loop, as follows:
	
	  USE HOME() + "labels"
	  COPY STRUCTURE TO labelsNew
	
	  SELECT type, id, name, readOnly, ckVal, data ;
	     FROM labels ;
	     INTO CURSOR crsrLabels
	
	  SELECT crsrLabels
	  SCAN
	     INSERT INTO labelsNew ;
	        VALUES ;
	        (crsrLabels.type, crsrLabels.id, crsrLabels.name, ;
	         crsrLabels.readOnly, crsrLabels.ckVal, crsrLabels.data, ;
	         DATE())
	  ENDSCAN
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code demonstrates the way it would work if the SQL-92 syntax were
	supported. As it is, the code results in a syntax error.
	
	  USE HOME() + "labels"
	  COPY STRUCTURE TO labelsNew
	
	  INSERT INTO labelsNew ;
	     SELECT type, id, name, readOnly, ckVal, data, DATE() ;
	        FROM labels
	
	REFERENCES
	==========
	
	For more information on the INSERT - SQL and SELECT - SQL commands, please see
	the Visual FoxPro documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
