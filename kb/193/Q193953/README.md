---
layout: page
title: "Q193953: PRB: COM .Dll In MTS 'Sharing' Datasessions Between Instances"
permalink: /kb/193/Q193953/
---

## Q193953: PRB: COM .Dll In MTS 'Sharing' Datasessions Between Instances

{% raw %}

	Article: Q193953
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moving the record pointer of a table in one object instance of a Component
	Object Model (COM) .dll file created in Visual FoxPro, moves the record pointer
	in all instances of that object when running in Microsoft Transaction Server
	(MTS).
	
	CAUSE
	=====
	
	Using a table outside the data environment causes the cursor to be public to all
	instances of that object.
	
	
	RESOLUTION
	==========
	
	Open and access the table that uses a cursor object in a data environment with
	the DataSession property set to two (2) Private.
	
	In the example provided in the Steps To Reproduce Behavior section, change the
	SERVER CODE to the following.
	
	NOTE: After rebuilding the COM .dll, make sure to delete the Component object
	from the MTS Package, then add it back using the Add Component/Add New Component
	menu options.
	
	     ***************Server Code With Dataenvironment******************
	     DEFINE CLASS MTSData AS FORM OLEPUBLIC
	        DATAENVIRONMENT=.NULL.
	        DATASESSION=2 &&PRIVATE
	        PROCEDURE LOAD
	           SET DEFAULT TO "c:\MTSTest"
	           THIS.DATAENVIRONMENT=CREATEOBJECT("MTSDataEnv")
	        ENDPROC
	        PROCEDURE movenext
	           SKIP 1
	        ENDPROC
	        PROCEDURE moveprev
	           SKIP -1
	        ENDPROC
	        PROCEDURE movefirst
	           GO TOP
	        ENDPROC
	        PROCEDURE movelast
	           GO BOTTOM
	        ENDPROC
	        PROCEDURE returnrec
	           LPARAMETER MyArray
	           EXTERNAL ARRAY MyArray
	           MyArray(1,1)=fld1
	           MyArray(2,1)=fld2
	           MyArray(3,1)=fld3
	        ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS MTSDataEnv AS DATAENVIRONMENT
	        ADD OBJECT cursor1 AS MTScursor
	        PROCEDURE INIT
	           THIS.OPENTABLES
	        ENDPROC
	     ENDDEFINE
	      DEFINE CLASS MTScursor AS CURSOR
	        PROCEDURE INIT
	           OPEN DATABASE MTSData SHARED
	           THIS.EXCLUSIVE=.F.
	           THIS.ALIAS="MTSTest"
	           THIS.DATABASE="c:\MTSTest\MTSData.dbc"
	           THIS.CURSORSOURCE="MTSTest"
	        ENDPROC
	     ENDDEFINE
	     ****************End Server Code With Dataenvironment**************
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	NOTE: This happens with any COM server created in Microsoft Visual FoxPro where
	multiple instantiations of a single object reside in the same process, and the
	DataSession property is set to 1 - Default Datasession. The variations where
	this happens are below:
	
	- Multi-Use Local (.exe) COM Server.
	- Multi-Use In Process (.dll) Server called twice in one session.
	- Multi-Use In Process (.dll) Server in a MTS Package called twice from one
	  session, or once from multiple sessions.
	
	The code in the Steps To Reproduce Behavior section requires a database with a
	table. You can run the following code to create the database and table:
	
	NOTE: Make sure to change the SET DEFAULT TO line in the SERVER CODE to point to
	the directory that contains the database.
	
	     CREATE DATABASE MTSData
	     CREATE TABLE MTSTest (fld1 c(10) PRIMARY KEY,fld2 N(5,2),fld3 T)
	     FOR i=1 TO 4
	        INSERT INTO MTSTest VALUES (STR(i),i,DATETIME()+ (i*60))
	     ENDFOR
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build the Server Code into a COM .dll named MTSData.
	
	2. Import the MTSData.dll and the MTSData.tlb as a component into a MTS Package.
	  Be sure to mark the component as "Requires A New Transaction".
	
	3. Place the Client Code in a program file.
	
	4. Run the ClientCode.prg in two instances of Visual FoxPro.
	
	5. Issue the following commands in the Command window of the first instance of
	  Visual FoxPro:
	
	  
	
	        x.MoveNext
	        x.ReturnRec(@aMTSRecord)
	        DISPLAY MEMORY LIKE aMTSRecord
	
	6. Issue the following commands in the second instance of Visual FoxPro noting
	  that the x.MoveNext command in the first instance moved the record pointer in
	  this instance also.
	
	  
	
	        x.ReturnRec(@aMTSRecord)
	        DISPLAY MEMORY LIKE aMTSRecord
	
	        ********************Server Code********************************
	        DEFINE CLASS MTSData AS FORM OLEPUBLIC
	           PROCEDURE INIT
	              SET DEFAULT TO "C:\MTSTest"
	
	              OPEN DATABASE MTSData SHARED
	              USE MTSTest SHARED
	           ENDPROC
	           PROCEDURE movenext
	              SKIP 1
	           ENDPROC
	           PROCEDURE moveprev
	              SKIP -1
	           ENDPROC
	           PROCEDURE movefirst
	              GO TOP
	           ENDPROC
	           PROCEDURE movelast
	              GO BOTTOM
	           ENDPROC
	           PROCEDURE returnrec
	              LPARAMETER MyArray
	              EXTERNAL ARRAY MyArray
	              MyArray(1,1)=fld1
	              MyArray(2,1)=fld2
	              MyArray(3,1)=fld3
	           ENDPROC
	        ENDDEFINE
	        ********************End Server Code****************************
	
	        ********************Client Code********************************
	        PUBLIC x
	        PUBLIC aMTSRecord(3,1)
	        x=CREATEOBJECT("MTSData.MTSData")
	        COMARRAY(x,11) &&Sets the arrays passed to object X as 1 based
	                       &&passed by reference.
	        x.movenext
	        x.returnrec(@aMTSRecord)
	        DISPLAY MEMORY LIKE aMTSRecord
	        ********************End Client Code****************************
	
	Additional query words: kbVFp kbVFp600 kbCOMt kbMTS200 kbDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
