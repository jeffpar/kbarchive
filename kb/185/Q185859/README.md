---
layout: page
title: "Q185859: INFO: OLE Servers Return Date Calculation Results as Seconds"
permalink: kb/185/Q185859/
---

## Q185859: INFO: OLE Servers Return Date Calculation Results as Seconds

	Article: Q185859
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, a date data type passed in to or out of a Visual FoxPro OLE server
	is automatically converted to Datetime format. Because of this, the result of a
	date calculation is returned as seconds.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro OLE servers, by default, convert the Date data type to
	DateTime. If you try to subtract two datetime() variables, within an OLE server,
	the result is returned as seconds (n * 86400). You may use the TTOD() function
	if you need the number returned as days.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Visual FoxPro, build an OLE DLL using the following code and name it
	  DateFunc:
	
	        DEFINE CLASS DateFunc AS custom OLEPUBLIC
	
	           Name = "DateFunc"
	
	           PROCEDURE DifferDate
	              PARAMETERS BDate, EDate
	              x=EDate-BDate
	              RETURN INT(x)
	          ENDPROC
	
	        ENDDEFINE
	
	2. After building the OLE DLL, issue the following commands in the Command
	  window:
	
	        ox=CREATEOBJECT("DateFunc.DateFunc")
	        ? ox.Differdate({01/01/98},{01/05/98})
	
	  Note that instead of returning four days, 345600 (4*86400) seconds is
	  returned.
	
	3. To return four days from the OLE DLL, replace the commands in the DifferDate
	  procedure as shown below:
	
	        PROCEDURE DifferDate
	           PARAMETERS BDate, EDate
	           x=ttod(EDate)-ttod(BDate)
	           RETURN INT(x)
	        ENDPROC
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q168053 HOWTO: Visual FoxPro Automation Servers and Active Server Pages
	
	  Q156014 How To Set Up OLE Automation in Visual FoxPro 5.0
	
	Additional query words: kbDSupport kbdse VFP600REL kbole
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
