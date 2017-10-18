---
layout: page
title: "Q221690: FIX: C0000005 Error With Repeated SQL SELECTs Using BETWEEN(á)"
permalink: kb/221/Q221690/
---

## Q221690: FIX: C0000005 Error With Repeated SQL SELECTs Using BETWEEN(á)

	Article: Q221690
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbDatabase kbSQL kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbVS600sp2
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro crashes with a C0000005 error after running a SQL Select statement
	that uses the BETWEEN() function. Repeatedly requerying a view that is defined
	using the BETWEEN() function might also cause this problem.
	
	This problem can be intermittent and might only happen on certain computers.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code into a new program file in Visual FoxPro:
	
	  SET STRICTDATE TO 0
	  FOR q=1 TO 1000
	     WAIT WINDOW TRANS(q) NOWAIT
	     SELECT * FROM HOME(2)+"data\orders" ;
	     WHERE order_date BETWEEN {07/03/19963} and DATE() ;
	     INTO CURSOR junk
	  ENDFOR
	
	2. Save and run the program.
	
	3. If the computer is subject to the problem, Visual FoxPro should crash with a
	  C0000005 error somewhere between 10 and 20 times through the loop.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbDatabase kbSQL kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
