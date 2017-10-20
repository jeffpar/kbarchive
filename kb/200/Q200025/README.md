---
layout: page
title: "Q200025: PRB: Erroneous Error When Repeatedly Opening Database"
permalink: /kb/200/Q200025/
---

## Q200025: PRB: Erroneous Error When Repeatedly Opening Database

{% raw %}

	Article: Q200025
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 KbDBFDBC kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open a database located on a server numerous times from multiple Visual
	FoxPro 6.0 executables, then the following error randomly appears:
	
	  This file is incompatible with the current version of Visual FoxPro. Run
	  30UPDATE.PRG to update the file to the current version.
	
	This error may also occur if you are opening a Visual FoxPro 6.0 database using
	ADO or the Visual FoxPro ODBC driver.
	
	RESOLUTION
	==========
	
	Use any ON ERROR procedure, such as the one in the code example in the MORE
	INFORMATION section below, to trap for the spurious error.
	
	MORE INFORMATION
	================
	
	This behavior does not occur in Visual FoxPro 5.0x.
	
	Steps to Reproduce Behavior
	
	1. Set up a server machine and a client machine. Install Visual FoxPro 6.0 on
	  the client machine.
	
	2. On the client machine, create a project and build an executable containing
	  the following code:
	
	     CLEAR
	     ON ERROR DO Errorhandler WITH ERROR(), MESSAGE()
	     KEY=0
	     OPENED=0
	     errored=0
	     DO WHILE KEY=0
	        OPEN DATA k:\robert SHARED
	        OPENED=OPENED+1
	        @1,1 SAY "Opened:" + STR(OPENED)
	        @2,1 SAY "Errored:" + STR(errored)
	        CLOSE DATA
	        KEY=INKEY(1)
	     ENDDO
	     QUIT
	
	     PROCEDURE Errorhandler (nError,  messx)
	     errored=errored+1
	     @3,1 SAY nError
	     @4,1 SAY messx
	     RETRY
	     ENDPROC
	
	3. From the client machine, use Windows Explorer and map a drive K that points
	  to a shared folder on the server machine.
	
	4. Create a database on the K drive using Visual FoxPro 6.0. This database does
	  not need to contain any tables.
	
	5. Go to the client machine and start at least four instances of the Visual
	  FoxPro executable created in step 2 using Windows Explorer. You many need to
	  start more instances to recreate the problem.
	
	Depending on the scenario, the error may appear quickly or it may take several
	minutes.
	
	Additional query words: kbDSupport KBDSE
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 KbDBFDBC kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
