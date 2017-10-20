---
layout: page
title: "Q285396: HOWTO: Obtain Office Constants from .OLB Files with VFP"
permalink: /kb/285/Q285396/
---

## Q285396: HOWTO: Obtain Office Constants from .OLB Files with VFP

{% raw %}

	Article: Q285396
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Automation of Microsoft Office products from Visual FoxPro (VFP) is a popular
	undertaking for VFP developers. Most often, VFP developers approach this task by
	converting macros from the product to be automated or by translating examples
	written for Microsoft Visual Basic. Regardless of the approach, the VFP
	developer must often convert Office constants to their literal values before
	these constants can be used from VFP. Depending on the amount of code, this can
	be a tedious undertaking.
	
	MORE INFORMATION
	================
	
	The following sample code helps VFP developers translate Office constants. It
	provides a method to extract the built-in constants from Office object library
	(.olb) files, and then allows the developer to save them to a header (.h) file
	for inclusion in a VFP project.
	
	For example, a VFP developer writing a program to automate Microsoft Word can use
	this code to extract all of the Word constants to a header file. The header file
	can be included in the Word automation program using the #INCLUDE statement,
	allowing the developer to use Word constants "as is" in the VFP code (for
	example, the developer can use wdFindContinue instead of its literal value of
	1).
	
	To use this sample code, follow these steps:
	
	1. Paste the code below in a new .prg file, and then save and run the program. A
	  form with the title ".OLB Constants Extractor" appears.
	
	2. Click the ellipsis (...) button to locate an .olb file in your Office folder,
	  and then click Extract Constants. The form extracts all the constants from
	  the .olb file you selected and writes them to the edit box.
	
	3. You can then review the output or save the results to a header file for use
	  in your code. To do this, click Save to .h.
	
	Office constants are available from the following files:
	
	+-------------------------------------------------------+
	| Office 2000 Component     | File Containing Constants | 
	+-------------------------------------------------------+
	| Microsoft Word 2000       | MSWord9.olb               | 
	+-------------------------------------------------------+
	| Microsoft Excel 2000      | Excel9.olb                | 
	+-------------------------------------------------------+
	| Microsoft Access 2000     | MSAcc9.olb                | 
	+-------------------------------------------------------+
	| Microsoft PowerPoint 2000 | MSPPT9.olb                | 
	+-------------------------------------------------------+
	| Microsoft Outlook 2000    | MSOutl9.olb               | 
	+-------------------------------------------------------+
	| Microsoft Graph 2000      | Graph9.olb                | 
	+-------------------------------------------------------+
	| Microsoft Binder 2000     | MSBdr9.olb                | 
	+-------------------------------------------------------+
	
	NOTE: This sample code uses objects that are included in the Tlbinf32.dll file.
	This dynamic-link library (.dll) file ships with Microsoft Visual Studio 98
	Service Pack 4. If this file is not present and properly registered on your
	computer, the sample code below will fail.
	
	  ****************START CODE****************
	  PUBLIC oform1
	
	  oform1=NEWOBJECT("form1")
	  oform1.SHOW
	  RETURN
	
	  ****************FORM CODE****************
	  DEFINE CLASS form1 AS FORM
	
	  	HEIGHT = 445
	  	WIDTH = 567
	  	DOCREATE = .T.
	  	AUTOCENTER = .T.
	  	BORDERSTYLE = 1
	  	CAPTION = ".OLB Constants Extractor"
	  	MAXBUTTON = .F.
	  	MINBUTTON = .F.
	  	NAME = "Form1"
	
	  	ADD OBJECT txtolbfile AS TEXTBOX WITH ;
	  		HEIGHT = 27, ;
	  		LEFT = 65, ;
	  		READONLY = .T., ;
	  		TABINDEX = 2, ;
	  		TOP = 6, ;
	  		WIDTH = 458, ;
	  		NAME = "txtOLBFILE"
	
	  	ADD OBJECT label1 AS LABEL WITH ;
	  		AUTOSIZE = .T., ;
	  		CAPTION = ".\<OLB File:", ;
	  		HEIGHT = 17, ;
	  		LEFT = 4, ;
	  		TOP = 11, ;
	  		WIDTH = 55, ;
	  		TABINDEX = 1, ;
	  		NAME = "Label1"
	
	  	ADD OBJECT cmdsave AS COMMANDBUTTON WITH ;
	  		TOP = 411, ;
	  		LEFT = 394, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 84, ;
	  		CAPTION = "\<Save to .h", ;
	  		ENABLED = .F., ;
	  		TABINDEX = 6, ;
	  		NAME = "cmdSAVE"
	
	  	ADD OBJECT cmdquit AS COMMANDBUTTON WITH ;
	  		TOP = 411, ;
	  		LEFT = 480, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 84, ;
	  		CAPTION = "\<Quit", ;
	  		TABINDEX = 7, ;
	  		NAME = "cmdQUIT"
	
	  	ADD OBJECT edtconstants AS EDITBOX WITH ;
	  		HEIGHT = 347, ;
	  		LEFT = 6, ;
	  		READONLY = .T., ;
	  		TABINDEX = 4, ;
	  		TOP = 52, ;
	  		WIDTH = 558, ;
	  		NAME = "edtConstants"
	
	  	ADD OBJECT cmdgetfile AS COMMANDBUTTON WITH ;
	  		TOP = 6, ;
	  		LEFT = 533, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 26, ;
	  		CAPTION = "...", ;
	  		TABINDEX = 3, ;
	  		NAME = "cmdGETFILE"
	
	  	ADD OBJECT cmdextract AS COMMANDBUTTON WITH ;
	  		TOP = 411, ;
	  		LEFT = 280, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 110, ;
	  		CAPTION = "\<Extract Constants", ;
	  		ENABLED = .F., ;
	  		TABINDEX = 5, ;
	  		NAME = "cmdEXTRACT"
	
	  	PROCEDURE cmdsave.CLICK
	  		STRTOFILE(THISFORM.edtconstants.VALUE,PUTFILE([Header File], ;
	  			JUSTSTEM(THISFORM.txtolbfile.VALUE) + [.h],[.h]))
	  	ENDPROC
	
	  	PROCEDURE cmdquit.CLICK
	  		THISFORM.RELEASE
	  	ENDPROC
	
	  	PROCEDURE cmdgetfile.CLICK
	  		LOCAL lcOLBFile
	
	  		lcOLBFile = GETFILE([OLB],[OLB File],[Open])
	  		IF EMPTY(lcOLBFile)
	  			RETURN .F.
	  		ENDIF
	  		
	  		IF UPPER(RIGHT(lcOLBFile,3)) # [OLB]
	  			MESSAGEBOX([Invalid File],0,[])
	  			RETURN .F.
	  		ENDIF
	
	  		THISFORM.txtolbfile.VALUE = lcOLBFile
	  		THISFORM.cmdextract.ENABLED= .T.
	  	ENDPROC
	
	  	PROCEDURE cmdextract.CLICK
	  		WAIT WINDOW [Processing...] NOCLEAR NOWAIT
	  		LOCAL oTLB_INFO, oConstants, lcConstantsStr, Obj, member
	  		#DEFINE CRLF CHR(13) + CHR(10)
	
	  		oTLB_INFO = CREATEOBJECT([tli.typelibinfo])
	  		oTLB_INFO.ContainingFile = (THISFORM.txtolbfile.VALUE)
	
	  		oConstants = oTLB_INFO.Constants
	
	  		lcConstantsStr = []
	  		FOR EACH Obj IN oTLB_INFO.Constants
	                          lcConstantsStr = lcConstantsStr + CRLF + "* " + Obj.Name + CRLF   
	                          FOR EACH member IN Obj.Members
	                              lcConstantsStr = lcConstantsStr + [#DEFINE ] + ;
	                              member.NAME + [ ] + ;
	                              TRANSFORM(member.VALUE) + CRLF
	                          NEXT member
	  		NEXT Obj
	
	  		THISFORM.edtconstants.VALUE=lcConstantsStr
	  		THISFORM.cmdsave.ENABLED= .T.
	  		WAIT CLEAR
	  		WAIT WINDOW [Complete!] TIMEOUT 2
	  	ENDPROC
	
	  ENDDEFINE
	  ****************END CODE****************
	
	REFERENCES
	==========
	
	For additional information on the Tlbinf32.dll file, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q224331 FILE: Tlbinf32.exe : Help Files for Tlbinf32.dll
	
	NOTE: Both the Tlbinf32.dll file and the HTML Help file are provided for your
	reference only, and they are not supported by Microsoft.
	
	For additional information on using the TypeLibInformation object, see the
	following articles in the Microsoft Knowledge Base:
	
	  Q172988 SAMPLE: CLSNMMBR.EXE Programmatically Retrieves the Members of a DLL
	  Class
	
	  Q239930 HOW TO: Obtain Built-In Constant Values for an Office Application
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words: #DEFINE
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
