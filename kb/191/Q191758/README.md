---
layout: page
title: "Q191758: HOWTO: Convert FoxPro Cursor into XML Data Format"
permalink: kb/191/Q191758/
---

## Q191758: HOWTO: Convert FoxPro Cursor into XML Data Format

	Article: Q191758
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbvfp600 kbXML kbGrpDSFox kbDSupport
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create an Extensible Markup Language (XML) data
	file from a cursor in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Extensible Markup Language (XML) is the universal format for data on the Web.
	XML is a text-based format that lets developers describe, deliver and exchange
	structured data between a range of applications to clients for local display and
	manipulation. XML does not replace HTML, rather, it is a complementary format.
	
	To create an XML file from a filtered .dbf table follow these steps:
	
	1. Create a program (.prg) file named Callxml.prg and place the following code
	  in the file:
	
	  LOCAL lcFileName,lcXMLFile,lcFilter
	
	  lcDBFName = HOME(2) + "data\orders.dbf"
	  lcXMLFile = LOWER(SYS(2023)) + "\orders.xml"
	  lcFilter = "FOR To_Region='WA'"
	
	  STRTOFILE(DBF2XML(lcDBFName, lcFilter, .T.), ;
	  lcXMLFile)
	  MODIFY FILE (lcXMLFile) NOWAIT
	
	  RETURN
	
	2. Create another .prg file named Dbf2xml.prg, and put the following code into
	  this .prg file:
	
	  * Dbf2xml.prg
	
	  *-- ASCII codes
	  #DEFINE TAB     CHR(9)
	  #DEFINE LF      CHR(10)
	  #DEFINE CR      CHR(13)
	  #DEFINE CR_LF   CR+LF
	
	  LPARAMETERS tcTable, tcScope, tnTabIndents
	  LOCAL lcTable, lcAlias, lcScope, lcDBFName, lcIndentText, lcDBF, lcRootName
	  LOCAL lcValue, lcField, lnFieldCount, lnCount, lnLastSelect, lnLastRecNo
	  LOCAL lcXMLText
	  DIMENSION laFields[1]
	
	  IF NOT INLIST(VARTYPE(tcTable), "C", "L") OR NOT ;
	         INLIST(VARTYPE(tcScope), "C", "L")
	     RETURN ""
	  ENDIF
	
	  lcIndentText = IIF(VARTYPE(tnTabIndents) == "N", ;
	                     REPLICATE(TAB, tnTabIndents), "")
	  lcTable = LOWER(IIF(EMPTY(tcTable), ALIAS(), ALLTRIM(tcTable)))
	  lnLastSelect=SELECT()
	
	  IF "." $ lcTable
	     lcDBF = lcTable
	     IF NOT FILE(lcDBF)
	        RETURN ""
	     ENDIF
	     
	     SELECT 0
	     lcAlias = LOWER(SYS(2015))
	     USE (lcDBF) ALIAS (lcAlias) AGAIN SHARED
	     lcDBFName = LOWER(FORCEEXT(JUSTFNAME(DBF()), ""))
	  ELSE
	     lcDBF = ""
	     lcAlias = lcTable
	     lcDBFName = lcAlias
	  ENDIF
	
	  IF NOT USED(lcAlias)
	     SELECT (lnLastSelect)
	     RETURN ""
	  ENDIF
	
	  lcScope = IIF(EMPTY(tcScope), "ALL", ALLTRIM(tcScope))
	
	  SELECT (lcAlias)
	
	  lnLastRecNo = IIF(EOF(), 0, RECNO())
	  lcXMLText = "<"+ lcDBFName + "_table>" + CR_LF
	
	  lnFieldCount = AFIELDS(laFields)
	  IF lnFieldCount = 0
	     SELECT (lnLastSelect)
	     RETURN ""
	  ENDIF
	
	  lcRootName = lcDBFName
	  DO WHILE TYPE(lcRootName) != "U"
	     lcRootName = lcRootName + "1"
	  ENDDO
	
	  SCAN &lcScope
	     lcXMLText = lcXMLText + lcIndentText + ;
	        "<" + lcRootName + ">" + CR_LF
	        
	     FOR lnCount = 1 TO lnFieldCount
	        lcField = LOWER(laFields[lnCount, 1])
	        lcValue = ALLTRIM(TRANSFORM(EVALUATE(lcField)))
	        IF EMPTY(lcValue)
	           LOOP
	        ENDIF
	        
	        lcXMLText=lcXMLText + lcIndentText + TAB + ;
	           "<" + lcField + ">" + lcValue + "</" + lcField + ">" + CR_LF
	     ENDFOR
	     
	     lcXMLText = lcXMLText + lcIndentText + ;
	        "</" + lcRootName + ">" + CR_LF
	  ENDSCAN
	
	  IF EMPTY(lcDBF)
	     IF lnLastRecNo > 0
	        GO lnLastRecNo
	     ENDIF
	  ELSE
	      USE
	  ENDIF
	
	  SELECT (lnLastSelect)
	
	  lcXMLText = lcXMLText + CR_LF + "</"+ lcDBFName + "_table>"
	
	  RETURN lcXMLText
	
	3. In the Visual FoxPro Command window, run the Callxml.prg file. This results
	  in the creation of a file named Orders.xml, which is a text file subset of
	  the Orders.dbf table. The program places the file in the folder pointed to by
	  the operating system environment SET TEMP setting.
	
	REFERENCES
	==========
	
	For more information about XML, please see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/xml/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbvfp600 kbXML kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
