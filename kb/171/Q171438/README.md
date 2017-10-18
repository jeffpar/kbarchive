---
layout: page
title: "Q171438: PRB: Passing Arrays by Reference to OLE Objects Not Supported"
permalink: kb/171/Q171438/
---

## Q171438: PRB: Passing Arrays by Reference to OLE Objects Not Supported

	Article: Q171438
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode kbHWMAC kbvfp
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual FoxPro does not support passing arrays by reference to OLE
	objects.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program file and add the program file to a
	  project named OLETest. Compile the project into an OLE DLL or EXE named
	  OLETest.
	
	        DEFINE CLASS ARRAYTEST AS CUSTOM OLEPUBLIC
	        NAME = "arraytest"
	
	        PROCEDURE DOIT
	           PARAMETER MYARRAY
	           EXTERNAL ARRAY MYARRAY
	           INSERT INTO foot (ONE,TWO,THREE,FOUR) VALUES ;
	              (MYARRAY[1],MYARRAY[2],MYARRAY[3],MYARRAY[4])
	           MYARRAY [1] = "100"
	           MYARRAY [2] = "200"
	           MYARRAY [3] = "300"
	           MYARRAY [4] = "400"
	
	           USE CURDIR() + "foot.dbf"
	           INSERT INTO foot (ONE,TWO,THREE,FOUR) VALUES ;
	              (MYARRAY[1],MYARRAY[2],MYARRAY[3],MYARRAY[4])
	        ENDPROC
	
	        PROCEDURE INIT
	           SET UDFPARMS TO REFERENCE
	           CREATE TABLE foot ;
	              (ONE C(10),TWO C(10), THREE C(10), FOUR C(10))
	        ENDPROC
	
	        ENDDEFINE
	
	2. After the OLE file is compiled, run the following code:
	
	        CLEAR
	        CLEAR ALL
	        DIMENSION MYARRAY[4]
	        MYARRAY(1) = "1"
	        MYARRAY(2) = "2"
	        MYARRAY(3) = "3"
	        MYARRAY(4) = "4"
	        OX = CREATEOBJECT("OLEtest.arraytest")
	        OX.DOIT(@MYARRAY)
	        ?OX.Name
	        ?"MyArray from Calling Program"
	        DISPLAY MEMORY LIKE MYARRAY
	        RELEASE OX
	        RELEASE MYARRAY
	        USE foot
	        BROWSE NOWAIT
	
	3. Notice the first record of table "foot" contains the values placed in the
	  array by the calling program. The second record contains the values PROCEDURE
	  DOIT placed in the array. The DISPLAY MEMORY LIKE MYARRAY command, however,
	  contains the original values of the array. Even though it appears that we are
	  passing the array by reference to the OLE object, Microsoft Visual FoxPro is
	  passing it by value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
