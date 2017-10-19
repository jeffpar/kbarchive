---
layout: page
title: "Q192300: HOWTO: Use ADSI for Printer Information and Control"
permalink: /kb/192/Q192300/
---

## Q192300: HOWTO: Use ADSI for Printer Information and Control

	Article: Q192300
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0; winnt:2.5
	Operating System(s): 
	Keyword(s): kbADSI kbCOMt kbvfp600 kbDSupport
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Active Directory Service Interfaces (ADSI) can be used to obtain network
	printer information and to control printers from within Visual FoxPro. This
	article describes how to accomplish this.
	
	
	MORE INFORMATION
	================
	
	NOTE: To use the following example, the Active Directory Service Interfaces must
	be installed. It is on the Microsoft Developer Network CD or you can download it
	from the following URL:
	
	  http://www.microsoft.com/windows/server/Technical/directory/
	
	ADSI is a Component Object Model (COM) based interface for accessing directory
	services. Each element of the network, such as users, printers and computers,
	can be treated as an object. Accessing the user object's properties allows the
	developer to get information about the printer and to control print functions.
	The following code demonstrates how to accomplish this.
	
	Save the following code to a program file and run the program:
	
	Sample Code
	-----------
	
	  *-- Code begins here.
	  PUBLIC oadsiprint
	
	  oadsiprint=NEWOBJECT("adsiprint")
	  oadsiprint.SHOW
	  RETURN
	
	  DEFINE CLASS adsiprint AS FORM
	
	     HEIGHT = 345
	     WIDTH = 457
	     DOCREATE = .T.
	     AUTOCENTER = .T.
	     CAPTION = "ADSI Printer Control Sample"
	     NAME = "ADSIPrint"
	
	     ADD OBJECT text1 AS TEXTBOX WITH ;
	        VALUE = "WinNT://MyServer", ;
	        HEIGHT = 23, ;
	        LEFT = 24, ;
	        TOP = 299, ;
	        WIDTH = 238, ;
	        NAME = "Text1"
	
	     ADD OBJECT label1 AS LABEL WITH ;
	        CAPTION = "ADS Path to Printer Server:", ;
	        HEIGHT = 25, ;
	        LEFT = 24, ;
	        TOP = 274, ;
	        WIDTH = 202, ;
	        NAME = "Label1"
	
	     ADD OBJECT cmdfind AS COMMANDBUTTON WITH ;
	        TOP = 285, ;
	        LEFT = 283, ;
	        HEIGHT = 37, ;
	        WIDTH = 97, ;
	        CAPTION = "\<Find", ;
	        NAME = "cmdFind"
	
	     ADD OBJECT list1 AS LISTBOX WITH ;
	        HEIGHT = 153, ;
	        LEFT = 24, ;
	        TOP = 12, ;
	        WIDTH = 156, ;
	        NAME = "List1"
	
	     ADD OBJECT lbldescription AS LABEL WITH ;
	        CAPTION = "", ;
	        HEIGHT = 17, ;
	        LEFT = 204, ;
	        TOP = 7, ;
	        WIDTH = 248, ;
	        NAME = "lblDescription"
	
	     ADD OBJECT label2 AS LABEL WITH ;
	        CAPTION = "Printer Path:", ;
	        HEIGHT = 17, ;
	        LEFT = 203, ;
	        TOP = 40, ;
	        WIDTH = 72, ;
	        NAME = "Label2"
	
	     ADD OBJECT lblprinterpath AS LABEL WITH ;
	        CAPTION = "", ;
	        HEIGHT = 17, ;
	        LEFT = 312, ;
	        TOP = 40, ;
	        WIDTH = 132, ;
	        NAME = "lblPrinterPath"
	
	     ADD OBJECT label3 AS LABEL WITH ;
	        CAPTION = "Model:", ;
	        HEIGHT = 17, ;
	        LEFT = 203, ;
	        TOP = 63, ;
	        WIDTH = 73, ;
	        NAME = "Label3"
	
	     ADD OBJECT lblmodel AS LABEL WITH ;
	        CAPTION = "", ;
	        HEIGHT = 17, ;
	        LEFT = 312, ;
	        TOP = 63, ;
	        WIDTH = 132, ;
	        NAME = "lblModel"
	
	     ADD OBJECT label4 AS LABEL WITH ;
	        CAPTION = "Location:", ;
	        HEIGHT = 17, ;
	        LEFT = 203, ;
	        TOP = 87, ;
	        WIDTH = 106, ;
	        NAME = "Label4"
	
	     ADD OBJECT lblexpire AS LABEL WITH ;
	        CAPTION = "", ;
	        HEIGHT = 17, ;
	        LEFT = 312, ;
	        TOP = 87, ;
	        WIDTH = 68, ;
	        NAME = "lblExpire"
	
	     ADD OBJECT list2 AS LISTBOX WITH ;
	        HEIGHT = 88, ;
	        LEFT = 26, ;
	        TOP = 177, ;
	        WIDTH = 417, ;
	        NAME = "List2"
	
	     ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	        TOP = 145, ;
	        LEFT = 207, ;
	        HEIGHT = 27, ;
	        WIDTH = 61, ;
	        CAPTION = "Pause", ;
	        NAME = "Command1"
	
	     ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	        TOP = 145, ;
	        LEFT = 280, ;
	        HEIGHT = 27, ;
	        WIDTH = 61, ;
	        CAPTION = "Resume", ;
	        NAME = "Command2"
	
	     ADD OBJECT command3 AS COMMANDBUTTON WITH ;
	        TOP = 145, ;
	        LEFT = 353, ;
	        HEIGHT = 27, ;
	        WIDTH = 61, ;
	        CAPTION = "Purge", ;
	        NAME = "Command3"
	
	     ADD OBJECT label5 AS LABEL WITH ;
	        CAPTION = "Status:", ;
	        HEIGHT = 17, ;
	        LEFT = 203, ;
	        TOP = 115, ;
	        WIDTH = 40, ;
	        NAME = "Label5"
	
	     ADD OBJECT lblstatus AS LABEL WITH ;
	        CAPTION = "", ;
	        HEIGHT = 17, ;
	        LEFT = 312, ;
	        TOP = 118, ;
	        WIDTH = 99, ;
	        NAME = "lblStatus"
	
	  PROCEDURE cmdfind.CLICK
	
	     THISFORM.lbldescription.CAPTION = "Searching..."
	     THISFORM.list1.CLEAR
	     oADSobj = GETOBJECT(ALLTRIM(THISFORM.text1.TEXT))
	     FOR EACH CHILD IN oADSobj
	        IF CHILD.CLASS = "PrintQueue"
	           THISFORM.list1.ADDITEM(CHILD.NAME)
	        ENDIF
	     ENDFOR
	     THISFORM.lbldescription.CAPTION = ""
	
	  ENDPROC
	
	  PROCEDURE list1.CLICK
	
	     PUBLIC oPrinter
	     FOR nCnt = 1 TO THISFORM.list1.LISTCOUNT
	        IF THISFORM.list1.SELECTED(nCnt)
	           oPrinter = GETOBJECT(ALLTRIM(THISFORM.text1.TEXT) + ;
	             "/" + ALLTRIM(THISFORM.list1.VALUE))
	
	           THISFORM.lbldescription.CAPTION = oPrinter.DESCRIPTION
	           THISFORM.lblprinterpath.CAPTION = oPrinter.PrinterPath
	           THISFORM.lblmodel.CAPTION       = oPrinter.Model
	
	           *-- Show the printer status.
	           DO CASE
	           CASE oPrinter.STATUS = 0
	              THISFORM.lblstatus.CAPTION = "Ready"
	              THISFORM.command2.ENABLED = .F.
	              THISFORM.command1.ENABLED = .T.
	           CASE oPrinter.STATUS = 1
	              THISFORM.lblstatus.CAPTION = "Paused"
	              THISFORM.command1.ENABLED = .F.
	              THISFORM.command2.ENABLED = .T.
	           ENDCASE
	
	        THISFORM.REFRESH
	
	           *-- List the print jobs.
	           THISFORM.list2.CLEAR
	           oPrintJobs = oPrinter.PrintJobs  && Gives us a collection
	                                            && object of jobs.
	           FOR EACH CHILD IN oPrintJobs
	
	              *-- Format the variables so that the columns line up.
	              lsDescription = CHILD.DESCRIPTION + SPACE(20 - ;
	                LEN(CHILD.DESCRIPTION))
	              lsSize = STR(CHILD.SIZE) + " bytes" + ;
	                SPACE(12 - LEN(ALLTRIM(STR(CHILD.SIZE)) + " bytes"))
	              lsJobInfo = lsDescription + lsSize
	              THISFORM.list2.ADDITEM(lsJobInfo)
	           ENDFOR
	        ENDIF
	     ENDFOR
	
	  ENDPROC
	
	  PROCEDURE command1.CLICK
	
	     IF oPrinter.STATUS = 0 && Printer is ready.
	        oPrinter.PAUSE
	        THIS.ENABLED = .F.
	        THISFORM.command2.ENABLED = .T.
	        THISFORM.list1.CLICK
	        THISFORM.REFRESH
	     ENDIF
	
	     *-- Show the printer status.
	     DO CASE
	     CASE oPrinter.STATUS = 0
	        THISFORM.lblstatus.CAPTION = "Ready"
	        THISFORM.command2.ENABLED = .F.
	        THISFORM.command1.ENABLED = .T.
	     CASE oPrinter.STATUS = 1
	        THISFORM.lblstatus.CAPTION = "Paused"
	        THISFORM.command1.ENABLED = .F.
	        THISFORM.command2.ENABLED = .T.
	     ENDCASE
	
	  ENDPROC
	
	  PROCEDURE command2.CLICK
	
	     IF oPrinter.STATUS = 1 && Printer is paused.
	        oPrinter.RESUME
	        THIS.ENABLED = .F.
	        THISFORM.command1.ENABLED = .T.
	        THISFORM.list1.CLICK
	        THISFORM.REFRESH
	     ENDIF
	
	     *-- Show the printer status
	     DO CASE
	     CASE oPrinter.STATUS = 0 && Ready
	        THISFORM.lblstatus.CAPTION = "Ready"
	        THISFORM.command2.ENABLED = .F.
	        THISFORM.command1.ENABLED = .T.
	     CASE oPrinter.STATUS = 1 && Paused
	        THISFORM.lblstatus.CAPTION = "Paused"
	        THISFORM.command1.ENABLED = .F.
	        THISFORM.command2.ENABLED = .T.
	     ENDCASE
	
	  ENDPROC
	
	  PROCEDURE command3.CLICK
	
	     oPrinter.Purge
	
	  ENDPROC
	
	  ENDDEFINE
	  *-- Code ends here.
	
	In the text box, enter the Active Directory Services (ADS) path to the printer
	server that you wish to view, using the text in the text box as a template. In
	place of MyServer, put the name of the printer server you wish to search and
	then click Find. It may take some time to populate the list. Once the list is
	populated, click a printer. The printer information displays, as well as any
	print jobs on the printer.
	
	REFERENCES
	==========
	
	Visual Studio MSDN Library, version 6.0; search on: "ADSI PrintQueue Object"
	
	For more information about ADSI, please see the following World Wide Web URL:
	
	  http://www.microsoft.com/windows/server/Deploy/
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbCOMt kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbADSISearch kbADSI250 kbVFP600
	Version           : WINDOWS:6.0; winnt:2.5
	Issue type        : kbhowto
	
	=============================================================================
	
