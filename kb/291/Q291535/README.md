---
layout: page
title: "Q291535: HOWTO: Find Installed Modems with Visual FoxPro"
permalink: /kb/291/Q291535/
---

## Q291535: HOWTO: Find Installed Modems with Visual FoxPro

{% raw %}

	Article: Q291535
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbOOP kbvfp500 kbvfp600
	Last Modified: 30-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the robust development environment offered by Visual FoxPro (VFP),
	developers can build and deploy a wide variety of applications, such as
	applications that incorporate the use of modems and communication ports. Because
	of this, VFP developers often require a programmatic method to determine the
	available modems on a computer.
	
	MORE INFORMATION
	================
	
	Using the MSComm ActiveX control (Mscomm32.ocx) that ships with Visual FoxPro
	versions 5.0 and 6.0, it is possible to locate a modem on a computer and
	determine the COM port that it uses.
	
	The following code:
	
	1. Uses the INIT event to loop through 10 COM ports, and attempts to open each
	  port in order to populate a list of active COM ports.
	
	2. Presents a list of active COM ports that exist on the computer.
	
	3. Tests each of the active COM ports by sending Hayes-compatible commands to
	  the port and reviewing the response (if any) when the user clicks the command
	  button on the form.
	
	To determine an available modem, follow these steps:
	
	1. In VFP, paste the following code in a new program:
	
	  *!* Q291535: HOWTO: Find installed modems using Microsoft Visual FoxPro
	  *!* This article use Mscom32.ocx to detect if any modems are installed
	  *!* and reports the COM port it is using.
	  *!* 
	
	  PUBLIC oform1
	
	  oform1=CREATEOBJECT([MODEMFORM])
	  oform1.Show
	  RETURN
	
	  **************************************************
	  *
	  DEFINE CLASS MODEMFORM AS form
	
	  	Height = 128
	  	Width = 160
	  	DoCreate = .T.
	  	AutoCenter = .T.
	  	BorderStyle = 2
	  	Caption = [Com Port Test]
	  	MaxButton = .F.
	  	MinButton = .F.
	  	Visible = .F.
	  	AlwaysOnTop = .T.
	  	BackColor = RGB(0,0,255)
	  	Name = [Form1]
	
	  	*-- Form array that stores information about available machine com ports.
	  	DIMENSION acommports[1,2]
	
	  	ADD OBJECT ocxCOMM AS MSCOMM_OCX WITH ;
	  		Top = 101, ;
	  		Left = 72, ;
	  		Height = 21, ;
	  		Width = 38, ;
	  		Name = [ocxCOMM]
	
	  	ADD OBJECT lblava_ports AS label WITH ;
	  		AutoSize = .T., ;
	  		FontName = [Verdana], ;
	  		Caption = [Available COM Ports:], ;
	  		Height = 16, ;
	  		Left = 14, ;
	  		Top = 15, ;
	  		Width = 133, ;
	  		ForeColor = RGB(255,255,255), ;
	  		BackColor = RGB(0,0,255), ;
	  		Name = [lblAVA_PORTS]
	
	  	ADD OBJECT command1 AS commandbutton WITH ;
	  		Top = 78, ;
	  		Left = 11, ;
	  		Height = 27, ;
	  		Width = 138, ;
	  		FontName = [Tahoma], ;
	  		Caption = [\<Test Ports for Modem], ;
	  		Name = [Command1]
	
	  	ADD OBJECT timer1 AS timer WITH ;
	  		Top = 105, ;
	  		Left = 12, ;
	  		Height = 23, ;
	  		Width = 23, ;
	  		Enabled = .F., ;
	  		Interval = 1500, ;
	  		Name = [Timer1]
	
	  	ADD OBJECT lblports AS label WITH ;
	  		FontName = [Verdana], ;
	  		Alignment = 2, ;
	  		Caption = [lblPORTS], ;
	  		Height = 17, ;
	  		Left = 42, ;
	  		Top = 46, ;
	  		Width = 77, ;
	  		ForeColor = RGB(255,255,255), ;
	  		BackColor = RGB(0,0,255), ;
	  		Name = [lblPORTS]
	
	  	PROCEDURE WaitForResponse
	  		*~ This method loops for the specified
	  		*~ amount of time calling DOEVENTS().
	  		*~ This allows time for the modem to respond to the requests.
	
	  		LPARAMETERS lnDelayInSeconds
	
	  		LOCAL lnStartTime
	  		lnStartTime = SECO()
	
	  		DO WHILE SECO() <= (lnStartTime + lnDelayInSeconds) ;
	  				AND NOT SECO() < lnStartTime
	  			DOEVENTS()
	  		ENDDO
	  	ENDPROC
	
	  	PROCEDURE Error
	  		LPARAMETERS nError, cMethod, nLine
	  		*~ In THIS.INIT we loop through 10 COM ports, 
	  		*~ attempting to open each with the MSCOMM32.OCX control.
	  		*~ We trap the errors here and if it's an OLE error,
	  		*~ nError will be 1429 (this came from the control).
	
	  		IF INLIST(nError, 1429, 1426)
	  		*~  Populate an error array and check the OLE message.
	  			LOCAL aErrArray(1)
	  			AERROR(aErrArray)
	  		*~ 	If the error msg was "Invalid Port Number"
	  		*~  the control tried to open a port that either
	  		*~  doesn't exist or has nothing on it.
	  		*~  Set a global var (glBadPort) to .T.
	  		*~  this var is used in THIS.INIT loop.
	  			IF [INVALID PORT NUMBER] $ UPPER(aErrArray(3)) or ;
	  				[UNKNOWN OLE STATUS CODE] $ UPPER(aErrArray(3))
	  				glBadPort = .T.
	  			ENDIF
	  		ELSE
	  		*~  We experienced a non - OLE error. Report it.
	  			MESSAGEBOX([Error #: ] + ALLT(STR(nError)) + CHR(13) + ;
	  				[Message: ] + MESSAGE() + CHR(13) + ;
	  				[Line with error: ] + ALLT(STR(nLine)) + CHR(13) + ;
	  				[Method: ] + cMethod)
	  		ENDIF
	  	ENDPROC
	
	  	PROCEDURE Init
	  		*~ Var that indicates a non-existent or inactive COM port. 
	  		*~ This var is flipped by THISFORM.ERROR()
	  		_VFP.AutoYield=.F.
	  		PUBLIC glBadPort
	  		glBadPort = .F.
	
	  		LOCAL i, lcGoodPorts
	  		*~ lcGoodPorts used to build string displayed
	  		*~ in THISFORM.lblPORTS.CAPTION
	  		lcGoodPorts = []
	
	  		*~ Set initial properties of MSCOMM .OCX
	  		WITH THIS.ocxCOMM
	  			.RThreshold = 1
	  			.SThreshold = 1
	  			.Settings = [9600,n,8,1]
	  			.RTSEnable = .F.
	  			.InputLen = 0
	  		ENDWITH
	
	  		*~ Loop through 10 ports, trying to open each.
	  		FOR i = 1 TO 10
	  			WITH THIS.ocxCOMM
	  				.CommPort = i
	  				.PortOpen = .T.
	
	  		*~      glBadPort set to .T. by THIS.ERROR if the # was bad.
	  				IF !glBadPort
	  		*~          Expand the array if i>1. The array is initally 1 row.
	  					IF i > 1
	  						DIMENSION THIS.aCommPorts[ALEN(THIS.aCommPorts,1)+1,2]
	  					ENDIF
	  		*~          Valid port, so store the port # to the first column 
	  		*~          and a blank to the second column of the current row
	  		*~          in THISFORM.aCommPorts. We will use this space later
	  		*~          in THISFORM.COMMAND1.CLICK() to store return value
	  		*~          communication with the port.
	  		*~          Also store the port # to the lcGoodPorts variable.
	  					THIS.aCommPorts(i,1) = i
	  					THIS.aCommPorts(i,2) = []
	  					lcGoodPorts = lcGoodPorts + ALLT(STR(i)) + [  ]
	  				ENDIF
	
	  		*~      Reset glBadPort for next loop.
	  				glBadPort = .F.
	  		*~      Close the port if it was opened to avoid error on next try.
	  				IF .PortOpen
	  					.PortOpen = .F.
	  				ENDIF
	  			ENDWITH
	  		ENDFOR
	
	  		*~ List the valid ports in THISFORM.lblPORTS.CAPTION
	  		THIS.lblPORTS.CAPTION = lcGoodPorts
	  		RELEASE glBadPort
	  	ENDPROC
	
	  	PROCEDURE ocxCOMM.OnComm
	  		*** ActiveX Control Event ***
	
	  		*~ CommEvent = 2 means the control received data.
	
	  		*~  Store the data the control received to
	  		*~  the appropriate array row/column.
	  		*~  The row/column to store to is determined by
	  		*~  global variable "gnPortNum" which is set in the
	  		*~  thisform.command1.click() loop.
	
	  		IF THIS.commevent = 2
	  			THISFORM.aCommPorts(gnPortNum,2) = ;
	  				THISFORM.aCommPorts(gnPortNum,2) + THIS.INPUT
	  		ENDIF
	  	ENDPROC
	
	  	PROCEDURE command1.Error
	  		LPARAMETERS nError, cMethod, nLine
	  		*~ Trap OLE error from the COMM .OCX
	
	  		*~ nError = 1429: we experienced an OLE error. This may
	  		*~ be because we tried to open or communicate via
	  		*~ the port and there is a non-standard object attached to
	  		*~ it (such as a printer). Do nothing here; it's not a modem
	  		*~ since we cannot open AND communicate with it.
	  		*~ You may want to enhance this error trap.
	
	  		IF INLIST(nError, 1429, 1426)
	  		ELSE
	  		*~  We experienced a non - OLE error. Report it.
	  			MESSAGEBOX([Error #: ] + ALLT(STR(nError)) + CHR(13) + ;
	  				[MESSAGE: ] + MESSAGE() + CHR(13) + ;
	  				[LINE WITH ERROR: ] + ALLT(STR(nLine)) + CHR(13) + ;
	  				[Method: ] + cMethod)
	  		ENDIF
	  	ENDPROC
	
	  	PROCEDURE command1.Click
	  		*~ gnPortNum is used in the ONCOMM event of the .OCX
	  		PUBLIC gnPortNum
	  		LOCAL i, lnModemPort
	  		lnModemPort = 0
	
	  		WITH THISFORM
	  		*~  Loop through the form array...
	  			FOR i = 1 TO ALEN(.aCommPorts,1)
	  				gnPortNum = i
	  				WAIT WINDOW [Testing COM ] + ;
	  					ALLT(STR(.aCommPorts(i,1))) + [...] NOWAIT NOCLEAR
	  				IF .ocxCOMM.PortOpen
	  					.ocxCOMM.PortOpen = .F.
	  				ENDIF
	  		*~       Open the port and send standard Hayes-compatible
	  		*~       commands to it. These commands first reset ([ATZ])
	  		*~       the modem if it's there, then tell it to return
	  		*~       an ID string ([ATI0]). The return string from a modem
	  		*~       will contain an [OK], which is how we can tell it's a modem.
	  				.ocxCOMM.CommPort = .aCommPorts(i,1)
	  				.ocxCOMM.PortOpen = .T.
	  				.ocxCOMM.OUTPUT = [ATZ] + CHR(13)
	  				.WaitForResponse(2)
	  				.ocxCOMM.OUTPUT = [ATI0] + CHR(13)
	  				.WaitForResponse(2)
	  				WAIT CLEAR
	  			ENDFOR
	  			WAIT WINDOW [Compiling Results...] NOWAIT NOCLEAR
	  			.timer1.ENABLED = .T.
	  		ENDWITH
	  	ENDPROC
	
	  	PROCEDURE timer1.Timer
	  		*~ Clear the variable used in the ONCOMM event
	  		*~ of the .OCX.
	  		RELE gnPortNum
	  		LOCAL i, lnModemPort
	  		lnModemPort = 0
	  		*~ Disable this timer so the code only runs once.
	  		THIS.ENABLED = .F.
	
	  		WITH THISFORM
	  		*~  Close the port if it is open.
	  			.ocxCOMM.PortOpen = .F.
	
	  		*~  Loop through the completed array.
	  		*~  If the first element is <> 0, 
	  		*~  check the second in the row for an "OK".
	  		*~  If present, that means the port has a modem.
	  			FOR i = 1 TO ALEN(.aCommPorts,1)
	  				IF .aCommPorts(i,1) <> 0
	  					IF [OK] $ UPPER(.aCommPorts(i,2))
	  		*~	            Modem found, exit the loop.
	  						lnModemPort = .aCommPorts(i,1)
	  						EXIT
	  					ENDIF
	  				ENDIF
	  			NEXT i
	  		ENDWITH
	
	  		*~ Report to user.
	  		WAIT CLEAR
	  		IF  lnModemPort <> 0
	  			MESSAGEBOX([Modem Found On COM ] + ALLT(STR(lnModemPort)),0,[])
	  		ELSE
	  			MESSAGEBOX([No Modem Found.] ,0,[])
	  		ENDIF
	  	ENDPROC
	
	  ENDDEFINE
	  *
	  *-- EndDefine: form1
	  **************************************************
	
	  DEFINE CLASS MSCOMM_OCX AS OLECONTROL
	               OLECLASS = [MSCOMMLib.MSComm.1]
	  ENDDEFINE 
	
	2. Save and run the program.
	
	3. A form with the title "Com Port Test" lists the active COM ports on the
	  computer. Click the Test Ports for Modem command button to test each of the
	  listed ports.
	
	4. When testing is complete, a message box reports which port has an available
	  modem.
	
	NOTE: In its current form, this code only tests for the presence of one modem.
	However, the TIMER1.TIMER() method code can be modified to test for multiple
	modems.
	
	REFERENCES
	==========
	
	For more information, see the following Web site:
	
	  Hayes AT Command Set http://www.option.co.za/hayesat.htm
	  (http://www.option.co.za/hayesat.htm)
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
