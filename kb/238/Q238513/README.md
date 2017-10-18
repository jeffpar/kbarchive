---
layout: page
title: "Q238513: PRB: Opening a ComboBox Prevents Timer Event Code from Executing"
permalink: kb/238/Q238513/
---

## Q238513: PRB: Opening a ComboBox Prevents Timer Event Code from Executing

	Article: Q238513
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Event code in a timer object is not executed at the interval specified in the
	timer object's Interval property.
	
	CAUSE
	=====
	
	This behavior occurs when the timer interval of the timer object is set to an
	extremely low value.
	
	RESOLUTION
	==========
	
	Set the timer object's Interval property to a higher value.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Timedemo.prg using the following code:
	
	  PUBLIC xForm
	  xForm=CREATEOBJECT("TimerForm")
	  xForm.SHOW()
	
	  DEFINE CLASS TimerForm AS FORM
	      ncount=0
	      starttime=TIME()
	      ADD OBJECT Combo1 AS COMBOBOX WITH;
	          STYLE=2,;
	          FONTSIZE=8,;
	          HEIGHT=22,;
	          BOUNDTO=.T.,;
	          ROWSOURCETYPE=5
	
	      ADD OBJECT TextBox1 AS TEXTBOX WITH;
	          TOP=0,;
	          LEFT=150
	
	      ADD OBJECT Timer1 AS TIMER WITH;
	          INTERVAL=1,;
	          ENABLED=.T.
	
	      DIMENSION aArray(1)
	      ncount=0
	
	      PROCEDURE INIT
	          LOCAL tmpi,tmpnlen
	          tmpnlen=100
	          FOR tmpi=1 TO tmpnlen
	              DIMENSION THIS.aArray(tmpi)
	              THIS.aArray(tmpi)=tmpi
	          ENDFOR
	          THIS.Combo1.ROWSOURCE="thisform.aArray"
	          THIS.Combo1.REQUERY()
	          THIS.Combo1.LISTINDEX=1
	          THIS.Combo1.LEFT=5
	          THIS.starttime=TIME()
	      ENDPROC
	
	      PROCEDURE Timer1.TIMER
	          THISFORM.ncount=THISFORM.ncount+1
	          IF THISFORM.ncount=5*(1000/THISFORM.Timer1.INTERVAL)
	              THISFORM.CALCTIME()
	              THISFORM.ncount=0
	              THISFORM.starttime=TIME()
	          ENDIF
	      ENDPROC
	
	      PROCEDURE calctime
	          started=THISFORM.starttime
	          stoptime=TIME()
	          current_space=SELECT()
	          rec_count=RECCOUNT()
	          SELECT 0
	          IF LEN(ALLTRIM(started))=20
	              startda=VAL(LEFT(started,2))
	              STARTMO=VAL(SUBSTR(started,4,2))
	              startyr=VAL(SUBSTR(started,7,2))
	              IF UPPER(RIGHT(started,2))="PM"
	                  starthr=VAL(SUBSTR(started,10,2))+12
	              ELSE
	                  starthr=VAL(SUBSTR(started,10,2))
	              ENDIF
	              startmin=VAL(SUBSTR(started,13,2))
	              startsec=VAL(SUBSTR(started,16,2))
	          ELSE
	              starthr=VAL(LEFT(started,2))
	              startmin=VAL(SUBSTR(started,4,2))
	              startsec=VAL(RIGHT(started,2))
	          ENDIF
	
	          IF LEN(ALLTRIM(stoptime))>8
	              stopda=VAL(LEFT(stoptime,2))
	              stopmo=VAL(SUBSTR(stoptime,4,2))
	              stopyr=VAL(SUBSTR(stoptime,7,2))
	              IF UPPER(RIGHT(stoptime,2))="PM"
	                  stophr=VAL(SUBSTR(stoptime,10,2))+12
	              ELSE
	                  stophr=VAL(SUBSTR(stoptime,10,2))
	              ENDIF
	              stopmin=VAL(SUBSTR(stoptime,13,2))
	              stopsec=VAL(SUBSTR(stoptime,16,2))
	          ELSE
	              stophr=VAL(LEFT(stoptime,2))
	              stopmin=VAL(SUBSTR(stoptime,4,2))
	              stopsec=VAL(RIGHT(stoptime,2))
	          ENDIF
	          IF startsec>stopsec
	              stopsec=stopsec+60
	              stopmin=stopmin-1
	          ENDIF
	          IF startmin>stopmin
	              stopmin=stopmin+60
	              stophr=stophr-1
	          ENDIF
	          elapsedtime=REPLICATE("0",2-LEN(ALLTRIM(STR(stophr-starthr)))) + ;
	              ALLTRIM(STR(stophr-starthr)) + ":" + ;
	              REPLICATE("0",2-LEN(ALLTRIM(STR(stopmin-startmin)))) + ;
	              ALLTRIM(STR(stopmin-startmin)) + ":" + ;
	              REPLICATE("0",2-LEN(ALLTRIM(STR(stopsec-startsec)))) + ;
	              ALLTRIM(STR(stopsec-startsec))
	          IF !FILE('TIMETRAP.DBF')
	              CREATE TABLE timetrap (elapsed c(8), tinterval i)
	          ENDIF
	          INSERT INTO timetrap ;
	              VALUES (elapsedtime, THISFORM.Timer1.INTERVAL)
	          USE
	          SELECT (current_space)
	          THISFORM.TextBox1.VALUE=elapsedtime
	          THISFORM.TextBox1.REFRESH
	      ENDPROC
	
	  ENDDEFINE
	
	2. From the Command window, type:
	
	  "DO Timedemo" (without the quotation marks)
	
	3. Observe that the value "00:00:05" appears in the text box after approximately
	  five seconds.
	
	4. Click the combobox, move the mouse pointer down the center of the combobox
	  and position the mouse pointer over the number 7.
	
	5. Hold the mouse pointer over the number 7 for approximately 45 seconds.
	
	6. Move the mouse away from the combobox and click on the form. Note the value
	  displayed in the text box. The value is something other than 00:00:05. This
	  value is greater than five seconds. The value may appear in the text box
	  before you actually click on the form.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
