---
layout: page
title: "Q185865: FIX: Printing Reports in Loop Hangs Visual FoxPro"
permalink: /kb/185/Q185865/
---

## Q185865: FIX: Printing Reports in Loop Hangs Visual FoxPro

{% raw %}

	Article: Q185865
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbvfp600sp3 kbvfp600sp3fix kbDSu
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing reports in loops generates an "Internal Consistency" error under
	Windows 95 and hangs Visual FoxPro under Windows NT 4.0.
	
	CAUSE
	=====
	
	This activity causes massive amounts of spooling, which causes a low memory
	situation because of continuous virtual memory swapping.
	
	RESOLUTION
	==========
	
	Create an out-of-process Visual FoxPro OLE server to handle the printing and
	release the object when the printing is completed. This workaround is available
	only in versions of Visual FoxPro later than 3.0x.
	
	An example is shown below.
	
	Create an OLE server named "TestPrint" by creating a project, adding the
	following code to a program file, and compiling the project to an EXE file:
	
	  
	
	     DEFINE CLASS PrintIt AS CUSTOM OLEPUBLIC
	
	     WhichData=''
	     WhichReport=''
	
	     PROCEDURE PRINTOUT
	        Use (This.WhichData)
	        REPORT FORM (This.WhichReport) to Print
	        Use
	     ENDPROC
	
	     ENDDEFINE
	
	In your application, replace the REPORT FORM command with the following lines of
	code:
	
	  
	
	     Ox=CreateObject("TestPrint.PrintIt")
	     Ox.WhichData  ="<Full Path of the Table associated with the report>"
	     Ox.WhichReport="<Full Path of the Report>"
	     Ox.PRINTOUT
	     Release OX
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	WARNING: Close all running applications and save your data before following this
	procedure. Note that following these steps may produce lost allocation units,
	lost clusters, or cross-linked files.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table named Test and insert some records.
	
	  
	
	        CREATE TABLE Test (ID c(4), NAME c(20))
	        INSERT INTO Test VALUES ("AAA","111")
	        INSERT INTO Test VALUES ("BBB","222")
	        INSERT INTO Test VALUES ("CCC","333")
	
	2. Create a Quick Report based on table Test and name the report Test.frx.
	
	3. Place the following code in a program and run the code:
	
	  
	
	        SET SAFETY OFF
	        FOR i=1 TO 5000
	           ?? i
	           REPORT FORM Test TO FILE Test.txt ASCII
	        NEXT
	
	The system hangs or crashes after a certain number of iterations.
	
	Additional query words: kbDSE VFP600REL
	
	======================================================================
	Keywords          : kbprint kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbvfp600sp3 kbvfp600sp3fix kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
