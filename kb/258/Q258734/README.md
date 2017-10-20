---
layout: page
title: "Q258734: FIX: Large Cursor Causes Data Corruption with SQLEXEC"
permalink: /kb/258/Q258734/
---

## Q258734: FIX: Large Cursor Causes Data Corruption with SQLEXEC

{% raw %}

	Article: Q258734
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing a cursor that is created from an ODBC datasource that contains a
	large number of records, several records at the end of the cursor display CHR(0)
	as the data.
	
	CAUSE
	=====
	
	This problem is related to the amount of memory available to Visual FoxPro. When
	Visual FoxPro is running low on memory, it attempts to flush buffers to disk,
	which increases the size of the file on disk. The file structure that has the
	file size in it, however, is not updated. When Visual FoxPro reads the file, the
	shorter file size returns an empty buffer containing zeros.
	
	RESOLUTION
	==========
	
	- Maximize the buffer size by setting both the SYS(3050,1) and the SYS(3050,2)
	  functions to the value of SYS(1001).
	
	- Where possible, when you are using queries or views involving ODBC data
	  sources containing large result sets, avoid moving other application windows
	  in front of Visual FoxPro. Also, avoid opening the Class Browser, the Project
	  Manager, or the designers when you are using these queries or views.
	
	- If updateable views are involved, the corruption may be detected by using
	  either of the following methods:
	
	  1. Use a LOCATE FOR AT(CHR(0), theField)>0 command to find any corruption
	     in the cursor.
	
	  2. Place an update trigger on the table to check for the existence of CHR(0)
	     in the affected column (presuming that CHR(0) is not valid content for
	     this column) and fail the update if it is detected.
	
	- Work with smaller cursors, bringing down a smaller subset of the data, unless
	  it is necessary to retrieve of the entire table.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file called BigCur.prg by using the following code:
	
	  CLEAR ALL
	  CLOSE DATA ALL
	  lcProcName = SYS(16)
	  SET ESCAPE ON
	  #DEFINE 	SETMEM			.T.
	  #DEFINE 	NSELECTCOUNT	2
	  #DEFINE 	MAKEDATA		.T.
	
	  CLEA
	  IF SETMEM
	     oldmemsize = VAL(SYS(3050,1))
	     Memsize = 12845056 /4
	     SYS(3050,1,Memsize/4)
	     SYS(3050,2,Memsize/4)
	  ENDIF
	  ?'Total cursor size = ' +TRANS(1048576*NSELECTCOUNT)+' bytes'
	  ?"Foreground "+SYS(3050,1)
	  ?"Background "+SYS(3050,2)
	
	  CLOS DATA ALL
	  SET SAFE OFF
	
	  IF MAKEDATA
	     ?"Making data"
	     CREA TABLE corrtest (char1 c(7))
	     FOR lni = 1 TO 131074
	        cval = PADL(lni,7)
	        INSERT INTO corrtest (char1) VALUES  (cval)
	     ENDFOR
	     CLOS DATA ALL
	     ?"Done making data"
	  ENDIF
	
	  SET SAFE ON
	  mdir = SET("defa") + CURDIR()
	  cConstr = "DRIVER=Microsoft Visual FoxPro Driver;SourceType=DBF;SourceDB=" + ;
	     SYS(5) + SYS(2003) + ";Exclusive=NO;Collate=Machine;BackgroundFetch=NO;" + ;
	     "Null=NO;Deleted=NO"
	
	  lnh=SQLSTRINGCONN(cConstr)
	  ?'Handle is ', lnh
	
	  FOR lnj = 1 TO NSELECTCOUNT
	     cCursorName = 'temp'+ALLTR(STR(lnj))
	     SELECT 0
	     *!* Cursor size is 1048576 bytes
	     ?sqlexec(lnh ,'select * from corrtest',cCursorName)
	     ?ALIAS(),RECC(),DBF()
	  ENDFOR
	  DO checkit
	  SQLDISCONNECT(lnh)
	  SQLDISCONNECT(0)
	  CLOSE ALL
	  ?"Disconnected"
	
	  PROCEDURE checkit
	     LOCAL lnCnt, lni, atest[1]
	     FOR lni = 1 TO NSELECTCOUNT
	        SELECT (lni)
	        GO BOTT
	        ? "Checking table " + ALIAS(),DBF()
	        IF CHR(0)$char1
	           ?
	           ?"bad",lnCnt,ALIAS()
	           SKIP -11
	           BROW timeout 10
	           RETU
	        ENDIF
	        GO TOP
	     ENDFOR
	     ? "All tables check out OK"
	
	2. Run the BigCur.prg file, and note the contents of the field that is displayed
	  in the Browse window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
