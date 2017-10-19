---
layout: page
title: "Q248116: HOWTO: Use the Session Class to Provide a Private Data Session"
permalink: /kb/248/Q248116/
---

## Q248116: HOWTO: Use the Session Class to Provide a Private Data Session

	Article: Q248116
	Product(s): Microsoft FoxPro
	Version(s): 6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio 6.0 SP3 
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Studio 6.0 Service Pack 3 added the Session Class to Visual FoxPro. This
	class allows you to create a private data session without the use of a form. The
	benefit to this is that it allows you to create a lightweight (in terms of
	resource usage) custom object with encapsulated data. You previously would have
	needed a form, with all its associated overhead, or an empty formset to do
	this.
	
	One of the best places to use this is in multithreaded DLLs (also added in
	Service Pack 3) since resource usage is at a premium in most cases where you
	would be using them.
	
	MORE INFORMATION
	================
	
	An example of how to use this new class follows.
	
	  DEFINE CLASS myPrivateDSClass AS session
	
	  PROCEDURE UseTable
	      *!* By using the table inside a method of the session object,
	      *!* you are working in the object's DataSession.
	      LPARAMETER tcTable
	         
	      IF NOT USED(tcTable)
	          USE (tcTable) IN 0
	      ENDif
	  ENDproc
	
	  PROCEDURE Destroy
	      CLOSE DATA ALL
	  ENDproc
	
	To see this class in action, save the above code into MyDS.prg, and then run the
	following code:
	
	  CREATE TABLE myDSTest (cTest C(10))
	  USE DBF() SHARED
	  *!* CREATE TABLE makes an exclusively-used table. USE DBF() SHARED is
	  *!* a good method for not having to remember the path to the table.
	  FOR i = 1 TO 10
	     INSERT INTO myDSTest ;
	        VALUES (TRANSFORM(i))
	  ENDfor
	
	  oDS = NEWOBJECT("myPrivateDSClass", "MyDS.prg")    
	  *!* NEWOBJECT allows you to specify a class in a program or other 
	  *!* location without the use of SET CLASSLIB TO ... ADDITIVE.
	  oDS.UseTable("myDSTest")
	  SET
	
	  WAIT WINDOW "Suspending... RESUME to remove Session Object." NOWAIT
	  *!* The following line is needed to keep oDS in scope, so you can
	  *!* see the datasession.
	  SUSPEND
	
	SET opens the Data Session window. If you switch between the default data session
	and MyPrivateDS, you see myDSTest open in both, with the record pointer at the
	top of one and the bottom of the other.
	
	REFERENCES
	==========
	
	For more information, see the Session Object documentation in the MSDN Visual
	FoxPro documentation, or "Additional Language Elements" in the Vfpsp3.chm file
	which ships with Visual Studio 6.0 Service Pack 3.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Garrett
	Fitzgerald, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVSsearch kbVFPsearch kbAudDeveloper kbVFP600 kbVS600SP3 kbVS600Search
	Version           : :6.0,6.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
