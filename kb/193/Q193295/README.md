---
layout: page
title: "Q193295: HOWTO: Reference an MTS Context Object From a COM DLL"
permalink: kb/193/Q193295/
---

## Q193295: HOWTO: Reference an MTS Context Object From a COM DLL

	Article: Q193295
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reference the Context Object of Microsoft
	Transaction Server (MTS) in a Visual FoxPro Component Object Model (COM) DLL.
	
	NOTE: This article is meant to be a brief overview providing the syntax necessary
	to reference the MTS Object Context from a Visual FoxPro COM server. For a more
	complete discussion on creating Visual FoxPro COM servers to work with Microsoft
	Transaction Server, please see the article listed in the REFERENCES section.
	
	MORE INFORMATION
	================
	
	There are two objects that need to be instantiated and referenced by the Visual
	FoxPro custom COM DLL. The following statement creates the first object:
	
	     oMTS=CREATEOBJECT("MTXAS.APPSERVER.1")
	
	To create the reference to the current object's MTS Object Context use the
	following command:
	
	  
	
	     oMTSCont=oMTS.GetObjectContext()
	
	The following sample is the custom COM server 'ComTest1'. When built into a COM
	DLL and placed in an MTS Package, you can run the following Client Code to test
	it.
	
	     ******************Server Code************************
	     DEFINE CLASS MTSTEST AS CUSTOM OLEPUBLIC
	        oMTS=.NULL.
	        oMTSCont=.NULL.
	        FUNCTION GetContext
	           THIS.oMTS = CREATEOBJECT("MTXAS.APPSERVER.1")
	           IF TYPE('THIS.oMTS')='O' THEN
	              THIS.oMTSCont=THIS.oMTS.GetObjectContext()
	              IF TYPE('THIS.oMTSCont')#'O' THEN
	                 RETURN "oMTSCont FAILED"
	              ENDIF
	           ELSE
	              RETURN "oMTS FAILED"
	           ENDIF
	           RETURN "oMTS & oMTSCont Succeeded"
	        ENDFUNC
	      ENDDEFINE
	     *****************End Server Code**********************
	
	     *****************Begin Client Code********************
	     oX=CREATEOBJECT("ComTest1.MTSTest")
	     Y=oX.getcontext()
	     ? Y
	     *****************End Client Code***********************
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191762 INFO: Visual FoxPro 6.0 MTS Web Pack 1.0 Readme File
	
	Microsoft Transaction Server Documentation.
	
	Additional query words: kbCOMt kbVFp600 kbMTS
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
