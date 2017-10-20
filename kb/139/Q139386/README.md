---
layout: page
title: "Q139386: Features not Available in a Distributed Application"
permalink: /kb/139/Q139386/
---

## Q139386: Features not Available in a Distributed Application

{% raw %}

	Article: Q139386
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are many features in the Visual FoxPro development environment that are
	unavailable in a distributed executable. The code necessary to support these
	features is not included in the Vfp300.esl runtime library.
	
	MORE INFORMATION
	================
	
	If a distributed application attempts to use any of the following commands, a
	"Feature not available" error will occur:
	
	  BUILD APP             MODIFY FORM
	  BUILD EXE             MODIFY MENU
	  BUILD PROJECT         MODIFY PROJECT
	  COMPILE               MODIFY QUERY
	  CREATE FORM           MODIFY SCREEN
	  CREATE MENU           MODIFY STORED PROCEDURE
	  CREATE QUERY          MODIFY STRUCTURE
	  CREATE SCREEN         MODIFY VIEW
	  CREATE VIEW           SUSPEND
	  FILER                 SET
	  MODIFY CONNECTION     SET STEP
	  MODIFY DATABASE
	
	REFERENCES
	==========
	
	Visual FoxPro Professional Features Guide pages 164-165.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
