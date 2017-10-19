---
layout: page
title: "Q191375: HOWTO: Use COMCLASSINFO() to Check Installed ADO Version"
permalink: /kb/191/Q191375/
---

## Q191375: HOWTO: Use COMCLASSINFO() to Check Installed ADO Version

	Article: Q191375
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.1 SP2,2.6,6.0
	Operating System(s): 
	Keyword(s): kbADO kbDatabase kbGrpDSFox kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbMDAC260
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.1 SP2, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can check the version of ActiveX Data Objects
	(ADO) you have installed on your computer.
	
	MORE INFORMATION
	================
	
	You can use the COMCLASSINFO() function that is new in Visual FoxPro 6.0 to
	return the ProgId of an object, which indicates the version of the object. You
	can use the following code to check the installed version of ADO:
	
	     x=CREATEOBJECT("adodb.recordset")
	     ? COMCLASSINFO(x,1)
	
	If ADODB.Recordset 2.0 is returned, you have ADO version 2.0 installed.
	
	The COMCLASSINFO() function can also return the object's
	VersionIndependentProgID, the object's friendly name and the object's class
	identifier or CLSID.
	
	The same information can be returned about Microsoft Word, Microsoft Excel or
	practically any other application for which an object reference can be created.
	
	Another way to check the version of ADO is to check the version property of the
	ADO.Connection object. The following code can be used to accomplish this:
	
	     x=CREATEOBJECT("adodb.connection)
	     ? x.version
	
	If ADO 2.0 is the current version, 2.0 is returned. If ADO 1.5 is the current
	version, 1.5 is returned.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, version 6.0; search on: "COMClassInfo()"
	
	Additional query words: kbDatabase kbVFp600 kbADO
	
	======================================================================
	Keywords          : kbADO kbDatabase kbGrpDSFox kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC210SP2 kbMDAC260 kbVFP600
	Version           : WINDOWS:2.1 SP2,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
